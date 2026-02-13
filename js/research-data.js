// ============================================
// RESEARCH TREE DATABASE
// ============================================

const researchData = [
    // MILITARY RESEARCH
    {
        id: 'infantry-attack',
        name: 'Infantry Attack',
        icon: '🛡️',
        category: 'military',
        maxLevel: 10,
        description: 'Aumenta el ataque de todas las tropas de Infantería.',
        benefits: 'Attack +2% por nivel (20% máx)',
        priority: 'critical',
        baseFormula: { food: 'level^2.5 * 8000', wood: 'level^2.5 * 8000', iron: 'level^2.5 * 4000', time: 'level^2.2 * 120' },
        prerequisites: 'Academy Lv 5',
        visualTier: 1,
        parentIds: []
    },
    {
        id: 'lancer-attack',
        name: 'Lancer Attack',
        icon: '🗡️',
        category: 'military',
        maxLevel: 10,
        description: 'Aumenta el ataque de todas las tropas de Lanceros.',
        benefits: 'Attack +2% por nivel (20% máx)',
        priority: 'critical',
        baseFormula: { food: 'level^2.5 * 8000', wood: 'level^2.5 * 8000', iron: 'level^2.5 * 4000', time: 'level^2.2 * 120' },
        prerequisites: 'Academy Lv 5',
        visualTier: 1,
        parentIds: []
    },
    {
        id: 'marksman-attack',
        name: 'Marksman Attack',
        icon: '🏹',
        category: 'military',
        maxLevel: 10,
        description: 'Aumenta el ataque de todas las tropas de Tiradores.',
        benefits: 'Attack +2% por nivel (20% máx)',
        priority: 'critical',
        baseFormula: { food: 'level^2.5 * 8000', wood: 'level^2.5 * 8000', iron: 'level^2.5 * 4000', time: 'level^2.2 * 120' },
        prerequisites: 'Academy Lv 5',
        visualTier: 1,
        parentIds: []
    },
    {
        id: 'infantry-defense',
        name: 'Infantry Defense',
        icon: '🛡️',
        category: 'military',
        maxLevel: 10,
        description: 'Aumenta la defensa de todas las tropas de Infantería.',
        benefits: 'Defense +2% por nivel (20% máx)',
        priority: 'critical',
        baseFormula: { food: 'level^2.5 * 7000', wood: 'level^2.5 * 7000', iron: 'level^2.5 * 3500', time: 'level^2.2 * 110' },
        prerequisites: 'Academy Lv 6',
        visualTier: 2,
        parentIds: ['infantry-attack']
    },
    {
        id: 'lancer-defense',
        name: 'Lancer Defense',
        icon: '🗡️',
        category: 'military',
        maxLevel: 10,
        description: 'Aumenta la defensa de todas las tropas de Lanceros.',
        benefits: 'Defense +2% por nivel (20% máx)',
        priority: 'critical',
        baseFormula: { food: 'level^2.5 * 7000', wood: 'level^2.5 * 7000', iron: 'level^2.5 * 3500', time: 'level^2.2 * 110' },
        prerequisites: 'Academy Lv 6',
        visualTier: 2,
        parentIds: ['lancer-attack']
    },
    {
        id: 'marksman-defense',
        name: 'Marksman Defense',
        icon: '🏹',
        category: 'military',
        maxLevel: 10,
        description: 'Aumenta la defensa de todas las tropas de Tiradores.',
        benefits: 'Defense +2% por nivel (20% máx)',
        priority: 'critical',
        baseFormula: { food: 'level^2.5 * 7000', wood: 'level^2.5 * 7000', iron: 'level^2.5 * 3500', time: 'level^2.2 * 110' },
        prerequisites: 'Academy Lv 6',
        visualTier: 2,
        parentIds: ['marksman-attack']
    },
    {
        id: 'troop-hp',
        name: 'Troop HP',
        icon: '❤️',
        category: 'military',
        maxLevel: 10,
        description: 'Aumenta HP de todas las tropas.',
        benefits: 'HP +2% por nivel (20% máx)',
        priority: 'critical',
        baseFormula: { food: 'level^2.5 * 9000', wood: 'level^2.5 * 9000', iron: 'level^2.5 * 4500', time: 'level^2.2 * 130' },
        prerequisites: 'Academy Lv 8',
        visualTier: 3,
        parentIds: ['infantry-defense', 'lancer-defense', 'marksman-defense']
    },
    {
        id: 'march-speed',
        name: 'March Speed',
        icon: '⚡',
        category: 'military',
        maxLevel: 10,
        description: 'Aumenta la velocidad de marcha en el mapa.',
        benefits: 'March Speed +3% por nivel (30% máx)',
        priority: 'critical',
        baseFormula: { food: 'level^2.3 * 6000', wood: 'level^2.3 * 6000', iron: 'level^2.3 * 3000', time: 'level^2 * 90' },
        prerequisites: 'Academy Lv 10',
        visualTier: 3,
        parentIds: ['infantry-defense', 'lancer-defense', 'marksman-defense']
    },
    {
        id: 'advanced-infantry',
        name: 'Advanced Infantry',
        icon: '🛡️',
        category: 'military',
        maxLevel: 10,
        description: 'Unlock de tropas de Infantería superiores (T6-T10).',
        benefits: 'Unlock T6 (Lv 1), T7 (Lv 3), T8 (Lv 5), T9 (Lv 7), T10 (Lv 10)',
        priority: 'high',
        baseFormula: { food: 'level^2.8 * 12000', wood: 'level^2.8 * 12000', iron: 'level^2.8 * 6000', time: 'level^2.5 * 180' },
        prerequisites: 'Academy Lv 15, Barracks Lv 15',
        visualTier: 5,
        parentIds: ['march-capacity']
    },
    {
        id: 'advanced-lancer',
        name: 'Advanced Lancer',
        icon: '🗡️',
        category: 'military',
        maxLevel: 10,
        description: 'Unlock de tropas de Lanceros superiores (T6-T10).',
        benefits: 'Unlock T6 (Lv 1), T7 (Lv 3), T8 (Lv 5), T9 (Lv 7), T10 (Lv 10)',
        priority: 'high',
        baseFormula: { food: 'level^2.8 * 12000', wood: 'level^2.8 * 12000', iron: 'level^2.8 * 6000', time: 'level^2.5 * 180' },
        prerequisites: 'Academy Lv 15, Stable Lv 15',
        visualTier: 5,
        parentIds: ['march-capacity']
    },
    {
        id: 'advanced-marksman',
        name: 'Advanced Marksman',
        icon: '🏹',
        category: 'military',
        maxLevel: 10,
        description: 'Unlock de tropas de Tiradores superiores (T6-T10).',
        benefits: 'Unlock T6 (Lv 1), T7 (Lv 3), T8 (Lv 5), T9 (Lv 7), T10 (Lv 10)',
        priority: 'high',
        baseFormula: { food: 'level^2.8 * 12000', wood: 'level^2.8 * 12000', iron: 'level^2.8 * 6000', time: 'level^2.5 * 180' },
        prerequisites: 'Academy Lv 15, Range Lv 15',
        visualTier: 5,
        parentIds: ['march-capacity']
    },
    {
        id: 'march-capacity',
        name: 'March Capacity',
        icon: '👥',
        category: 'military',
        maxLevel: 10,
        description: 'Aumenta el tamaño máximo de tus marchas.',
        benefits: 'March Size +2% por nivel (20% máx)',
        priority: 'high',
        baseFormula: { food: 'level^2.4 * 7000', wood: 'level^2.4 * 7000', iron: 'level^2.4 * 3500', time: 'level^2.1 * 100' },
        prerequisites: 'Academy Lv 12',
        visualTier: 4,
        parentIds: ['troop-hp', 'march-speed']
    },

    // ECONOMIC RESEARCH
    {
        id: 'troop-load',
        name: 'Troop Load',
        icon: '📦',
        category: 'economic',
        maxLevel: 10,
        description: 'Aumenta la capacidad de carga de gathering de tus tropas.',
        benefits: 'Load +10% por nivel (100% máx)',
        priority: 'critical',
        baseFormula: { food: 'level^2.2 * 5000', wood: 'level^2.2 * 5000', iron: 'level^2.2 * 2500', time: 'level^2 * 80' },
        prerequisites: 'Academy Lv 5',
        visualTier: 1,
        parentIds: []
    },
    {
        id: 'gathering-speed',
        name: 'Gathering Speed',
        icon: '⏱️',
        category: 'economic',
        maxLevel: 10,
        description: 'Aumenta la velocidad de recolección.',
        benefits: 'Speed +5% por nivel (50% máx)',
        priority: 'high',
        baseFormula: { food: 'level^2.2 * 4500', wood: 'level^2.2 * 4500', iron: 'level^2.2 * 2250', time: 'level^2 * 75' },
        prerequisites: 'Academy Lv 7',
        visualTier: 2,
        parentIds: ['troop-load']
    },
    {
        id: 'food-production',
        name: 'Food Production',
        icon: '🥩',
        category: 'economic',
        maxLevel: 10,
        description: 'Aumenta la producción de comida en tu base.',
        benefits: 'Production +8% por nivel (80% máx)',
        priority: 'medium',
        baseFormula: { food: 'level^2 * 3000', wood: 'level^2 * 3000', iron: 'level^2 * 1500', time: 'level^2 * 60' },
        prerequisites: 'Academy Lv 5',
        visualTier: 1,
        parentIds: []
    },
    {
        id: 'wood-production',
        name: 'Wood Production',
        icon: '🪵',
        category: 'economic',
        maxLevel: 10,
        description: 'Aumenta la producción de madera en tu base.',
        benefits: 'Production +8% por nivel (80% máx)',
        priority: 'medium',
        baseFormula: { food: 'level^2 * 3000', wood: 'level^2 * 3000', iron: 'level^2 * 1500', time: 'level^2 * 60' },
        prerequisites: 'Academy Lv 5',
        visualTier: 1,
        parentIds: []
    },
    {
        id: 'iron-production',
        name: 'Iron Production',
        icon: '⛓️',
        category: 'economic',
        maxLevel: 10,
        description: 'Aumenta la producción de hierro en tu base.',
        benefits: 'Production +8% por nivel (80% máx)',
        priority: 'medium',
        baseFormula: { food: 'level^2 * 3000', wood: 'level^2 * 3000', iron: 'level^2 * 1500', time: 'level^2 * 60' },
        prerequisites: 'Academy Lv 5',
        visualTier: 1,
        parentIds: []
    },
    {
        id: 'construction-speed',
        name: 'Construction Speed',
        icon: '🏗️',
        category: 'economic',
        maxLevel: 10,
        description: 'Reduce el tiempo de construcción de edificios.',
        benefits: 'Speed +3% por nivel (30% máx)',
        priority: 'high',
        baseFormula: { food: 'level^2.3 * 5500', wood: 'level^2.3 * 5500', iron: 'level^2.3 * 2750', time: 'level^2.1 * 85' },
        prerequisites: 'Academy Lv 10',
        visualTier: 3,
        parentIds: ['gathering-speed', 'food-production', 'wood-production', 'iron-production']
    },
    {
        id: 'research-speed',
        name: 'Research Speed',
        icon: '📚',
        category: 'economic',
        maxLevel: 10,
        description: 'Reduce el tiempo de investigación.',
        benefits: 'Speed +3% por nivel (30% máx)',
        priority: 'high',
        baseFormula: { food: 'level^2.3 * 6000', wood: 'level^2.3 * 6000', iron: 'level^2.3 * 3000', time: 'level^2.1 * 90' },
        prerequisites: 'Academy Lv 12',
        visualTier: 4,
        parentIds: ['construction-speed']
    },
    {
        id: 'training-speed',
        name: 'Training Speed',
        icon: '⚔️',
        category: 'economic',
        maxLevel: 10,
        description: 'Reduce el tiempo de entrenamiento de tropas.',
        benefits: 'Speed +4% por nivel (40% máx)',
        priority: 'high',
        baseFormula: { food: 'level^2.3 * 5200', wood: 'level^2.3 * 5200', iron: 'level^2.3 * 2600', time: 'level^2.1 * 82' },
        prerequisites: 'Academy Lv 11',
        visualTier: 4,
        parentIds: ['construction-speed']
    },

    // DEFENSE RESEARCH
    {
        id: 'hospital-capacity',
        name: 'Hospital Capacity',
        icon: '🏥',
        category: 'defense',
        maxLevel: 10,
        description: 'Aumenta la capacidad del Hospital para curar tropas.',
        benefits: 'Capacity +10% por nivel (100% máx)',
        priority: 'critical',
        baseFormula: { food: 'level^2.4 * 6500', wood: 'level^2.4 * 6500', iron: 'level^2.4 * 3250', time: 'level^2.1 * 95' },
        prerequisites: 'Academy Lv 8',
        visualTier: 1,
        parentIds: []
    },
    {
        id: 'healing-speed',
        name: 'Healing Speed',
        icon: '💚',
        category: 'defense',
        maxLevel: 10,
        description: 'Reduce el tiempo de curación en el Hospital.',
        benefits: 'Speed +5% por nivel (50% máx)',
        priority: 'high',
        baseFormula: { food: 'level^2.2 * 5000', wood: 'level^2.2 * 5000', iron: 'level^2.2 * 2500', time: 'level^2 * 78' },
        prerequisites: 'Academy Lv 9',
        visualTier: 2,
        parentIds: ['hospital-capacity']
    },
    {
        id: 'wall-defense',
        name: 'Wall Defense',
        icon: '🧱',
        category: 'defense',
        maxLevel: 10,
        description: 'Aumenta la defensa de tus muros.',
        benefits: 'Wall DEF +3% por nivel (30% máx)',
        priority: 'medium',
        baseFormula: { food: 'level^2.2 * 4800', wood: 'level^2.2 * 4800', iron: 'level^2.2 * 2400', time: 'level^2 * 72' },
        prerequisites: 'Academy Lv 10',
        visualTier: 1,
        parentIds: []
    },
    {
        id: 'trap-attack',
        name: 'Trap Attack',
        icon: '🪤',
        category: 'defense',
        maxLevel: 10,
        description: 'Aumenta el ataque de las trampas defensivas.',
        benefits: 'Trap ATK +4% por nivel (40% máx)',
        priority: 'low',
        baseFormula: { food: 'level^2 * 3500', wood: 'level^2 * 3500', iron: 'level^2 * 1750', time: 'level^2 * 55' },
        prerequisites: 'Academy Lv 12',
        visualTier: 2,
        parentIds: ['wall-defense']
    },
    {
        id: 'trap-hp',
        name: 'Trap HP',
        icon: '🪤',
        category: 'defense',
        maxLevel: 10,
        description: 'Aumenta HP de las trampas defensivas.',
        benefits: 'Trap HP +4% por nivel (40% máx)',
        priority: 'low',
        baseFormula: { food: 'level^2 * 3500', wood: 'level^2 * 3500', iron: 'level^2 * 1750', time: 'level^2 * 55' },
        prerequisites: 'Academy Lv 12',
        visualTier: 2,
        parentIds: ['wall-defense']
    },
    {
        id: 'resource-protection',
        name: 'Resource Protection',
        icon: '🏪',
        category: 'defense',
        maxLevel: 10,
        description: 'Protege más recursos cuando eres atacado.',
        benefits: 'Protection +8% por nivel (80% máx)',
        priority: 'medium',
        baseFormula: { food: 'level^2.1 * 4000', wood: 'level^2.1 * 4000', iron: 'level^2.1 * 2000', time: 'level^2 * 65' },
        prerequisites: 'Academy Lv 11',
        visualTier: 3,
        parentIds: ['healing-speed', 'trap-attack', 'trap-hp']
    },
    {
        id: 'scout-defense',
        name: 'Scout Defense',
        icon: '👁️',
        category: 'defense',
        maxLevel: 10,
        description: 'Dificulta que enemigos espíen tu base exitosamente.',
        benefits: 'Anti-Scout +10% por nivel (100% máx)',
        priority: 'medium',
        baseFormula: { food: 'level^2.1 * 3800', wood: 'level^2.1 * 3800', iron: 'level^2.1 * 1900', time: 'level^2 * 62' },
        prerequisites: 'Academy Lv 13',
        visualTier: 3,
        parentIds: ['healing-speed', 'trap-attack', 'trap-hp']
    },
];

