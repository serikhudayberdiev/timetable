const pairsTimeRanges = [
    { start: '8:30', end: '10:00' },
    { start: '10:10', end: '11:40' },
    { start: '12:10', end: '13:40' },
    { start: '13:50', end: '15:20' },
    { start: '15:50', end: '17:20' },
    { start: '17:30', end: '19:00' },
    { start: '19:10', end: '20:40' },
];

const scheduleData = {
    Monday: [
        [
            { subject: "Теория и методика обучения русскому языку", type: "Л.", startWeek: 1, endWeek: 9, hours: 18, professor: "Юсупова З.Ф.", room: "ЦОР", link: "https://edu.kpfu.ru/course/view.php?id=5900" },
        ],
        [
            { subject: "Основы правоведения и противодействия коррупции", type: "Л.", startWeek: 1, endWeek: 2, hours: 18, professor: "Путинцев А.В.", room: "ауд. 249(2)", link: "https://telemost.yandex.ru/j/98263998355596" },
            { subject: "Основы правоведения и противодействия коррупции", type: "Л.", startWeek: 4, endWeek: 10, hours: 18, professor: "Путинцев А.В.", room: "ауд. 249(2)", link: "https://telemost.yandex.ru/j/98263998355596" }
        ],
        [
            { subject: "Техники бесконфликтного взаимодействия в образовании", type: "Л.", startWeek: 1, endWeek: 2, hours: 18, professor: "Оренбурова Л.В.", room: "ауд. 249(2)", link: "https://telemost.360.yandex.ru/j/6141610595" },
            { subject: "Техники бесконфликтного взаимодействия в образовании", type: "Л.", startWeek: 4, endWeek: 10, hours: 18, professor: "Оренбурова Л.В.", room: "ауд. 249(2)", link: "https://telemost.360.yandex.ru/j/6141610595" },
            { subject: "Практический курс английского языка", type: "Пр.", startWeek: 11, endWeek: 12, hours: 4, professor: "Туганова С.В.", room: "ауд. 249(2)", link: "https://telemost.yandex.ru/j/77819180497511" }
        ],
        [
            { subject: "Технологии цифрового образования", type: "Л.", startWeek: 1, endWeek: 2, hours: 10, professor: "Батрова Н.И.", room: "ауд. 249(2)", link: "https://telemost.360.yandex.ru/j/2469171479" },
            { subject: "Технологии цифрового образования", type: "Л.", startWeek: 4, endWeek: 6, hours: 10, professor: "Батрова Н.И.", room: "ауд. 249(2)", link: "https://telemost.360.yandex.ru/j/2469171479" },
            { subject: "Лексикология английского языка", type: "Пр.", startWeek: 7, endWeek: 14, hours: 16, professor: "Исмагилова Г.К.", room: "ауд. 249(2)", link: "https://telemost.yandex.ru/j/90501006242707" }
        ],
        [],
        [],
        []
    ],
    Tuesday: [
        [
            { subject: "Технологии цифрового образования", type: "Пр.", startWeek: 1, endWeek: 13, hours: 26, professor: "Мухаметшин Л.М.", room: "ауд. 330" }
        ],
        [
            { subject: "Практический курс английского языка", type: "Пр.", startWeek: 1, endWeek: 17, hours: 34, professor: "Марико М.Л.", room: "ауд. 422", group: "B" }
        ],
        [
            { subject: "Практический курс английского языка", type: "Пр.", startWeek: 1, endWeek: 2, hours: 4, professor: "Марико М.Л.", room: "ауд. 422", group: "B" }
        ],
        [],
        [],
        [],
        []
    ],
    Wednesday: [
        [
            { subject: "Практический курс английского языка", type: "Пр.", startWeek: 1, endWeek: 8, hours: 16, professor: "Мубаракшина А.М.", room: "ауд. 218", group: "A" },
            { subject: "Теория и методика обучения русскому языку", type: "Пр.", startWeek: 9, endWeek: 17, hours: 18, professor: "Нуруллина Г.М.", room: "ауд. 221" }
        ],
        [
            { subject: "Практический курс английского языка", type: "Пр.", startWeek: 1, endWeek: 17, hours: 34, professor: "Мубаракшина А.М.", room: "ауд. 303", group: "A" },
            { subject: "Практикум по культуре речевого общения на английском языке", type: "Пр.", startWeek: 1, endWeek: 9, hours: 18, professor: "Мифтахова Л.Б.", room: "ауд. 302", group: "B" }
        ],
        [
            { subject: "Элективные курсы по физической культуре и спорту", type: "Пр.", startWeek: 1, endWeek: 16, hours: 32, professor: "Бутлерова", room: "4" }
        ],
        [],
        [],
        [],
        []
    ],
    Thursday: [
        [
            { subject: "Практикум по культуре речевого общения на английском языке", type: "Пр.", startWeek: 1, endWeek: 17, hours: 34, professor: "Литвиненко Е.В.", room: "ауд. 323", group: "A" },
            { subject: "Практический курс английского языка", type: "Пр.", startWeek: 1, endWeek: 17, hours: 34, professor: "Марико М.Л.", room: "ауд. 348", group: "B" }
        ],
        [
            { subject: "Морфология русского языка", type: "Пр.", startWeek: 1, endWeek: 17, hours: 34, professor: "Усманова Л.А.", room: "ауд. 349" }
        ],
        [
            { subject: "Техники бесконфликтного взаимодействия в образовании", type: "Пр.", startWeek: 1, endWeek: 9, hours: 18, professor: "Оренбурова Л.В.", room: "ауд. 318" },
            { subject: "Практикум по культуре речевого общения на английском языке", type: "Пр.", startWeek: 10, endWeek: 17, hours: 16, professor: "Мифтахова Л.Б.", room: "ауд. 252а", group: "B" }
        ],
        [],
        [],
        [],
        []
    ],
    Friday: [
        [
            { subject: "Основы правоведения и противодействия коррупции", type: "Пр.", startWeek: 1, endWeek: 9, hours: 18, professor: "Путинцев А.В.", room: "ауд. 243/244" },
            { subject: "Практический курс английского языка", type: "Пр.", startWeek: 10, endWeek: 10, hours: 2, professor: "Мубаракшина А.М.", room: "ауд. 422", group: "A" }
        ],
        [
            { subject: "Практический курс английского языка", type: "Пр.", startWeek: 1, endWeek: 10, hours: 20, professor: "Мубаракшина А.М.", room: "ауд. 323", group: "A" },
            { subject: "Теория и методика обучения английскому языку", type: "Пр.", startWeek: 13, endWeek: 17, hours: 10, professor: "Насибуллова Г.Р.", room: "ауд. 216" }
        ],
        [
            { subject: "Современные модели уроков русского языка", type: "Л.", startWeek: 1, endWeek: 3, hours: 6, professor: "Ячина Н.П.", room: "ауд. 342/343" },
            { subject: "Морфология русского языка", type: "Л.", startWeek: 6, endWeek: 14, hours: 18, professor: "Корнеева Т.А.", room: "ауд. 355" },
            { subject: "Практический курс русского языка", type: "Пр.", startWeek: 16, endWeek: 16, hours: 2, professor: "Каримуллина Р.Н.", room: "ауд. 221" },
            { subject: "Морфология русского языка", type: "Пр.", startWeek: 17, endWeek: 17, hours: 2, professor: "Усманова Л.А.", room: "ауд. 318" }
        ],
        [
            { subject: "Теория и методика обучения английскому языку", type: "Л.", startWeek: 1, endWeek: 9, hours: 18, professor: "Насибуллова Г.Р.", room: "ауд. 342/343" },
            { subject: "Теория и методика обучения английскому языку", type: "Пр.", startWeek: 14, endWeek: 17, hours: 8, professor: "Насибуллова Г.Р.", room: "ауд. 318" }
        ],
        [
            { subject: "Практика по профилю подготовки (в области русского языка)", type: "Пр.", startWeek: 1, endWeek: 17, hours: 34, professor: "Полякова И.В.", room: "ауд. 249(2)", link: "https://telemost.yandex.ru/j/33696633051561" }
        ],
        [],
        []
    ],
    Saturday: [
        [
            { subject: "Педагогическая практика", type: "Пр.", startWeek: 1, endWeek: 18, hours: 36, professor: "Каипова Р.Р.", room: "ауд. 348" }
        ],
        [
            { subject: "Современные модели уроков русского языка", type: "Пр.", startWeek: 12, endWeek: 17, hours: 12, professor: "Куклина Н.В.", room: "ауд. 349" }
        ],
        [
            { subject: "Элективные курсы по физической культуре и спорту", type: "Пр.", startWeek: 1, endWeek: 16, hours: 32, professor: "Бутлерова", room: "4" }
        ],
        [
            { subject: "Практический курс русского языка", type: "Пр.", startWeek: 1, endWeek: 17, hours: 34, professor: "Каримуллина Р.Н.", room: "ауд. 348" }
        ],
        [],
        [],
        []
    ],
};

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// Map for Russian day names
const dayNamesRu = {
    'Monday': 'Понедельник',
    'Tuesday': 'Вторник',
    'Wednesday': 'Среда',
    'Thursday': 'Четверг',
    'Friday': 'Пятница',
    'Saturday': 'Суббота',
    'WholeWeek': 'Вся неделя'
};

