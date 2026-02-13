// ============================================
// WORLD MAP DATA & INTERACTIONS
// ============================================

const regionsData = {
    'frozen-tundra': {
        name: 'Frozen Tundra',
        icon: '❄️',
        description: 'Una vasta extensión helada al norte. Hogar de los Polar Bears más poderosos.',
        climate: 'Extremely Cold',
        difficulty: 'High',
        resources: {
            primary: 'Ninguno (zona PvE)',
            secondary: 'Polar Bear spawns'
        },
        features: [
            'Spawn de Polar Bears (Lv 30-50)',
            'Eventos especiales de invierno',
            'Zona de bajo PvP',
            'Ideal para Bear hunts en grupo'
        ],
        tips: 'Coordin a con alliance para maximizar bear hunts. Los bears aquí dan mejores rewards.'
    },
    'whispering-woods': {
        name: 'Whispering Woods',
        icon: '🌲',
        description: 'Densos bosques repletos de recursos de madera. Rica en tiles de alto nivel.',
        climate: 'Temperate',
        difficulty: 'Medium',
        resources: {
            primary: '🪵 Madera (Lv 1-9)',
            secondary: '🥩 Comida (Lv 1-5)'
        },
        features: [
            'Mayor concentración de Wood tiles',
            'Tiles Lv 7-9 comunes',
            'Zona segura para farming',
            'Buena para nuevos jugadores'
        ],
        tips: 'Mejor zona para wood farming. Teleport aquí si necesitas madera urgente.'
    },
    'central-plains': {
        name: 'Central Plains',
        icon: '⭐',
        description: 'El corazón del mapa. Zona de máxima actividad PvP y recursos mixtos.',
        climate: 'Balanced',
        difficulty: 'Very High',
        resources: {
            primary: '⛓️ Hierro (Lv 1-9)',
            secondary: 'Todos los recursos (mixto)'
        },
        features: [
            'PvP EXTREMO - Zona de guerra',
            'Recursos de todos los tipos',
            'Alliance territories',
            'SvS battleground principal'
        ],
        tips: '⚠️ PELIGRO: Solo farm aquí con shield o respaldo de alliance. Zona de máximo PvP.'
    },
    'burning-wastes': {
        name: 'Burning Wastes',
        icon: '🔥',
        description: 'Tierras áridas y calientes. Abundantes en recursos de comida (caza).',
        climate: 'Hot & Dry',
        difficulty: 'Medium',
        resources: {
            primary: '🥩 Comida (Lv 1-9)',
            secondary: '⛓️ Hierro (Lv 1-5)'
        },
        features: [
            'Mayor concentración de Food tiles',
            'Hunting grounds',
            'PvP moderado',
            'Eventos de hunting'
        ],
        tips: 'Farm comida aquí. Tiles Lv 8-9 son frecuentes cerca del centro de la zona.'
    },
    'shadowlands': {
        name: 'Shadowlands',
        icon: '🌑',
        description: 'Tierras oscuras y misteriosas. Zona de eventos especiales y challenges.',
        climate: 'Dark & Mysterious',
        difficulty: 'Extreme',
        resources: {
            primary: 'Eventos especiales',
            secondary: 'Recursos raros'
        },
        features: [
            'Eventos limitados',
            'Boss spawns especiales',
            'Recursos únicos',
            'Requiere high power para acceder'
        ],
        tips: 'Solo para jugadores avanzados. Coordina con alliance para eventos especiales.'
    }
};

const minesData = {
    'wood': {
        name: 'Mina de Madera',
        icon: '🪵',
        levels: {
            1: { resources: 20000, time: 10, stamina: 5 },
            2: { resources: 40000, time: 15, stamina: 8 },
            3: { resources: 80000, time: 20, stamina: 10 },
            4: { resources: 150000, time: 25, stamina: 12 },
            5: { resources: 250000, time: 30, stamina: 15 },
            6: { resources: 400000, time: 35, stamina: 18 },
            7: { resources: 600000, time: 40, stamina: 20 },
            8: { resources: 850000, time: 45, stamina: 25 },
            9: { resources: 1200000, time: 50, stamina: 30 }
        }
    },
    'iron': {
        name: 'Mina de Hierro',
        icon: '⛓️',
        levels: {
            1: { resources: 15000, time: 10, stamina: 5 },
            2: { resources: 35000, time: 15, stamina: 8 },
            3: { resources: 70000, time: 20, stamina: 10 },
            4: { resources: 130000, time: 25, stamina: 12 },
            5: { resources: 220000, time: 30, stamina: 15 },
            6: { resources: 350000, time: 35, stamina: 18 },
            7: { resources: 550000, time: 40, stamina: 20 },
            8: { resources: 800000, time: 45, stamina: 25 },
            9: { resources: 1100000, time: 50, stamina: 30 }
        }
    },
    'food': {
        name: 'Mina de Comida',
        icon: '🥩',
        levels: {
            1: { resources: 25000, time: 10, stamina: 5 },
            2: { resources: 50000, time: 15, stamina: 8 },
            3: { resources: 95000, time: 20, stamina: 10 },
            4: { resources: 170000, time: 25, stamina: 12 },
            5: { resources: 280000, time: 30, stamina: 15 },
            6: { resources: 450000, time: 35, stamina: 18 },
            7: { resources: 650000, time: 40, stamina: 20 },
            8: { resources: 900000, time: 45, stamina: 25 },
            9: { resources: 1300000, time: 50, stamina: 30 }
        }
    },
    'bear': {
        name: 'Polar Bear',
        icon: '🐻',
        info: {
            stamina: 25,
            rewards: 'Speedups, Hero XP, Gems, Alliance Help tokens',
            difficulty: 'Requiere march coordinado',
            respawn: '6-8 horas'
        }
    }
};