// Helper function
function calculateResourceCost(formula, level) {
    try {
        return Math.floor(eval(formula.replace(/level/g, level)));
    } catch (e) {
        return 0;
    }
}

// ============================================
// DISPLAY FUNCTIONS
// ============================================

let currentResearchFilter = 'all';

function displayResearch(filter = 'all') {
    const container = document.getElementById('research-container');
    if (!container) return;

    const filtered = filter === 'all'
        ? researchData
        : researchData.filter(r => r.category === filter);

    container.innerHTML = filtered.map(research => `
        <div class="research-card ${research.category}">
            <div class="research-header">
                <span class="research-icon">${research.icon}</span>
                <div>
                    <div class="research-name">${research.name}</div>
                    <div class="research-level">Max Lv ${research.maxLevel}</div>
                </div>
            </div>
            
            <p class="research-description">${research.description}</p>
            
            <div class="benefits-box">
                <strong style="color: var(--primary);">📊 Beneficios:</strong>
                <p style="margin-top: 0.5rem; color: white;">${research.benefits}</p>
            </div>
            
            <div class="cost-section">
                <h4 style="color: var(--fire); margin-bottom: 0.8rem;">💰 Costo por Nivel (Aprox Lv 5)</h4>
                <div class="cost-row">
                    <span>🥩 Comida:</span>
                    <strong>${formatNumber(calculateResourceCost(research.baseFormula.food, 5))}</strong>
                </div>
                <div class="cost-row">
                    <span>🪵 Madera:</span>
                    <strong>${formatNumber(calculateResourceCost(research.baseFormula.wood, 5))}</strong>
                </div>
                <div class="cost-row">
                    <span>⛓️ Hierro:</span>
                    <strong>${formatNumber(calculateResourceCost(research.baseFormula.iron, 5))}</strong>
                </div>
                <div class="cost-row">
                    <span>⏱️ Tiempo:</span>
                    <strong>${formatTime(calculateResourceCost(research.baseFormula.time, 5))}</strong>
                </div>
            </div>
            
            <div style="margin-top: 1rem; padding: 0.8rem; background: rgba(0, 0, 0, 0.3); border-radius: 8px; font-size: 0.85rem; color: var(--text-gray);">
                📋 Requisitos: ${research.prerequisites}
            </div>
            
            <div class="priority-badge priority-${research.priority}">
                Prioridad: ${research.priority.toUpperCase()}
            </div>
        </div>
    `).join('');
}

