// ============================================
// CHIEF GEAR DATABASE - DATA ONLY V2
// ============================================

const gearData = [
    // --- PATH: COMMANDER (Combat Focused) ---
    {
        id: 'commander-rare',
        name: 'Commander (Rare)',
        icon: '🎖️',
        type: 'combat',
        rarity: 'rare',
        set: 'Commander',
        evolutionPath: 'combat-path',
        tier: 1,
        stats: { attack: '5-8%', defense: '3-5%', hp: '4-6%' },
        materials: { 'Rare Core': 20, 'Steel': 500, 'Gold': '100K' },
        priority: 'B'
    },
    {
        id: 'commander-epic',
        name: 'Commander (Epic)',
        icon: '🎖️',
        type: 'combat',
        rarity: 'epic',
        set: 'Commander',
        evolutionPath: 'combat-path',
        tier: 2,
        stats: { attack: '12-18%', defense: '8-12%', hp: '10-14%' },
        materials: { 'Epic Core': 60, 'Steel': 2000, 'Gold': '1M' },
        priority: 'A'
    },
    {
        id: 'warlord-legendary',
        name: 'Warlord (Legendary)',
        icon: '👑',
        type: 'combat',
        rarity: 'legendary',
        set: 'Warlord',
        evolutionPath: 'combat-path',
        tier: 3,
        stats: { attack: '28-35%', defense: '18-22%', hp: '22-28%', marchSpeed: '15%' },
        setBonus: 'ATK Infantry +40%, DEF Infantry +30%',
        materials: { 'Legendary Core': 180, 'Steel': 10000, 'Gold': '15M' },
        priority: 'S'
    },
    {
        id: 'warlord-t1',
        name: 'Warlord T1 (Mythic)',
        icon: '🔥',
        type: 'combat',
        rarity: 'mythic',
        set: 'Warlord',
        evolutionPath: 'combat-path',
        tier: 4,
        stats: { attack: '45-55%', defense: '32-40%', hp: '38-46%', marchSpeed: '20%' },
        setBonus: 'ATK Infantry +60%, DEF Infantry +50%, DMG Bonus +5%',
        materials: { 'Mythic Essence': 50, 'Legendary Core': 300, 'Gold': '50M' },
        priority: 'S+'
    },
    {
        id: 'warlord-t2',
        name: 'Warlord T2 (Eternal)',
        icon: '💎',
        type: 'combat',
        rarity: 'mythic',
        set: 'Warlord',
        evolutionPath: 'combat-path',
        tier: 5,
        stats: { attack: '70-85%', defense: '50-65%', hp: '60-75%', marchSpeed: '30%' },
        setBonus: 'ATK Infantry +100%, DEF Infantry +80%, All DMG +10%',
        materials: { 'Eternal Shard': 100, 'Mythic Essence': 200, 'Gold': '200M' },
        priority: 'ULTIMATE'
    },

    // --- PATH: GUARDIAN (Defense Focused) ---
    {
        id: 'defender-rare',
        name: 'Defender (Rare)',
        icon: '🛡️',
        type: 'defense',
        rarity: 'rare',
        set: 'Guardian',
        evolutionPath: 'defense-path',
        tier: 1,
        stats: { attack: '3-5%', defense: '6-10%', hp: '5-8%' },
        materials: { 'Rare Core': 20, 'Steel': 500, 'Gold': '100K' },
        priority: 'B'
    },
    {
        id: 'defender-epic',
        name: 'Defender (Epic)',
        icon: '🛡️',
        type: 'defense',
        rarity: 'epic',
        set: 'Guardian',
        evolutionPath: 'defense-path',
        tier: 2,
        stats: { attack: '6-10%', defense: '15-22%', hp: '12-18%' },
        materials: { 'Epic Core': 60, 'Steel': 2000, 'Gold': '1M' },
        priority: 'B+'
    },
    {
        id: 'guardian-legendary',
        name: 'Guardian (Legendary)',
        icon: '🏰',
        type: 'defense',
        rarity: 'legendary',
        set: 'Guardian',
        evolutionPath: 'defense-path',
        tier: 3,
        stats: { attack: '20-25%', defense: '30-38%', hp: '28-35%', dmgReduction: '12%' },
        setBonus: 'HP All Troops +35%, DEF All Troops +25%',
        materials: { 'Legendary Core': 180, 'Steel': 10000, 'Gold': '15M' },
        priority: 'A'
    },

    // --- PATH: GATHERER (Eco Focused) ---
    {
        id: 'farmer-rare',
        name: 'Farmer (Rare)',
        icon: '🧺',
        type: 'gathering',
        rarity: 'rare',
        set: 'Harvester',
        evolutionPath: 'gathering-path',
        tier: 1,
        stats: { gatheringSpeed: '10-15%', loadCapacity: '15-25%' },
        materials: { 'Rare Core': 15, 'Fabric': 400, 'Gold': '50K' },
        priority: 'C'
    },
    {
        id: 'farmer-epic',
        name: 'Forager (Epic)',
        icon: '🌾',
        type: 'gathering',
        rarity: 'epic',
        set: 'Harvester',
        evolutionPath: 'gathering-path',
        tier: 2,
        stats: { gatheringSpeed: '25-35%', loadCapacity: '40-60%', marchSpeed: '10%' },
        materials: { 'Epic Core': 50, 'Fabric': 1500, 'Gold': '500K' },
        priority: 'B'
    },
    {
        id: 'harvester-legendary',
        name: 'Harvester (Legendary)',
        icon: '🚜',
        type: 'gathering',
        rarity: 'legendary',
        set: 'Harvester',
        evolutionPath: 'gathering-path',
        tier: 3,
        stats: { gatheringSpeed: '55-65%', loadCapacity: '90-110%', marchSpeed: '25%' },
        setBonus: 'Gathering Speed +50%, Load +80%',
        materials: { 'Legendary Core': 150, 'Fabric': 8000, 'Gold': '10M' },
        priority: 'S (for Farmers)'
    }
];
