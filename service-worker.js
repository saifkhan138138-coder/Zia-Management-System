const cacheName = "zms-cache-v1";

const filesToCache = [
  "index.html",
  "login.html",
  "dashboard.html",
  "settings.html",
  "style.css",
  "script.js",
  "manifest.json"
];


self.addEventListener("install", function(event){

  event.waitUntil(

    caches.open(cacheName)
    .then(function(cache){

      return cache.addAll(filesToCache);

    })

  );

});


self.addEventListener("fetch", function(event){

  event.respondWith(

    caches.match(event.request)
    .then(function(response){

      return response || fetch(event.request);

    })

  );

});
