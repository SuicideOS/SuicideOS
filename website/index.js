addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello world text
 * @param {Request} request
 */
async function handleRequest(request) {
  return new Response('Hello world!', {
    headers: { 'content-type': 'text/plain' },
  })
}