// Adjust getDay() to match Monday=0 index (assuming daysOfWeek starts with Monday)
let currentDay = daysOfWeek[(new Date().getDay() + 6) % 7];
let weekOffset = 0; // New variable to offset the week (0 = current, 1 = next, -1 = previous, etc.)

function getWeekNumber() {
    const startDate = new Date(2026, 1, 9);
    const now = new Date();
    if (now < startDate) return 0;
    return Math.floor((now - startDate) / (7 * 24 * 60 * 60 * 1000)) + 1;
}

function getClassesForWeek(classes, currentWeek) {
    if (!classes || currentWeek <= 0) return null; // Added check for invalid weeks
    if (!Array.isArray(classes)) classes = [classes];
    const filtered = classes.filter(c => {
        if (Array.isArray(c.startWeek)) {
            return c.startWeek.includes(currentWeek); // Check if currentWeek is in the array
        } else if ('startWeek' in c && 'endWeek' in c) {
            return currentWeek >= c.startWeek && currentWeek <= c.endWeek; // Range check
        }
        return true; // Fallback for classes without week constraints
    });
    return filtered.length ? filtered : null;
}

// Helper to render a single pair row (used for both single day and whole week)
function renderPairRow(pair, classesToRender, tbody) {
    if (!classesToRender || classesToRender.length === 0) return;

    const tr = document.createElement('tr');
    tr.classList.add('hover:bg-indigo-50', 'transition');

    // Time cell
    const timeCell = document.createElement('td');
    timeCell.className = 'px-6 py-3 align-top';
    timeCell.textContent = `${pair.start} - ${pair.end}`;
    tr.appendChild(timeCell);

    // Subject cell
    const subjectCell = document.createElement('td');
    subjectCell.className = 'px-6 py-3';
    subjectCell.innerHTML = classesToRender.map(cls => {
        const groupText = cls.group ? `(${cls.group}) ` : '';
        if (cls.link) {
            return `<div><a href="${cls.link}" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline hover:text-blue-800">${groupText}${cls.subject || ''}</a></div>`;
        } else {
            return `<div>${groupText}${cls.subject || ''}</div>`;
        }
    }).join('');
    tr.appendChild(subjectCell);

    // Type cell (new)
    const typeCell = document.createElement('td');
    typeCell.className = 'px-6 py-3';
    typeCell.innerHTML = classesToRender.map(cls => `<div>${cls.type || ''}</div>`).join('');
    tr.appendChild(typeCell);

    // Room cell
    const roomCell = document.createElement('td');
    roomCell.className = 'px-6 py-3';
    roomCell.innerHTML = classesToRender.map(cls => `<div>${cls.room || ''}</div>`).join('');
    tr.appendChild(roomCell);

    // Professor cell
    const profCell = document.createElement('td');
    profCell.className = 'px-6 py-3';
    profCell.innerHTML = classesToRender.map(cls => {
        if (cls.professor) return `<div>${cls.professor}</div>`;
        if (cls.professors) return `<div>${cls.professors.join(', ')}</div>`;
        return `<div></div>`;
    }).join('');
    tr.appendChild(profCell);

    tbody.appendChild(tr);
}

