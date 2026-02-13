// ===== DATOS MAESTROS DE HÉROES - WHITEOUT SURVIVAL HUB =====
// Actualizado: Feb 2026 | Restaurado para coincidir con imágenes existentes
// Nombres ajustados para coincidir con los archivos en /images/

const heroesData = [
    // GENERACIÓN 1
    {
        name: "Jeronimo", tier: "S+", gen: 1, type: "Infantería", mode: ["pvp", "pve", "bear", "arena"],
        desc: "El tanque definitivo de Gen 1. Su aura de nobleza potencia el ataque de toda la tropa un 20%.",
        skills: "Shield Wall, Tanque Elite, Aura de Nobleza",
        bestFor: "Liderar Rallies PvP, Defensa de Fortaleza, Bear Hunt",
        story: "Aristócrata del antiguo imperio y maestro de duelos. Tras ser traicionado por los mercenarios de Phaethon, se unió a la Dawn Alliance.",
        tips: "Es el héroe con mejor escalado de daño de Gen 1. Úsalo siempre como capitán en Bear Hunt.",
        synergy: "Molly, Natalia, Bahiti",
        stats: { atk: 95, def: 98, hp: 92 }
    },
    {
        name: "Molly", tier: "S+", gen: 1, type: "Lanceros", mode: ["pvp", "pve", "arena"],
        desc: "La heroína F2P por excelencia. Daño masivo constante y curación ligera.",
        skills: "Snowball Toss, Soporte Táctico, Lanzanieve Mecánico",
        bestFor: "Exploración, Arena, Versatilidad F2P",
        story: "Encontrada en un laboratorio experimental. Maneja una tecnología de frío única que congela a sus enemigos en segundos.",
        tips: "Sus fragmentos son fáciles de obtener en misiones de inteligencia. Llévala a 5 estrellas lo antes posible.",
        synergy: "Jeronimo, Natalia, Bahiti",
        stats: { atk: 90, def: 85, hp: 88 }
    },
    {
        name: "Natalia", tier: "S", gen: 1, type: "Infantería", mode: ["pve", "bear", "arena"],
        desc: "Especialista en control de masas y daño a bestias con su compañero oso Kasia.",
        skills: "Beast Slayer, Impacto Sísmico, Compañero Oso",
        bestFor: "Bear Hunt, Aturdimiento en Arena",
        story: "Prodigio de la ecología que puede hablar con los animales. Su oso Kasia es su única familia.",
        tips: "Su 'Impacto Sísmico' puede aturdir a varios enemigos a la vez.",
        synergy: "Bahiti, Jeronimo, Molly",
        stats: { atk: 86, def: 92, hp: 95 }
    },
    {
        name: "Bahiti", tier: "A", gen: 1, type: "Tiradores", mode: ["pve", "bear"],
        desc: "Francotirador de largo alcance especializado en dañar la retaguardia enemiga.",
        skills: "Precisión Letal, Flecha Perforante",
        bestFor: "Exploración, Bear Hunt",
        story: "Emisario de la Dawn Alliance que busca una forma de detener el frío eterno.",
        tips: "En Exploración, muévelo para que su flecha atraviese a tantos enemigos como sea posible.",
        synergy: "Jeronimo, Natalia, Molly",
        stats: { atk: 92, def: 75, hp: 78 }
    },
    {
        name: "Zinman", tier: "B", gen: 1, type: "Tiradores", mode: ["pve"],
        desc: "Maestro arquitecto que acelera el desarrollo de la ciudad.",
        skills: "Ingeniería de Fortalezas, Aceleración Urbana",
        bestFor: "Reducción de tiempo de construcción",
        story: "Diseñó el Sunfire Castle. Busca redención aplicando su genio arquitectónico a la supervivencia.",
        tips: "Su verdadero valor es pasivo: tenerlo subido reduce días de construcción.",
        stats: { atk: 70, def: 80, hp: 82 }
    },
    {
        name: "Gina", tier: "C", gen: 1, type: "Tiradores", mode: ["beasts"],
        desc: "La reina de la caza. Reduce el coste de estamina para rallies.",
        skills: "Flecha Incendiaria, Ojo de Águila",
        bestFor: "Matar Bestias, Evento 'Gina's Revenge'",
        story: "Líder de 'Gina's Eagles'. Una mercenaria con un amor secreto por los pasteles.",
        tips: "NUNCA la uses en PvP. Su única función es ahorrar estamina contra bestias.",
        stats: { atk: 85, def: 70, hp: 72 }
    },
    {
        name: "cloris", tier: "C", gen: 1, type: "Tiradores", mode: ["collection"],
        desc: "Cazadora experta con instinto para la recolección de comida.",
        skills: "Sexto Sentido, Recolección Maestra",
        bestFor: "Recolección de Comida",
        story: "Cazadora de pueblo que huyó de una vida noble. Prefiere la libertad de la nieve.",
        tips: "Esencial para llenar tus almacenes rápidamente. No la uses en combate.",
        stats: { atk: 65, def: 70, hp: 75 }
    },
    {
        name: "smith", tier: "C", gen: 1, type: "Infantería", mode: ["pve"],
        desc: "El herrero indomable. Fuerza bruta para el inicio del juego.",
        skills: "Temple de Hierro, Golpe de Maza",
        bestFor: "Early game PvE",
        story: "Hombre de pocas palabras que protege la fragua y la ciudad con su martillo.",
        tips: "Reemplázalo por otros héroes legendarios en cuanto los consigas.",
        stats: { atk: 75, def: 85, hp: 80 }
    },
    {
        name: "Jessie", tier: "B", gen: 1, type: "Lanceros", mode: ["pve", "collection"],
        desc: "Maquinista experta y optimista incombustible.",
        skills: "Sierra de Vapor, Lanza Táctica",
        bestFor: "Recolección de Madera, Defensa temprana",
        story: "Conocida como la maquinista ametralladora. Sus inventos son vitales para Arcadia.",
        tips: "Útil para acelerar la obtención de madera para tu horno.",
        stats: { atk: 80, def: 75, hp: 78 }
    },

    // GENERACIÓN 2
    {
        name: "Philly", tier: "S", gen: 2, type: "Lanceros", mode: ["arena", "pvp"],
        desc: "La primera gran sanadora. Mantiene vivo al equipo bajo fuego.",
        skills: "Antídoto Universal, Regeneración Celular",
        bestFor: "Soporte de equipo, Arena",
        story: "Médica brillante que busca la cura definitiva tras perder a su familia.",
        tips: "Su curación escala con su ataque. Equípala con buenos accesorios.",
        stats: { atk: 85, def: 82, hp: 90 }
    },
    {
        name: "charlie", tier: "S", gen: 2, type: "Infantería", mode: ["pvp", "arena"],
        desc: "Experto en explosivos con daño en área ensordecedor.",
        skills: "Granada Devastadora, Grito de Guerra",
        bestFor: "Rallies, Arena",
        story: "Demolicionista que habla gritando por su pérdida de audición.",
        tips: "Su buff de ataque es universal para toda la marcha.",
        stats: { atk: 88, def: 90, hp: 92 }
    },

    // GENERACIÓN 3
    {
        name: "Logan", tier: "S+", gen: 3, type: "Infantería", mode: ["pvp", "svs", "fortress"],
        desc: "Tanque de Gen 3 que aumenta la salud de toda la tropa drásticamente.",
        skills: "Armadura de Vapor, Baluarte de Hierro",
        bestFor: "Ataque a Fortalezas, Defensa de Ciudad",
        story: "Ingeniero con armadura de vapor. Defiende a los inocentes contra Phaethon.",
        tips: "Ideal para guarniciones en SVS por su bonificación de salud.",
        stats: { atk: 88, def: 98, hp: 99 }
    },
    {
        name: "Mia", tier: "S", gen: 3, type: "Lanceros", mode: ["bear", "pvp", "arena"],
        desc: "Buff de daño global para toda la alianza. Indispensable para Bear Hunt.",
        skills: "Visión del Destino, Grito de Guerra",
        bestFor: "Bear Hunt (Tier 0), Rallies",
        story: "Líder de una caravana que puede prever el futuro en la nieve.",
        tips: "Sigue siendo meta en Bear Hunt incluso en servidores avanzados.",
        stats: { atk: 92, def: 85, hp: 88 }
    },
    {
        name: "Norah", tier: "A", gen: 3, type: "Tiradores", mode: ["pvp", "pve"],
        desc: "Tiradora versátil con alta probabilidad de crítico.",
        skills: "Critical Master, Fuego de Cobertura",
        bestFor: "PvP Intermedio",
        story: "Líder de una brigada ligera, juró proteger a su hermana Gwen.",
        tips: "Enfócate en potenciar su probabilidad de daño crítico.",
        stats: { atk: 89, def: 75, hp: 78 }
    },
    {
        name: "Greg", tier: "S", gen: 3, type: "Infantería", mode: ["pvp", "pve"],
        desc: "Juez implacable con gran capacidad de aguante.",
        skills: "Martillo de Justicia, Veredicto Final",
        bestFor: "Tanque de apoyo, Control",
        story: "Dedicado a restaurar la ley en el caos del páramo helado.",
        tips: "Excelente para misiones donde necesites aturdir al objetivo principal.",
        stats: { atk: 82, def: 95, hp: 94 }
    },

    // GENERACIÓN 4
    {
        name: "Reina", tier: "S+", gen: 4, type: "Lanceros", mode: ["arena", "pvp"],
        desc: "Asesina que ejecuta a los tiradores de la retaguardia.",
        skills: "Danza de Sombras, Golpe Fatal",
        bestFor: "Arena (Counter de Tiradores)",
        story: "Huérfana entrenada por Phaethon, ahora guarda a la caravana de Mia.",
        tips: "Ponla frente al tirador enemigo más fuerte en la Arena.",
        stats: { atk: 99, def: 75, hp: 82 }
    },
    {
        name: "Lynn", tier: "S", gen: 4, type: "Tiradores", mode: ["arena", "pvp"],
        desc: "Limpia efectos de control y potencia el daño crítico.",
        skills: "Limpieza de Control, Melodía de Batalla",
        bestFor: "Counter de Aturdimiento",
        story: "Barda cuyas melodías inspiran a los guerreros y confunden al enemigo.",
        tips: "Muy útil contra equipos que dependen mucho del CC (Natalia, Magnus).",
        stats: { atk: 90, def: 88, hp: 85 }
    },
    {
        name: "Magnus", tier: "S+", gen: 4, type: "Infantería", mode: ["pvp", "arena"],
        desc: "Tanque disruptor que reduce el ataque enemigo sustancialmente.",
        skills: "Rugido Majestuoso, Barrera del Rey",
        bestFor: "Tanque principal, SVS",
        story: "Famoso por sus historias exageradas, pero con una fuerza física muy real.",
        tips: "Su barrera protege a todo el equipo de daño masivo.",
        stats: { atk: 90, def: 100, hp: 98 }
    },
    {
        name: "Eugene", tier: "A", gen: 4, type: "Lanceros", mode: ["pvp", "pve"],
        desc: "Leñador con fuerza sobrehumana causada por cristales de fuego.",
        skills: "Hacha Devastadora, Grito del Bosque",
        bestFor: "Recolección de Madera, Combate cercano",
        story: "Acompañado por visiones de espíritus, busca proteger su bosque helado.",
        tips: "Aumenta la velocidad de recolección de madera significativamente.",
        stats: { atk: 85, def: 80, hp: 85 }
    },
    {
        name: "Edith", tier: "A", gen: 4, type: "Infantería", mode: ["alliance"],
        desc: "Soporte unida a un humanoide metálico protector.",
        skills: "Rally Support, Escudo de Mr. Tin",
        bestFor: "Defensa de Alianza",
        story: "Científica que nunca se separa de su autómata protector de la infancia.",
        tips: "Requiere su widget para ser realmente competitiva en rallies.",
        stats: { atk: 78, def: 90, hp: 88 }
    },

    // GENERACIÓN 5
    {
        name: "Gwen", tier: "S", gen: 5, type: "Tiradores", mode: ["pve", "arena"],
        desc: "Daño masivo a un solo objetivo y gran movilidad aérea.",
        skills: "Impacto de Precisión, Asalto Aéreo",
        bestFor: "Jefes de Alianza, Arena",
        story: "Genio mecánico que sueña con conquistar los cielos del Tundra.",
        tips: "Mantenla segura en la retaguardia para que su daño escale al máximo.",
        stats: { atk: 98, def: 75, hp: 80 }
    },
    {
        name: "Lumak-Bokan", tier: "A", gen: 5, type: "Lanceros", mode: ["pve", "bear"],
        desc: "Guerrero tribal con maestría en ataques espirituales.",
        skills: "Espíritu del Lobo, Carga Tribal",
        bestFor: "Exploración, Apoyo",
        story: "Guerrero de las tierras profundas que comanda el poder de los ancestros.",
        tips: "Bueno para romper las líneas de defensa iniciales.",
        stats: { atk: 85, def: 85, hp: 85 }
    },

    // GENERACIÓN 6
    {
        name: "Wayne", tier: "S", gen: 6, type: "Lanceros", mode: ["pve", "arena"],
        desc: "Controlador que atrae a los enemigos con su bumerán magnético.",
        skills: "Bumerán de Vacío, Atracción Magnética",
        bestFor: "Control de masas",
        story: "Cazarrecompensas solitario con tecnología de un mundo olvidado.",
        tips: "Úsalo para agrupar enemigos y golpearlos con habilidades en área.",
        stats: { atk: 88, def: 90, hp: 92 }
    },
    {
        name: "Sonya", tier: "S+", gen: 6, type: "Lanceros", mode: ["pvp", "arena", "svs"],
        desc: "Reina de los lanceros con daño de sangrado y perforación.",
        skills: "Corte de Presión, Hidráulica de Guerra",
        bestFor: "Duelos 1v1, Counter tanques",
        story: "Noble exiliada que ahora comanda el submarino 'The Neptune'.",
        tips: "Excelente para destruir tanques con mucha defensa como Jeronimo.",
        stats: { atk: 97, def: 88, hp: 90 }
    },

    // GENERACIÓN 8
    {
        name: "Gatot", tier: "S+", gen: 8, type: "Infantería", mode: ["pvp", "arena"],
        desc: "Tanque legendario con resistencia milenaria e inmunidad temporal.",
        skills: "Escudo Real, Golpe de Gatot",
        bestFor: "Defensa de Guarnición",
        story: "Rey guerrero de tierras lejanas en busca del tesoro nacional de su pueblo.",
        tips: "Es casi imposible de bajar en la Arena gracias a su escudo real.",
        stats: { atk: 85, def: 100, hp: 98 }
    },
    {
        name: "Jasser", tier: "A", gen: 8, type: "Tiradores", mode: ["research"],
        desc: "Sabio que acelera las investigaciones de la academia.",
        skills: "Intelecto de Fortaleza, Rapid Fire",
        bestFor: "Velocidad de Investigación",
        story: "Erudito con mente enciclopédica que busca curar al planeta.",
        tips: "Imprescindible para avanzar rápido en el árbol tecnológico militar.",
        stats: { atk: 80, def: 75, hp: 80 }
    },

    // GENERACIÓN 9
    {
        name: "Fred", tier: "S", gen: 9, type: "Lanceros", mode: ["pvp", "pve"],
        desc: "Lancero especializado en daño en línea y presión constante.",
        skills: "Volley Fire, Presión de Carga",
        bestFor: "Ataque a bases",
        story: "Ex-bombero del imperio que ahora extingue los fuegos de la guerra.",
        tips: "Su daño aumenta con cada ataque consecutivo al mismo objetivo.",
        stats: { atk: 92, def: 85, hp: 85 }
    },
    {
        name: "Gordon", tier: "S", gen: 9, type: "Lanceros", mode: ["pvp", "bear"],
        desc: "Maestro de toxinas que debilita la defensa enemiga permanentemente.",
        skills: "Debilitación Tóxica, Lluvia Ácida",
        bestFor: "Bear Hunt, Derrotar tanques HP",
        story: "Alcalde de día que usa venenos por la noche contra Phaethon.",
        tips: "Su debuff es acumulativo, ideal para peleas largas.",
        stats: { atk: 85, def: 88, hp: 92 }
    },
    {
        name: "Xura", tier: "S+", gen: 9, type: "Tiradores", mode: ["arena", "pvp"],
        desc: "Asesina de sombras con ejecución letal a bajos HP.",
        skills: "Sombra del Viento, Ejecución",
        bestFor: "Arena Top, Rematar enemigos",
        story: "Conocida como 'Windbreaker', maestra del sigilo y el veneno.",
        tips: "Su skill 'Ejecución' elimina objetivos al instante si tienen poco HP.",
        stats: { atk: 99, def: 72, hp: 80 }
    },

    // GENERACIÓN 10
    {
        name: "Blanchette", tier: "S+", gen: 10, type: "Tiradores", mode: ["all"],
        desc: "La mayor artillera actual. Daño destructivo en área.",
        skills: "Fuego de Supresión, Lluvia de Plomo",
        bestFor: "Ataque SVS, Arena",
        story: "Protectora de niños que se convirtió en una leyenda de la artillería.",
        tips: "Actualmente es considerada la mejor inversión de fragmentos dorados.",
        stats: { atk: 100, def: 80, hp: 85 }
    },
    {
        name: "Freya", tier: "S", gen: 10, type: "Lanceros", mode: ["pve", "arena"],
        desc: "Controladora que detiene la curación del enemigo.",
        skills: "Control de Luna Roja, Inmunidad",
        bestFor: "Counter de Healers (Philly)",
        story: "Guardiana que sobrevivió a la plaga de la Luna Roja.",
        tips: "Indispensable en Arena contra equipos que dependen de curaciones.",
        stats: { atk: 90, def: 85, hp: 95 }
    },
    {
        name: "Ling-Xue", tier: "S", gen: 10, type: "Tiradores", mode: ["pve", "arena"],
        desc: "Maestra del hielo que congela y ralentiza escuadrones enteros.",
        skills: "Frost Arrow, Freeze",
        bestFor: "Control de masas, Ralentización",
        story: "Sobreviviente de la legión 'Iron Eagles' especialista en emboscadas.",
        tips: "Excelente para frenar el avance de tanques pesados.",
        stats: { atk: 95, def: 75, hp: 82 }
    },
    {
        name: "Gregory", tier: "S+", gen: 10, type: "Infantería", mode: ["pvp", "arena"],
        desc: "Defensor del imperio que recibe daño en lugar de sus aliados.",
        skills: "Sacrificio Real, Muro de Solaris",
        bestFor: "Proteger DPS (Blanchette)",
        story: "El guardián más leal de la joven emperatriz.",
        tips: "Úsalo para mantener viva a Blanchette el mayor tiempo posible.",
        stats: { atk: 90, def: 100, hp: 98 }
    },

    // GENERACIÓN EX / OTROS
    {
        name: "Bradley", tier: "S+", gen: 7, type: "Tiradores", mode: ["arena", "bear"],
        desc: "Bombardeo de área que ignora defensas. Buff de ataque global.",
        skills: "Surgical Strike, Estrategia Solaris",
        bestFor: "Arena, Bear Hunt",
        story: "Ex-general con amnesia que busca su pasado en las ruinas.",
        tips: "Buff de ataque muy fuerte para toda la marcha de la alianza.",
        stats: { atk: 99, def: 85, hp: 88 }
    }
];

// Helper to filter heroes by generation
function getHeroesByGen(gen) {
    if (gen === 'all') return heroesData;
    return heroesData.filter(h => h.gen === parseInt(gen));
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { heroesData, getHeroesByGen };
}
