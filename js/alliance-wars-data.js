// ============================================
// ALLIANCE WARS DATA & TRACKING
// ============================================

let warsData = [
    {
        id: 1,
        alliance1: 'Legends',
        alliance2: 'Titans',
        kills1: 12500000,
        kills2: 10800000,
        deaths1: 8200000,
        deaths2: 9500000,
        status: 'finished',
        date: '2026-02-05',
        duration: '3 días'
    },
    {
        id: 2,
        alliance1: 'Warriors',
        alliance2: 'Vikings',
        kills1: 15200000,
        kills2: 14900000,
        deaths1: 11000000,
        deaths2: 10500000,
        status: 'finished',
        date: '2026-02-08',
        duration: '2 días'
    },
    {
        id: 3,
        alliance1: 'Phoenix',
        alliance2: 'Dragons',
        kills1: 8500000,
        kills2: 9200000,
        deaths1: 0,
        deaths2: 0,
        status: 'ongoing',
        date: '2026-02-11',
        duration: 'En curso'
    }
];

// ============================================
// DISPLAY FUNCTIONS
// ============================================

function displayWars() {
    const container = document.getElementById('wars-container');
    if (!container) return;

    if (warsData.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-gray); padding: 3rem;">No hay guerras registradas aún.</p>';
        return;
    }

    // Sort: ongoing first, then finished, then upcoming
    const sorted = [...warsData].sort((a, b) => {
        const order = { 'ongoing': 0, 'upcoming': 1, 'finished': 2 };
        return order[a.status] - order[b.status];
    });

    container.innerHTML = sorted.map(war => createWarCard(war)).join('');
    updateStats();
}

