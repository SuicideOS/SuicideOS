const githubApiUrl = "https://api.github.com/repos/"
const githubUrl = "https://github.com/"
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
  const response = await fetch(url, init)
  const release = await gatherResponse(response)

  return await JSON.parse(release).tag_name || defaultTag
}

async function handleRequest() {
  const latestTag = await getLatestReleaseTag()
  const fileUrl = githubUrl + repo + "/releases/download/" + latestTag + "/install.sh.asc"
  const response = await fetch(fileUrl)
  const signedScript = await gatherResponse(response)

  return new Response(signedScript)
}

addEventListener("fetch", event => {
  event.respondWith(handleRequest())
})