function renderSchedule() {
    const currentWeek = getWeekNumber() + weekOffset; // Use offset
    const weekNumberEl = document.getElementById('weekNumber');
    if (weekNumberEl) weekNumberEl.textContent = currentWeek;

    const currentDayEl = document.getElementById('currentDay');
    const dayLabel = dayNamesRu[currentDay] || currentDay;
    if (currentDayEl) currentDayEl.textContent = dayLabel;

    const tbody = document.getElementById('scheduleBody');
    if (!tbody) {
        console.error('Schedule body element not found');
        return;
    }
    tbody.innerHTML = '';

    if (currentDay === 'WholeWeek') {
        daysOfWeek.forEach(day => {
            const daySchedule = scheduleData[day] || Array(pairsTimeRanges.length).fill(null);
            let hasAnyClass = false;

            // Day header row
            const headerRow = document.createElement('tr');
            headerRow.classList.add('bg-indigo-100', 'font-bold', 'text-indigo-900');
            headerRow.innerHTML = `<td colspan="5" class="text-center py-1">${dayNamesRu[day] || day}</td>`;
            tbody.appendChild(headerRow);

            pairsTimeRanges.forEach((pair, index) => {
                const pairData = daySchedule[index];
                const classesToRender = getClassesForWeek(pairData, currentWeek);
                if (classesToRender && classesToRender.length > 0) {
                    hasAnyClass = true;
                    renderPairRow(pair, classesToRender, tbody);
                }
            });

            if (!hasAnyClass) {
                const tr = document.createElement('tr');
                tr.classList.add('text-center', 'italic', 'text-gray-400');
                tr.innerHTML = `<td colspan="5" class="px-6 py-4">Занятий нет на ${dayNamesRu[day] || day}</td>`;
                tbody.appendChild(tr);
            }
        });
    } else {
        // Single day rendering
        const daySchedule = scheduleData[currentDay] || Array(pairsTimeRanges.length).fill(null);
        let hasAnyClass = false;
        pairsTimeRanges.forEach((pair, index) => {
            const pairData = daySchedule[index];
            const classesToRender = getClassesForWeek(pairData, currentWeek);
            if (classesToRender && classesToRender.length > 0) {
                hasAnyClass = true;
                renderPairRow(pair, classesToRender, tbody);
            }
        });
        if (!hasAnyClass) {
            const tr = document.createElement('tr');
            tr.classList.add('text-center', 'italic', 'text-gray-400');
            tr.innerHTML = `<td colspan="5" class="px-6 py-4">Занятий нет сегодня</td>`;
            tbody.appendChild(tr);
        }
    }
}

