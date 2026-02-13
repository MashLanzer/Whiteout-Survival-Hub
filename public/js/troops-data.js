// ============================================
// TROOPS DATABASE T1-T10
// ============================================

const troopsData = [
    // INFANTERÍA (Infantry)
    {
        tier: 'T10', type: 'infantry', name: 'Elite Guardian', attack: 580, hp: 2400, defense: 420, speed: 50,
        wood: 450, meat: 450, iron: 180, time: 240, power: 15
    },
    {
        tier: 'T9', type: 'infantry', name: 'Advanced Guardian', attack: 480, hp: 2000, defense: 350, speed: 48,
        wood: 380, meat: 380, iron: 150, time: 200, power: 12
    },
    {
        tier: 'T8', type: 'infantry', name: 'Heavy Guardian', attack: 400, hp: 1650, defense: 290, speed: 46,
        wood: 320, meat: 320, iron: 125, time: 165, power: 10
    },
    {
        tier: 'T7', type: 'infantry', name: 'Guardian', attack: 330, hp: 1350, defense: 240, speed: 44,
        wood: 265, meat: 265, iron: 105, time: 135, power: 8
    },
    {
        tier: 'T6', type: 'infantry', name: 'Defender', attack: 275, hp: 1100, defense: 200, speed: 42,
        wood: 220, meat: 220, iron: 85, time: 110, power: 6.5
    },
    {
        tier: 'T5', type: 'infantry', name: 'Soldier', attack: 225, hp: 900, defense: 165, speed: 40,
        wood: 180, meat: 180, iron: 70, time: 90, power: 5
    },
    {
        tier: 'T4', type: 'infantry', name: 'Fighter', attack: 185, hp: 750, defense: 135, speed: 38,
        wood: 145, meat: 145, iron: 55, time: 72, power: 4
    },
    {
        tier: 'T3', type: 'infantry', name: 'Warrior', attack: 150, hp: 600, defense: 110, speed: 36,
        wood: 115, meat: 115, iron: 45, time: 58, power: 3
    },
    {
        tier: 'T2', type: 'infantry', name: 'Militia', attack: 120, hp: 480, defense: 90, speed: 34,
        wood: 90, meat: 90, iron: 35, time: 45, power: 2
    },
    {
        tier: 'T1', type: 'infantry', name: 'Recruit', attack: 100, hp: 400, defense: 75, speed: 32,
        wood: 70, meat: 70, iron: 25, time: 35, power: 1.5
    },

    // LANCEROS (Lancer)
    {
        tier: 'T10', type: 'lancer', name: 'Elite Cavalier', attack: 640, hp: 2100, defense: 380, speed: 75,
        wood: 450, meat: 450, iron: 180, time: 240, power: 15
    },
    {
        tier: 'T9', type: 'lancer', name: 'Advanced Cavalier', attack: 530, hp: 1750, defense: 315, speed: 72,
        wood: 380, meat: 380, iron: 150, time: 200, power: 12
    },
    {
        tier: 'T8', type: 'lancer', name: 'Heavy Cavalier', attack: 440, hp: 1450, defense: 260, speed: 69,
        wood: 320, meat: 320, iron: 125, time: 165, power: 10
    },
    {
        tier: 'T7', type: 'lancer', name: 'Cavalier', attack: 365, hp: 1200, defense: 215, speed: 66,
        wood: 265, meat: 265, iron: 105, time: 135, power: 8
    },
    {
        tier: 'T6', type: 'lancer', name: 'Knight', attack: 300, hp: 980, defense: 180, speed: 63,
        wood: 220, meat: 220, iron: 85, time: 110, power: 6.5
    },
    {
        tier: 'T5', type: 'lancer', name: 'Rider', attack: 245, hp: 800, defense: 145, speed: 60,
        wood: 180, meat: 180, iron: 70, time: 90, power: 5
    },
    {
        tier: 'T4', type: 'lancer', name: 'Scout', attack: 200, hp: 660, defense: 120, speed: 57,
        wood: 145, meat: 145, iron: 55, time: 72, power: 4
    },
    {
        tier: 'T3', type: 'lancer', name: 'Spearman', attack: 165, hp: 540, defense: 100, speed: 54,
        wood: 115, meat: 115, iron: 45, time: 58, power: 3
    },
    {
        tier: 'T2', type: 'lancer', name: 'Pikeman', attack: 135, hp: 430, defense: 80, speed: 51,
        wood: 90, meat: 90, iron: 35, time: 45, power: 2
    },
    {
        tier: 'T1', type: 'lancer', name: 'Levy', attack: 110, hp: 350, defense: 65, speed: 48,
        wood: 70, meat: 70, iron: 25, time: 35, power: 1.5
    },

    // TIRADORES (Marksman)
    {
        tier: 'T10', type: 'marksman', name: 'Elite Sharpshooter', attack: 700, hp: 1800, defense: 340, speed: 55,
        wood: 450, meat: 450, iron: 180, time: 240, power: 15
    },
    {
        tier: 'T9', type: 'marksman', name: 'Advanced Sharpshooter', attack: 580, hp: 1500, defense: 280, speed: 53,
        wood: 380, meat: 380, iron: 150, time: 200, power: 12
    },
    {
        tier: 'T8', type: 'marksman', name: 'Heavy Shooter', attack: 480, hp: 1250, defense: 235, speed: 51,
        wood: 320, meat: 320, iron: 125, time: 165, power: 10
    },
    {
        tier: 'T7', type: 'marksman', name: 'Sharpshooter', attack: 395, hp: 1050, defense: 195, speed: 49,
        wood: 265, meat: 265, iron: 105, time: 135, power: 8
    },
    {
        tier: 'T6', type: 'marksman', name: 'Bowman', attack: 325, hp: 850, defense: 160, speed: 47,
        wood: 220, meat: 220, iron: 85, time: 110, power: 6.5
    },
    {
        tier: 'T5', type: 'marksman', name: 'Archer', attack: 265, hp: 700, defense: 130, speed: 45,
        wood: 180, meat: 180, iron: 70, time: 90, power: 5
    },
    {
        tier: 'T4', type: 'marksman', name: 'Crossbowman', attack: 215, hp: 575, defense: 105, speed: 43,
        wood: 145, meat: 145, iron: 55, time: 72, power: 4
    },
    {
        tier: 'T3', type: 'marksman', name: 'Hunter', attack: 175, hp: 470, defense: 85, speed: 41,
        wood: 115, meat: 115, iron: 45, time: 58, power: 3
    },
    {
        tier: 'T2', type: 'marksman', name: 'Slinger', attack: 145, hp: 380, defense: 70, speed: 39,
        wood: 90, meat: 90, iron: 35, time: 45, power: 2
    },
    {
        tier: 'T1', type: 'marksman', name: 'Scout', attack: 115, hp: 300, defense: 55, speed: 37,
        wood: 70, meat: 70, iron: 25, time: 35, power: 1.5
    },
];

