// ============================================
// EVENT CALENDAR DATA & LOGIC
// ============================================

let currentDate = new Date();
let selectedDate = null;

const eventPatterns = {
    'furnace-frenzy': {
        name: 'Furnace Frenzy',
        icon: '📦',
        color: '#00d2ff',
        type: 'recurring',
        frequency: 9, // days
        duration: 3,
        lastOccurrence: '2026-02-03'
    },
    'lucky-wheel': {
        name: 'Lucky Wheel',
        icon: '🎡',
        color: '#ff8c00',
        type: 'recurring',
        frequency: 14,
        duration: 7,
        lastOccurrence: '2026-01-25'
    },
    'kingdom-conflicts': {
        name: 'Kingdom Conflicts',
        icon: '⚔️',
        color: '#00ff88',
        type: 'weekly',
        days: [6, 0], // Saturday, Sunday
        duration: 2
    },
    'crazy-joe': {
        name: 'Crazy Joe Shop',
        icon: '🏪',
        color: '#ff8c00',
        type: 'recurring',
        frequency: 5,
        duration: 2,
        lastOccurrence: '2026-02-08'
    },
    'hero-trial': {
        name: 'Hero Trial',
        icon: '🦸',
        color: '#9370db',
        type: 'recurring',
        frequency: 7,
        duration: 3,
        lastOccurrence: '2026-02-05'
    }
};

const specialEvents = [
    {
        name: 'Anniversary Event',
        icon: '🎉',
        color: '#9370db',
        type: 'special',
        startDate: '2026-03-15',
        endDate: '2026-03-22',
        description: 'Celebración de aniversario con rewards especiales'
    },
    {
        name: 'Spring Festival',
        icon: '🌸',
        color: '#ff69b4',
        type: 'special',
        startDate: '2026-03-20',
        endDate: '2026-03-27',
        description: 'Evento especial de primavera'
    }
];

// ============================================
// CALENDAR GENERATION
// ============================================

function generateCalendar(year, month) {
    const today = new Date();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const prevLastDay = new Date(year, month, 0);

    const firstDayOfWeek = firstDay.getDay();
    const lastDate = lastDay.getDate();
    const prevLastDate = prevLastDay.getDate();

    const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    document.getElementById('current-month').textContent = `${monthNames[month]} ${year}`;

    const grid = document.getElementById('calendar-grid');
    grid.innerHTML = '';

    // Day headers
    const dayNames = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
    dayNames.forEach(day => {
        const header = document.createElement('div');
        header.className = 'day-header';
        header.textContent = day;
        grid.appendChild(header);
    });

    // Previous month days
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
        const day = prevLastDate - i;
        const cell = createDayCell(day, month - 1, year, true);
        grid.appendChild(cell);
    }

    // Current month days
    for (let day = 1; day <= lastDate; day++) {
        const cell = createDayCell(day, month, year, false);
        grid.appendChild(cell);
    }

    // Next month days
    const remainingCells = 42 - (firstDayOfWeek + lastDate);
    for (let day = 1; day <= remainingCells; day++) {
        const cell = createDayCell(day, month + 1, year, true);
        grid.appendChild(cell);
    }
}

function createDayCell(day, month, year, otherMonth) {
    const cell = document.createElement('div');
    cell.className = 'day-cell';
    if (otherMonth) cell.classList.add('other-month');

    const date = new Date(year, month, day);
    const today = new Date();

    // Check if today
    if (date.toDateString() === today.toDateString()) {
        cell.classList.add('today');
    }

    // Day number
    const dayNumber = document.createElement('div');
    dayNumber.className = 'day-number';
    dayNumber.textContent = day;
    cell.appendChild(dayNumber);

    // Get events for this day
    const events = getEventsForDate(date);

    // Add event dots
    if (events.length > 0 && !otherMonth) {
        events.slice(0, 2).forEach(event => {
            const eventEl = document.createElement('div');
            eventEl.className = 'event-item';
            eventEl.textContent = `${event.icon} ${event.name}`;
            eventEl.style.borderColor = event.color;
            cell.appendChild(eventEl);
        });

        if (events.length > 2) {
            const more = document.createElement('div');
            more.style.fontSize = '0.7rem';
            more.style.color = 'var(--text-gray)';
            more.style.marginTop = '0.3rem';
            more.textContent = `+${events.length - 2} más`;
            cell.appendChild(more);
        }
    }

    // Click to show events
    cell.onclick = () => showDayEvents(date, events);

    return cell;
}

function getEventsForDate(date) {
    const events = [];
    const dateStr = formatDate(date);

    // Check recurring patterns
    for (const [key, pattern] of Object.entries(eventPatterns)) {
        if (pattern.type === 'recurring') {
            if (isEventActive(date, pattern)) {
                events.push(pattern);
            }
        } else if (pattern.type === 'weekly') {
            if (pattern.days.includes(date.getDay())) {
                events.push(pattern);
            }
        }
    }

    // Check special events
    specialEvents.forEach(event => {
        if (dateStr >= event.startDate && dateStr <= event.endDate) {
            events.push(event);
        }
    });

    return events;
}

function isEventActive(date, pattern) {
    const lastDate = new Date(pattern.lastOccurrence);
    const diffTime = date - lastDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    // Calculate cycle number
    const cycleNumber = Math.floor(diffDays / pattern.frequency);
    const dayInCycle = diffDays % pattern.frequency;

    // Check if within event duration
    return dayInCycle >= 0 && dayInCycle < pattern.duration;
}

function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// ============================================
// EVENT MODAL
// ============================================

function showDayEvents(date, events) {
    if (events.length === 0) {
        showModal(`
            <h2 style="color: var(--primary);">
                ${date.toLocaleDateString('es', { day: 'numeric', month: 'long', year: 'numeric' })}
            </h2>
            <p style="color: var(--text-gray); margin-top: 2rem; text-align: center;">
                No hay eventos programados para este día
            </p>
        `);
        return;
    }

    const content = `
        <h2 style="color: var(--primary); margin-bottom: 2rem;">
            ${date.toLocaleDateString('es', { day: 'numeric', month: 'long', year: 'numeric' })}
        </h2>
        
        <div style="display: grid; gap: 1.5rem;">
            ${events.map(event => `
                <div style="background: rgba(0, 0, 0, 0.3); padding: 2rem; border-radius: 15px; border-left: 4px solid ${event.color};">
                    <h3 style="color: ${event.color}; margin-bottom: 1rem;">
                        ${event.icon} ${event.name}
                    </h3>
                    ${event.description ? `
                        <p style="color: var(--text-gray); line-height: 1.8;">
                            ${event.description}
                        </p>
                    ` : ''}
                    ${event.type === 'recurring' || event.type === 'weekly' ? `
                        <div style="margin-top: 1rem;">
                            <small style="color: var(--text-gray);">
                                Duración: ${event.duration} días
                                ${event.type === 'recurring' ? ` • Se repite cada ${event.frequency} días` : ''}
                            </small>
                        </div>
                    ` : ''}
                </div>
            `).join('')}
        </div>
        
        <button class="btn secondary full-width" style="margin-top: 2rem;" onclick="closeModal()">
            Cerrar
        </button>
    `;

    showModal(content);
}

function showModal(content) {
    document.getElementById('event-modal').innerHTML = content;
    document.getElementById('modal-overlay').style.display = 'block';
    document.getElementById('event-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal-overlay').style.display = 'none';
    document.getElementById('event-modal').style.display = 'none';
}

// ============================================
// NAVIGATION
// ============================================

function previousMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
}

function nextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
}

function today() {
    currentDate = new Date();
    generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
}

// ============================================
// UPCOMING EVENTS
// ============================================

function displayUpcomingEvents() {
    const container = document.getElementById('upcoming-events');
    if (!container) return;

    const today = new Date();
    const upcoming = [];

    // Check next 30 days
    for (let i = 0; i < 30; i++) {
        const date = new Date(today);
        date.setDate(date.getDate() + i);

        const events = getEventsForDate(date);
        events.forEach(event => {
            // Check if event starts on this day
            if (!upcoming.some(e => e.name === event.name && e.date === formatDate(date))) {
                upcoming.push({
                    ...event,
                    date: formatDate(date),
                    dateObj: date
                });
            }
        });
    }

    // Sort by date
    upcoming.sort((a, b) => a.dateObj - b.dateObj);

    // Display first 5
    container.innerHTML = upcoming.slice(0, 5).map(event => `
        <div style="background: rgba(0, 0, 0, 0.3); padding: 2rem; border-radius: 15px; border-left: 4px solid ${event.color}; display: flex; justify-content: space-between; align-items: center;">
            <div>
                <h3 style="color: ${event.color}; margin-bottom: 0.5rem;">
                    ${event.icon} ${event.name}
                </h3>
                <div style="color: var(--text-gray); font-size: 0.9rem;">
                    ${event.dateObj.toLocaleDateString('es', { day: 'numeric', month: 'long' })}
                </div>
            </div>
            <div style="text-align: right;">
                <div style="color: var(--primary); font-weight: 900; font-size: 1.2rem;">
                    ${getDaysUntil(event.dateObj)} días
                </div>
                <div style="color: var(--text-gray); font-size: 0.85rem;">
                    hasta inicio
                </div>
            </div>
        </div>
    `).join('');
}

function getDaysUntil(date) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    date.setHours(0, 0, 0, 0);
    const diff = date - today;
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

// ============================================
// NEXT EVENT CALCULATORS
// ============================================

function calculateNextEvents() {
    // Furnace Frenzy
    const nextFurnace = calculateNextOccurrence(eventPatterns['furnace-frenzy']);
    document.getElementById('next-furnace').textContent = nextFurnace.toLocaleDateString('es', { day: 'numeric', month: 'long' });

    // Lucky Wheel
    const nextWheel = calculateNextOccurrence(eventPatterns['lucky-wheel']);
    document.getElementById('next-wheel').textContent = nextWheel.toLocaleDateString('es', { day: 'numeric', month: 'long' });

    // Kingdom Conflicts (next Saturday)
    const nextKvK = getNextWeekday(6); // Saturday
    document.getElementById('next-kvk').textContent = nextKvK.toLocaleDateString('es', { day: 'numeric', month: 'long' });
}

function calculateNextOccurrence(pattern) {
    const last = new Date(pattern.lastOccurrence);
    const today = new Date();

    while (last <= today) {
        last.setDate(last.getDate() + pattern.frequency);
    }

    return last;
}

function getNextWeekday(targetDay) {
    const today = new Date();
    const currentDay = today.getDay();
    let daysUntil = targetDay - currentDay;

    if (daysUntil <= 0) {
        daysUntil += 7;
    }

    const nextDate = new Date(today);
    nextDate.setDate(today.getDate() + daysUntil);
    return nextDate;
}

// ============================================
// INITIALIZATION
// ============================================

if (document.getElementById('calendar-grid')) {
    generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
    displayUpcomingEvents();
    calculateNextEvents();
}
