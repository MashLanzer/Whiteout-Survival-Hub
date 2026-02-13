// ============================================
// PWA INITIALIZATION & NOTIFICATION SYSTEM
// ============================================

let deferredPrompt;
let swRegistration = null;

// ============================================
// SERVICE WORKER REGISTRATION
// ============================================

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        const VERSION = '1.0.5';
        if (localStorage.getItem('sw_v') !== VERSION) {
            caches.keys().then(keys => Promise.all(keys.map(key => caches.delete(key))));
            localStorage.setItem('sw_v', VERSION);
        }
        navigator.serviceWorker.register('/service-worker.js')
            .then((registration) => {
                console.log('[PWA] ServiceWorker registered:', registration.scope);
                swRegistration = registration;

                // Check for updates periodically
                setInterval(() => {
                    registration.update();
                }, 60000); // Check every minute

                // Initialize push notifications
                // initializePushNotifications(registration);
            })
            .catch((error) => {
                console.error('[PWA] ServiceWorker registration failed:', error);
            });
    });
}

// ============================================
// INSTALL PROMPT
// ============================================

window.addEventListener('beforeinstallprompt', (e) => {
    console.log('[PWA] Install prompt triggered');

    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();

    // Stash the event so it can be triggered later
    deferredPrompt = e;

    // Show custom install button
    showInstallButton();
});