// ============================================
// DISPLAY FUNCTIONS
// ============================================

let currentFilter = 'all';

function displayTroops(filter = 'all') {
    const container = document.getElementById('troops-container');
    if (!container) return;

    const filtered = filter === 'all'
        ? troopsData
        : troopsData.filter(t => t.type === filter);

    container.innerHTML = filtered.map(troop => `
        <div class="troop-card">
            <div class="troop-tier">${troop.tier}</div>
            <div class="troop-type">${getTroopTypeIcon(troop.type)} ${troop.name}</div>
            
            <div class="stat-grid">
                <div class="stat-item">
                    <div class="stat-label">⚔️ Ataque</div>
                    <div class="stat-value">${troop.attack}</div>
                </div>
                <div class="stat-item">
                    <div class="stat-label">❤️ HP</div>
                    <div class="stat-value">${troop.hp}</div>
                </div>
                <div class="stat-item">
                    <div class="stat-label">🛡️ Defensa</div>
                    <div class="stat-value">${troop.defense}</div>
                </div>
                <div class="stat-item">
                    <div class="stat-label">⚡ Velocidad</div>
                    <div class="stat-value">${troop.speed}</div>
                </div>
            </div>
            
            <div class="training-cost">
                <h4 style="color: var(--primary); margin-bottom: 1rem;">💰 Costo de Entrenamiento (x1)</h4>
                <div class="resource-row">
                    <span>🪵 Madera:</span>
                    <strong>${troop.wood.toLocaleString()}</strong>
                </div>
                <div class="resource-row">
                    <span>🥩 Carne:</span>
                    <strong>${troop.meat.toLocaleString()}</strong>
                </div>
                <div class="resource-row">
                    <span>⛓️ Hierro:</span>
                    <strong>${troop.iron.toLocaleString()}</strong>
                </div>
                <div class="resource-row">
                    <span>⏱️ Tiempo:</span>
                    <strong>${formatTime(troop.time)}</strong>
                </div>
                <div class="resource-row" style="margin-top: 0.5rem; padding-top: 0.5rem; border-top: 1px solid var(--border);">
                    <span>⚡ Power:</span>
                    <strong style="color: var(--primary);">${troop.power} pts/tropa</strong>
                </div>
            </div>
        </div>
    `).join('');
}

