// ============================================
// GLOBAL SEARCH SYSTEM
// ============================================

// Search index - all searchable content
const searchIndex = {
    heroes: [
        // Se llenará dinámicamente desde heroesData
    ],
    buildings: [
        { name: 'Furnace', category: 'Edificios', description: 'El corazón de tu base. Determina nivel máximo de otros edificios.', url: 'buildings.html#furnace' },
        { name: 'Warehouse', category: 'Edificios', description: 'Protege recursos de saqueos.', url: 'buildings.html#warehouse' },
        { name: 'Hospital', category: 'Edificios', description: 'Cura tropas heridas en combate.', url: 'buildings.html#hospital' },
        { name: 'Training Ground', category: 'Edificios', description: 'Entrena tropas más rápido.', url: 'buildings.html#training' },
        { name: 'Research Lab', category: 'Edificios', description: 'Desbloquea mejoras tecnológicas.', url: 'buildings.html#research' }
    ],
    guides: [
        { name: 'Early Game Guide', category: 'Guías', description: 'Guía completa para jugadores nuevos (Lv 1-15)', url: 'guides/early-game.html' },
        { name: 'Mid Game Guide', category: 'Guías', description: 'Estrategias para progresión media (Lv 16-25)', url: 'guides/mid-game.html' },
        { name: 'Furnace Priority', category: 'Guías', description: 'Qué mejorar primero en tu Furnace', url: 'guides/furnace-priority.html' },
        { name: 'Hero Building', category: 'Guías', description: 'Cómo construir el mejor squad de héroes', url: 'guides/hero-building.html' },
        { name: 'SvS Strategy', category: 'Guías', description: 'Domina Server vs Server', url: 'guides/svs-strategy.html' },
        { name: 'F2P Guide', category: 'Guías', description: 'Maximiza progreso sin gastar', url: 'guides/f2p-guide.html' },
        { name: 'Alliance Guide', category: 'Guías', description: 'Todo sobre alianzas', url: 'guides/alliance-guide.html' }
    ],
    calculators: [
        { name: 'Furnace Resources Calculator', category: 'Calculadoras', description: 'Calcula recursos para upgrade', url: 'index.html#calculadoras' },
        { name: 'Power Estimator', category: 'Calculadoras', description: 'Estima tu power total', url: 'index.html#calculadoras' },
        { name: 'Stamina Manager', category: 'Calculadoras', description: 'Optimiza marches disponibles', url: 'index.html#calculadoras' },
        { name: 'Hospital Cost Calculator', category: 'Calculadoras', description: 'Costo de curar tropas', url: 'index.html#calculadoras' },
        { name: 'Shield Calculator', category: 'Calculadoras', description: 'Qué shield necesitas', url: 'index.html#calculadoras' },
        { name: 'Farm Efficiency', category: 'Calculadoras', description: 'Optimiza farming de recursos', url: 'index.html#calculadoras' },
        { name: 'PvP Combat Simulator', category: 'Calculadoras', description: 'Simula batallas PvP', url: 'index.html#calculadoras' },
        { name: 'Trade Optimizer', category: 'Calculadoras', description: 'Analiza trades de recursos', url: 'index.html#calculadoras' }
    ],
    systems: [
        { name: 'Troops Database', category: 'Sistemas', description: 'Información completa de tropas T1-T10', url: 'troops.html' },
        { name: 'Gear Database', category: 'Sistemas', description: 'Chief Gear y optimizador', url: 'gear.html' },
        { name: 'Research Tree', category: 'Sistemas', description: 'Árbol completo de investigación', url: 'research.html' },
        { name: 'Alliance Tech', category: 'Sistemas', description: 'Tecnologías de alianza', url: 'alliance-tech.html' },
        { name: 'Events Wiki', category: 'Sistemas', description: 'Guía de eventos recurrentes', url: 'events-wiki.html' },
        { name: 'Server Tracker', category: 'Sistemas', description: 'Estado de servers y alianzas', url: 'servers.html' },
        { name: 'World Map', category: 'Sistemas', description: 'Mapa interactivo del juego', url: 'world-map.html' },
        { name: 'Alliance Wars Tracker', category: 'Sistemas', description: 'Seguimiento de guerras', url: 'alliance-wars.html' },
        { name: 'Event Calendar', category: 'Sistemas', description: 'Calendario de eventos automático', url: 'event-calendar.html' }
    ],
    keywords: [
        { name: 'Furnace Frenzy', category: 'Eventos', description: 'Evento de construcción', url: 'events-wiki.html#furnace' },
        { name: 'Lucky Wheel', category: 'Eventos', description: 'Evento de ruleta', url: 'events-wiki.html#wheel' },
        { name: 'Kingdom Conflicts', category: 'Eventos', description: 'PvP weekend event', url: 'events-wiki.html#kvk' },
        { name: 'T9', category: 'Tropas', description: 'Tier 9 troops', url: 'troops.html' },
        { name: 'T10', category: 'Tropas', description: 'Tier 10 troops', url: 'troops.html' },
        { name: 'Bear Hunt', category: 'PvE', description: 'Polar Bear hunting', url: 'world-map.html' },
        { name: 'Rally', category: 'PvP', description: 'Coordinated attacks', url: 'guides/svs-strategy.html' }
    ]
};

