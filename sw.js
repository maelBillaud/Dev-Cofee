// Déclaration du cache
const staticDevCoffee = "dev-coffee-site-v1";
// Déclaration des éléments à stocker dans le cache
const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js",
  "/images/coffee1.jpg",
  "/images/coffee2.jpg",
  "/images/coffee3.jpg",
  "/images/coffee4.jpg",
  "/images/coffee5.jpg",
  "/images/coffee6.jpg",
  "/images/coffee7.jpg",
  "/images/coffee8.jpg",
  "/images/coffee9.jpg",
];

//self est le service worker en lui même. C'est lui qui va nous permettre d'écouter les différents événements
self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticDevCoffee).then(cache => {
            cache.addAll(assets)
        })
    )
});

//Regarde si quelque chose existe dans le cache
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})