function getTroopTypeIcon(type) {
    const icons = {
        'infantry': '🛡️',
        'lancer': '🗡️',
        'marksman': '🏹'
    };
    return icons[type] || '⚔️';
}

function formatTime(seconds) {
    if (seconds < 60) return `${seconds}s`;
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ${seconds % 60}s`;
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${mins}m`;
}

function filterTroops(type) {
    currentFilter = type;

    // Update active tab
    document.querySelectorAll('.type-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    event.target.classList.add('active');

    displayTroops(type);
}

// ============================================
// TRAINING CALCULATOR
// ============================================

function calculateTraining() {
    const tier = document.getElementById('troop-tier-select').value;
    const troopClass = document.getElementById('troop-class-select').value;
    const amount = parseInt(document.getElementById('train-amount').value);
    const resultDiv = document.getElementById('training-result');

    if (!amount || amount <= 0) {
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = '<p style="color: orange;">⚠️ Ingresa una cantidad válida de tropas</p>';
        return;
    }

    const troop = troopsData.find(t => t.tier === tier && t.type === troopClass);
    if (!troop) {
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = '<p style="color: red;">❌ Tropa no encontrada</p>';
        return;
    }

    const totalWood = troop.wood * amount;
    const totalMeat = troop.meat * amount;
    const totalIron = troop.iron * amount;
    const totalTime = troop.time * amount;
    const totalPower = troop.power * amount;

    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `
        <div style="background: rgba(0, 210, 255, 0.1); padding: 2rem; border-radius: 15px; border: 2px solid var(--primary);">
            <h3 style="color: var(--primary); text-align: center; margin-bottom: 2rem;">
                Entrenar ${amount.toLocaleString()} x ${troop.name}
            </h3>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
                <div style="text-align: center; background: rgba(0,0,0,0.3); padding: 1.5rem; border-radius: 10px;">
                    <div style="font-size: 0.9rem; color: var(--text-gray);">🪵 Madera Total</div>
                    <div style="font-size: 1.8rem; font-weight: 900; color: #8B4513; margin-top: 0.5rem;">
                        ${totalWood.toLocaleString()}
                    </div>
                </div>
                <div style="text-align: center; background: rgba(0,0,0,0.3); padding: 1.5rem; border-radius: 10px;">
                    <div style="font-size: 0.9rem; color: var(--text-gray);">🥩 Carne Total</div>
                    <div style="font-size: 1.8rem; font-weight: 900; color: #ff4444; margin-top: 0.5rem;">
                        ${totalMeat.toLocaleString()}
                    </div>
                </div>
                <div style="text-align: center; background: rgba(0,0,0,0.3); padding: 1.5rem; border-radius: 10px;">
                    <div style="font-size: 0.9rem; color: var(--text-gray);">⛓️ Hierro Total</div>
                    <div style="font-size: 1.8rem; font-weight: 900; color: #888; margin-top: 0.5rem;">
                        ${totalIron.toLocaleString()}
                    </div>
                </div>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-top: 2rem;">
                <div style="text-align: center; background: rgba(255, 140, 0, 0.2); padding: 1.5rem; border-radius: 10px; border: 1px solid #ff8c00;">
                    <div style="font-size: 0.9rem; color: var(--text-gray);">⏱️ Tiempo Total</div>
                    <div style="font-size: 1.5rem; font-weight: 900; color: #ff8c00; margin-top: 0.5rem;">
                        ${formatTimeLong(totalTime)}
                    </div>
                </div>
                <div style="text-align: center; background: rgba(0, 255, 136, 0.2); padding: 1.5rem; border-radius: 10px; border: 1px solid #00ff88;">
                    <div style="font-size: 0.9rem; color: var(--text-gray);">⚡ Power Ganado</div>
                    <div style="font-size: 1.5rem; font-weight: 900; color: #00ff88; margin-top: 0.5rem;">
                        +${formatNumber(totalPower)}
                    </div>
                </div>
            </div>
            
            <p style="text-align: center; color: var(--text-gray); margin-top: 2rem; font-size: 0.9rem;">
                💡 Tip: Usa Training Speedups o espera eventos de Training Speed Boost para optimizar
            </p>
        </div>
    `;
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

function formatNumber(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
}

// ============================================
// COMPOSITION OPTIMIZER
// ============================================

function calculateComposition() {
    const wood = parseInt(document.getElementById('available-wood').value) || 0;
    const meat = parseInt(document.getElementById('available-meat').value) || 0;
    const iron = parseInt(document.getElementById('available-iron').value) || 0;
    const tier = document.getElementById('comp-tier-select').value;
    const resultDiv = document.getElementById('composition-result');

    if (wood === 0 && meat === 0 && iron === 0) {
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = '<p style="color: orange;">⚠️ Ingresa al menos un recurso disponible</p>';
        return;
    }

    // Get troops for this tier
    const tierTroops = troopsData.filter(t => t.tier === tier);

    // Calculate max troops for each type
    const results = tierTroops.map(troop => {
        const maxByWood = Math.floor(wood / troop.wood);
        const maxByMeat = Math.floor(meat / troop.meat);
        const maxByIron = Math.floor(iron / troop.iron);
        const maxTroops = Math.min(maxByWood, maxByMeat, maxByIron);

        return {
            troop,
            maxTroops,
            totalPower: maxTroops * troop.power
        };
    });

    // Sort by total power
    results.sort((a, b) => b.totalPower - a.totalPower);

    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `
        <div style="background: rgba(0, 0, 0, 0.3); padding: 2rem; border-radius: 15px;">
            <h3 style="color: var(--primary); text-align: center; margin-bottom: 2rem;">
                📊 Tropas Posibles con Recursos Disponibles
            </h3>
            
            <div style="display: grid; gap: 1.5rem;">
                ${results.map(r => `
                    <div style="background: var(--bg-card); padding: 1.5rem; border-radius: 10px; border: 2px solid var(--border); display: grid; grid-template-columns: 1fr 2fr 1fr; gap: 1rem; align-items: center;">
                        <div style="text-align: center;">
                            <div style="font-size: 2rem;">${getTroopTypeIcon(r.troop.type)}</div>
                            <div style="font-weight: 700; margin-top: 0.5rem;">${r.troop.name}</div>
                        </div>
                        <div>
                            <div style="font-size: 2rem; font-weight: 900; color: var(--primary);">
                                ${r.maxTroops.toLocaleString()}
                            </div>
                            <div style="color: var(--text-gray); font-size: 0.9rem;">tropas posibles</div>
                        </div>
                        <div style="text-align: right;">
                            <div style="color: #00ff88; font-weight: 700;">
                                +${formatNumber(r.totalPower)}
                            </div>
                            <div style="color: var(--text-gray); font-size: 0.85rem;">power</div>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div style="margin-top: 2rem; padding: 1.5rem; background: rgba(0, 210, 255, 0.1); border-radius: 10px; border: 1px solid var(--primary);">
                <h4 style="color: var(--primary); margin-bottom: 1rem;">💡 Recomendación Óptima</h4>
                <p style="color: white;">
                    Para máximo power, entrena <strong style="color: var(--primary);">${results[0].maxTroops.toLocaleString()} ${results[0].troop.name}</strong>
                    (${getTroopTypeIcon(results[0].troop.type)} ${getTroopTypeName(results[0].troop.type)})
                </p>
                <p style="color: var(--text-gray); margin-top: 0.5rem; font-size: 0.9rem;">
                    Esto te dará +${formatNumber(results[0].totalPower)} power total
                </p>
            </div>
        </div>
    `;
}

function getTroopTypeName(type) {
    const names = {
        'infantry': 'Infantería',
        'lancer': 'Lanceros',
        'marksman': 'Tiradores'
    };
    return names[type] || type;
}

// Initialize on load
if (document.getElementById('troops-container')) {
    displayTroops('all');
}
