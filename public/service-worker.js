// ============================================
// SERVICE WORKER - WHITEOUT SURVIVAL HUB PWA
// ============================================

const CACHE_VERSION = 'wos-hub-v1.1.2';
const CACHE_NAME = `whiteout-survival-${CACHE_VERSION}`;

// Files to cache for offline use
const urlsToCache = [
    'index.html',
    'heroes.html',
    'troops.html',
    'buildings.html',
    'gear.html',
    'research.html',
    'alliance-tech.html',
    'events-wiki.html',
    'servers.html',
    'world-map.html',
    'alliance-wars.html',
    'event-calendar.html',
    'css/style.css',
    'css/guides.css',
    'css/heroes.css',
    'js/app.js',
    'js/events-api.js',
    'js/advanced-calculators.js',
    'js/global-search.js',
    'js/heroes-data.js',
    'guides/hero-guide.html',
    'guides/building-priority.html',
    'guides/bear-hunt-tips.html',
    'guides/recursos-f2p.html',
    'guides/svs-strategy.html',
    'guides/arena-pvp.html',
    'guides/tips-generales.html'
];

// Install event - cache files
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(urlsToCache))
            .then(() => self.skipWaiting())
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Fetch event
self.addEventListener('fetch', (event) => {
    // IGNORAR PETICIONES NO-HTTP (extensiones de chrome, esquemas raros)
    if (!event.request.url || !event.request.url.startsWith('http')) {
        return;
    }

    if (event.request.method !== 'GET') return;

    // ESTRATEGIA: NETWORK FIRST para HTML (Navigación)
    if (event.request.mode === 'navigate') {
        event.respondWith(
            fetch(event.request)
                .then((response) => {
                    const copy = response.clone();
                    caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
                    return response;
                })
                .catch(() => caches.match(event.request))
        );
        return;
    }

    // ESTRATEGIA: CACHE FIRST para el resto
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request).then((fetchRes) => {
                    return caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, fetchRes.clone());
                        return fetchRes;
                    });
                });
            })
    );
});

// ============================================
// PUSH NOTIFICATIONS
// ============================================

self.addEventListener('push', (event) => {
    console.log('[ServiceWorker] Push notification received');

    const options = {
        body: event.data ? event.data.text() : 'Nuevo evento disponible',
        icon: '/images/icon-192x192.png',
        badge: '/images/badge-72x72.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        },
        actions: [
            {
                action: 'explore',
                title: 'Ver Detalles',
                icon: '/images/checkmark.png'
            },
            {
                action: 'close',
                title: 'Cerrar',
                icon: '/images/xmark.png'
            }
        ]
    };

    event.waitUntil(
        self.registration.showNotification('Whiteout Survival Hub', options)
    );
});

self.addEventListener('notificationclick', (event) => {
    console.log('[ServiceWorker] Notification click:', event.action);

    event.notification.close();

    if (event.action === 'explore') {
        event.waitUntil(
            clients.openWindow('/event-calendar.html')
        );
    }
});

// ============================================
// BACKGROUND SYNC
// ============================================

self.addEventListener('sync', (event) => {
    console.log('[ServiceWorker] Background sync:', event.tag);

    if (event.tag === 'sync-wars') {
        event.waitUntil(syncWarsData());
    }
});

async function syncWarsData() {
    // Sync alliance wars data when back online
    try {
        const cache = await caches.open(CACHE_NAME);
        const response = await cache.match('/alliance-wars.html');

        if (response) {
            console.log('[ServiceWorker] Wars data synced');
        }
    } catch (error) {
        console.error('[ServiceWorker] Sync failed:', error);
    }
}

// ============================================
// PERIODIC BACKGROUND SYNC (for event updates)
// ============================================

self.addEventListener('periodicsync', (event) => {
    if (event.tag === 'update-events') {
        event.waitUntil(updateEventCalendar());
    }
});

async function updateEventCalendar() {
    console.log('[ServiceWorker] Updating event calendar...');

    try {
        // Refresh event calendar cache
        const cache = await caches.open(CACHE_NAME);
        await cache.add('/js/event-calendar-data.js');

        console.log('[ServiceWorker] Event calendar updated');
    } catch (error) {
        console.error('[ServiceWorker] Event update failed:', error);
    }
}

console.log('[ServiceWorker] Loaded successfully');
