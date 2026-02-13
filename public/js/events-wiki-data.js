// ============================================
// EVENTS WIKI DATABASE
// ============================================

const eventsWikiData = [
    {
        id: 'furnace-frenzy',
        name: 'Furnace Frenzy',
        icon: '🔥',
        category: 'recurrent',
        frequency: 'Mensual',
        difficulty: 'Medium',
        description: 'Evento de velocidad de construcción y mejora del Furnace.',
        overview: 'El objetivo es ganar puntos mejorando el Furnace y edificios clave bajo presión de tiempo.',
        strategy: [
            'Ahorra Speedups de construcción durante 3 semanas antes del evento.',
            'Asegúrate de tener suficientes recursos (especialmente Hierro y Carbón) acumulados.',
            'Usa el talento de Chief "Construction Speed" justo antes de iniciar grandes mejoras.',
            'Pide ayuda a la Alianza para reducir el tiempo antes de usar speedups.'
        ],
        tips: 'Los últimos niveles del Furnace dan la mayor cantidad de puntos. No los desperdicies fuera del evento.',
        rewards: ['Gems', 'Construction Speedups', 'Chief Gear Materials']
    },
    {
        id: 'passing-treasures',
        name: 'Passing Treasures',
        icon: '💎',
        category: 'special',
        frequency: 'Variable',
        difficulty: 'Easy',
        description: 'Evento de recolección de llaves y apertura de cofres misteriosos.',
        overview: 'Completa misiones diarias para obtener llaves y desbloquear recompensas progresivas.',
        strategy: [
            'Maximiza las misiones diarias de Stamina.',
            'Guarda las llaves para abrirlas en lotes de 10 para mejores rates visuales (mitos urbanos, pero ayuda a la gestión).',
            'Enfócate en los cofres de nivel superior que contienen Hero Shards.'
        ],
        tips: 'No compres llaves con gemas a menos que estés muy cerca de un hito importante.',
        rewards: ['Hero Shards', 'Pet Food', 'Gems']
    },
    {
        id: 'lucky-wheel',
        name: 'Lucky Wheel',
        icon: '🎡',
        category: 'recurrent',
        frequency: 'Cada 2 semanas',
        difficulty: 'Low',
        description: 'Gira la rueda para obtener fragmentos de héroes legendarios.',
        overview: 'La principal fuente para obtener héroes como Flint, Alonso o Philly dependiendo de la generación del servidor.',
        strategy: [
            'Ahorra 15,000 - 30,000 gemas para asegurar el hito de 70 o 120 giros.',
            'No gastes giros individuales; usa el botón de x10 para ahorrar tiempo y seguir mejor el conteo.',
            'Prioriza la rueda solo si necesitas al héroe actual para tu formación principal.'
        ],
        tips: 'Los hitos de giros (Bonus Rewards) son más valiosos que los premios individuales de la rueda.',
        rewards: ['Legendary Hero Shards', 'Exp Manuals', 'Resources']
    },
    {
        id: 'crazy-joe',
        name: 'Crazy Joe',
        icon: '🤡',
        category: 'alliance',
        frequency: 'Semanal',
        difficulty: 'High',
        description: 'Defiende la alianza contra oleadas de ataques de Crazy Joe.',
        overview: 'Un evento cooperativo donde Joe ataca tanto el Cuartel de la Alianza como las ciudades individuales.',
        strategy: [
            'Envía refuerzos a los miembros más débiles de la alianza.',
            'Asegúrate de estar online para re-enviar tropas si tus defensas fallan.',
            'Mata las oleadas lo más rápido posible para ganar puntos de velocidad.',
            'El líder de la alianza debe activar el evento cuando la mayoría esté online.'
        ],
        tips: 'Reforzar a otros da más puntos que solo defender tu propia ciudad.',
        rewards: ['Alliance Coins', 'Hero Exp', 'Chief Gear Materials']
    },
    {
        id: 'hero-trial',
        name: 'Hero Trial',
        icon: '⚔️',
        category: 'solo',
        frequency: 'Diario',
        difficulty: 'Scalable',
        description: 'Enfréntate a desafíos con tus héroes para ganar items de mejora.',
        overview: 'Modo de batalla por niveles donde la composición de tu equipo es clave.',
        strategy: [
            'Usa la ventaja de facción (Infantry > Lancer > Marksman).',
            'Posiciona a tus tanques (como Sergey o Flint) siempre al frente.',
            'Si te estancas, mejora el nivel de tus héroes o su equipamiento antes de reintentar.'
        ],
        tips: 'Puedes repetir niveles anteriores para farmear si no puedes avanzar.',
        rewards: ['Hero Exp', 'Skill Manuals', 'Gear Enhancement Parts']
    },
    {
        id: 'kingdom-conflicts',
        name: 'Kingdom Conflicts (SvS)',
        icon: '👑',
        category: 'epic',
        frequency: 'Mensual',
        difficulty: 'Hell',
        description: 'Guerra masiva entre servidores por el control del Sun Castle.',
        overview: 'El evento pináculo de Whiteout Survival. Se divide en fase de preparación y fase de batalla.',
        strategy: [
            'Fase Prep: Maximiza puntos en recolección, construcción y entrenamiento.',
            'Fase Batalla: Coordina con todo el servidor para ataques masivos al castillo enemigo.',
            'Usa escudos (Shields) si no estás participando activamente en la batalla para evitar ser "ceroed".',
            'La comunicación por Discord es obligatoria para la alta coordinación.'
        ],
        tips: 'Los puntos de "Kill Stage" son los más peligrosos pero los más gratificantes.',
        rewards: ['Sun Castle Titles', 'Massive Gems', 'Exclusive Frames', 'Mythic Gear Materials']
    },
    {
        id: 'daily-weekly',
        name: 'Daily & Weekly Events',
        icon: '📅',
        category: 'recurrent',
        frequency: 'Continuo',
        difficulty: 'Low',
        description: 'Ciclo constante de misiones para mantener el ritmo de crecimiento.',
        overview: 'Incluye King of Icefield, misiones de login y recolección diaria.',
        strategy: [
            'Completa siempre las misiones de 500 puntos diarios para el cofre final.',
            'Sigue el calendario del King of Icefield para saber cuándo usar cada tipo de recurso.',
            'No reclames recompensas de correo hasta que necesites los recursos para un evento activo.'
        ],
        tips: 'La constancia es mejor que el gasto masivo en un solo día.',
        rewards: ['Stamina', 'Daily Keys', 'Standard Resources']
    }
];