// Initialize heroes in search index
function initializeSearchIndex() {
    if (typeof heroesData !== 'undefined') {
        searchIndex.heroes = heroesData.map(hero => ({
            name: hero.name,
            category: 'Héroes',
            description: `Gen ${hero.gen} ${hero.type} - Tier ${hero.tier} - ${hero.desc}`,
            url: 'heroes.html',
            tier: hero.tier,
            gen: hero.gen
        }));
    }
}

// Search function
function performSearch(query) {
    if (!query || query.length < 2) return [];

    const lowerQuery = query.toLowerCase();
    const results = [];

    // Search in all categories
    Object.values(searchIndex).forEach(category => {
        category.forEach(item => {
            let score = 0;

            // Exact match in name
            if (item.name.toLowerCase() === lowerQuery) {
                score = 100;
            }
            // Name starts with query
            else if (item.name.toLowerCase().startsWith(lowerQuery)) {
                score = 80;
            }
            // Name contains query
            else if (item.name.toLowerCase().includes(lowerQuery)) {
                score = 60;
            }
            // Description contains query
            else if (item.description && item.description.toLowerCase().includes(lowerQuery)) {
                score = 40;
            }
            // Category matches
            else if (item.category.toLowerCase().includes(lowerQuery)) {
                score = 20;
            }

            if (score > 0) {
                results.push({
                    ...item,
                    score,
                    highlight: highlightMatch(item.name, query)
                });
            }
        });
    });

    // Sort by score
    results.sort((a, b) => b.score - a.score);

    // Return top 10
    return results.slice(0, 10);
}

function highlightMatch(text, query) {
    const lowerText = text.toLowerCase();
    const lowerQuery = query.toLowerCase();
    const index = lowerText.indexOf(lowerQuery);

    if (index === -1) return text;

    const before = text.substring(0, index);
    const match = text.substring(index, index + query.length);
    const after = text.substring(index + query.length);

    return `${before}<mark style="background: var(--primary); color: black; padding: 0 0.2rem; border-radius: 3px;">${match}</mark>${after}`;
}

// ============================================
// SEARCH UI
// ============================================

let searchModal = null;
let searchInput = null;
let searchResults = null;

