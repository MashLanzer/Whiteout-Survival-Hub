// heroesData is now loaded from js/heroes-data.js

// ===== ESTADO GLOBAL =====
let currentModeFilter = 'all';
let currentGenFilter = 'all';
let currentSearchTerm = '';

// ===== FUNCIÓN PARA MOSTRAR HÉROES =====
function displayHeroes() {
    const grid = document.getElementById('hero-tier-list');
    if (!grid) {
        console.error('No se pudo encontrar el contenedor #hero-tier-list');
        return;
    }

    grid.innerHTML = '';

    // Apply all filters
    let filtered = heroesData || [];

    // Mode filter
    if (typeof currentModeFilter !== 'undefined' && currentModeFilter !== 'all') {
        filtered = filtered.filter(h => h.mode && h.mode.includes(currentModeFilter));
    }

    // Gen filter
    if (typeof currentGenFilter !== 'undefined' && currentGenFilter !== 'all') {
        filtered = filtered.filter(h => h.gen === parseInt(currentGenFilter));
    }

    // Search filter
    if (typeof currentSearchTerm !== 'undefined' && currentSearchTerm) {
        const term = currentSearchTerm.toLowerCase();
        filtered = filtered.filter(h =>
            h.name && h.name.toLowerCase().includes(term)
        );
    }

    if (filtered.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-gray); padding: 3rem; font-size: 1.2rem;">🧊 No hay héroes que coincidan con los filtros seleccionados.</p>';
        return;
    }

    console.log(`Rendering ${filtered.length} heroes...`);
    filtered.forEach(hero => {
        try {
            const card = document.createElement('div');
            card.className = 'hero-card';
            card.onclick = () => showHeroModal(hero);

            // Color basado en tier
            const tierColors = {
                'S+': '00d2ff',
                'S': '0099ff',
                'A': 'ff8c00',
                'B': '9370db',
                'C': '666666'
            };
            const bgColor = tierColors[hero.tier] || '1a2233';

            // Try local image first (webp format based on what user has)
            const imageName = hero.name.toLowerCase().trim().replace(/\s+/g, '-');
            const localImage = `images/${imageName}.webp?v=2.0`;
            const placeholderImage = `https://ui-avatars.com/api/?name=${encodeURIComponent(hero.name)}&size=200&background=${bgColor}&color=ffffff&bold=true&font-size=0.5`;

            card.innerHTML = `
            <div class="hero-tier tier-${hero.tier.toLowerCase().replace('+', 'plus')}">${hero.tier}</div>
            <div class="hero-gen">Gen ${hero.gen}</div>
            <div class="hero-img-box">
                <img src="${localImage}" 
                     alt="${hero.name}" 
                     onerror="this.src='${placeholderImage}'"
                     loading="lazy">
            </div>
            <div class="hero-info">
                <h4>${hero.name}</h4>
                <p style="color: var(--text-gray); font-size: 0.8rem;">${hero.type}</p>
            </div>
        `;
            grid.appendChild(card);
        } catch (e) {
            console.error('Error rendering hero card:', e, hero);
        }
    });
}

// ===== MODAL DE HÉROE =====
function showHeroModal(hero) {
    const modal = document.getElementById('hero-modal');
    const modalContent = document.getElementById('modal-hero-content');

    const tierColors = {
        'S+': '#00d2ff',
        'S': '#0099ff',
        'A': '#ff8c00',
        'B': '#9370db',
        'C': '#666666'
    };

    const imageName = hero.name.toLowerCase().trim().replace(/\s+/g, '-');
    const bgColor = tierColors[hero.tier] || '#1a2233';

    modalContent.innerHTML = `
        <div class="modal-header" style="border-left: 5px solid ${bgColor};">
            <img src="images/${imageName}.webp?v=2.0" 
                 alt="${hero.name}" 
                 onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(hero.name)}&size=150&background=${bgColor.slice(1)}&color=ffffff&bold=true'"
                 class="modal-hero-img">
            <div class="modal-hero-title">
                <h2>${hero.name}</h2>
                <div class="modal-badges">
                    <span class="badge" style="background: ${bgColor};">Tier ${hero.tier}</span>
                    <span class="badge fire">Gen ${hero.gen}</span>
                    <span class="badge">${hero.type}</span>
                </div>
            </div>
        </div>
        
        <div class="modal-body">
            <div class="modal-section">
                <h3><i data-lucide="info"></i> Descripción</h3>
                <p>${hero.desc}</p>
            </div>
            
            <div class="modal-grid">
                <div class="modal-section">
                    <h3><i data-lucide="bar-chart-3"></i> Estadísticas Base</h3>
                    <div class="stat-bars">
                        <div class="stat-bar-item">
                            <label>Ataque</label>
                            <div class="progress-container"><div class="progress-bar" style="width: ${hero.stats?.atk || 50}%"></div></div>
                        </div>
                        <div class="stat-bar-item">
                            <label>Defensa</label>
                            <div class="progress-container"><div class="progress-bar" style="width: ${hero.stats?.def || 50}%; background: #2ecc71;"></div></div>
                        </div>
                        <div class="stat-bar-item">
                            <label>Salud</label>
                            <div class="progress-container"><div class="progress-bar" style="width: ${hero.stats?.hp || 50}%; background: #e74c3c;"></div></div>
                        </div>
                    </div>
                </div>

                ${hero.synergy ? `
                <div class="modal-section">
                    <h3><i data-lucide="users"></i> Sinergias</h3>
                    <div class="synergy-list">
                        ${hero.synergy.split(', ').map(s => `<span class="synergy-tag">${s}</span>`).join('')}
                    </div>
                </div>
                ` : ''}
            </div>

            ${hero.story ? `
            <div class="modal-section story-section">
                <h3><i data-lucide="book-open"></i> Historia Original</h3>
                <div class="story-content">
                    <p>${hero.story}</p>
                </div>
            </div>
            ` : ''}

            <div class="modal-grid">
                <div class="modal-section">
                    <h3><i data-lucide="zap"></i> Habilidades</h3>
                    <p><strong>${hero.skills}</strong></p>
                </div>
                
                <div class="modal-section">
                    <h3><i data-lucide="target"></i> Mejor Para</h3>
                    <p>${hero.bestFor}</p>
                </div>
            </div>

            ${hero.tips ? `
            <div class="modal-section tips-section" style="background: rgba(255, 140, 0, 0.05); padding: 1.5rem; border-radius: 15px; border-left: 4px solid #ff8c00; margin-top: 1rem;">
                <h3 style="color: #ff8c00;"><i data-lucide="lightbulb"></i> Estrategia y Consejos</h3>
                <p style="color: #eee; font-size: 0.95rem;">${hero.tips}</p>
            </div>
            ` : ''}
            
            <div class="modal-section">
                <h3><i data-lucide="gamepad-2"></i> Modos Recomendados</h3>
                <div class="mode-tags">
                    ${hero.mode.map(m => `<span class="mode-tag">${getModeDisplayName(m)}</span>`).join('')}
                </div>
            </div>
        </div>
    `;

    modal.style.display = 'flex';
    lucide.createIcons();
}

