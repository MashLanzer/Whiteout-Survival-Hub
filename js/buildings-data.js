// ============================================
// BUILDINGS DATABASE
// ============================================

const buildingsData = [
    // CORE
    {
        id: 'furnace',
        name: 'Furnace',
        icon: '🔥',
        category: 'core',
        description: 'El corazón de tu ciudad. Determina el nivel máximo de todos los demás edificios.',
        maxLevel: 40,
        benefits: 'Unlock de edificios y niveles superiores',
        importance: 'CRÍTICO',
        upgradeFormula: { wood: 'level^2.4 * 5000', meat: 'level^2.4 * 5000', iron: 'level^2.4 * 2000', time: 'level^2 * 60' }
    },
    {
        id: 'barracks',
        name: 'Barracks',
        icon: '🛡️',
        category: 'military',
        description: 'Entrena tropas de Infantería. Aumenta la capacidad de entrenamiento simultáneo.',
        maxLevel: 40,
        benefits: 'Unlock de tropas superiores (T1-T10)',
        importance: 'ALTA',
        upgradeFormula: { wood: 'level^2.2 * 3000', meat: 'level^2.2 * 3000', iron: 'level^2.2 * 1500', time: 'level^2 * 45' }
    },
    {
        id: 'range',
        name: 'Range',
        icon: '🏹',
        category: 'military',
        description: 'Entrena tropas de Tiradores. Permite entrenar múltiples unidades a la vez.',
        maxLevel: 40,
        benefits: 'Unlock de Marksman superiores',
        importance: 'ALTA',
        upgradeFormula: { wood: 'level^2.2 * 3000', meat: 'level^2.2 * 3000', iron: 'level^2.2 * 1500', time: 'level^2 * 45' }
    },
    {
        id: 'stable',
        name: 'Stable',
        icon: '🐴',
        category: 'military',
        description: 'Entrena tropas de Lanceros. Esencial para movilidad en el mapa.',
        maxLevel: 40,
        benefits: 'Unlock de Lancer superiores',
        importance: 'ALTA',
        upgradeFormula: { wood: 'level^2.2 * 3000', meat: 'level^2.2 * 3000', iron: 'level^2.2 * 1500', time: 'level^2 * 45' }
    },

    // DEFENSE
    {
        id: 'hospital',
        name: 'Hospital',
        icon: '🏥',
        category: 'defense',
        description: 'Cura tropas heridas en combate. Mayor capacidad = menos tropas muertas.',
        maxLevel: 40,
        benefits: 'Capacidad de curación aumentada',
        importance: 'CRÍTICO',
        upgradeFormula: { wood: 'level^2.3 * 2500', meat: 'level^2.3 * 2500', iron: 'level^2.3 * 1200', time: 'level^2 * 40' }
    },
    {
        id: 'walls',
        name: 'Walls',
        icon: '🧱',
        category: 'defense',
        description: 'Protege tu ciudad de ataques enemigos. Aumenta defensa base.',
        maxLevel: 40,
        benefits: 'Defense +2% por nivel',
        importance: 'MEDIA',
        upgradeFormula: { wood: 'level^2.2 * 2000', meat: 'level^2.2 * 2000', iron: 'level^2.2 * 1000', time: 'level^2 * 35' }
    },
    {
        id: 'watchtower',
        name: 'Watchtower',
        icon: '👁️',
        category: 'defense',
        description: 'Detecta marchas enemigas con anticipación. Permite ver composición de tropas.',
        maxLevel: 40,
        benefits: 'Detection range aumentado',
        importance: 'BAJA',
        upgradeFormula: { wood: 'level^2 * 1500', meat: 'level^2 * 1500', iron: 'level^2 * 800', time: 'level^2 * 25' }
    },
    {
        id: 'trap-factory',
        name: 'Trap Factory',
        icon: '🪤',
        category: 'defense',
        description: 'Produce trampas defensivas. Útil contra rallies y zeroing attempts.',
        maxLevel: 40,
        benefits: 'Capacidad y producción de trampas',
        importance: 'BAJA',
        upgradeFormula: { wood: 'level^2 * 1200', meat: 'level^2 * 800', iron: 'level^2 * 1500', time: 'level^2 * 30' }
    },

    // ECONOMIC
    {
        id: 'warehouse',
        name: 'Warehouse',
        icon: '🏪',
        category: 'economic',
        description: 'Protege recursos de saqueo cuando eres atacado.',
        maxLevel: 40,
        benefits: 'Protección de recursos aumentada',
        importance: 'ALTA',
        upgradeFormula: { wood: 'level^2.1 * 2000', meat: 'level^2.1 * 2000', iron: 'level^2.1 * 1000', time: 'level^2 * 30' }
    },
    {
        id: 'gathering-hub',
        name: 'Gathering Hub',
        icon: '📦',
        category: 'economic',
        description: 'Aumenta capacidad de carga y velocidad de gathering.',
        maxLevel: 40,
        benefits: 'Gathering speed +1% por nivel',
        importance: 'MEDIA',
        upgradeFormula: { wood: 'level^2 * 1800', meat: 'level^2 * 1800', iron: 'level^2 * 900', time: 'level^2 * 28' }
    },
    {
        id: 'trading-post',
        name: 'Trading Post',
        icon: '🏦',
        category: 'economic',
        description: 'Permite comerciar recursos con otros jugadores. Unlock de caravanas.',
        maxLevel: 30,
        benefits: 'Trading capacity aumentada',
        importance: 'BAJA',
        upgradeFormula: { wood: 'level^2 * 1500', meat: 'level^2 * 1500', iron: 'level^2 * 800', time: 'level^2 * 25' }
    },
    {
        id: 'lumber-mill',
        name: 'Lumber Mill',
        icon: '🪵',
        category: 'economic',
        description: 'Produce madera automáticamente cada hora.',
        maxLevel: 40,
        benefits: 'Producción de madera',
        importance: 'MEDIA',
        upgradeFormula: { wood: 'level^2 * 1000', meat: 'level^2 * 1000', iron: 'level^2 * 500', time: 'level^2 * 20' }
    },
    {
        id: 'hunting-cabin',
        name: 'Hunting Cabin',
        icon: '🥩',
        category: 'economic',
        description: 'Produce carne automáticamente cada hora.',
        maxLevel: 40,
        benefits: 'Producción de carne',
        importance: 'MEDIA',
        upgradeFormula: { wood: 'level^2 * 1000', meat: 'level^2 * 1000', iron: 'level^2 * 500', time: 'level^2 * 20' }
    },
    {
        id: 'iron-mine',
        name: 'Iron Mine',
        icon: '⛓️',
        category: 'economic',
        description: 'Produce hierro automáticamente cada hora.',
        maxLevel: 40,
        benefits: 'Producción de hierro',
        importance: 'MEDIA',
        upgradeFormula: { wood: 'level^2 * 1000', meat: 'level^2 * 1000', iron: 'level^2 * 500', time: 'level^2 * 20' }
    },
    {
        id: 'coal-quarry',
        name: 'Coal Quarry',
        icon: '⚫',
        category: 'economic',
        description: 'Produce carbón automáticamente cada hora.',
        maxLevel: 40,
        benefits: 'Producción de carbón',
        importance: 'MEDIA',
        upgradeFormula: { wood: 'level^2 * 1000', meat: 'level^2 * 1000', iron: 'level^2 * 500', time: 'level^2 * 20' }
    },

    // SPECIAL
    {
        id: 'academy',
        name: 'Academy',
        icon: '📚',
        category: 'core',
        description: 'Investiga tecnologías para mejorar tu ejército y economía.',
        maxLevel: 40,
        benefits: 'Unlock de research superiores',
        importance: 'CRÍTICO',
        upgradeFormula: { wood: 'level^2.3 * 3500', meat: 'level^2.3 * 3500', iron: 'level^2.3 * 1800', time: 'level^2 * 50' }
    },
    {
        id: 'forge',
        name: 'Forge',
        icon: '⚒️',
        category: 'core',
        description: 'Craftea Chief Gear para tu comandante. Esencial para PvP.',
        maxLevel: 40,
        benefits: 'Unlock de gear superiores',
        importance: 'ALTA',
        upgradeFormula: { wood: 'level^2.2 * 3000', meat: 'level^2.2 * 3000', iron: 'level^2.2 * 1500', time: 'level^2 * 45' }
    },
    {
        id: 'hero-hall',
        name: 'Hero Hall',
        icon: '🦸',
        category: 'core',
        description: 'Desbloquea y mejora héroes. Aumenta slots de héroes activos.',
        maxLevel: 35,
        benefits: 'Hero slots y power',
        importance: 'ALTA',
        upgradeFormula: { wood: 'level^2.2 * 2800', meat: 'level^2.2 * 2800', iron: 'level^2.2 * 1400', time: 'level^2 * 42' }
    },
    {
        id: 'alliance-center',
        name: 'Alliance Center',
        icon: '🏛️',
        category: 'core',
        description: 'Permite unirte a una alianza y participar en eventos de alianza.',
        maxLevel: 30,
        benefits: 'Alliance help y bonuses',
        importance: 'CRÍTICO',
        upgradeFormula: { wood: 'level^2 * 2000', meat: 'level^2 * 2000', iron: 'level^2 * 1000', time: 'level^2 * 35' }
    },
    {
        id: 'battle-hall',
        name: 'Battle Hall',
        icon: '⚔️',
        category: 'military',
        description: 'Aumenta march sizes y permite rallies más grandes.',
        maxLevel: 40,
        benefits: 'March capacity aumentada',
        importance: 'ALTA',
        upgradeFormula: { wood: 'level^2.2 * 3200', meat: 'level^2.2 * 3200', iron: 'level^2.2 * 1600', time: 'level^2 * 48' }
    },
];

