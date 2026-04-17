const CACHE = 'studio-os-v1';
const SHELL = [
  '/studio-os/',
  '/studio-os/index.html',
  '/studio-os/manifest.json'
];

// Install — cache the app shell
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(SHELL))
      .then(() => self.skipWaiting())
  );
});

// Activate — clean up old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch — shell from cache, GitHub API/raw always network-first
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // Always go network-first for GitHub content (live data)
  if (url.hostname === 'raw.githubusercontent.com' ||
      url.hostname === 'api.github.com' ||
      url.hostname === 'fonts.googleapis.com' ||
      url.hostname === 'fonts.gstatic.com') {
    e.respondWith(
      fetch(e.request)
        .catch(() => new Response('', { status: 503 }))
    );
    return;
  }

  // App shell — cache first, fallback to network
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(response => {
        // Cache valid shell responses
        if (response && response.status === 200 && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return response;
      }).catch(() => caches.match('/studio-os/index.html'));
    })
  );
});

// Background sync — refresh data when connection restored
self.addEventListener('sync', e => {
  if (e.tag === 'studio-os-sync') {
    e.waitUntil(
      self.clients.matchAll().then(clients =>
        clients.forEach(client =>
          client.postMessage({ type: 'SYNC_READY' })
        )
      )
    );
  }
});

// Push notifications (future layer 2 integration)
self.addEventListener('push', e => {
  if (!e.data) return;
  const data = e.data.json();
  e.waitUntil(
    self.registration.showNotification(data.title || 'Studio OS', {
      body: data.body || 'New message in the bus',
      icon: '/studio-os/manifest.json',
      badge: '/studio-os/manifest.json',
      tag: data.tag || 'studio-os',
      data: { url: data.url || '/studio-os/' }
    })
  );
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(
    clients.openWindow(e.notification.data.url || '/studio-os/')
  );
});