function updateCurrentTime() {
    const now = new Date();
    const timeStr = now.toLocaleTimeString('ru-RU', { hour12: false });
    const timeElement = document.getElementById('currentTime');
    if (timeElement) {
        timeElement.textContent = timeStr;
    }
}

function formatDuration(ms) {
    let totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    let parts = [];
    if (hours > 0) parts.push(`${hours}ч`);
    if (minutes > 0) parts.push(`${minutes}м`);
    if (seconds > 0 || parts.length === 0) parts.push(`${seconds}с`); // Always show seconds if nothing else
    return parts.join(' ');
}

function updateTimer() {
    const now = new Date();
    const timerTextEl = document.getElementById('timerText');
    const currentDayEl = document.getElementById('currentDay');
    if (!timerTextEl || !currentDayEl) return;

    currentDayEl.textContent = dayNamesRu[currentDay] || currentDay;

    // Only show timer for the current day and current week; otherwise, show a static message
    const today = daysOfWeek[(new Date().getDay() + 6) % 7];
    if (currentDay !== today || weekOffset !== 0 || currentDay === 'WholeWeek' || !scheduleData[currentDay]) {
        timerTextEl.textContent = currentDay === 'WholeWeek' ? "Это расписание на эту неделю" : "Выберите сегодня, чтобы увидеть живой таймер";
        return;
    }

    const daySchedule = scheduleData[currentDay];
    const currentWeek = getWeekNumber() + weekOffset;
    let timerSet = false;

    for (let i = 0; i < pairsTimeRanges.length; i++) {
        const pair = pairsTimeRanges[i];
        const [startH, startM] = pair.start.split(':').map(Number);
        const [endH, endM] = pair.end.split(':').map(Number);
        const start = new Date(now.getFullYear(), now.getMonth(), now.getDate(), startH, startM);
        const end = new Date(now.getFullYear(), now.getMonth(), now.getDate(), endH, endM);

        const pairClasses = daySchedule[i];
        const classesToRender = getClassesForWeek(pairClasses, currentWeek);

        if (!classesToRender || classesToRender.length === 0) continue;

        if (now < start) {
            const diff = start - now;
            timerTextEl.textContent = `Следующая пара начинается через ${formatDuration(diff)}`;
            timerSet = true;
            break;
        } else if (now >= start && now < end) {
            const diff = end - now;
            timerTextEl.textContent = `Текущая пара заканчивается через ${formatDuration(diff)}`;
            timerSet = true;
            break;
        }
    }

    if (!timerSet) {
        timerTextEl.textContent = 'Больше занятий сегодня нет';
    }
}

