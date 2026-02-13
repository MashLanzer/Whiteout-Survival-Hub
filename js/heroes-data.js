// ===== DATOS COMPLETOS DE HÉROES =====
// Tier: S+, S, A, B, C 
// Gen: 1-15
// Type: Infantería, Lanceros, Tiradores
// Modes: pvp, pve, bear, svs, arena

const heroesData = [
    // GENERACIÓN 1
    {
        name: "Jeronimo", tier: "S+", gen: 1, type: "Infantería", mode: ["pvp", "pve", "bear", "arena"],
        desc: "El tanque definitivo. Shield Wall reduce daño hasta 40%. Nunca sale del meta.",
        skills: "Shield Wall, Tanque Elite",
        bestFor: "PvP, Bear Hunt, Defensa de Rally"
    },

    {
        name: "Molly", tier: "S", gen: 1, type: "Lanceros", mode: ["pvp", "pve", "arena"],
        desc: "Única Gen 1 con healing. Fragmentos F2P en Intel Missions.",
        skills: "Healing Aura, Soporte Táctico",
        bestFor: "Exploración, Versatilidad, F2P"
    },

    {
        name: "Natalia", tier: "S", gen: 1, type: "Infantería", mode: ["pve", "bear"],
        desc: "Especialista en bestias. +35% daño vs bestias salvajes.",
        skills: "Beast Slayer, Caza Mejorada",
        bestFor: "Bear Hunt, Rally vs Bestias"
    },

    {
        name: "Bahiti", tier: "A", gen: 1, type: "Tiradores", mode: ["pve", "bear"],
        desc: "Alto DPS sostenido. Buena para secondarios en escuadrón.",
        skills: "Precisión Letal",
        bestFor: "Exploración, Bear Hunt"
    },

    {
        name: "Zinman", tier: "B", gen: 1, type: "Lanceros", mode: ["pve"],
        desc: "Equilibrado pero outclassed por Gen superiores.",
        skills: "Defensa Táctica",
        bestFor: "Early game PvE"
    },

    {
        name: "Cloris", tier: "C", gen: 1, type: "Tiradores", mode: ["pve"],
        desc: "No recomendado para inversión. Solo early game.",
        skills: "Disparo Básico",
        bestFor: "Colección"
    },

    {
        name: "Smith", tier: "C", gen: 1, type: "Infantería", mode: ["pve"],
        desc: "Héroe básico. Reemplazar ASAP.",
        skills: "Ataque Básico",
        bestFor: "Tutorial"
    },

    {
        name: "Gina", tier: "C", gen: 1, type: "Tiradores", mode: ["pve"],
        desc: "Héroe básico. No invertir fragmentos.",
        skills: "Arquera Novata",
        bestFor: "Early collection"
    },

    {
        name: "Jessie", tier: "B", gen: 1, type: "Lanceros", mode: ["pve"],
        desc: "Útil early game, reemplazar después.",
        skills: "Lanza Táctica",
        bestFor: "Weeks 1-2"
    },

    // GENERACIÓN 2
    {
        name: "Charlie", tier: "S+", gen: 2, type: "Infantería", mode: ["pvp", "pve", "arena", "svs"],
        desc: "GOD TIER. Buff universal de ATK +25% a toda la marcha.", skills: "Comandante de Batalla, Army Boost",
        bestFor: "TODO - Meta absoluto"
    },

    {
        name: "Philly", tier: "S", gen: 2, type: "Lanceros", mode: ["pvp", "arena"],
        desc: "Counter de caballería. PvP balanceado con healing.",
        skills: "Anti-Cavalry, Regeneración",
        bestFor: "PvP, Arena Defense"
    },

    {
        name: "Mia", tier: "A", gen: 2, type: "Tiradores", mode: ["pve"],
        desc: "DPS decente pero situacional en Gen 2.",
        skills: "Sniper Elite",
        bestFor: "Exploración"
    },

    // GENERACIÓN 3
    {
        name: "Logan", tier: "S+", gen: 3, type: "Lanceros", mode: ["pvp", "svs", "arena"],
        desc: "AOE damage masivo. Meta para SvS late-game.",
        skills: "Area Devastation, Mass Control",
        bestFor: "SvS, Rallies Grandes"
    },

    {
        name: "Norah", tier: "A", gen: 3, type: "Tiradores", mode: ["pvp", "pve"],
        desc: "Tiradora versátil con buen critical.",
        skills: "Critical Master",
        bestFor: "PvP Mid-tier"
    },

    // GENERACIÓN 4
    {
        name: "Magnus", tier: "S+", gen: 4, type: "Infantería", mode: ["pvp", "pve", "arena"],
        desc: "Tanque de élite, superior a Jeronimo en stats puros.",
        skills: "Fortified Defense, Shield Master",
        bestFor: "Tanque Meta, P2W friendly"
    },

    {
        name: "Blanchette", tier: "S+", gen: 4, type: "Tiradores", mode: ["pvp", "pve", "svs"],
        desc: "DPS explosivo. Critical strikes devastadores.",
        skills: "Explosive Shot, Burst Damage",
        bestFor: "PvP Burst, SvS"
    },

    {
        name: "Eugene", tier: "A", gen: 4, type: "Lanceros", mode: ["pvp", "pve"],
        desc: "Support sólido con buffs de equipo.",
        skills: "Team Buff",
        bestFor: "Support Role"
    },

    // GENERACIÓN 5
    {
        name: "Bradley", tier: "S+", gen: 5, type: "Infantería", mode: ["pvp", "svs", "arena"],
        desc: "Tank/DPS híbrido. Altísima survivability.",
        skills: "Hybrid Warrior, Lifesteal",
        bestFor: "PvP Meta, Tanque DPS"
    },

    {
        name: "Gregory", tier: "S+", gen: 5, type: "Tiradores", mode: ["pvp", "pve", "bear"],
        desc: "El sniper definitivo Gen 5. Precision letal.",
        skills: "Perfect Aim, Executioner",
        bestFor: "PvP Sniper, Bear Hunt"
    },

    {
        name: "Freya", tier: "S", gen: 5, type: "Lanceros", mode: ["pvp", "pve"],
        desc: "Healing masivo y support. Mejor healera del juego.",
        skills: "Divine Healing, Resurrection",
        bestFor: "PvE Content, Support Meta"
    },

    {
        name: "Lumak-Bokan", tier: "B", gen: 5, type: "Infantería", mode: ["pve"],
        desc: "Niche use. Outclassed por otros Gen 5.",
        skills: "Tribal Power",
        bestFor: "Collection"
    },

    // GENERACIÓN 6+
    {
        name: "Sonya", tier: "S+", gen: 6, type: "Tiradores", mode: ["pvp", "svs", "arena"],
        desc: "Meta sniping. Ignore shields skill OP.",
        skills: "Shield Pierce, Armor Break",
        bestFor: "SvS, Arena Top Tier"
    },

    {
        name: "Gwen", tier: "S+", gen: 6, type: "Lanceros", mode: ["pvp", "pve", "svs"],
        desc: "Versatilidad insane. Domina todos los modos.",
        skills: "Adaptive Combat, Multirole",
        bestFor: "Todo - Tier0"
    },

    {
        name: "Reina", tier: "S", gen: 6, type: "Infantería", mode: ["pvp", "arena"],
        desc: "Tanque Gen 6 con counter mechanics.",
        skills: "Reflect Damage, Counter Strike",
        bestFor: "PvP Defense, Arena"
    },

    {
        name: "Fred", tier: "S", gen: 7, type: "Tiradores", mode: ["pvp", "svs"],
        desc: "Archer Gen 7. High burst potential.",
        skills: "Volley Fire",
        bestFor: "SvS Artillery"
    },

    {
        name: "Xura", tier: "S+", gen: 7, type: "Infantería", mode: ["pvp", "svs", "arena"],
        desc: "Top DPS Gen 7. Insane damage output.",
        skills: "Berserker Mode, Fury",
        bestFor: "PvP Meta Gen 7"
    },

    {
        name: "Wayne", tier: "S", gen: 7, type: "Lanceros", mode: ["pvp", "pve"],
        desc: "Balanced Gen 7 lancer. Solid all-round.",
        skills: "Tactical Spear",
        bestFor: "PvP/PvE Balance"
    },
    {
        name: "Jasser", tier: "A", gen: 8, type: "Tiradores", mode: ["pvp", "pve"],
        desc: "Gen 8 archer. Decent but not meta-defining.",
        skills: "Rapid Fire",
        bestFor: "Secondary DPS"
    },
    {
        name: "Gatot", tier: "B", gen: 8, type: "Infantería", mode: ["pve"],
        desc: "Niche Gen 8 tank. Situational.",
        skills: "Stubborn Defense",
        bestFor: "Specific Counters"
    },
    {
        name: "Edith", tier: "A", gen: 8, type: "Lanceros", mode: ["pvp"],
        desc: "Support lancer Gen 8. Team buffs.",
        skills: "Rally Support",
        bestFor: "Team Compositions"
    },
    {
        name: "Gordon", tier: "A", gen: 9, type: "Infantería", mode: ["pvp", "arena"],
        desc: "Gen 9 bruiser. High HP scaling.",
        skills: "Titan Strength",
        bestFor: "Frontline Bruiser"
    },
    {
        name: "Greg", tier: "S", gen: 9, type: "Tiradores", mode: ["pvp", "svs"],
        desc: "Precision archer Gen 9. Critical meta.",
        skills: "Deadeye, Critical+",
        bestFor: "Crit Builds"
    },
    {
        name: "Lynn", tier: "S+", gen: 9, type: "Lanceros", mode: ["pvp", "svs", "arena"],
        desc: "Meta Gen 9. Domina PvP actual.",
        skills: "Spear of Destiny, Ultimate Lance",
        bestFor: "Current Meta S+ Tier"
    },
    {
        name: "Ling-Xue", tier: "S", gen: 10, type: "Tiradores", mode: ["pvp", "pve"],
        desc: "Ice-themed archer. AOE frost skills.",
        skills: "Frost Arrow, Freeze",
        bestFor: "AOE Damage, Control"
    }
];

// Helper to filter heroes by generation
function getHeroesByGen(gen) {
    return heroesData.filter(h => h.gen === gen);
}

// Export for other scripts if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { heroesData, getHeroesByGen };
}
