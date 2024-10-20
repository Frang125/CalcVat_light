const staticc = "calcv"
const assets = [
    "/",
    "/index.html",
    "/manifest.json",
    "/index.js",
    "/Roboto-Regular.ttf",
    "/Roboto-ThinItalic.ttf"
   
  ]

  self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
      caches.open(staticc).then(cache => {
        cache.addAll(assets)
      })
    )
  })

  self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })