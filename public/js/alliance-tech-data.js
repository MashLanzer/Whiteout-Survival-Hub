// ============================================
// ALLIANCE TECH DATABASE
// ============================================

const allianceTechData = [
    {
        id: 'alliance-help',
        name: 'Alliance Help',
        icon: '🤝',
        maxLevel: 10,
        description: 'Permite a los miembros ayudarse mutuamente reduciendo tiempos de construcción y research.',
        benefits: 'Help Time Reduction: 1% por nivel (10% máx)',
        priority: 'critical',
        donationFormula: 'level^2.8 * 80000',
        phase: 1
    },
    {
        id: 'march-speed',
        name: 'Alliance March Speed',
        icon: '⚡',
        maxLevel: 10,
        description: 'Aumenta la velocidad de marcha de todos los miembros.',
        benefits: 'March Speed +2% por nivel (20% máx)',
        priority: 'critical',
        donationFormula: 'level^2.8 * 90000',
        phase: 1
    },
    {
        id: 'troop-load',
        name: 'Alliance Troop Load',
        icon: '📦',
        maxLevel: 10,
        description: 'Aumenta la capacidad de carga de gathering de todos los miembros.',
        benefits: 'Load +8% por nivel (80% máx)',
        priority: 'critical',
        donationFormula: 'level^2.7 * 75000',
        phase: 1
    },
    {
        id: 'alliance-attack',
        name: 'Alliance Attack',
        icon: '⚔️',
        maxLevel: 10,
        description: 'Aumenta el ataque de todas las tropas de todos los miembros.',
        benefits: 'Attack +1.5% por nivel (15% máx)',
        priority: 'high',
        donationFormula: 'level^2.9 * 100000',
        phase: 2
    },
    {
        id: 'alliance-defense',
        name: 'Alliance Defense',
        icon: '🛡️',
        maxLevel: 10,
        description: 'Aumenta la defensa de todas las tropas de todos los miembros.',
        benefits: 'Defense +1.5% por nivel (15% máx)',
        priority: 'high',
        donationFormula: 'level^2.9 * 100000',
        phase: 2
    },
    {
        id: 'alliance-hp',
        name: 'Alliance HP',
        icon: '❤️',
        maxLevel: 10,
        description: 'Aumenta HP de todas las tropas de todos los miembros.',
        benefits: 'HP +1.5% por nivel (15% máx)',
        priority: 'high',
        donationFormula: 'level^2.9 * 100000',
        phase: 3
    },
    {
        id: 'resource-production',
        name: 'Resource Production',
        icon: '💰',
        maxLevel: 10,
        description: 'Aumenta la producción de todos los recursos de todos los miembros.',
        benefits: 'Production +5% por nivel (50% máx)',
        priority: 'medium',
        donationFormula: 'level^2.6 * 65000',
        phase: 2
    },
    {
        id: 'gathering-speed',
        name: 'Gathering Speed',
        icon: '⏱️',
        maxLevel: 10,
        description: 'Aumenta la velocidad de gathering de todos los miembros.',
        benefits: 'Speed +4% por nivel (40% máx)',
        priority: 'medium',
        donationFormula: 'level^2.6 * 70000',
        phase: 2
    },
    {
        id: 'rally-capacity',
        name: 'Rally Capacity',
        icon: '👥',
        maxLevel: 10,
        description: 'Aumenta el tamaño máximo de rallies iniciados por miembros.',
        benefits: 'Rally Size +3% por nivel (30% máx)',
        priority: 'high',
        donationFormula: 'level^2.8 * 95000',
        phase: 2
    },
    {
        id: 'construction-speed',
        name: 'Construction Speed',
        icon: '🏗️',
        maxLevel: 10,
        description: 'Reduce el tiempo de construcción de edificios para todos los miembros.',
        benefits: 'Speed +2% por nivel (20% máx)',
        priority: 'medium',
        donationFormula: 'level^2.7 * 72000',
        phase: 2
    },
    {
        id: 'research-speed',
        name: 'Research Speed',
        icon: '📚',
        maxLevel: 10,
        description: 'Reduce el tiempo de investigación para todos los miembros.',
        benefits: 'Speed +2% por nivel (20% máx)',
        priority: 'medium',
        donationFormula: 'level^2.7 * 72000',
        phase: 2
    },
    {
        id: 'training-speed',
        name: 'Training Speed',
        icon: '⚔️',
        maxLevel: 10,
        description: 'Reduce el tiempo de entrenamiento de tropas para todos los miembros.',
        benefits: 'Speed +2.5% por nivel (25% máx)',
        priority: 'medium',
        donationFormula: 'level^2.7 * 68000',
        phase: 2
    },
    {
        id: 'alliance-gift',
        name: 'Alliance Gift Level',
        icon: '🎁',
        maxLevel: 10,
        description: 'Mejora la calidad de recompensas en alliance gifts.',
        benefits: 'Gift Quality +10% por nivel',
        priority: 'medium',
        donationFormula: 'level^2.6 * 60000',
        phase: 3
    },
    {
        id: 'hospital-capacity',
        name: 'Hospital Capacity',
        icon: '🏥',
        maxLevel: 10,
        description: 'Aumenta la capacidad del hospital de todos los miembros.',
        benefits: 'Capacity +6% por nivel (60% máx)',
        priority: 'high',
        donationFormula: 'level^2.8 * 85000',
        phase: 2
    },
    {
        id: 'alliance-territory',
        name: 'Alliance Territory',
        icon: '🗺️',
        maxLevel: 10,
        description: 'Aumenta el área de territorio que la alianza puede controlar.',
        benefits: 'Territory Size +5% por nivel',
        priority: 'low',
        donationFormula: 'level^2.5 * 55000',
        phase: 3
    },
];

// Helper function
function calculateDonationCost(formula, level) {
    try {
        return Math.floor(eval(formula.replace(/level/g, level)));
    } catch (e) {
        return 0;
    }
}

// ============================================
// DISPLAY FUNCTIONS
// ============================================

function displayAllianceTech() {
    const container = document.getElementById('alliance-tech-container');
    if (!container) return;

    container.innerHTML = allianceTechData.map(tech => `
        <div class="tech-card">
            <div class="tech-header">
                <span class="tech-icon">${tech.icon}</span>
                <div>
                    <div style="font-size: 1.3rem; font-weight: 900;">${tech.name}</div>
                    <div style="background: var(--fire-gradient); padding: 0.3rem 1rem; border-radius: 10px; font-size: 0.85rem; font-weight: 900; display: inline-block; margin-top: 0.5rem;">
                        Max Lv ${tech.maxLevel}
                    </div>
                </div>
            </div>
            
            <p style="color: var(--text-gray); line-height: 1.6; margin: 1rem 0;">${tech.description}</p>
            
            <div style="background: rgba(0, 210, 255, 0.1); padding: 1rem; border-radius: 10px; border-left: 4px solid var(--primary); margin: 1rem 0;">
                <strong style="color: var(--primary);">📊 Beneficios:</strong>
                <p style="margin-top: 0.5rem; color: white;">${tech.benefits}</p>
            </div>
            
            <div style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid var(--border);">
                <h4 style="color: var(--fire); margin-bottom: 0.8rem;">💰 Costo de Donación (Aprox Lv 5)</h4>
                <div style="display: flex; justify-content: space-between; color: var(--text-gray); margin: 0.5rem 0;">
                    <span>Alliance Coins:</span>
                    <strong style="color: var(--primary);">${formatNumber(calculateDonationCost(tech.donationFormula, 5))}</strong>
                </div>
            </div>
            
            <div style="margin-top: 1rem; padding: 0.8rem; background: rgba(0, 0, 0, 0.3); border-radius: 8px;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span style="font-size: 0.85rem; color: var(--text-gray);">Prioridad:</span>
                    <span class="priority-badge priority-${tech.priority}" style="margin: 0;">${tech.priority.toUpperCase()}</span>
                </div>
            </div>
            
            <div style="margin-top: 0.8rem; text-align: center; padding: 0.6rem; background: ${getPhaseColor(tech.phase)}; border-radius: 8px; font-weight: 700; font-size: 0.9rem;">
                Fase ${tech.phase} ${getPhaseName(tech.phase)}
            </div>
        </div>
    `).join('');
}

function getPhaseColor(phase) {
    const colors = {
        1: 'linear-gradient(135deg, #ff0000, #ff8c00)',
        2: 'linear-gradient(135deg, #ff8c00, #ffaa00)',
        3: 'linear-gradient(135deg, #00d2ff, #0099ff)'
    };
    return colors[phase] || 'rgba(128, 128, 128, 0.5)';
}

function getPhaseName(phase) {
    const names = {
        1: '(Early)',
        2: '(Mid)',
        3: '(Late)'
    };
    return names[phase] || '';
}

// ============================================
// DONATION CALCULATOR
// ============================================

function populateTechSelector() {
    const select = document.getElementById('alliance-tech-select');
    if (!select) return;

    allianceTechData.forEach(tech => {
        const option = document.createElement('option');
        option.value = tech.id;
        option.textContent = `${tech.icon} ${tech.name}`;
        select.appendChild(option);
    });
}

