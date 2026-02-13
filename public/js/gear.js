// ============================================
// CHIEF GEAR UI LOGIC - PREMIUM V2
// ============================================

function switchView(view) {
    const evo = document.getElementById('evolution-view');
    const grid = document.getElementById('grid-view');
    const btnEvo = document.getElementById('btn-evolution');
    const btnGrid = document.getElementById('btn-grid');

    if (view === 'evolution') {
        evo.style.display = 'block';
        grid.style.display = 'none';
        btnEvo.className = 'btn primary';
        btnGrid.className = 'btn secondary';
        renderEvolutionMap();
    } else {
        evo.style.display = 'none';
        grid.style.display = 'block';
        btnEvo.className = 'btn secondary';
        btnGrid.className = 'btn primary';
        displayGear('all');
    }
}

function renderEvolutionMap() {
    const paths = {
        'combat-path': document.getElementById('path-combat'),
        'defense-path': document.getElementById('path-defense'),
        'gathering-path': document.getElementById('path-gathering')
    };

    Object.keys(paths).forEach(pathId => {
        const container = paths[pathId];
        if (!container) return;

        const pathData = gearData.filter(g => g.evolutionPath === pathId).sort((a, b) => a.tier - b.tier);
        container.innerHTML = pathData.map(gear => `
            <div class="gear-node ${gear.rarity}" onclick="showGearDetails('${gear.id}')">
                <div class="node-tier">T${gear.tier}</div>
                <div style="font-size: 2.2rem; margin-bottom: 0.8rem;">${gear.icon}</div>
                <div style="font-weight: 900; color: white; font-size: 1rem;">${gear.name}</div>
                <div style="font-size: 0.75rem; color: var(--text-gray); margin-top: 8px;">
                    ${Object.values(gear.stats)[0]} Base Stat
                </div>
            </div>
        `).join('');
    });
}

function displayGear(filter = 'all') {
    const container = document.getElementById('gear-container');
    if (!container) return;

    let filtered = filter === 'all' ? gearData : gearData.filter(g => g.type === filter);
    filtered.sort((a, b) => a.tier - b.tier);

    container.innerHTML = filtered.map(gear => `
        <div class="gear-card ${gear.rarity}" id="gear-${gear.id}">
            <div class="gear-rarity ${gear.rarity}">${gear.rarity.toUpperCase()}</div>
            <div class="gear-name" style="font-size: 1.5rem; font-weight: 800; margin-bottom: 0.5rem;">${gear.icon} ${gear.name}</div>
            <div style="color: var(--text-gray); font-size: 0.8rem; letter-spacing: 1px;">PATH: ${gear.type.toUpperCase()} / TIER ${gear.tier}</div>
            
            <div class="stats-grid">
                ${Object.entries(gear.stats).map(([stat, val]) => `
                    <div class="stat-item">
                        <span>${formatStatName(stat)}</span>
                        <strong>${val}</strong>
                    </div>
                `).join('')}
            </div>

            ${gear.setBonus ? `
                <div style="margin-top: 1.5rem; padding: 1rem; background: rgba(0, 210, 255, 0.05); border-left: 3px solid var(--primary); border-radius: 8px;">
                    <div style="font-size: 0.7rem; color: var(--primary); font-weight: 900; margin-bottom: 0.3rem;">SET BONUS</div>
                    <div style="font-size: 0.9rem; color: #fff;">${gear.setBonus}</div>
                </div>
            ` : ''}

            <div class="materials-section">
                <div style="font-size: 0.7rem; color: var(--text-gray); font-weight: 900; margin-bottom: 1rem;">REQUISITOS DE FORJA</div>
                ${Object.entries(gear.materials).map(([mat, amt]) => `
                    <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 0.4rem;">
                        <span style="color: var(--text-gray);">${mat}</span>
                        <span style="font-weight: 700;">${amt}</span>
                    </div>
                `).join('')}
            </div>

            <div style="margin-top: 1.5rem; text-align: center; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 1rem;">
                <span style="font-size: 0.8rem; color: var(--text-gray);">Rating: </span>
                <strong style="color: var(--primary);">${gear.priority}</strong>
            </div>
        </div>
    `).join('');
}