// ============================================
// DISPLAY FUNCTIONS
// ============================================

function showRegionInfo(regionId) {
    const region = regionsData[regionId];
    if (!region) return;

    const panel = document.getElementById('info-panel');
    panel.style.display = 'block';

    panel.innerHTML = `
        <h2 style="color: var(--primary); margin-bottom: 2rem; text-align: center;">
            ${region.icon} ${region.name}
        </h2>
        
        <p style="color: var(--text-gray); font-size: 1.1rem; line-height: 1.8; margin-bottom: 2rem; text-align: center;">
            ${region.description}
        </p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
            <div style="background: rgba(0, 0, 0, 0.3); padding: 1.5rem; border-radius: 10px; text-align: center;">
                <div style="color: var(--text-gray); font-size: 0.9rem;">Clima</div>
                <div style="color: white; font-weight: 900; font-size: 1.2rem; margin-top: 0.5rem;">
                    ${region.climate}
                </div>
            </div>
            <div style="background: rgba(0, 0, 0, 0.3); padding: 1.5rem; border-radius: 10px; text-align: center;">
                <div style="color: var(--text-gray); font-size: 0.9rem;">Dificultad</div>
                <div style="color: ${getDifficultyColor(region.difficulty)}; font-weight: 900; font-size: 1.2rem; margin-top: 0.5rem;">
                    ${region.difficulty}
                </div>
            </div>
            <div style="background: rgba(0, 0, 0, 0.3); padding: 1.5rem; border-radius: 10px; text-align: center;">
                <div style="color: var(--text-gray); font-size: 0.9rem;">Recurso Principal</div>
                <div style="color: var(--primary); font-weight: 900; font-size: 1.2rem; margin-top: 0.5rem;">
                    ${region.resources.primary}
                </div>
            </div>
        </div>
        
        <div style="background: rgba(0, 210, 255, 0.1); padding: 2rem; border-radius: 15px; margin: 2rem 0; border-left: 4px solid var(--primary);">
            <h3 style="color: var(--primary); margin-bottom: 1rem;">🌟 Características</h3>
            <ul style="color: var(--text-gray); line-height: 2;">
                ${region.features.map(f => `<li>${f}</li>`).join('')}
            </ul>
        </div>
        
        <div style="background: rgba(255, 140, 0, 0.1); padding: 2rem; border-radius: 15px; border-left: 4px solid #ff8c00;">
            <h3 style="color: #ff8c00; margin-bottom: 1rem;">💡 Tip Estratégico</h3>
            <p style="color: var(--text-gray); line-height: 1.8;">
                ${region.tips}
            </p>
        </div>
    `;

    panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function showMineInfo(type, level) {
    const mine = minesData[type];
    if (!mine) return;

    const panel = document.getElementById('info-panel');
    panel.style.display = 'block';

    if (type === 'bear') {
        panel.innerHTML = `
            <h2 style="color: var(--primary); margin-bottom: 2rem; text-align: center;">
                ${mine.icon} ${mine.name}
            </h2>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
                <div style="background: rgba(0, 0, 0, 0.3); padding: 1.5rem; border-radius: 10px; text-align: center;">
                    <div style="color: var(--text-gray); font-size: 0.9rem;">Stamina Cost</div>
                    <div style="color: var(--primary); font-weight: 900; font-size: 1.5rem; margin-top: 0.5rem;">
                        ${mine.info.stamina}
                    </div>
                </div>
                <div style="background: rgba(0, 0, 0, 0.3); padding: 1.5rem; border-radius: 10px; text-align: center;">
                    <div style="color: var(--text-gray); font-size: 0.9rem;">Respawn Time</div>
                    <div style="color: #ff8c00; font-weight: 900; font-size: 1.5rem; margin-top: 0.5rem;">
                        ${mine.info.respawn}
                    </div>
                </div>
            </div>
            
            <div style="background: rgba(0, 255, 136, 0.1); padding: 2rem; border-radius: 15px; margin: 2rem 0;">
                <h3 style="color: #00ff88; margin-bottom: 1rem;">🎁 Rewards</h3>
                <p style="color: var(--text-gray); font-size: 1.1rem; line-height: 1.8;">
                    ${mine.info.rewards}
                </p>
            </div>
            
            <div style="background: rgba(255, 140, 0, 0.1); padding: 2rem; border-radius: 15px;">
                <h3 style="color: #ff8c00; margin-bottom: 1rem;">💡 Strategy</h3>
                <p style="color: var(--text-gray); line-height: 1.8;">
                    Requiere rally coordinado de 3-5 jugadores. Usa Hero con Bear Slayer skills (Natalia, Flint). 
                    Espera a que bear tenga <50% HP para unirte al rally y ahorrar stamina.
                </p>
            </div>
        `;
    } else {
        const levelInfo = mine.levels[level];

        panel.innerHTML = `
            <h2 style="color: var(--primary); margin-bottom: 2rem; text-align: center;">
                ${mine.icon} ${mine.name} - Nivel ${level}
            </h2>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
                <div style="background: rgba(0, 0, 0, 0.3); padding: 1.5rem; border-radius: 10px; text-align: center;">
                    <div style="color: var(--text-gray); font-size: 0.9rem;">Recursos Totales</div>
                    <div style="color: var(--primary); font-weight: 900; font-size: 1.4rem; margin-top: 0.5rem;">
                        ${formatNumber(levelInfo.resources)}
                    </div>
                </div>
                <div style="background: rgba(0, 0, 0, 0.3); padding: 1.5rem; border-radius: 10px; text-align: center;">
                    <div style="color: var(--text-gray); font-size: 0.9rem;">Tiempo Gathering</div>
                    <div style="color: #ff8c00; font-weight: 900; font-size: 1.4rem; margin-top: 0.5rem;">
                        ${levelInfo.time} min
                    </div>
                </div>
                <div style="background: rgba(0, 0, 0, 0.3); padding: 1.5rem; border-radius: 10px; text-align: center;">
                    <div style="color: var(--text-gray); font-size: 0.9rem;">Stamina Cost</div>
                    <div style="color: #00ff88; font-weight: 900; font-size: 1.4rem; margin-top: 0.5rem;">
                        ${levelInfo.stamina}
                    </div>
                </div>
            </div>
            
            <div style="background: rgba(0, 210, 255, 0.1); padding: 2rem; border-radius: 15px; margin: 2rem 0;">
                <h3 style="color: var(--primary); margin-bottom: 1rem;">📊 Eficiencia</h3>
                <p style="color: var(--text-gray); line-height: 1.8;">
                    <strong>Recursos por minuto:</strong> ${formatNumber(Math.floor(levelInfo.resources / levelInfo.time))}<br>
                    <strong>Recursos por stamina:</strong> ${formatNumber(Math.floor(levelInfo.resources / levelInfo.stamina))}<br>
                    <strong>Recomendado para:</strong> ${getLevelRecommendation(level)}
                </p>
            </div>
            
            <div style="background: rgba(255, 140, 0, 0.1); padding: 2rem; border-radius: 15px;">
                <h3 style="color: #ff8c00; margin-bottom: 1rem;">💡 Tips</h3>
                <ul style="color: var(--text-gray); line-height: 1.8;">
                    <li>Usa Gathering Speed boost en niveles 7+</li>
                    <li>Maximiza Troop Load para capturar más recursos</li>
                    <li>Farm en horarios de baja actividad para evitar PvP</li>
                    ${level >= 7 ? '<li style="color: #ff0000;">⚠️ Tiles de alto nivel son targets PvP - usa shield</li>' : ''}
                </ul>
            </div>
        `;
    }

    panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function getDifficultyColor(difficulty) {
    const colors = {
        'Low': '#00ff88',
        'Medium': '#ff8c00',
        'High': '#ff4444',
        'Very High': '#ff0000',
        'Extreme': '#9370db'
    };
    return colors[difficulty] || 'white';
}

function getLevelRecommendation(level) {
    if (level <= 3) return 'Jugadores nuevos (Furnace 1-15)';
    if (level <= 6) return 'Mid-game players (Furnace 16-25)';
    return 'Late-game players (Furnace 26+)';
}

function formatNumber(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
    return num.toLocaleString();
}
