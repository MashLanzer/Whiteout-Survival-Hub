// ============================================
// PVP COMBAT SIMULATOR
// ============================================

function calculatePvP() {
    const yourTroops = parseInt(document.getElementById('your-troops').value);
    const yourTier = parseInt(document.getElementById('your-tier').value);
    const yourAttack = parseInt(document.getElementById('your-attack').value) || 100;
    const yourDefense = parseInt(document.getElementById('your-defense').value) || 100;

    const enemyTroops = parseInt(document.getElementById('enemy-troops').value);
    const enemyTier = parseInt(document.getElementById('enemy-tier').value);
    const enemyAttack = parseInt(document.getElementById('enemy-attack').value) || 100;
    const enemyDefense = parseInt(document.getElementById('enemy-defense').value) || 100;

    const combatType = document.getElementById('combat-type').value;
    const resultDiv = document.getElementById('pvp-result');

    if (!yourTroops || !enemyTroops) {
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = '<p style="color: orange;">⚠️ Ingresa la cantidad de tropas de ambos lados</p>';
        return;
    }

    // Base power calculation
    const tierPower = { 5: 2, 7: 4, 9: 8, 10: 12 };

    let yourPower = yourTroops * tierPower[yourTier] * (yourAttack / 100) * (yourDefense / 100);
    let enemyPower = enemyTroops * tierPower[enemyTier] * (enemyAttack / 100) * (enemyDefense / 100);

    // Combat type modifiers
    let yourModifier = 1.0;
    let enemyModifier = 1.0;

    if (combatType === 'defense') {
        enemyModifier = 1.3; // Defensor tiene 30% ventaja
    } else if (combatType === 'rally') {
        yourModifier = 1.15; // Rally coordinado +15%
    }

    yourPower *= yourModifier;
    enemyPower *= enemyModifier;

    // Calculate outcome
    const powerRatio = yourPower / enemyPower;
    let winner = '';
    let winChance = 0;
    let yourLosses = 0;
    let enemyLosses = 0;

    if (powerRatio >= 1.5) {
        winner = 'TÚ (Victoria Decisiva)';
        winChance = 95;
        yourLosses = Math.floor(yourTroops * 0.15);
        enemyLosses = Math.floor(enemyTroops * 0.80);
    } else if (powerRatio >= 1.2) {
        winner = 'TÚ (Victoria Sólida)';
        winChance = 80;
        yourLosses = Math.floor(yourTroops * 0.25);
        enemyLosses = Math.floor(enemyTroops * 0.65);
    } else if (powerRatio >= 1.05) {
        winner = 'TÚ (Victoria Ajustada)';
        winChance = 65;
        yourLosses = Math.floor(yourTroops * 0.40);
        enemyLosses = Math.floor(enemyTroops * 0.50);
    } else if (powerRatio >= 0.95) {
        winner = 'EMPATE (Muy Parejo)';
        winChance = 50;
        yourLosses = Math.floor(yourTroops * 0.50);
        enemyLosses = Math.floor(enemyTroops * 0.50);
    } else if (powerRatio >= 0.8) {
        winner = 'ENEMIGO (Derrota Ajustada)';
        winChance = 35;
        yourLosses = Math.floor(yourTroops * 0.60);
        enemyLosses = Math.floor(enemyTroops * 0.35);
    } else if (powerRatio >= 0.6) {
        winner = 'ENEMIGO (Derrota Sólida)';
        winChance = 20;
        yourLosses = Math.floor(yourTroops * 0.75);
        enemyLosses = Math.floor(enemyTroops * 0.25);
    } else {
        winner = 'ENEMIGO (Derrota Decisiva)';
        winChance = 5;
        yourLosses = Math.floor(yourTroops * 0.90);
        enemyLosses = Math.floor(enemyTroops * 0.15);
    }

    const winnerColor = winner.includes('TÚ') ? '#00ff88' : (winner.includes('EMPATE') ? '#ff8c00' : '#ff4444');

    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `
        <div style="background: rgba(0, 210, 255, 0.1); padding: 2rem; border-radius: 15px; border: 2px solid var(--primary);">
            <h3 style="color: var(--primary); text-align: center; margin-bottom: 2rem;">
                ⚔️ Resultado de Simulación
            </h3>
            
            <div style="text-align: center; background: linear-gradient(135deg, rgba(0, 210, 255, 0.2), rgba(255, 140, 0, 0.2)); padding: 3rem; border-radius: 15px; margin: 2rem 0; border: 2px solid ${winnerColor};">
                <div style="font-size: 1rem; color: var(--text-gray);">Ganador Predicho</div>
                <div style="font-size: 2.5rem; font-weight: 900; color: ${winnerColor}; margin: 1rem 0;">
                    ${winner}
                </div>
                <div style="color: var(--text-gray); font-size: 1rem;">
                    Probabilidad de victoria: ${winChance}%
                </div>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin: 2rem 0;">
                <div style="background: rgba(0, 210, 255, 0.1); padding: 2rem; border-radius: 15px; border-left: 4px solid var(--primary);">
                    <h4 style="color: var(--primary); margin-bottom: 1rem;">👤 Tus Pérdidas Estimadas</h4>
                    <div style="font-size: 2rem; font-weight: 900; color: white; margin: 1rem 0;">
                        ${formatNumber(yourLosses)}
                    </div>
                    <div style="color: var(--text-gray);">
                        ${Math.floor((yourLosses / yourTroops) * 100)}% de tu ejército
                    </div>
                </div>
                
                <div style="background: rgba(255, 69, 0, 0.1); padding: 2rem; border-radius: 15px; border-left: 4px solid #ff4444;">
                    <h4 style="color: #ff4444; margin-bottom: 1rem;">💀 Pérdidas Enemigas</h4>
                    <div style="font-size: 2rem; font-weight: 900; color: white; margin: 1rem 0;">
                        ${formatNumber(enemyLosses)}
                    </div>
                    <div style="color: var(--text-gray);">
                        ${Math.floor((enemyLosses / enemyTroops) * 100)}% de su ejército
                    </div>
                </div>
            </div>
            
            <div style="margin-top: 2rem; padding: 1.5rem; background: rgba(0, 0, 0, 0.3); border-radius: 10px;">
                <h4 style="color: var(--primary); margin-bottom: 1rem;">📊 Análisis Detallado</h4>
                <ul style="color: var(--text-gray); line-height: 1.8;">
                    <li><strong>Ratio de poder:</strong> ${powerRatio.toFixed(2)}:1</li>
                    <li><strong>Tu poder efectivo:</strong> ${formatNumber(Math.floor(yourPower))}</li>
                    <li><strong>Poder enemigo:</strong> ${formatNumber(Math.floor(enemyPower))}</li>
                    <li><strong>Tipo de combate:</strong> ${getCombatTypeName(combatType)}</li>
                </ul>
            </div>
            
            <div style="margin-top: 2rem; padding: 1.5rem; background: rgba(255, 140, 0, 0.1); border-radius: 10px; border-left: 4px solid #ff8c00;">
                <h4 style="color: #ff8c00; margin-bottom: 1rem;">💡 Recomendaciones</h4>
                <ul style="color: var(--text-gray); line-height: 1.8;">
                    ${getRecommendations(powerRatio, winner).map(r => `<li>${r}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
}

