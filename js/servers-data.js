// ============================================
// SERVERS DATABASE
// ============================================
// Nota: Esta data debe actualizarse manualmente
// Los nombres de alianzas y power son ejemplares

const serversData = [
    {
        id: 's1',
        name: 'Server 1 - Genesis',
        status: 'merged',
        region: 'Global',
        openDate: '2023-05-15',
        topAlliances: [
            { rank: 1, name: 'Legends', power: '2.8B', leader: 'Phoenix' },
            { rank: 2, name: 'Titans', power: '2.5B', leader: 'Thor' },
            { rank: 3, name: 'Warriors', power: '2.2B', leader: 'Ares' },
            { rank: 4, name: 'Knights', power: '1.9B', leader: 'Arthur' },
            { rank: 5, name: 'Spartans', power: '1.7B', leader: 'Leonidas' },
            { rank: 6, name: 'Vikings', power: '1.5B', leader: 'Ragnar' },
            { rank: 7, name: 'Samurai', power: '1.3B', leader: 'Hattori' },
            { rank: 8, name: 'Crusaders', power: '1.1B', leader: 'Saladin' },
            { rank: 9, name: 'Templars', power: '950M', leader: 'Jacques' },
            { rank: 10, name: 'Raiders', power: '880M', leader: 'Erik' }
        ]
    },
    {
        id: 's45',
        name: 'Server 45 - Nova',
        status: 'new',
        region: 'Global',
        openDate: '2026-01-20',
        topAlliances: [
            { rank: 1, name: 'Vanguard', power: '450M', leader: 'Alpha' },
            { rank: 2, name: 'Elite', power: '420M', leader: 'Beta' },
            { rank: 3, name: 'Phoenix', power: '380M', leader: 'Gamma' },
            { rank: 4, name: 'Nexus', power: '350M', leader: 'Delta' },
            { rank: 5, name: 'Apex', power: '320M', leader: 'Epsilon' },
            { rank: 6, name: 'Summit', power: '290M', leader: 'Zeta' },
            { rank: 7, name: 'Prime', power: '260M', leader: 'Eta' },
            { rank: 8, name: 'Zenith', power: '230M', leader: 'Theta' },
            { rank: 9, name: 'Omega', power: '210M', leader: 'Iota' },
            { rank: 10, name: 'Sigma', power: '190M', leader: 'Kappa' }
        ]
    },
    {
        id: 's32',
        name: 'Server 32 - Titanfall',
        status: 'active',
        region: 'Global',
        openDate: '2025-08-10',
        topAlliances: [
            { rank: 1, name: 'Dominion', power: '1.2B', leader: 'Emperor' },
            { rank: 2, name: 'Empire', power: '1.1B', leader: 'Caesar' },
            { rank: 3, name: 'Legion', power: '980M', leader: 'Maximus' },
            { rank: 4, name: 'Imperium', power: '850M', leader: 'Augustus' },
            { rank: 5, name: 'Dynasty', power: '780M', leader: 'Khan' },
            { rank: 6, name: 'Kingdom', power: '720M', leader: 'Rex' },
            { rank: 7, name: 'Monarchy', power: '650M', leader: 'Queen' },
            { rank: 8, name: 'Republic', power: '580M', leader: 'Consul' },
            { rank: 9, name: 'Federation', power: '520M', leader: 'President' },
            { rank: 10, name: 'Union', power: '470M', leader: 'Chancellor' }
        ]
    },
    {
        id: 's18',
        name: 'Server 18 - Frostbite',
        status: 'old',
        region: 'Global',
        openDate: '2024-03-05',
        topAlliances: [
            { rank: 1, name: 'IceLords', power: '3.5B', leader: 'Frost' },
            { rank: 2, name: 'Blizzard', power: '3.2B', leader: 'Storm' },
            { rank: 3, name: 'Avalanche', power: '2.9B', leader: 'Winter' },
            { rank: 4, name: 'Glacier', power: '2.6B', leader: 'Ice' },
            { rank: 5, name: 'Arctic', power: '2.3B', leader: 'Polar' },
            { rank: 6, name: 'Tundra', power: '2.0B', leader: 'Frozen' },
            { rank: 7, name: 'Permafrost', power: '1.8B', leader: 'Chill' },
            { rank: 8, name: 'Icebreaker', power: '1.6B', leader: 'Shatter' },
            { rank: 9, name: 'Snowstorm', power: '1.4B', leader: 'Drift' },
            { rank: 10, name: 'FrostGuard', power: '1.2B', leader: 'Guard' }
        ]
    },
    {
        id: 's27',
        name: 'Server 27 - Stormfront',
        status: 'active',
        region: 'Global',
        openDate: '2025-06-18',
        topAlliances: [
            { rank: 1, name: 'Thunder', power: '1.4B', leader: 'Zeus' },
            { rank: 2, name: 'Lightning', power: '1.2B', leader: 'Tesla' },
            { rank: 3, name: 'Tempest', power: '1.0B', leader: 'Storm' },
            { rank: 4, name: 'Hurricane', power: '880M', leader: 'Cyclone' },
            { rank: 5, name: 'Tornado', power: '760M', leader: 'Twister' },
            { rank: 6, name: 'Monsoon', power: '680M', leader: 'Rain' },
            { rank: 7, name: 'Typhoon', power: '600M', leader: 'Wind' },
            { rank: 8, name: 'Gale', power: '530M', leader: 'Breeze' },
            { rank: 9, name: 'Vortex', power: '460M', leader: 'Spiral' },
            { rank: 10, name: 'Whirlwind', power: '400M', leader: 'Spin' }
        ]
    },
    {
        id: 's42',
        name: 'Server 42 - Horizon',
        status: 'new',
        region: 'Global',
        openDate: '2026-01-05',
        topAlliances: [
            { rank: 1, name: 'Ascent', power: '520M', leader: 'Climber' },
            { rank: 2, name: 'Rising', power: '480M', leader: 'Dawn' },
            { rank: 3, name: 'Skyward', power: '440M', leader: 'Eagle' },
            { rank: 4, name: 'Altitude', power: '400M', leader: 'Peak' },
            { rank: 5, name: 'Summit', power: '360M', leader: 'Mount' },
            { rank: 6, name: 'Pinnacle', power: '330M', leader: 'Top' },
            { rank: 7, name: 'Crest', power: '300M', leader: 'Wave' },
            { rank: 8, name: 'Elevate', power: '270M', leader: 'Lift' },
            { rank: 9, name: 'Soar', power: '240M', leader: 'Fly' },
            { rank: 10, name: 'Climb', power: '210M', leader: 'Rope' }
        ]
    },
    {
        id: 's12',
        name: 'Server 12 - Crimson',
        status: 'old',
        region: 'Global',
        openDate: '2023-11-20',
        topAlliances: [
            { rank: 1, name: 'Bloodmoon', power: '4.2B', leader: 'Dracula' },
            { rank: 2, name: 'Scarlet', power: '3.8B', leader: 'Crimson' },
            { rank: 3, name: 'Vermillion', power: '3.4B', leader: 'Ruby' },
            { rank: 4, name: 'Carmine', power: '3.0B', leader: 'Rose' },
            { rank: 5, name: 'Maroon', power: '2.7B', leader: 'Wine' },
            { rank: 6, name: 'Cardinal', power: '2.4B', leader: 'Bishop' },
            { rank: 7, name: 'Burgundy', power: '2.1B', leader: 'Grape' },
            { rank: 8, name: 'Cherry', power: '1.9B', leader: 'Blossom' },
            { rank: 9, name: 'Rust', power: '1.7B', leader: 'Iron' },
            { rank: 10, name: 'Copper', power: '1.5B', leader: 'Bronze' }
        ]
    },
    {
        id: 's38',
        name: 'Server 38 - Eclipse',
        status: 'active',
        region: 'Global',
        openDate: '2025-10-12',
        topAlliances: [
            { rank: 1, name: 'Lunar', power: '980M', leader: 'Moon' },
            { rank: 2, name: 'Solar', power: '880M', leader: 'Sun' },
            { rank: 3, name: 'Stellar', power: '780M', leader: 'Star' },
            { rank: 4, name: 'Cosmic', power: '690M', leader: 'Galaxy' },
            { rank: 5, name: 'Nebula', power: '610M', leader: 'Cloud' },
            { rank: 6, name: 'Quasar', power: '540M', leader: 'Light' },
            { rank: 7, name: 'Pulsar', power: '480M', leader: 'Pulse' },
            { rank: 8, name: 'Supernova', power: '420M', leader: 'Blast' },
            { rank: 9, name: 'Comet', power: '370M', leader: 'Tail' },
            { rank: 10, name: 'Meteor', power: '320M', leader: 'Shower' }
        ]
    }
];