// Helper function to calculate resources based on formula
function calculateResourceCost(formula, level) {
    try {
        return Math.floor(eval(formula.replace('level', level)));
    } catch (e) {
        return 0;
    }
}

// ============================================
// DISPLAY FUNCTIONS
// ============================================

let currentBuildingFilter = 'all';

function displayBuildings(filter = 'all') {
    const container = document.getElementById('buildings-container');
    if (!container) return;

    const filtered = filter === 'all'
        ? buildingsData
        : buildingsData.filter(b => b.category === filter);

    container.innerHTML = filtered.map(building => `
        <div class="building-card" onclick="showBuildingDetails('${building.id}')">
            <div class="building-header">
                <div class="building-icon">${building.icon}</div>
                <div class="building-name">${building.name}</div>
                <span class="building-category">${getCategoryName(building.category)}</span>
            </div>
            <div class="building-body">
                <p class="building-description">${building.description}</p>
                <div class="building-stats">
                    <div class="stat-row">
                        <span style="color: var(--text-gray);">Nivel Máximo:</span>
                        <strong style="color: var(--primary);">Lv ${building.maxLevel}</strong>
                    </div>
                    <div class="stat-row">
                        <span style="color: var(--text-gray);">Beneficios:</span>
                        <strong style="color: #00ff88; font-size: 0.85rem;">${building.benefits}</strong>
                    </div>
                    <div class="stat-row">
                        <span style="color: var(--text-gray);">Prioridad:</span>
                        <strong class="importance-badge ${building.importance.toLowerCase()}">${building.importance}</strong>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function getCategoryName(category) {
    const names = {
        'core': '⭐ Core',
        'military': '⚔️ Militar',
        'economic': '💰 Económico',
        'defense': '🛡️ Defensa'
    };
    return names[category] || category;
}

function filterBuildings(category) {
    currentBuildingFilter = category;

    // Update active tab
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    event.target.classList.add('active');

    displayBuildings(category);
}

function showBuildingDetails(buildingId) {
    const building = buildingsData.find(b => b.id === buildingId);
    if (!building) return;

    // Scroll to level details
    const detailsSection = document.getElementById('level-details');
    detailsSection.style.display = 'block';
    detailsSection.scrollIntoView({ behavior: 'smooth' });

    // Generate level table
    const tableContainer = document.getElementById('level-table-container');
    let tableHTML = `
        <h3 style="color: var(--primary); margin-bottom: 1rem;">${building.icon} ${building.name} - Niveles 1-${building.maxLevel}</h3>
        <table class="level-table">
            <thead>
                <tr>
                    <th>Nivel</th>
                    <th>🪵 Madera</th>
                    <th>🥩 Carne</th>
                    <th>⛓️ Hierro</th>
                    <th>⏱️ Tiempo</th>
                </tr>
            </thead>
            <tbody>
    `;

    for (let level = 1; level <= Math.min(building.maxLevel, 20); level++) {
        const wood = calculateResourceCost(building.upgradeFormula.wood, level);
        const meat = calculateResourceCost(building.upgradeFormula.meat, level);
        const iron = calculateResourceCost(building.upgradeFormula.iron, level);
        const time = calculateResourceCost(building.upgradeFormula.time, level);

        tableHTML += `
            <tr>
                <td><strong>${level}</strong></td>
                <td>${formatNumber(wood)}</td>
                <td>${formatNumber(meat)}</td>
                <td>${formatNumber(iron)}</td>
                <td>${formatTime(time)}</td>
            </tr>
        `;
    }

    tableHTML += `
            </tbody>
        </table>
        <p style="text-align: center; color: var(--text-gray); margin-top: 1rem;">
            Mostrando niveles 1-20. Usa la calculadora para calcular costos de niveles superiores.
        </p>
    `;

    tableContainer.innerHTML = tableHTML;
}

// ============================================
// UPGRADE PATH CALCULATOR
// ============================================

function populateBuildingSelector() {
    const select = document.getElementById('building-select');
    if (!select) return;

    buildingsData.forEach(building => {
        const option = document.createElement('option');
        option.value = building.id;
        option.textContent = `${building.icon} ${building.name}`;
        select.appendChild(option);
    });
}

function calculateUpgradePath() {
    const buildingId = document.getElementById('building-select').value;
    const currentLevel = parseInt(document.getElementById('current-building-level').value);
    const targetLevel = parseInt(document.getElementById('target-building-level').value);
    const resultDiv = document.getElementById('upgrade-result');

    if (!buildingId) {
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = '<p style="color: orange;">⚠️ Selecciona un edificio</p>';
        return;
    }

    if (!currentLevel || !targetLevel || currentLevel >= targetLevel) {
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = '<p style="color: orange;">⚠️ Ingresa niveles válidos (actual < objetivo)</p>';
        return;
    }

    const building = buildingsData.find(b => b.id === buildingId);
    if (!building) return;

    if (targetLevel > building.maxLevel) {
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = `<p style="color: red;">❌ ${building.name} solo llega hasta nivel ${building.maxLevel}</p>`;
        return;
    }

    // Calculate total resources needed
    let totalWood = 0, totalMeat = 0, totalIron = 0, totalTime = 0;

    for (let level = currentLevel; level < targetLevel; level++) {
        totalWood += calculateResourceCost(building.upgradeFormula.wood, level + 1);
        totalMeat += calculateResourceCost(building.upgradeFormula.meat, level + 1);
        totalIron += calculateResourceCost(building.upgradeFormula.iron, level + 1);
        totalTime += calculateResourceCost(building.upgradeFormula.time, level + 1);
    }

    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `
        <div style="background: rgba(0, 210, 255, 0.1); padding: 2rem; border-radius: 15px; border: 2px solid var(--primary);">
            <h3 style="color: var(--primary); text-align: center; margin-bottom: 2rem;">
                ${building.icon} ${building.name}: Nivel ${currentLevel} → ${targetLevel}
            </h3>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
                <div style="text-align: center; background: rgba(0,0,0,0.3); padding: 1.5rem; border-radius: 10px;">
                    <div style="font-size: 0.9rem; color: var(--text-gray);">🪵 Madera Total</div>
                    <div style="font-size: 1.8rem; font-weight: 900; color: #8B4513; margin-top: 0.5rem;">
                        ${formatNumber(totalWood)}
                    </div>
                </div>
                <div style="text-align: center; background: rgba(0,0,0,0.3); padding: 1.5rem; border-radius: 10px;">
                    <div style="font-size: 0.9rem; color: var(--text-gray);">🥩 Carne Total</div>
                    <div style="font-size: 1.8rem; font-weight: 900; color: #ff4444; margin-top: 0.5rem;">
                        ${formatNumber(totalMeat)}
                    </div>
                </div>
                <div style="text-align: center; background: rgba(0,0,0,0.3); padding: 1.5rem; border-radius: 10px;">
                    <div style="font-size: 0.9rem; color: var(--text-gray);">⛓️ Hierro Total</div>
                    <div style="font-size: 1.8rem; font-weight: 900; color: #888; margin-top: 0.5rem;">
                        ${formatNumber(totalIron)}
                    </div>
                </div>
            </div>
            
            <div style="text-align: center; background: rgba(255, 140, 0, 0.2); padding: 2rem; border-radius: 10px; border: 1px solid #ff8c00; margin-top: 2rem;">
                <div style="font-size: 0.9rem; color: var(--text-gray);">⏱️ Tiempo Total de Construcción</div>
                <div style="font-size: 2rem; font-weight: 900; color: #ff8c00; margin-top: 0.5rem;">
                    ${formatTimeLong(totalTime)}
                </div>
            </div>
            
            <div style="margin-top: 2rem; padding: 1.5rem; background: rgba(0, 0, 0, 0.3); border-radius: 10px;">
                <h4 style="color: var(--primary); margin-bottom: 1rem;">💡 Recomendaciones</h4>
                <ul style="color: var(--text-gray); line-height: 1.8;">
                    <li>Usa speedups strategically en los últimos niveles (más costosos)</li>
                    <li>Participa en eventos de construcción para bonuses</li>
                    <li>Alliance help puede reducir 10-15% del tiempo total</li>
                    ${building.importance === 'CRÍTICO' ? '<li style="color: #00ff88;">⚠️ PRIORIDAD ALTA - Este edificio es crítico para progreso</li>' : ''}
                </ul>
            </div>
        </div>
    `;
}

function formatNumber(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toLocaleString();
}

function formatTime(seconds) {
    if (seconds < 60) return `${seconds}s`;
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m`;
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${mins}m`;
}

function formatTimeLong(seconds) {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const mins = Math.floor((seconds % 3600) / 60);

    let result = [];
    if (days > 0) result.push(`${days}d`);
    if (hours > 0) result.push(`${hours}h`);
    if (mins > 0) result.push(`${mins}m`);

    return result.join(' ') || '< 1m';
}

// CSS for importance badges
const style = document.createElement('style');
style.textContent = `
    .importance-badge {
        padding: 0.3rem 0.8rem;
        border-radius: 8px;
        font-size: 0.8rem;
        font-weight: 900;
    }
    .importance-badge.crítico {
        background: linear-gradient(135deg, #ff0000, #ff8c00);
        color: white;
    }
    .importance-badge.alta {
        background: linear-gradient(135deg, #00d2ff, #0099ff);
        color: white;
    }
    .importance-badge.media {
        background: rgba(147, 112, 219, 0.8);
        color: white;
    }
    .importance-badge.baja {
        background: rgba(128, 128, 128, 0.5);
        color: white;
    }
`;
document.head.appendChild(style);

// Initialize
if (document.getElementById('buildings-container')) {
    displayBuildings('all');
    populateBuildingSelector();
}
