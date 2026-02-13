// Whiteout Survival Event Calendar API Simulation
// En ausencia de API oficial, este módulo simula datos de eventos actualizados

const WOSEventsAPI = {
    // Base URL para futuras integraciones (cuando/si hay API oficial)
    baseURL: 'https://api.whiteoutdata.com/events', // Ejemplo, no existe

    // Calendario de eventos recurrentes del juego (basado en investigación)
    eventSchedule: {
        weekly: [
            { name: "Cacería del Oso (Bear Hunt)", day: "Martes, Jueves", time: "20:00 UTC", icon: "🐻" },
            { name: "Alliance Championship", day: "Fines de semana", time: "Variable", icon: "🏆" }
        ],
        biweekly: [
            { name: "Alliance Mobilization", duration: "6 días", frequency: "Cada 2 semanas", icon: "⚔️" }
        ],
        special: [
            { name: "State vs State (SvS)", phase: "Preparación, Batalla, Armisticio", duration: "3 días", icon: "🛡️" },
            { name: "Tundra Games", frequency: "Mensual", icon: "🎮" },
            { name: "Frostdragon Tyrant", frequency: "Mensual", icon: "🐉" },
            { name: "King of Icefield", frequency: "Mensual", icon: "👑" }
        ],
        daily: [
            { name: "Frontera de Hielo", time: "Todo el día", icon: "🗺️" },
            { name: "Vision of Dawn", time: "Todo el día", icon: "🦌" },
            { name: "Treasure Hunter", time: "Variable", icon: "💎" }
        ]
    },

    // Simula obtener eventos próximos (en producción, esto sería un fetch real)
    async getUpcomingEvents() {
        // Simular latencia de API
        await new Promise(resolve => setTimeout(resolve, 500));

        const now = new Date();
        const events = [];

        // Generar eventos próximos basados en el día actual
        const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        const todayName = daysOfWeek[now.getDay()];

        // Bear Hunt (Martes y Jueves)
        if (todayName === 'Martes' || todayName === 'Jueves') {
            events.push({
                name: "Cacería del Oso (Bear Hunt)",
                date: "Hoy",
                time: "20:00 UTC",
                status: "active",
                icon: "🐻",
                description: "¡Caza el oso polar y gana recompensas masivas!"
            });
        }

        // Frontera de Hielo (diario)
        events.push({
            name: "Frontera de Hielo",
            date: todayName === 'Domingo' ? 'Hoy' : 'Mañana',
            time: "Todo el día",
            status: "ongoing",
            icon: "🗺️",
            description: "Recolecta puntos de exploración para boxes de recompensas."
        });

        // SvS (simular basado en fecha)
        const dayOfMonth = now.getDate();
        if (dayOfMonth % 10 === 0) { // Cada 10 días aprox
            events.push({
                name: "SvS: Fase de Preparación",
                date: "En 2 días",
                time: "--:--",
                status: "upcoming",
                icon: "⚔️",
                description: "Prepara tus tropas para la batalla entre estados."
            });
        }

        // Vision of Dawn (diario)
        events.push({
            name: "Vision of Dawn",
            date: "Hoy",
            time: "Todo el día",
            status: "ongoing",
            icon: "🦌",
            description: "Caza bestias salvajes para ganar monedas Hope."
        });

        // Alliance Championship (fines de semana)
        if (now.getDay() === 6 || now.getDay() === 0) {
            events.push({
                name: "Alliance Championship",
                date: now.getDay() === 6 ? "Hoy" : "Mañana",
                time: "18:00 UTC",
                status: "active",
                icon: "🏆",
                description: "Competición de alianzas por rankings y premios."
            });
        }

        return events;
    },

    // Obtener códigos de regalo activos (mock)
    async getActiveCodes() {
        return [
            { code: "OFFICIALSTORE", reward: "Speedups x5", expires: "Feb 28, 2026" },
            { code: "WELCOME2026", reward: "Recursos gratis", expires: "Mar 15, 2026" },
            { code: "SURVIVOR100K", reward: "Gold x500", expires: "Feb 20, 2026" }
        ];
    }
};

// Exportar para uso global
window.WOSEventsAPI = WOSEventsAPI;