function getCombatTypeName(type) {
    const names = {
        'field': 'Field Battle (Sin ventajas)',
        'rally': 'Rally Attack (+15% coordinación)',
        'defense': 'Base Defense (Defensor +30%)'
    };
    return names[type] || type;
}

function getRecommendations(ratio, winner) {
    const recs = [];

    if (winner.includes('TÚ')) {
        recs.push('✅ Combate favorable - Procede con confianza');
        recs.push('Usa Attack Boost items para minimizar pérdidas');
        if (ratio < 1.3) {
            recs.push('⚠️ Victoria no garantizada - considera refuerzos');
        }
    } else if (winner.includes('EMPATE')) {
        recs.push('⚠️ Combate muy parejo - resultado impredecible');
        recs.push('Espera mejores condiciones o busca aliados');
        recs.push('Un pequeño boost puede cambiar el resultado');
    } else {
        recs.push('🚨 NO RECOMENDADO - Probabilidad de derrota alta');
        recs.push('Busca refuerzos o evita este combate');
        recs.push('Considera rally coordinado con alliance');
    }

    recs.push('Recuerda: Hospital Capacity para evitar pérdidas permanentes');

    return recs;
}

// ============================================
// TRADE OPTIMIZER
// ============================================

function calculateTrade() {
    const offerType = document.getElementById('trade-offer-type').value;
    const offerAmount = parseInt(document.getElementById('trade-offer-amount').value);
    const needType = document.getElementById('trade-need-type').value;
    const needAmount = parseInt(document.getElementById('trade-need-amount').value);
    const marketSituation = document.getElementById('market-situation').value;
    const resultDiv = document.getElementById('trade-result');

    if (!offerAmount || !needAmount) {
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = '<p style="color: orange;">⚠️ Ingresa las cantidades de ambos recursos</p>';
        return;
    }

    if (offerType === needType) {
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = '<p style="color: red;">❌ No puedes tradear el mismo recurso</p>';
        return;
    }

    // Standard trade ratios (base 1:1)
    const baseRatios = {
        'wood-food': 1.0,
        'wood-iron': 1.1,
        'food-wood': 1.0,
        'food-iron': 1.05,
        'iron-wood': 0.9,
        'iron-food': 0.95
    };

    const tradeKey = `${offerType}-${needType}`;
    let ratio = baseRatios[tradeKey] || 1.0;

    // Market adjustments
    if (marketSituation === 'shortage') {
        ratio *= 1.3; // Necesitas pagar más si pides recurso escaso
    } else if (marketSituation === 'surplus') {
        ratio *= 0.8; // Recibes menos si ofreces recurso abundante
    }

    // Calculate fair trade
    const fairReceive = Math.floor(offerAmount * ratio);
    const yourRatio = offerAmount / needAmount;
    const fairRatio = offerAmount / fairReceive;

    // Determine if trade is good
    let tradeQuality = '';
    let qualityColor = '';
    let recommendation = '';

    if (needAmount <= fairReceive * 0.85) {
        tradeQuality = 'EXCELENTE';
        qualityColor = '#00ff88';
        recommendation = '✅ ACEPTA - Recibes mucho más de lo esperado';
    } else if (needAmount <= fairReceive * 0.95) {
        tradeQuality = 'BUENO';
        qualityColor = 'var(--primary)';
        recommendation = '✅ ACEPTA - Trade ligeramente favorable';
    } else if (needAmount <= fairReceive * 1.05) {
        tradeQuality = 'JUSTO';
        qualityColor = '#ff8c00';
        recommendation = '⚖️ NEUTRAL - Ratio de mercado estándar';
    } else if (needAmount <= fairReceive * 1.20) {
        tradeQuality = 'MALO';
        qualityColor = '#ff4444';
        recommendation = '⚠️ CUIDADO - Estás pagando de más';
    } else {
        tradeQuality = 'TERRIBLE';
        qualityColor = '#ff0000';
        recommendation = '🚨 RECHAZA - Trade muy desfavorable';
    }

    const resourceNames = {
        'wood': '🪵 Madera',
        'food': '🥩 Comida',
        'iron': '⛓️ Hierro'
    };

    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `
        <div style="background: rgba(0, 210, 255, 0.1); padding: 2rem; border-radius: 15px; border: 2px solid var(--primary);">
            <h3 style="color: var(--primary); text-align: center; margin-bottom: 2rem;">
                💱 Análisis de Trade
            </h3>
            
            <div style="background: rgba(0, 0, 0, 0.3); padding: 2rem; border-radius: 10px; margin-bottom: 2rem;">
                <div style="display: grid; grid-template-columns: 1fr auto 1fr; gap: 1.5rem; align-items: center;">
                    <div style="text-align: center;">
                        <div style="font-size: 0.9rem; color: var(--text-gray);">Das</div>
                        <div style="font-size: 1.5rem; font-weight: 900; color: white; margin: 0.5rem 0;">
                            ${formatNumber(offerAmount)}
                        </div>
                        <div style="font-size: 1.2rem;">${resourceNames[offerType]}</div>
                    </div>
                    <div style="text-align: center; font-size: 2rem;">⇄</div>
                    <div style="text-align: center;">
                        <div style="font-size: 0.9rem; color: var(--text-gray);">Recibes</div>
                        <div style="font-size: 1.5rem; font-weight: 900; color: white; margin: 0.5rem 0;">
                            ${formatNumber(needAmount)}
                        </div>
                        <div style="font-size: 1.2rem;">${resourceNames[needType]}</div>
                    </div>
                </div>
            </div>
            
            <div style="text-align: center; background: linear-gradient(135deg, rgba(0, 210, 255, 0.2), rgba(255, 140, 0, 0.2)); padding: 3rem; border-radius: 15px; margin: 2rem 0; border: 2px solid ${qualityColor};">
                <div style="font-size: 1rem; color: var(--text-gray);">Calidad del Trade</div>
                <div style="font-size: 2.5rem; font-weight: 900; color: ${qualityColor}; margin: 1rem 0;">
                    ${tradeQuality}
                </div>
                <div style="color: white; font-size: 1.1rem; margin-top: 1rem;">
                    ${recommendation}
                </div>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin: 2rem 0;">
                <div style="background: rgba(0, 0, 0, 0.3); padding: 1.5rem; border-radius: 10px; text-align: center;">
                    <div style="color: var(--text-gray); font-size: 0.9rem;">Ratio Esperado (Fair)</div>
                    <div style="font-size: 1.8rem; font-weight: 900; color: var(--primary); margin-top: 0.5rem;">
                        ${fairRatio.toFixed(2)}:1
                    </div>
                    <div style="color: var(--text-gray); font-size: 0.85rem; margin-top: 0.5rem;">
                        Deberías recibir: ${formatNumber(fairReceive)}
                    </div>
                </div>
                
                <div style="background: rgba(0, 0, 0, 0.3); padding: 1.5rem; border-radius: 10px; text-align: center;">
                    <div style="color: var(--text-gray); font-size: 0.9rem;">Ratio Real (Propuesto)</div>
                    <div style="font-size: 1.8rem; font-weight: 900; color: ${qualityColor}; margin-top: 0.5rem;">
                        ${yourRatio.toFixed(2)}:1
                    </div>
                    <div style="color: var(--text-gray); font-size: 0.85rem; margin-top: 0.5rem;">
                        ${needAmount > fairReceive ? 'Pagas de más' : 'Recibes más'}
                    </div>
                </div>
            </div>
            
            <div style="margin-top: 2rem; padding: 1.5rem; background: rgba(255, 140, 0, 0.1); border-radius: 10px; border-left: 4px solid #ff8c00;">
                <h4 style="color: #ff8c00; margin-bottom: 1rem;">💡 Tips de Trading</h4>
                <ul style="color: var(--text-gray); line-height: 1.8;">
                    <li>Ratios de mercado cambian según eventos y necesidades del server</li>
                    <li>Hierro suele valer más que Wood/Food en late-game</li>
                    <li>Tradea durante eventos para mejores ratios</li>
                    <li>Alliance marketplace suele tener mejores ratios que trading post</li>
                    ${needAmount > fairReceive * 1.1 ? '<li style="color: #ff0000;">⚠️ Considera negociar mejor ratio o buscar otro trader</li>' : ''}
                </ul>
            </div>
            
            <div style="margin-top: 2rem; padding: 1.5rem; background: rgba(0, 210, 255, 0.1); border-radius: 10px;">
                <h4 style="color: var(--primary); margin-bottom: 1rem;">📊 Contexto de Mercado</h4>
                <p style="color: var(--text-gray); line-height: 1.8;">
                    Situación: <strong>${getMarketSituationName(marketSituation)}</strong><br>
                    ${getMarketAdvice(marketSituation)}
                </p>
            </div>
        </div>
    `;
}

function getMarketSituationName(situation) {
    const names = {
        'normal': 'Mercado Normal',
        'shortage': 'Escasez del Recurso',
        'surplus': 'Exceso de Oferta'
    };
    return names[situation] || situation;
}

function getMarketAdvice(situation) {
    const advice = {
        'normal': 'Ratios estándar aplican. Trade justo esperado.',
        'shortage': 'El recurso que pides es escaso. Espera pagar premium (20-30% más).',
        'surplus': 'Tu recurso es abundante. Aceptarás menos en return (10-20% menos).'
    };
    return advice[situation] || '';
}

function formatNumber(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
    return num.toLocaleString();
}