function showInstallButton() {
    // Check if install banner already shown
    if (localStorage.getItem('installPromptShown') === 'true') {
        return;
    }

    // Create install banner
    const banner = document.createElement('div');
    banner.id = 'install-banner';
    banner.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background: linear-gradient(135deg, var(--primary), #00ff88);
        color: black;
        padding: 1.5rem 2rem;
        border-radius: 20px;
        box-shadow: 0 10px 30px rgba(0, 210, 255, 0.5);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 1.5rem;
        max-width: 400px;
        animation: slideIn 0.5s ease;
    `;

    banner.innerHTML = `
        <div>
            <div style="font-weight: 900; font-size: 1.1rem; margin-bottom: 0.5rem;">
                📱 Instalar App
            </div>
            <div style="font-size: 0.9rem; opacity: 0.8;">
                Acceso rápido y modo offline
            </div>
        </div>
        <button id="install-btn" style="
            background: rgba(0, 0, 0, 0.2);
            border: 2px solid black;
            color: black;
            padding: 0.8rem 1.5rem;
            border-radius: 10px;
            font-weight: 700;
            cursor: pointer;
            white-space: nowrap;
        ">
            Instalar
        </button>
        <button id="dismiss-install" style="
            background: transparent;
            border: none;
            color: black;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0.5rem;
        ">
            ✕
        </button>
    `;

    document.body.appendChild(banner);

    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(500px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);

    // Install button click
    document.getElementById('install-btn').addEventListener('click', async () => {
        if (!deferredPrompt) return;

        // Show the install prompt
        deferredPrompt.prompt();

        // Wait for the user to respond to the prompt
        const { outcome } = await deferredPrompt.userChoice;

        console.log(`[PWA] User response to the install prompt: ${outcome}`);

        // Clear the deferredPrompt
        deferredPrompt = null;

        // Remove banner
        banner.remove();

        // Mark as shown
        localStorage.setItem('installPromptShown', 'true');
    });

    // Dismiss button click
    document.getElementById('dismiss-install').addEventListener('click', () => {
        banner.remove();
        localStorage.setItem('installPromptShown', 'true');
    });
}

window.addEventListener('appinstalled', () => {
    console.log('[PWA] App installed successfully');
    deferredPrompt = null;

    // Show success message
    showNotificationBanner('¡App instalada! 🎉', 'Ahora puedes acceder desde tu pantalla de inicio');
});

// ============================================
// PUSH NOTIFICATIONS
// ============================================

async function initializePushNotifications(registration) {
    // Check if notifications are supported
    if (!('Notification' in window)) {
        console.log('[PWA] This browser does not support notifications');
        return;
    }

    // Check notification permission
    if (Notification.permission === 'granted') {
        console.log('[PWA] Notification permission already granted');
        subscribeToPush(registration);
    } else if (Notification.permission !== 'denied') {
        // Show custom notification prompt after 10 seconds
        setTimeout(() => {
            showNotificationPrompt(registration);
        }, 10000);
    }
}

// function showNotificationPrompt(registration) { ... removed ... }

async function subscribeToPush(registration) {
    try {
        // Subscribe to push notifications
        const subscription = await registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: urlBase64ToUint8Array(
                'BEl62iUYgUivxIkv69yViEuiBIa-Ib9-SkvMeAtA3LFgDzkrxZJjSgSnfckjBJuBkr3qBUYIHBQFLXYp5Nksh8U'
            )
        });

        console.log('[PWA] Push subscription:', JSON.stringify(subscription));

        // Send subscription to server (you would implement this)
        // await sendSubscriptionToServer(subscription);

    } catch (error) {
        console.error('[PWA] Failed to subscribe to push:', error);
    }
}

function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }

    return outputArray;
}

// ============================================
// LOCAL NOTIFICATIONS FOR EVENTS
// ============================================

function scheduleEventNotifications() {
    if (!swRegistration) return;
    if (Notification.permission !== 'granted') return;

    // Get upcoming events from calendar
    const today = new Date();

    // Example: Notify about Furnace Frenzy
    const nextFurnace = new Date(today);
    nextFurnace.setDate(today.getDate() + 2); // 2 days from now
    nextFurnace.setHours(10, 0, 0, 0); // 10 AM

    const timeUntilEvent = nextFurnace - today;

    if (timeUntilEvent > 0 && timeUntilEvent < 7 * 24 * 60 * 60 * 1000) { // Within 7 days
        setTimeout(() => {
            showLocalNotification('Furnace Frenzy comienza pronto', {
                body: 'El evento comienza en 2 horas. Prepara tus recursos!',
                icon: '/images/icon-192x192.png',
                badge: '/images/badge-72x72.png',
                tag: 'event-furnace',
                requireInteraction: false
            });
        }, Math.max(0, timeUntilEvent - 2 * 60 * 60 * 1000)); // 2 hours before
    }
}

function showLocalNotification(title, options) {
    if (swRegistration && Notification.permission === 'granted') {
        swRegistration.showNotification(title, options);
    }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

function showNotificationBanner(title, message) {
    const banner = document.createElement('div');
    banner.style.cssText = `
        position: fixed;
        top: 2rem;
        right: 2rem;
        background: linear-gradient(135deg, #00ff88, var(--primary));
        color: black;
        padding: 1.5rem 2rem;
        border-radius: 15px;
        box-shadow: 0 10px 30px rgba(0, 255, 136, 0.5);
        z-index: 10000;
        max-width: 350px;
        animation: slideIn 0.5s ease;
    `;

    banner.innerHTML = `
        <div style="font-weight: 900; font-size: 1.1rem; margin-bottom: 0.5rem;">
            ${title}
        </div>
        <div style="font-size: 0.9rem; opacity: 0.8;">
            ${message}
        </div>
    `;

    document.body.appendChild(banner);

    setTimeout(() => {
        banner.style.animation = 'slideOut 0.5s ease';
        setTimeout(() => banner.remove(), 500);
    }, 5000);
}

// ============================================
// OFFLINE/ONLINE STATUS
// ============================================

window.addEventListener('online', () => {
    console.log('[PWA] Back online');
    showNotificationBanner('Conexión restaurada ✅', 'Ahora estás online');
});

window.addEventListener('offline', () => {
    console.log('[PWA] Gone offline');
    showNotificationBanner('Sin conexión ⚠️', 'Modo offline activado');
});

// ============================================
// INITIALIZATION
// ============================================

// Schedule notifications when page loads
window.addEventListener('load', () => {
    setTimeout(() => {
        scheduleEventNotifications();
    }, 5000);
});

console.log('[PWA] Initialization script loaded');