function formatStatName(stat) {
    const names = {
        'attack': '⚔️ Attack',
        'defense': '🛡️ Defense',
        'hp': '❤️ HP',
        'marchSpeed': '⚡ March Speed',
        'dmgReduction': '🌟 DMG Reduction',
        'gatheringSpeed': '📦 Gathering',
        'loadCapacity': '🎒 Load'
    };
    return names[stat] || stat;
}

function showGearDetails(id) {
    switchView('grid');
    setTimeout(() => {
        const el = document.getElementById(`gear-${id}`);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            el.classList.add('highlight-node');
            setTimeout(() => el.classList.remove('highlight-node'), 2000);
        }
    }, 150);
}

function optimizeGear() {
    const goal = document.getElementById('primary-goal').value;
    const budget = document.getElementById('budget').value;
    const resultDiv = document.getElementById('optimizer-result');
    const container = document.getElementById('optimizer-result-container');

    container.classList.add('scanned');

    let candidates = gearData;
    if (budget === 'f2p') candidates = gearData.filter(g => g.rarity !== 'mythic');

    let best;
    if (goal === 'pvp') best = candidates.filter(g => g.type === 'combat').sort((a, b) => b.tier - a.tier)[0];
    else if (goal === 'gathering') best = candidates.filter(g => g.type === 'gathering').sort((a, b) => b.tier - a.tier)[0];
    else if (goal === 'defense') best = candidates.filter(g => g.type === 'defense').sort((a, b) => b.tier - a.tier)[0];

    resultDiv.innerHTML = `
        <div style="animation: fadeIn 0.8s ease-out; padding: 2rem;">
            <div style="font-size: 0.8rem; color: var(--primary); letter-spacing: 3px; margin-bottom: 1.5rem;">>>> ANÁLISIS COMPLETADO</div>
            <div style="font-size: 4.5rem; margin-bottom: 1rem; filter: drop-shadow(0 0 15px var(--primary));">${best.icon}</div>
            <h3 style="font-size: 2.2rem; color: #fff; margin-bottom: 0.5rem; font-family: 'Playfair Display', serif;">${best.name}</h3>
            <div style="color: var(--text-gray); font-size: 1.1rem; margin-bottom: 2rem;">Priority: <strong style="color: #00ff88;">${best.priority}</strong></div>
            <button class="btn secondary" onclick="showGearDetails('${best.id}')">Ver Ficha de Forja</button>
        </div>
    `;
}

function compareSets() {
    const id1 = document.getElementById('compare-set-1').value;
    const id2 = document.getElementById('compare-set-2').value;
    const result = document.getElementById('comparison-result');

    if (!id1 || !id2) return;

    const g1 = gearData.find(g => g.id === id1);
    const g2 = gearData.find(g => g.id === id2);

    result.innerHTML = [g1, g2].map(g => `
        <div class="gear-card ${g.rarity}" style="flex:1;">
            <h4 style="text-align: center; margin-bottom: 1.5rem; font-size: 1.5rem;">${g.icon} ${g.name}</h4>
            <div class="stats-grid">
                ${Object.entries(g.stats).map(([stat, val]) => `
                    <div class="stat-item" style="padding: 1.2rem;">
                        <span>${formatStatName(stat)}</span>
                        <strong>${val}</strong>
                    </div>
                `).join('')}
            </div>
            ${g.setBonus ? `<div style="margin-top: 1.5rem; color: var(--primary); font-size: 0.9rem; text-align:center;">⭐ ${g.setBonus}</div>` : ''}
        </div>
    `).join('');
}

function populateComparisonSelects() {
    const selects = [document.getElementById('compare-set-1'), document.getElementById('compare-set-2')];
    selects.forEach(select => {
        if (!select) return;
        select.innerHTML = '<option value="">Seleccionar Equipo...</option>';
        gearData.forEach(g => {
            const opt = document.createElement('option');
            opt.value = g.id;
            opt.textContent = `${g.icon} ${g.name} (T${g.tier})`;
            select.appendChild(opt);
        });
    });
}

function filterGear(type, btn) {
    document.querySelectorAll('.filter-tabs .btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    displayGear(type);
}