function filterResearch(category) {
    currentResearchFilter = category;

    document.querySelectorAll('.research-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    event.target.classList.add('active');

    displayResearch(category);
}

// ============================================
// RESEARCH PATH CALCULATOR
// ============================================

function populateResearchSelector() {
    const select = document.getElementById('research-select');
    if (!select) return;

    researchData.forEach(research => {
        const option = document.createElement('option');
        option.value = research.id;
        option.textContent = `${research.icon} ${research.name}`;
        select.appendChild(option);
    });
}

function calculateResearchPath() {
    const researchId = document.getElementById('research-select').value;
    const currentLevel = parseInt(document.getElementById('current-research-level').value) || 0;
    const targetLevel = parseInt(document.getElementById('target-research-level').value);
    const resultDiv = document.getElementById('research-result');

    if (!researchId) {
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = '<p style="color: orange;">⚠️ Selecciona un research</p>';
        return;
    }

    if (!targetLevel || currentLevel >= targetLevel) {
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = '<p style="color: orange;">⚠️ Ingresa niveles válidos (actual < objetivo)</p>';
        return;
    }

    const research = researchData.find(r => r.id === researchId);
    if (!research) return;

    if (targetLevel > research.maxLevel) {
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = `<p style="color: red;">❌ ${research.name} solo llega hasta nivel ${research.maxLevel}</p>`;
        return;
    }

    // Calculate total resources
    let totalFood = 0, totalWood = 0, totalIron = 0, totalTime = 0;

    for (let level = currentLevel; level < targetLevel; level++) {
        totalFood += calculateResourceCost(research.baseFormula.food, level + 1);
        totalWood += calculateResourceCost(research.baseFormula.wood, level + 1);
        totalIron += calculateResourceCost(research.baseFormula.iron, level + 1);
        totalTime += calculateResourceCost(research.baseFormula.time, level + 1);
    }

    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `
        <div style="background: rgba(0, 210, 255, 0.1); padding: 2rem; border-radius: 15px; border: 2px solid var(--primary);">
            <h3 style="color: var(--primary); text-align: center; margin-bottom: 2rem;">
                ${research.icon} ${research.name}: Nivel ${currentLevel} → ${targetLevel}
            </h3>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
                <div style="text-align: center; background: rgba(0,0,0,0.3); padding: 1.5rem; border-radius: 10px;">
                    <div style="font-size: 0.9rem; color: var(--text-gray);">🥩 Comida Total</div>
                    <div style="font-size: 1.8rem; font-weight: 900; color: #ff4444; margin-top: 0.5rem;">
                        ${formatNumber(totalFood)}
                    </div>
                </div>
                <div style="text-align: center; background: rgba(0,0,0,0.3); padding: 1.5rem; border-radius: 10px;">
                    <div style="font-size: 0.9rem; color: var(--text-gray);">🪵 Madera Total</div>
                    <div style="font-size: 1.8rem; font-weight: 900; color: #8B4513; margin-top: 0.5rem;">
                        ${formatNumber(totalWood)}
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
                <div style="font-size: 0.9rem; color: var(--text-gray);">⏱️ Tiempo Total de Research</div>
                <div style="font-size: 2rem; font-weight: 900; color: #ff8c00; margin-top: 0.5rem;">
                    ${formatTimeLong(totalTime)}
                </div>
            </div>
            
            <div style="margin-top: 2rem; padding: 1.5rem; background: rgba(0, 0, 0, 0.3); border-radius: 10px;">
                <h4 style="color: var(--primary); margin-bottom: 1rem;">💡 Recomendaciones</h4>
                <ul style="color: var(--text-gray); line-height: 1.8;">
                    <li>Usa Research Speed Boost items en niveles altos (9-10)</li>
                    <li>Alliance help puede reducir 10-15% del tiempo</li>
                    <li>Participa en Research events para bonuses</li>
                    ${research.priority === 'critical' ? '<li style="color: #ff0000;">⚠️ PRIORIDAD CRÍTICA - Completa esto ASAP</li>' : ''}
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
    return `${hours}h`;
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

// Initialize
if (document.getElementById('research-container')) {
    displayResearch('all');
    populateResearchSelector();
}