function getModeDisplayName(mode) {
    const names = {
        'pvp': 'PvP',
        'pve': 'Exploración',
        'bear': 'Bear Hunt',
        'svs': 'SvS',
        'arena': 'Arena'
    };
    return names[mode] || mode;
}

function closeHeroModal() {
    document.getElementById('hero-modal').style.display = 'none';
}

// Close modal when clicking outside
document.getElementById('hero-modal')?.addEventListener('click', (e) => {
    if (e.target.id === 'hero-modal') {
        closeHeroModal();
    }
});

// (Eventos movidos al bootstrap al final del archivo)

// ===== FUNCIÓN PARA LA BASE DE DATOS ON-PAGE (NUEVA) =====
function renderHeroDatabase() {
    const grid = document.getElementById('hero-db-grid');
    const genFilter = document.getElementById('db-gen-filter');
    if (!grid) return;

    grid.innerHTML = '';
    const selectedGen = genFilter ? genFilter.value : 'all';

    let filtered = heroesData || [];
    if (selectedGen !== 'all') {
        filtered = filtered.filter(h => h.gen === parseInt(selectedGen));
    }

    filtered.forEach(hero => {
        const tierClass = hero.tier.toLowerCase().replace('+', 'plus');
        const imageName = hero.name.toLowerCase().trim().replace(/\s+/g, '-');
        const localImage = `images/${imageName}.webp?v=2.0`;
        const placeholder = `https://ui-avatars.com/api/?name=${encodeURIComponent(hero.name)}&size=300&background=1a2233&color=ffffff&bold=true`;

        const card = document.createElement('div');
        card.className = 'guide-card'; // Reutilizamos clase de cards premium
        card.style.cursor = 'pointer';
        card.onclick = () => showHeroModal(hero);

        card.innerHTML = `
            <div style="position: relative; height: 180px; overflow: hidden;">
                <img src="${localImage}" alt="${hero.name}" onerror="this.src='${placeholder}'" style="width: 100%; height: 100%; object-fit: cover;">
                <div style="position: absolute; top: 10px; right: 10px; display: flex; gap: 5px;">
                    <span class="badge" style="background: var(--primary); font-size: 0.7rem;">${hero.tier}</span>
                    <span class="badge" style="background: var(--text-gray); font-size: 0.7rem;">Gen ${hero.gen}</span>
                </div>
            </div>
            <div class="guide-content" style="padding: 1.2rem;">
                <h4 style="margin-bottom: 0.5rem; color: var(--primary);">${hero.name}</h4>
                <p style="font-size: 0.85rem; margin-bottom: 0.5rem; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${hero.desc}</p>
                <div style="display: flex; gap: 5px; flex-wrap: wrap;">
                    ${hero.mode.slice(0, 3).map(m => `<span class="badge" style="font-size: 0.6rem; background: rgba(255,255,255,0.1);">${getModeDisplayName(m)}</span>`).join('')}
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// ===== RESTO DE FUNCIONALIDADES =====
// Calculate Resources
function calculateResources() {
    const current = parseInt(document.getElementById('current-level')?.value || 0);
    const target = parseInt(document.getElementById('target-level')?.value || 0);
    const resultDiv = document.getElementById('calc-result');

    if (!resultDiv) return;

    if (isNaN(current) || isNaN(target) || current >= target) {
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = 'Por favor ingresa niveles válidos (Objetivo > Actual).';
        return;
    }

    const wood = (target - current) * 1.5;
    const meat = (target - current) * 1.5;
    const iron = (target - current) * 0.8;
    const coal = (target - current) * 0.4;

    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `
        <h4 style="margin-bottom: 0.5rem;">Recursos Estimados para Horno ${target}:</h4>
        <ul style="list-style: none;">
            <li>🥩 Carne: <strong>${meat.toFixed(1)}M</strong></li>
            <li>🪵 Madera: <strong>${wood.toFixed(1)}M</strong></li>
            <li>⛓️ Hierro: <strong>${iron.toFixed(1)}M</strong></li>
            <li>🔥 Carbón: <strong>${coal.toFixed(1)}K</strong></li>
        </ul>
        <p style="font-size: 0.7rem; margin-top: 0.5rem; color: var(--text-gray);">*Valores basados en promedios de nivel actual.</p>
    `;
}

// Snow Animation
function createSnow() {
    const container = document.querySelector('.snow-container');
    if (!container) return;

    const snowflakeCount = 50;

    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.style.position = 'absolute';
        snowflake.style.width = Math.random() * 5 + 'px';
        snowflake.style.height = snowflake.style.width;
        snowflake.style.background = 'white';
        snowflake.style.borderRadius = '50%';
        snowflake.style.opacity = Math.random();
        snowflake.style.top = -10 + 'px';
        snowflake.style.left = Math.random() * 100 + 'vw';

        container.appendChild(snowflake);

        const duration = Math.random() * 3 + 2;
        const delay = Math.random() * 5;

        snowflake.animate([
            { transform: `translateY(0) translateX(0)` },
            { transform: `translateY(100vh) translateX(${Math.random() * 20 - 10}vw)` }
        ], {
            duration: duration * 1000,
            iterations: Infinity,
            delay: delay * 1000,
            easing: 'linear'
        });
    }
}


// Load Real Events from API
async function loadEvents() {
    try {
        if (typeof WOSEventsAPI === 'undefined') return;

        const events = await WOSEventsAPI.getUpcomingEvents();
        const calendarGrid = document.querySelector('.calendar-grid');

        if (!calendarGrid) return;

        calendarGrid.innerHTML = '';

        events.slice(0, 5).forEach((event, index) => {
            const eventItem = document.createElement('div');
            eventItem.className = `event-item ${event.status === 'active' ? 'active' : ''}`;
            eventItem.style.cursor = 'pointer';
            eventItem.onclick = () => showEventModal(event);

            eventItem.innerHTML = `
                <div class="event-icon">${event.icon}</div>
                <div class="event-details">
                    <div class="event-date">${event.date}</div>
                    <div class="event-name">${event.name}</div>
                    <div class="event-time">${event.time}</div>
                </div>
            `;
            calendarGrid.appendChild(eventItem);
        });

        console.log('✅ Eventos cargados desde WOS Events API');
    } catch (error) {
        console.error('Error cargando eventos:', error);
    }
}

// ===== MODAL DE EVENTO =====
function showEventModal(event) {
    const modal = document.getElementById('event-modal');
    const content = document.getElementById('modal-event-content');
    if (!modal || !content) return;

    const details = event.details || {
        explanation: event.description,
        howToPlay: ["Próximamente más detalles sobre este evento."],
        rewards: "Recursos y items varios."
    };

    content.innerHTML = `
        <div class="event-modal-header">
            <div class="event-modal-icon">${event.icon}</div>
            <div class="event-modal-title">
                <h2>${event.name}</h2>
                <span class="badge ${event.status}">${event.date} | ${event.time}</span>
            </div>
        </div>
        
        <div class="modal-body">
            <div class="modal-section">
                <h3><i data-lucide="info"></i> ¿Qué es este evento?</h3>
                <p>${details.explanation}</p>
            </div>
            
            <div class="modal-section">
                <h3><i data-lucide="play-circle"></i> Cómo jugar / Tips</h3>
                <ul class="event-tips-list">
                    ${details.howToPlay.map(tip => `<li>${tip}</li>`).join('')}
                </ul>
            </div>
            
            <div class="modal-section">
                <h3><i data-lucide="gift"></i> Recompensas Principales</h3>
                <p>${details.rewards}</p>
            </div>

            <button class="btn primary full-width" onclick="closeEventModal()" style="margin-top: 2rem;">Cerrar</button>
        </div>
    `;

    modal.style.display = 'flex';
    if (window.lucide) lucide.createIcons();
}

function closeEventModal() {
    const modal = document.getElementById('event-modal');
    if (modal) modal.style.display = 'none';
}

// Close event modal when clicking outside
document.getElementById('event-modal')?.addEventListener('click', (e) => {
    if (e.target.id === 'event-modal') {
        closeEventModal();
    }
});


// ============================================
// HERO COMPARATOR
// ============================================

// Populate comparator dropdowns
function populateComparatorDropdowns() {
    const selects = [
        document.getElementById('compare-hero-1'),
        document.getElementById('compare-hero-2'),
        document.getElementById('compare-hero-3')
    ];

    selects.forEach(select => {
        if (!select) return;
        // Clear existing options except first
        select.innerHTML = '<option value="">Seleccionar...</option>';

        // Add all heroes
        if (typeof heroesData !== 'undefined' && Array.isArray(heroesData)) {
            heroesData.forEach(hero => {
                try {
                    const option = document.createElement('option');
                    option.value = hero.name;
                    option.textContent = `${hero.name} (Gen ${hero.gen}, Tier ${hero.tier})`;
                    select.appendChild(option);
                } catch (e) {
                    console.error('Error adding hero to dropdown:', e, hero);
                }
            });
        }
    });
}

function updateComparison() {
    const hero1Name = document.getElementById('compare-hero-1').value;
    const hero2Name = document.getElementById('compare-hero-2').value;
    const hero3Name = document.getElementById('compare-hero-3').value;

    const resultDiv = document.getElementById('comparison-result');

    const selectedHeroes = [hero1Name, hero2Name, hero3Name]
        .filter(name => name)
        .map(name => heroesData.find(h => h.name === name));

    if (selectedHeroes.length < 2) {
        resultDiv.innerHTML = '<p style="text-align: center; color: var(--text-gray); padding: 3rem;">Selecciona al menos 2 héroes para comparar</p>';
        return;
    }

    resultDiv.innerHTML = selectedHeroes.map(hero => createComparisonCard(hero)).join('');
    lucide.createIcons();
}

function createComparisonCard(hero) {
    const tierColors = {
        'S+': '#00d2ff',
        'S': '#0099ff',
        'A': '#ff8c00',
        'B': '#9370db',
        'C': '#666666'
    };

    const imageName = hero.name.toLowerCase().trim().replace(/\s+/g, '-');
    const bgColor = tierColors[hero.tier] || '#1a2233';

    return `
        <div class="comparison-card">
            <div class="comparison-header">
                <img src="images/${imageName}.webp?v=2.0" 
                     alt="${hero.name}"
                     onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(hero.name)}&size=150&background=${bgColor.slice(1)}&color=ffffff&bold=true'">
                <h4>${hero.name}</h4>
                <span class="badge" style="background: ${bgColor};">Tier ${hero.tier}</span>
                <span class="badge fire" style="margin-left: 0.5rem;">Gen ${hero.gen}</span>
            </div>
            <div class="comparison-stats">
                <div class="stat-row">
                    <span class="stat-label">Tipo:</span>
                    <span class="stat-value">${hero.type}</span>
                </div>
                <div class="stat-row">
                    <span class="stat-label">Generación:</span>
                    <span class="stat-value">Gen ${hero.gen}</span>
                </div>
                <div class="stat-row">
                    <span class="stat-label">Tier:</span>
                    <span class="stat-value">${hero.tier}</span>
                </div>
                <div class="stat-row">
                    <span class="stat-label">Habilidades:</span>
                    <span class="stat-value" style="font-size: 0.85rem;">${hero.skills}</span>
                </div>
                <div class="stat-row">
                    <span class="stat-label">Mejor Para:</span>
                    <span class="stat-value" style="font-size: 0.85rem;">${hero.bestFor}</span>
                </div>
                <div class="stat-row">
                    <span class="stat-label">Modos:</span>
                    <span class="stat-value">${hero.mode.map(m => getModeDisplayName(m)).join(', ')}</span>
                </div>
            </div>
            <p style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border); color: var(--text-gray); font-size: 0.9rem;">
                ${hero.desc}
            </p>
        </div>
    `;
}

// ============================================
// CALCULATOR TAB SWITCHING
// ============================================

function switchCalc(calcId, event) {
    // Hide all containers
    const containers = document.querySelectorAll('.calc-container');
    containers.forEach(c => {
        c.style.display = 'none';
        c.classList.remove('active');
    });

    // Deactivate all menu items
    const menuItems = document.querySelectorAll('.calc-menu-item');
    menuItems.forEach(t => t.classList.remove('active'));

    // Show selection
    const selectedCalc = document.getElementById('calc-' + calcId);
    if (selectedCalc) {
        selectedCalc.style.display = 'block';
        selectedCalc.classList.add('active');
    }

    // Activate clicked menu item
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
}

// ============================================
// POWER CALCULATOR
// ============================================

function calculatePower() {
    const upgradeType = document.getElementById('power-upgrade-type').value;
    const amount = parseInt(document.getElementById('power-amount').value);
    const resultDiv = document.getElementById('power-result');

    if (!amount || amount <= 0) {
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = '<p style="color: orange;">⚠️ Por favor ingresa una cantidad válida.</p>';
        return;
    }

    let powerGain = 0;
    let explanation = '';

    switch (upgradeType) {
        case 'furnace':
            // Approximate power gain per furnace level (increases exponentially)
            powerGain = amount * 2500000; // ~2.5M per level average
            explanation = `Upgrading Furnace ${amount} level(s) te dará aproximadamente <strong>${formatNumber(powerGain)}</strong> power.`;
            break;
        case 'research':
            // Военный research varies widely
            powerGain = amount * 500000; // ~500K per major research
            explanation = `Completing ${amount} military research(es) te dará aproximadamente <strong>${formatNumber(powerGain)}</strong> power.`;
            break;
        case 'troops':
            // T10 troops give ~15 power each
            powerGain = amount * 15;
            explanation = `Training ${formatNumber(amount)} T10 troops te dará aproximadamente <strong>${formatNumber(powerGain)}</strong> power.`;
            break;
        case 'hero':
            // Hero star-up varies by tier and gen
            powerGain = amount * 150000; // ~150K per star average
            explanation = `Upgrading hero ${amount} star(s) te dará aproximadamente <strong>${formatNumber(powerGain)}</strong> power.`;
            break;
    }

    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `
        <div style="text-align: center;">
            <h4 style="color: var(--primary); margin-bottom: 1rem;">⚡ Ganancia Estimada de Power</h4>
            <div style="font-size: 2.5rem; font-weight: 900; color: #00ff88; margin: 1rem 0;">
                +${formatNumber(powerGain)}
            </div>
            <p style="color: var(--text-gray); margin-top: 1rem;">
                ${explanation}
            </p>
            <p style="color: orange; font-size: 0.85rem; margin-top: 1rem;">
                ⚠️ Nota: Estos son valores aproximados. El power real puede variar según tu estado actual.
            </p>
        </div>
    `;
}

function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

// ============================================
// STAMINA CALCULATOR
// ============================================

function calculateStamina() {
    const currentStamina = parseInt(document.getElementById('current-stamina').value);
    const staminaPerMarch = parseInt(document.getElementById('stamina-per-march').value);
    const activityType = document.getElementById('activity-type').value;
    const resultDiv = document.getElementById('stamina-result');

    if (!currentStamina || currentStamina < 0) {
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = '<p style="color: orange;">⚠️ Por favor ingresa tu stamina actual.</p>';
        return;
    }

    if (!staminaPerMarch || staminaPerMarch <= 0) {
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = '<p style="color: orange;">⚠️ Por favor ingresa el costo de stamina por march.</p>';
        return;
    }

    const marchesAvailable = Math.floor(currentStamina / staminaPerMarch);
    const staminaRemaining = currentStamina % staminaPerMarch;

    // Activity-specific recommendations
    let activityName = '';
    let recommendation = '';
    let resourceEstimate = '';

    switch (activityType) {
        case 'gathering':
            activityName = 'Gathering';
            recommendation = `Con ${marchesAvailable} marches puedes ocupar tiles de recursos por aproximadamente ${Math.floor(marchesAvailable / 5)} rotaciones completas (5 marches).`;
            resourceEstimate = `Estimado de farmeo: ~${formatNumber(marchesAvailable * 3000000)} recursos totales (si usas tiles Lv6+).`;
            break;
        case 'bear':
            activityName = 'Bear Hunt';
            recommendation = `Puedes participar en ${marchesAvailable} ataques al Bear. Intenta coordinar con tu alianza para máximo daño.`;
            resourceEstimate = `Estimado de recompensas: ${marchesAvailable * 2} bears muertos = ${marchesAvailable * 50} hero frags aprox.`;
            break;
        case 'rally':
            activityName = 'Rallies';
            recommendation = `Puedes unirte a ${marchesAvailable} rallies. ¡Coordina con R4/R5 para targets estratégicos!`;
            resourceEstimate = `Nota: Guardar stamina para SvS es crítico. Solo participa en rallies importantes.`;
            break;
        case 'explore':
            activityName = 'Exploración';
            recommendation = `Puedes hacer ${marchesAvailable} marchas exploratorias. Útil para Intel Missions.`;
            resourceEstimate = `Completa misiones de exploración para fragmentos de heroes Gen 1-2.`;
            break;
    }

    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `
        <div style="text-align: center;">
            <h4 style="color: var(--primary); margin-bottom: 1rem;">🏃 Análisis de Stamina</h4>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 2rem 0;">
                <div style="background: rgba(0, 210, 255, 0.1); padding: 1.5rem; border-radius: 10px; border: 1px solid var(--primary);">
                    <div style="font-size: 0.9rem; color: var(--text-gray);">Marches Disponibles</div>
                    <div style="font-size: 2.5rem; font-weight: 900; color: var(--primary);">${marchesAvailable}</div>
                </div>
                <div style="background: rgba(255, 140, 0, 0.1); padding: 1.5rem; border-radius: 10px; border: 1px solid #ff8c00;">
                    <div style="font-size: 0.9rem; color: var(--text-gray);">Stamina Restante</div>
                    <div style="font-size: 2.5rem; font-weight: 900; color: #ff8c00;">${staminaRemaining}</div>
                </div>
            </div>
            <div style="background: rgba(0, 0, 0, 0.3); padding: 1.5rem; border-radius: 10px; text-align: left;">
                <h5 style="color: var(--primary); margin-bottom: 0.5rem;">📌 ${activityName}</h5>
                <p style="color: white; margin-bottom: 1rem;">${recommendation}</p>
                <p style="color: var(--text-gray); font-size: 0.9rem;">${resourceEstimate}</p>
            </div>
            <p style="color: #00ff88; font-size: 0.85rem; margin-top: 1.5rem;">
                💡 Tip: La stamina se regenera 1 punto cada 3 minutos (20/hora, 480/día).
            </p>
        </div>
    `;
}

// initialization handled at end of file

// ============================================
// EXTRA CALCULATORS
// ============================================

// Hospital Cost Calculator
function calculateHospital() {
    const tier = parseInt(document.getElementById('hospital-troop-tier').value);
    const wounded = parseInt(document.getElementById('wounded-troops').value);
    const resultDiv = document.getElementById('hospital-result');

    if (!wounded || wounded <= 0) {
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = '<p style="color: orange;">⚠️ Ingresa el número de tropas heridas</p>';
        return;
    }

    // Healing cost formulas (aproximadas)
    const costs = {
        1: { food: 20, wood: 15, iron: 5, time: 2 },
        3: { food: 100, wood: 80, iron: 40, time: 8 },
        5: { food: 300, wood: 250, iron: 150, time: 18 },
        7: { food: 800, wood: 650, iron: 400, time: 35 },
        9: { food: 2000, wood: 1600, iron: 1000, time: 60 },
        10: { food: 3500, wood: 2800, iron: 1800, time: 90 }
    };

    const cost = costs[tier];
    const totalFood = cost.food * wounded;
    const totalWood = cost.wood * wounded;
    const totalIron = cost.iron * wounded;
    const totalTime = cost.time * wounded;

    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `
        <div style="background: rgba(0, 210, 255, 0.1); padding: 2rem; border-radius: 15px; border: 2px solid var(--primary);">
            <h3 style="color: var(--primary); text-align: center; margin-bottom: 2rem;">
                💊 Costo de Curación - T${tier} Troops
            </h3>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
                <div style="text-align: center; background: rgba(0,0,0,0.3); padding: 1.5rem; border-radius: 10px;">
                    <div style="font-size: 0.9rem; color: var(--text-gray);">🥩 Comida</div>
                    <div style="font-size: 1.6rem; font-weight: 900; color: #ff4444; margin-top: 0.5rem;">
                        ${formatNumber(totalFood)}
                    </div>
                </div>
                <div style="text-align: center; background: rgba(0,0,0,0.3); padding: 1.5rem; border-radius: 10px;">
                    <div style="font-size: 0.9rem; color: var(--text-gray);">🪵 Madera</div>
                    <div style="font-size: 1.6rem; font-weight: 900; color: #8B4513; margin-top: 0.5rem;">
                        ${formatNumber(totalWood)}
                    </div>
                </div>
                <div style="text-align: center; background: rgba(0,0,0,0.3); padding: 1.5rem; border-radius: 10px;">
                    <div style="font-size: 0.9rem; color: var(--text-gray);">⛓️ Hierro</div>
                    <div style="font-size: 1.6rem; font-weight: 900; color: #888; margin-top: 0.5rem;">
                        ${formatNumber(totalIron)}
                    </div>
                </div>
            </div>
            
            <div style="text-align: center; background: rgba(255, 140, 0, 0.2); padding: 1.5rem; border-radius: 10px; border: 1px solid #ff8c00; margin-top: 2rem;">
                <div style="font-size: 0.9rem; color: var(--text-gray);">⏱️ Tiempo Total de Curación</div>
                <div style="font-size: 2rem; font-weight: 900; color: #ff8c00; margin-top: 0.5rem;">
                    ${formatTimeLong(totalTime)}
                </div>
            </div>
            
            <div style="margin-top: 2rem; padding: 1.5rem; background: rgba(0, 0, 0, 0.3); border-radius: 10px;">
                <h4 style="color: var(--primary); margin-bottom: 1rem;">💡 Recomendaciones</h4>
                <ul style="color: var(--text-gray); line-height: 1.8;">
                    <li>Usa Healing Speed Boost para reducir tiempo</li>
                    <li>Alliance help puede reducir tiempo en ~10%</li>
                    <li>Mejora Hospital Capacity research para evitar pérdidas permanentes</li>
                    ${wounded > 100000 ? '<li style="color: #ff0000;">⚠️ CRÍTICO: Muchas bajas. Considera repensar estrategia PvP</li>' : ''}
                </ul>
            </div>
        </div>
    `;
}

// Shield Calculator
function calculateShield() {
    const offlineHours = parseFloat(document.getElementById('offline-hours').value);
    const threatLevel = document.getElementById('threat-level').value;
    const exposedResources = document.getElementById('exposed-resources').value;
    const resultDiv = document.getElementById('shield-result');

    if (!offlineHours || offlineHours <= 0) {
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = '<p style="color: orange;">⚠️ Ingresa las horas offline</p>';
        return;
    }

    // Shield recommendation logic
    let recommendedHours = offlineHours;
    let shieldType = '';
    let reasoning = [];

    // Adjust for threat level
    const threatMultipliers = {
        'low': 1.0,
        'medium': 1.2,
        'high': 1.5,
        'extreme': 2.0
    };
    recommendedHours *= threatMultipliers[threatLevel];

    // Adjust for exposed resources
    const resourceMultipliers = {
        'none': 0.8,
        'low': 1.0,
        'medium': 1.2,
        'high': 1.5
    };
    recommendedHours *= resourceMultipliers[exposedResources];

    // Determine shield type
    if (recommendedHours <= 4) {
        shieldType = '4h Shield ';
        reasoning.push('Shield corto suficiente para protección básica');
    } else if (recommendedHours <= 8) {
        shieldType = '8h Shield';
        reasoning.push('Shield estándar - balance costo/beneficio');
    } else if (recommendedHours <= 24) {
        shieldType = '24h Shield';
        reasoning.push('Shield largo - offline extendido o amenaza alta');
    } else {
        shieldType = '3-Day Shield';
        reasoning.push('Shield muy largo - situación extrema');
    }

    // Add threat-specific advice
    if (threatLevel === 'low') {
        reasoning.push('Server pacífico - riesgo mínimo');
    } else if (threatLevel === 'medium') {
        reasoning.push('Nivel de amenaza normal - precaución estándar');
    } else if (threatLevel === 'high') {
        reasoning.push('⚠️ KvK activo - máxima precaución recomendada');
    } else {
        reasoning.push('🚨 ALERTA: Target marcado - considera teleport también');
    }

    // Add resource-specific advice
    if (exposedResources === 'high') {
        reasoning.push('⚠️ Muchos recursos expuestos - Target atractivo');
    } else if (exposedResources === 'none') {
        reasoning.push('✅ Recursos protegidos - riesgo reducido');
    }

    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `
        <div style="background: rgba(0, 210, 255, 0.1); padding: 2rem; border-radius: 15px; border: 2px solid var(--primary);">
            <h3 style="color: var(--primary); text-align: center; margin-bottom: 2rem;">
                🛡️ Recomendación de Shield
            </h3>
            
            <div style="text-align: center; background: linear-gradient(135deg, rgba(0, 210, 255, 0.2), rgba(147, 112, 219, 0.2)); padding: 3rem; border-radius: 15px; margin: 2rem 0;">
                <div style="font-size: 1rem; color: var(--text-gray);">Shield Recomendado</div>
                <div style="font-size: 3rem; font-weight: 900; color: var(--primary); margin: 1rem 0;">
                    ${shieldType}
                </div>
                <div style="color: #00ff88; font-size: 0.9rem;">
                    (${Math.round(recommendedHours * 10) / 10} horas de protección efectiva)
                </div>
            </div>
            
            <div style="background: rgba(0, 0, 0, 0.3); padding: 2rem; border-radius: 10px;">
                <h4 style="color: var(--primary); margin-bottom: 1rem;">📊 Análisis de Situación</h4>
                <div style="display: grid; gap: 1rem;">
                    ${reasoning.map(r => `
                        <div style="display: flex; align-items: start; gap: 0.8rem;">
                            <span style="color: var(--primary);">▸</span>
                            <span style="color: var(--text-gray); line-height: 1.6;">${r}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div style="margin-top: 2rem; padding: 1.5rem; background: rgba(255, 140, 0, 0.1); border-radius: 10px; border-left: 4px solid #ff8c00;">
                <h4 style="color: #ff8c00; margin-bottom: 1rem;">💡 Tips Adicionales</h4>
                <ul style="color: var(--text-gray); line-height: 1.8;">
                    <li>Stack multiple shields en inventory como backup</li>
                    <li>Activa anti-scout para ocultar tu base</li>
                    <li>Considera Peace Shield si no planeas atacar</li>
                    ${threatLevel === 'extreme' ? '<li style="color: #ff0000;">🚨 Considera TELEPORT inmediato a zona segura</li>' : ''}
                </ul>
            </div>
        </div>
    `;
}

// Farm Efficiency Calculator
function calculateFarm() {
    const troopLoad = parseInt(document.getElementById('troop-load').value);
    const gatheringTime = parseInt(document.getElementById('gathering-time').value);
    const marches = parseInt(document.getElementById('available-marches').value);
    const resourceType = document.getElementById('resource-type').value;
    const resultDiv = document.getElementById('farm-result');

    if (!troopLoad || !gatheringTime || !marches) {
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = '<p style="color: orange;">⚠️ Completa todos los campos</p>';
        return;
    }

    // Calculate efficiency
    const resourcePerMarch = troopLoad;
    const totalPerCycle = resourcePerMarch * marches;
    const cyclesPerHour = 60 / gatheringTime;
    const resourcesPerHour = totalPerCycle * cyclesPerHour;
    const resourcesPerDay = resourcesPerHour * 24;

    // Efficiency rating
    let efficiency = '';
    let color = '';
    if (resourcesPerHour >= 2000000) {
        efficiency = 'EXCELENTE 🔥';
        color = '#00ff88';
    } else if (resourcesPerHour >= 1000000) {
        efficiency = 'BUENA ✅';
        color = 'var(--primary)';
    } else if (resourcesPerHour >= 500000) {
        efficiency = 'MEDIA ⚖️';
        color = '#ff8c00';
    } else {
        efficiency = 'BAJA ⚠️';
        color = '#ff4444';
    }

    // Tips based on efficiency
    const tips = [];
    if (resourcesPerHour < 1000000) {
        tips.push('Mejora Troop Load research para aumentar capacidad');
        tips.push('Incrementa Gathering Speed en alliance tech');
        tips.push('Usa Chief Gear especializado en gathering');
    }
    if (marches < 4) {
        tips.push('Desbloquea más march slots mejorando tu Furnace');
    }
    if (gatheringTime > 30) {
        tips.push('Busca tiles más cercanos para reducir tiempo');
        tips.push('Mejora March Speed para moverte más rápido');
    }

    const resourceNames = {
        'wood': '🪵 Madera',
        'food': '🥩 Comida',
        'iron': '⛓️ Hierro',
        'mixed': '🔄 Recursos Mixtos'
    };

    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `
        <div style="background: rgba(0, 210, 255, 0.1); padding: 2rem; border-radius: 15px; border: 2px solid var(--primary);">
            <h3 style="color: var(--primary); text-align: center; margin-bottom: 2rem;">
                🌾 Análisis de Eficiencia de Farming
            </h3>
            
            <div style="text-align: center; background: rgba(0, 0, 0, 0.3); padding: 2rem; border-radius: 10px; margin-bottom: 2rem;">
                <div style="font-size: 0.9rem; color: var(--text-gray);">Recurso</div>
                <div style="font-size: 1.5rem; font-weight: 700; color: white; margin: 0.5rem 0;">
                    ${resourceNames[resourceType]}
                </div>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
                <div style="text-align: center; background: rgba(0,0,0,0.3); padding: 1.5rem; border-radius: 10px;">
                    <div style="font-size: 0.85rem; color: var(--text-gray);">Por Ciclo</div>
                    <div style="font-size: 1.4rem; font-weight: 900; color: white; margin-top: 0.5rem;">
                        ${formatNumber(totalPerCycle)}
                    </div>
                </div>
                <div style="text-align: center; background: rgba(0,0,0,0.3); padding: 1.5rem; border-radius: 10px;">
                    <div style="font-size: 0.85rem; color: var(--text-gray);">Por Hora</div>
                    <div style="font-size: 1.4rem; font-weight: 900; color: var(--primary); margin-top: 0.5rem;">
                        ${formatNumber(resourcesPerHour)}
                    </div>
                </div>
                <div style="text-align: center; background: rgba(0,0,0,0.3); padding: 1.5rem; border-radius: 10px;">
                    <div style="font-size: 0.85rem; color: var(--text-gray);">Por Día (24h)</div>
                    <div style="font-size: 1.4rem; font-weight: 900; color: #00ff88; margin-top: 0.5rem;">
                        ${formatNumber(resourcesPerDay)}
                    </div>
                </div>
            </div>
            
            <div style="text-align: center; background: linear-gradient(135deg, rgba(0, 255, 136, 0.2), rgba(0, 210, 255, 0.2)); padding: 2rem; border-radius: 15px; margin: 2rem 0; border: 2px solid ${color};">
                <div style="font-size: 0.9rem; color: var(--text-gray);">Eficiencia General</div>
                <div style="font-size: 2.5rem; font-weight: 900; color: ${color}; margin-top: 0.5rem;">
                    ${efficiency}
                </div>
                <div style="color: var(--text-gray); margin-top: 0.5rem; font-size: 0.9rem;">
                    ${cyclesPerHour.toFixed(1)} ciclos/hora con ${marches} marches
                </div>
            </div>
            
            ${tips.length > 0 ? `
                <div style="margin-top: 2rem; padding: 1.5rem; background: rgba(255, 140, 0, 0.1); border-radius: 10px; border-left: 4px solid #ff8c00;">
                    <h4 style="color: #ff8c00; margin-bottom: 1rem;">💡 Cómo Mejorar</h4>
                    <ul style="color: var(--text-gray); line-height: 1.8;">
                        ${tips.map(tip => `<li>${tip}</li>`).join('')}
                    </ul>
                </div>
            ` : `
                <div style="margin-top: 2rem; padding: 1.5rem; background: rgba(0, 255, 136, 0.1); border-radius: 10px; border-left: 4px solid #00ff88;">
                    <h4 style="color: #00ff88; margin-bottom: 1rem;">✅ Excelente Setup</h4>
                    <p style="color: var(--text-gray); line-height: 1.6;">
                        Tu configuración de farming es muy eficiente. Mantén este ritmo para maximizar recursos.
                    </p>
                </div>
            `}
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

// ===== BOOTSTRAP / INICIALIZACIÓN ROBUSTA =====
function bootstrapApp() {
    console.log('🚀 Inicializando Whiteout Survival Hub...');

    // Vincular menú hamburguesa
    navSlide();

    // Asegurar que el grid de héroes se cargue
    displayHeroes();
    renderHeroDatabase();

    // Poblar los selects del comparador
    if (typeof populateComparatorDropdowns === 'function') {
        populateComparatorDropdowns();
    }

    // Inicializar otros componentes
    if (typeof createSnow === 'function') createSnow();
    if (typeof loadEvents === 'function') loadEvents();

    // VINCULAR EVENTOS DE FILTRADO
    const modeBtns = document.querySelectorAll('.filter-btn');
    const genBtns = document.querySelectorAll('.gen-filter-btn');
    const heroSearch = document.getElementById('hero-search');

    modeBtns.forEach(btn => {
        btn.onclick = () => { // Usamos onclick para mayor compatibilidad
            modeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentModeFilter = btn.dataset.filter;
            displayHeroes();
        };
    });

    genBtns.forEach(btn => {
        btn.onclick = () => {
            genBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentGenFilter = btn.dataset.gen;
            displayHeroes();
        };
    });

    if (heroSearch) {
        heroSearch.oninput = (e) => {
            currentSearchTerm = e.target.value;
            displayHeroes();
        };
    }

    // Vincular scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.onclick = function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        };
    });

    console.log('✅ Aplicación lista.');
}

// ===== FUNCIONALIDAD DE NAVEGACIÓN =====
function navSlide() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    if (!burger || !nav) return;

    burger.onclick = () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    };
}

// Ejecutar lo antes posible
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootstrapApp);
} else {
    bootstrapApp();
}

// Respaldo por si acaso (imágenes pesadas bloqueando DOMContentLoaded)
window.addEventListener('load', () => {
    // Solo re-ejecutar si algo salió mal o no se cargaron héroes
    const grid = document.getElementById('hero-tier-list');
    if (grid && grid.children.length === 0) {
        bootstrapApp();
    }
});