function calculateDonation() {
    const techId = document.getElementById('alliance-tech-select').value;
    const currentLevel = parseInt(document.getElementById('current-tech-level').value) || 0;
    const targetLevel = parseInt(document.getElementById('target-tech-level').value);
    const members = parseInt(document.getElementById('alliance-members').value) || 50;
    const resultDiv = document.getElementById('donation-result');

    if (!techId) {
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = '<p style="color: orange;">⚠️ Selecciona un Alliance Tech</p>';
        return;
    }

    if (!targetLevel || currentLevel >= targetLevel) {
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = '<p style="color: orange;">⚠️ Ingresa niveles válidos (actual < objetivo)</p>';
        return;
    }

    const tech = allianceTechData.find(t => t.id === techId);
    if (!tech) return;

    if (targetLevel > tech.maxLevel) {
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = `<p style="color: red;">❌ ${tech.name} solo llega hasta nivel ${tech.maxLevel}</p>`;
        return;
    }

    // Calculate total donation needed
    let totalDonation = 0;

    for (let level = currentLevel; level < targetLevel; level++) {
        totalDonation += calculateDonationCost(tech.donationFormula, level + 1);
    }

    const perMember = Math.ceil(totalDonation / members);
    const days = Math.ceil(perMember / 10000); // Assuming 10k donation limit per day

    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `
        <div style="background: rgba(0, 210, 255, 0.1); padding: 2rem; border-radius: 15px; border: 2px solid var(--primary);">
            <h3 style="color: var(--primary); text-align: center; margin-bottom: 2rem;">
                ${tech.icon} ${tech.name}: Nivel ${currentLevel} → ${targetLevel}
            </h3>
            
            <div style="text-align: center; background: rgba(0,0,0,0.3); padding: 2rem; border-radius: 10px; margin: 2rem 0;">
                <div style="font-size: 0.9rem; color: var(--text-gray);">💰 Donación Total Necesaria</div>
                <div style="font-size: 3rem; font-weight: 900; color: var(--primary); margin-top: 1rem;">
                    ${formatNumber(totalDonation)}
                </div>
                <div style="color: var(--text-gray); margin-top: 0.5rem;">Alliance Coins</div>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin: 2rem 0;">
                <div style="text-align: center; background: rgba(255, 140, 0, 0.2); padding: 1.5rem; border-radius: 10px; border: 1px solid #ff8c00;">
                    <div style="font-size: 0.9rem; color: var(--text-gray);">👥 Por Miembro</div>
                    <div style="font-size: 1.8rem; font-weight: 900; color: #ff8c00; margin-top: 0.5rem;">
                        ${formatNumber(perMember)}
                    </div>
                    <div style="color: var(--text-gray); font-size: 0.85rem; margin-top: 0.3rem;">coins</div>
                </div>
                <div style="text-align: center; background: rgba(0, 255, 136, 0.2); padding: 1.5rem; border-radius: 10px; border: 1px solid #00ff88;">
                    <div style="font-size: 0.9rem; color: var(--text-gray);">📅 Días Estimados</div>
                    <div style="font-size: 1.8rem; font-weight: 900; color: #00ff88; margin-top: 0.5rem;">
                        ~${days}
                    </div>
                    <div style="color: var(--text-gray); font-size: 0.85rem; margin-top: 0.3rem;">días (10k/día)</div>
                </div>
            </div>
            
            <div style="margin-top: 2rem; padding: 1.5rem; background: rgba(0, 0, 0, 0.3); border-radius: 10px;">
                <h4 style="color: var(--primary); margin-bottom: 1rem;">💡 Tips para R4/R5:</h4>
                <ul style="color: var(--text-gray); line-height: 1.8;">
                    <li>Distribuye la carga equitativamente entre todos</li>
                    <li>Prioriza activos over inactivos</li>
                    <li>Comunica claramente el objetivo y tiempo estimado</li>
                    <li>Usa eventos de alliance para bonuses de donation</li>
                    ${tech.priority === 'critical' ? '<li style="color: #ff0000;">⚠️ PRIORIDAD CRÍTICA - Enfoca toda la alianza en esto</li>' : ''}
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

// CSS for priority badges
const style = document.createElement('style');
style.textContent = `
    .priority-badge {
        padding: 0.5rem 1rem;
        border-radius: 10px;
        font-weight: 900;
        font-size: 0.85rem;
    }
    .priority-critical {
        background: linear-gradient(135deg, #ff0000, #ff8c00);
        color: white;
    }
    .priority-high {
        background: linear-gradient(135deg, #ff8c00, #ffaa00);
        color: white;
    }
    .priority-medium {
        background: linear-gradient(135deg, #00d2ff, #0099ff);
        color: white;
    }
    .priority-low {
        background: rgba(128, 128, 128, 0.5);
        color: white;
    }
`;
document.head.appendChild(style);

// Initialize
if (document.getElementById('alliance-tech-container')) {
    displayAllianceTech();
    populateTechSelector();
}