// Add event listeners to day buttons
document.querySelectorAll('.day-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        currentDay = btn.getAttribute('data-day');
        document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('ring-4', 'ring-offset-2', 'ring-blue-300'));
        btn.classList.add('ring-4', 'ring-offset-2', 'ring-blue-300');
        // Remove highlight from showWeekBtn
        const showWeekBtn = document.getElementById('showWeekBtn');
        if (showWeekBtn) showWeekBtn.classList.remove('ring-4', 'ring-offset-2', 'ring-blue-300');
        renderSchedule();
        updateTimer();
    });
});

// Show whole week button
const showWeekBtn = document.getElementById('showWeekBtn');
if (showWeekBtn) {
    showWeekBtn.addEventListener('click', () => {
        currentDay = 'WholeWeek';
        document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('ring-4', 'ring-offset-2', 'ring-blue-300'));
        showWeekBtn.classList.add('ring-4', 'ring-offset-2', 'ring-blue-300');
        renderSchedule();
        updateTimer();
    });
}

// New: Previous week button
const prevWeekBtn = document.getElementById('prevWeekBtn');
if (prevWeekBtn) {
    prevWeekBtn.addEventListener('click', () => {
        weekOffset--;
        renderSchedule();
        updateTimer();
    });
}

// New: Next week button
const nextWeekBtn = document.getElementById('nextWeekBtn');
if (nextWeekBtn) {
    nextWeekBtn.addEventListener('click', () => {
        weekOffset++;
        renderSchedule();
        updateTimer();
    });
}

// New: Reset to current week button (optional)
const resetWeekBtn = document.getElementById('resetWeekBtn');
if (resetWeekBtn) {
    resetWeekBtn.addEventListener('click', () => {
        weekOffset = 0;
        renderSchedule();
        updateTimer();
    });
}

// Highlight today's button initially (if valid)
const initBtn = document.querySelector(`.day-btn[data-day="${currentDay}"]`);
if (initBtn) initBtn.classList.add('ring-4', 'ring-offset-2', 'ring-blue-300');

// Initial render and updates
renderSchedule();
updateCurrentTime();
updateTimer();

setInterval(() => {
    updateCurrentTime();
    updateTimer();
}, 1000);
