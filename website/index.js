const githubApiUrl = "https://api.github.com/repos/"
const githubUrl = "https://github.com/"
const pagesUrl = "https://docs.suicide.sh/"
const repo = "SuicideOS/SuicideOS"
const defaultTag = "0.1.0"

async function gatherResponse(response) {
  const { headers } = response
  const contentType = headers.get("content-type") || ""
  if (contentType.includes("application/json")) {
    return JSON.stringify(await response.json())
  }
  else if (contentType.includes("application/text")) {
    return await response.text()
  }
  else if (contentType.includes("text/html")) {
    return await response.text()
  }
  else {
    return await response.text()
  }
}

async function getLatestReleaseTag() {
  const url = githubApiUrl + repo + "/releases/latest"
  const init = {
    headers: {
      "content-type": "application/json;charset=UTF-8",
      "User-Agent": "Request",
    },
  }
  const release = await gatherResponse(await fetch(url, init))

  return await JSON.parse(release).tag_name || defaultTag
}

async function handleCliRequest() {
  const latestTag = await getLatestReleaseTag()
  const fileUrl = githubUrl + repo + "/releases/download/" + latestTag + "/install.sh.asc"
  const signedScript = await gatherResponse(await fetch(fileUrl))

  return new Response(signedScript)
}

async function handleRequest(request) {
  const url = new URL(request.url)
  const { pathname, search } = url
  const userAgent = await request.headers.get("user-agent") || ""
  const cliUserAgents = ["curl", "wget", "httpie"]

  var response = Response.redirect(pagesUrl + pathname + search)

  cliUserAgents.forEach(function(agent){
    if (userAgent.toLowerCase().includes(agent)){
      response = handleCliRequest()
    }
  })

  return response
}

addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})