function createSearchUI() {
    // Create modal overlay
    const overlay = document.createElement('div');
    overlay.id = 'search-overlay';
    overlay.style.cssText = `
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        z-index: 9998;
    `;
    overlay.onclick = closeSearch;

    // Create search modal
    searchModal = document.createElement('div');
    searchModal.id = 'search-modal';
    searchModal.style.cssText = `
        display: none;
        position: fixed;
        top: 20%;
        left: 50%;
        transform: translateX(-50%);
        width: 90%;
        max-width: 700px;
        background: var(--bg-card);
        border-radius: 20px;
        border: 2px solid var(--primary);
        box-shadow: 0 20px 60px rgba(0, 210, 255, 0.3);
        z-index: 9999;
        max-height: 70vh;
        overflow: hidden;
    `;

    searchModal.innerHTML = `
        <div style="padding: 2rem; border-bottom: 2px solid var(--border);">
            <div style="position: relative;">
                <input 
                    type="text" 
                    id="global-search-input" 
                    placeholder="Buscar héroes, guías, calculadoras..."
                    style="
                        width: 100%;
                        padding: 1rem 1rem 1rem 3.5rem;
                        background: rgba(0, 0, 0, 0.3);
                        border: 2px solid var(--border);
                        border-radius: 15px;
                        color: white;
                        font-size: 1.1rem;
                        font-family: 'Outfit', sans-serif;
                    "
                />
                <i data-lucide="search" style="
                    position: absolute;
                    left: 1.2rem;
                    top: 50%;
                    transform: translateY(-50%);
                    color: var(--primary);
                    width: 20px;
                    height: 20px;
                "></i>
            </div>
            <div style="margin-top: 1rem; color: var(--text-gray); font-size: 0.9rem; text-align: center;">
                Presiona <kbd style="background: rgba(0, 210, 255, 0.2); padding: 0.2rem 0.5rem; border-radius: 5px; font-family: monospace;">ESC</kbd> para cerrar
            </div>
        </div>
        
        <div id="search-results" style="
            padding: 1.5rem;
            max-height: 50vh;
            overflow-y: auto;
        ">
            <div style="text-align: center; color: var(--text-gray); padding: 3rem;">
                <i data-lucide="search" style="width: 40px; height: 40px; margin-bottom: 1rem; opacity: 0.5;"></i>
                <p>Escribe para buscar...</p>
            </div>
        </div>
    `;

    document.body.appendChild(overlay);
    document.body.appendChild(searchModal);

    // Get references
    searchInput = document.getElementById('global-search-input');
    searchResults = document.getElementById('search-results');

    // Add event listeners
    searchInput.addEventListener('input', handleSearchInput);
    searchInput.addEventListener('keydown', handleSearchKeydown);

    // Recreate icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function handleSearchInput(e) {
    const query = e.target.value;

    if (query.length < 2) {
        searchResults.innerHTML = `
            <div style="text-align: center; color: var(--text-gray); padding: 3rem;">
                <i data-lucide="search" style="width: 40px; height: 40px; margin-bottom: 1rem; opacity: 0.5;"></i>
                <p>Escribe al menos 2 caracteres...</p>
            </div>
        `;
        if (typeof lucide !== 'undefined') lucide.createIcons();
        return;
    }

    const results = performSearch(query);

    if (results.length === 0) {
        searchResults.innerHTML = `
            <div style="text-align: center; color: var(--text-gray); padding: 3rem;">
                <i data-lucide="search-x" style="width: 40px; height: 40px; margin-bottom: 1rem; opacity: 0.5;"></i>
                <p>No se encontraron resultados para "${query}"</p>
            </div>
        `;
        if (typeof lucide !== 'undefined') lucide.createIcons();
        return;
    }

    searchResults.innerHTML = results.map((result, index) => `
        <a href="${result.url}" 
           class="search-result-item"
           style="
               display: block;
               padding: 1.5rem;
               background: rgba(0, 0, 0, 0.3);
               border-radius: 15px;
               margin-bottom: 1rem;
               text-decoration: none;
               border: 2px solid transparent;
               transition: all 0.3s;
           "
           onmouseover="this.style.borderColor='var(--primary)'; this.style.background='rgba(0, 210, 255, 0.1)';"
           onmouseout="this.style.borderColor='transparent'; this.style.background='rgba(0, 0, 0, 0.3)';"
        >
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.5rem;">
                <div style="color: white; font-weight: 700; font-size: 1.1rem;">
                    ${result.highlight}
                </div>
                <span style="
                    background: rgba(0, 210, 255, 0.2);
                    color: var(--primary);
                    padding: 0.3rem 0.8rem;
                    border-radius: 10px;
                    font-size: 0.8rem;
                    font-weight: 700;
                ">
                    ${result.category}
                </span>
            </div>
            <div style="color: var(--text-gray); font-size: 0.9rem; line-height: 1.6;">
                ${result.description}
            </div>
        </a>
    `).join('');
}

function handleSearchKeydown(e) {
    if (e.key === 'Escape') {
        closeSearch();
    }
}

function openSearch() {
    initializeSearchIndex();
    document.getElementById('search-overlay').style.display = 'block';
    searchModal.style.display = 'block';
    searchInput.focus();
    searchInput.value = '';
    searchResults.innerHTML = `
        <div style="text-align: center; color: var(--text-gray); padding: 3rem;">
            <i data-lucide="search" style="width: 40px; height: 40px; margin-bottom: 1rem; opacity: 0.5;"></i>
            <p>Escribe para buscar...</p>
        </div>
    `;
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function closeSearch() {
    document.getElementById('search-overlay').style.display = 'none';
    searchModal.style.display = 'none';
}

// ============================================
// KEYBOARD SHORTCUTS
// ============================================

document.addEventListener('keydown', function (e) {
    // Ctrl+K or Cmd+K to open search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        openSearch();
    }

    // ESC to close
    if (e.key === 'Escape') {
        closeSearch();
    }
});

// ============================================
// INITIALIZATION
// ============================================

// Create search UI when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createSearchUI);
} else {
    createSearchUI();
}