function createWarCard(war) {
    const winner = war.kills1 > war.kills2 ? 1 : (war.kills2 > war.kills1 ? 2 : 0);
    const statusClass = `status-${war.status}`;
    const statusText = getStatusText(war.status);

    return `
        <div class="war-card">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
                <div>
                    <div style="color: var(--text-gray); font-size: 0.9rem;">Guerra #${war.id}</div>
                    <div style="color: var(--text-gray); margin-top: 0.3rem;">📅 ${war.date}</div>
                </div>
                <div class="war-status ${statusClass}">
                    ${statusText}
                </div>
            </div>
            
            <div class="vs-section">
                <div class="alliance-side ${winner === 1 ? 'winner' : ''}">
                    <h3 style="color: ${winner === 1 ? '#00ff88' : 'white'}; margin-bottom: 1.5rem; text-align: center;">
                        ${war.alliance1}
                        ${winner === 1 ? ' 🏆' : ''}
                    </h3>
                    <div class="stats-grid">
                        <div class="stat-box">
                            <div style="color: var(--text-gray); font-size: 0.85rem;">Kills</div>
                            <div style="color: #ff4444; font-weight: 900; font-size: 1.3rem; margin-top: 0.3rem;">
                                ${formatNumber(war.kills1)}
                            </div>
                        </div>
                        ${war.status === 'finished' ? `
                        <div class="stat-box">
                            <div style="color: var(--text-gray); font-size: 0.85rem;">Deaths</div>
                            <div style="color: #888; font-weight: 900; font-size: 1.3rem; margin-top: 0.3rem;">
                                ${formatNumber(war.deaths1)}
                            </div>
                        </div>
                        <div class="stat-box">
                            <div style="color: var(--text-gray); font-size: 0.85rem;">K/D Ratio</div>
                            <div style="color: var(--primary); font-weight: 900; font-size: 1.3rem; margin-top: 0.3rem;">
                                ${war.deaths1 > 0 ? (war.kills1 / war.deaths1).toFixed(2) : '∞'}
                            </div>
                        </div>
                        ` : ''}
                    </div>
                </div>
                
                <div class="vs-icon">⚔️</div>
                
                <div class="alliance-side ${winner === 2 ? 'winner' : ''}">
                    <h3 style="color: ${winner === 2 ? '#00ff88' : 'white'}; margin-bottom: 1.5rem; text-align: center;">
                        ${war.alliance2}
                        ${winner === 2 ? ' 🏆' : ''}
                    </h3>
                    <div class="stats-grid">
                        <div class="stat-box">
                            <div style="color: var(--text-gray); font-size: 0.85rem;">Kills</div>
                            <div style="color: #ff4444; font-weight: 900; font-size: 1.3rem; margin-top: 0.3rem;">
                                ${formatNumber(war.kills2)}
                            </div>
                        </div>
                        ${war.status === 'finished' ? `
                        <div class="stat-box">
                            <div style="color: var(--text-gray); font-size: 0.85rem;">Deaths</div>
                            <div style="color: #888; font-weight: 900; font-size: 1.3rem; margin-top: 0.3rem;">
                                ${formatNumber(war.deaths2)}
                            </div>
                        </div>
                        <div class="stat-box">
                            <div style="color: var(--text-gray); font-size: 0.85rem;">K/D Ratio</div>
                            <div style="color: var(--primary); font-weight: 900; font-size: 1.3rem; margin-top: 0.3rem;">
                                ${war.deaths2 > 0 ? (war.kills2 / war.deaths2).toFixed(2) : '∞'}
                            </div>
                        </div>
                        ` : ''}
                    </div>
                </div>
            </div>
            
            <div style="text-align: center; margin-top: 2rem; padding-top: 2rem; border-top: 1px solid var(--border);">
                <div style="color: var(--text-gray); font-size: 0.9rem;">Duración: ${war.duration}</div>
                ${war.status === 'finished' ? `
                    <div style="margin-top: 0.5rem; color: var(--text-gray); font-size: 0.9rem;">
                        Diferencia: ${formatNumber(Math.abs(war.kills1 - war.kills2))} kills
                    </div>
                ` : ''}
            </div>
            
            <div style="display: flex; gap: 1rem; margin-top: 2rem;">
                <button class="btn secondary" style="flex: 1;" onclick="editWar(${war.id})">
                    ✏️ Editar
                </button>
                <button class="btn" style="flex: 1; background: #ff4444; border-color: #ff4444;" onclick="deleteWar(${war.id})">
                    🗑️ Eliminar
                </button>
            </div>
        </div>
    `;
}

function getStatusText(status) {
    const texts = {
        'ongoing': '⏳ En Curso',
        'finished': '✅ Finalizada',
        'upcoming': '📅 Próxima'
    };
    return texts[status] || status;
}

function updateStats() {
    const statsContainer = document.getElementById('stats-summary');
    if (!statsContainer) return;

    const finished = warsData.filter(w => w.status === 'finished');
    const totalWars = warsData.length;
    const totalKills = finished.reduce((sum, w) => sum + w.kills1 + w.kills2, 0);
    const totalDeaths = finished.reduce((sum, w) => sum + w.deaths1 + w.deaths2, 0);
    const avgKills = finished.length > 0 ? totalKills / (finished.length * 2) : 0;

    statsContainer.innerHTML = `
        <div style="text-align: center; background: rgba(0, 210, 255, 0.1); padding: 2rem; border-radius: 15px;">
            <div style="color: var(--text-gray); font-size: 0.9rem;">Total Guerras</div>
            <div style="color: var(--primary); font-weight: 900; font-size: 2.5rem; margin-top: 0.5rem;">
                ${totalWars}
            </div>
        </div>
        
        <div style="text-align: center; background: rgba(255, 69, 0, 0.1); padding: 2rem; border-radius: 15px;">
            <div style="color: var(--text-gray); font-size: 0.9rem;">Total Kills</div>
            <div style="color: #ff4444; font-weight: 900; font-size: 2.5rem; margin-top: 0.5rem;">
                ${formatNumber(totalKills)}
            </div>
        </div>
        
        <div style="text-align: center; background: rgba(0, 255, 136, 0.1); padding: 2rem; border-radius: 15px;">
            <div style="color: var(--text-gray); font-size: 0.9rem;">Kills Promedio</div>
            <div style="color: #00ff88; font-weight: 900; font-size: 2.5rem; margin-top: 0.5rem;">
                ${formatNumber(Math.floor(avgKills))}
            </div>
        </div>
        
        <div style="text-align: center; background: rgba(147, 112, 219, 0.1); padding: 2rem; border-radius: 15px;">
            <div style="color: var(--text-gray); font-size: 0.9rem;">K/D Global</div>
            <div style="color: #9370db; font-weight: 900; font-size: 2.5rem; margin-top: 0.5rem;">
                ${totalDeaths > 0 ? (totalKills / totalDeaths).toFixed(2) : '∞'}
            </div>
        </div>
    `;
}