// ============================================
// DISPLAY FUNCTIONS
// ============================================

let currentServerFilter = 'all';

function displayServers(filter = 'all') {
    const container = document.getElementById('servers-container');
    if (!container) return;

    const filtered = filter === 'all'
        ? serversData
        : serversData.filter(s => s.status === filter);

    if (filtered.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-gray); padding: 3rem;">No hay servidores con este filtro.</p>';
        return;
    }

    container.innerHTML = filtered.map(server => `
        <div class="server-card">
            <div class="server-header">
                <div>
                    <div class="server-name">${server.name}</div>
                    <div style="color: var(--text-gray); margin-top: 0.5rem;">
                        📅 Apertura: ${formatDate(server.openDate)} • 🌍 ${server.region}
                    </div>
                </div>
                <div class="server-status status-${server.status}">
                    ${getStatusName(server.status)}
                </div>
            </div>
            
            <div style="background: rgba(0, 0, 0, 0.2); padding: 1.5rem; border-radius: 15px; margin-bottom: 1.5rem;">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1.5rem; text-align: center;">
                    <div>
                        <div style="color: var(--text-gray); font-size: 0.9rem;">Edad del Server</div>
                        <div style="color: white; font-weight: 900; font-size: 1.3rem; margin-top: 0.5rem;">
                            ${getServerAge(server.openDate)}
                        </div>
                    </div>
                    <div>
                        <div style="color: var(--text-gray); font-size: 0.9rem;">Top Alliance Power</div>
                        <div style="color: var(--primary); font-weight: 900; font-size: 1.3rem; margin-top: 0.5rem;">
                            ${server.topAlliances[0].power}
                        </div>
                    </div>
                    <div>
                        <div style="color: var(--text-gray); font-size: 0.9rem;">Competitividad</div>
                        <div style="color: #00ff88; font-weight: 900; font-size: 1.3rem; margin-top: 0.5rem;">
                            ${getCompetitiveness(server)}
                        </div>
                    </div>
                </div>
            </div>
            
            <h3 style="color: var(--primary); margin-bottom: 1rem;">🏆 Top 10 Alianzas</h3>
            <table class="alliances-table">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Alianza</th>
                        <th>Líder</th>
                        <th>Power</th>
                    </tr>
                </thead>
                <tbody>
                    ${server.topAlliances.map(alliance => `
                        <tr>
                            <td>
                                <span class="rank-badge rank-${alliance.rank <= 3 ? alliance.rank : 'other'}">
                                    ${alliance.rank}
                                </span>
                            </td>
                            <td style="font-weight: 700; color: white;">${alliance.name}</td>
                            <td>${alliance.leader}</td>
                            <td style="color: var(--primary); font-weight: 700;">${alliance.power}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `).join('');
}

function getStatusName(status) {
    const names = {
        'new': '🆕 Nuevo',
        'active': '✅ Activo',
        'old': '⏳ Viejo',
        'merged': '🔗 Merged'
    };
    return names[status] || status;
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

function getServerAge(openDateStr) {
    const openDate = new Date(openDateStr);
    const now = new Date();
    const diffTime = Math.abs(now - openDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const diffMonths = Math.floor(diffDays / 30);

    if (diffMonths < 1) return `${diffDays} días`;
    return `${diffMonths} ${diffMonths === 1 ? 'mes' : 'meses'}`;
}

function getCompetitiveness(server) {
    // Calculate power gap between #1 and #10
    const top1Power = parsePower(server.topAlliances[0].power);
    const top10Power = parsePower(server.topAlliances[9].power);
    const ratio = top1Power / top10Power;

    if (ratio < 2) return 'Alta 🔥';
    if (ratio < 3) return 'Media ⚖️';
    return 'Baja ❄️';
}

function parsePower(powerStr) {
    const num = parseFloat(powerStr);
    if (powerStr.includes('B')) return num * 1000000000;
    if (powerStr.includes('M')) return num * 1000000;
    if (powerStr.includes('K')) return num * 1000;
    return num;
}

function filterServers(status) {
    currentServerFilter = status;

    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    event.target.classList.add('active');

    displayServers(status);
}

// Initialize
if (document.getElementById('servers-container')) {
    displayServers('all');
}
