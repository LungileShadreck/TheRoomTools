const CACHE_NAME = 'trdf-tools-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './brand_audit_framework.html',
  './client_acquisition_outreach_system.html',
  './room_design_firm_business_strategy.html',
  './styles.css',
  './icon.svg',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      // Return cached version if found
      if (response) return response;
      
      // Otherwise fetch from network
      return fetch(event.request).then(fetchRes => {
        return caches.open(CACHE_NAME).then(cache => {
          // Optionally cache dynamic requests like Google Font files
          if (event.request.url.startsWith('https://fonts.')) {
            cache.put(event.request, fetchRes.clone());
          }
          return fetchRes;
        });
      });
    }).catch(() => {
      // Ignore network errors since it's offline
    })
  );
});