// ============================================
// USER ACTIONS
// ============================================

function showAddWarForm() {
    document.getElementById('add-war-form').style.display = 'block';
    document.getElementById('add-war-form').scrollIntoView({ behavior: 'smooth' });
}

function hideAddWarForm() {
    document.getElementById('add-war-form').style.display = 'none';
    // Clear inputs
    document.getElementById('alliance1').value = '';
    document.getElementById('alliance2').value = '';
    document.getElementById('kills1').value = '';
    document.getElementById('kills2').value = '';
}

function addWar() {
    const alliance1 = document.getElementById('alliance1').value.trim();
    const alliance2 = document.getElementById('alliance2').value.trim();
    const kills1 = parseInt(document.getElementById('kills1').value) || 0;
    const kills2 = parseInt(document.getElementById('kills2').value) || 0;
    const status = document.getElementById('war-status').value;

    if (!alliance1 || !alliance2) {
        alert('❌ Debes ingresar nombres de ambas alianzas');
        return;
    }

    const newWar = {
        id: warsData.length > 0 ? Math.max(...warsData.map(w => w.id)) + 1 : 1,
        alliance1,
        alliance2,
        kills1,
        kills2,
        deaths1: status === 'finished' ? Math.floor(kills1 * 0.7) : 0,
        deaths2: status === 'finished' ? Math.floor(kills2 * 0.7) : 0,
        status,
        date: new Date().toISOString().split('T')[0],
        duration: status === 'finished' ? '3 días' : (status === 'ongoing' ? 'En curso' : 'Próxima')
    };

    warsData.push(newWar);
    displayWars();
    hideAddWarForm();

    // Save to localStorage
    saveWarsData();
}

function editWar(id) {
    const war = warsData.find(w => w.id === id);
    if (!war) return;

    // Pre-fill form
    document.getElementById('alliance1').value = war.alliance1;
    document.getElementById('alliance2').value = war.alliance2;
    document.getElementById('kills1').value = war.kills1;
    document.getElementById('kills2').value = war.kills2;
    document.getElementById('war-status').value = war.status;

    // Delete old entry
    deleteWar(id, true);

    showAddWarForm();
}

function deleteWar(id, silent = false) {
    if (!silent && !confirm('¿Seguro que quieres eliminar esta guerra?')) {
        return;
    }

    warsData = warsData.filter(w => w.id !== id);
    displayWars();
    saveWarsData();
}

function saveWarsData() {
    try {
        localStorage.setItem('warsData', JSON.stringify(warsData));
    } catch (e) {
        console.error('Error saving wars data:', e);
    }
}

function loadWarsData() {
    try {
        const saved = localStorage.getItem('warsData');
        if (saved) {
            warsData = JSON.parse(saved);
        }
    } catch (e) {
        console.error('Error loading wars data:', e);
    }
}

function formatNumber(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
    return num.toLocaleString();
}

// ============================================
// INITIALIZATION
// ============================================

if (document.getElementById('wars-container')) {
    loadWarsData();
    displayWars();
}
