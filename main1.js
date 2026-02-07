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
const daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

// Extract all weeks from scheduleData to fill weeks selector
function getAllWeeks() {
    let weeksSet = new Set();
    for (const day of daysOfWeek) {
        const daySchedule = scheduleData[day] || [];
        daySchedule.forEach(pairData => {
            if (!pairData) return;
            const classes = Array.isArray(pairData) ? pairData : [pairData];
            classes.forEach(cls => {
                if ('startWeek' in cls && 'endWeek' in cls) {
                    // Ensure startWeek <= endWeek to avoid infinite loops
                    const start = Math.min(cls.startWeek, cls.endWeek);
                    const end = Math.max(cls.startWeek, cls.endWeek);
                    for (let w = start; w <= end; w++) {
                        weeksSet.add(w);
                    }
                }
            });
        });
    }
    return Array.from(weeksSet).sort((a, b) => a - b);
}

// Fill the week dropdown options
function fillWeekSelector() {
    const weekSelector = document.getElementById('weekSelector');
    if (!weekSelector) {
        console.error('Week selector element not found');
        return;
    }
    const weeks = getAllWeeks();
    weeks.forEach(week => {
        const option = document.createElement('option');
        option.value = week;
        option.textContent = `Неделя ${week}`;
        weekSelector.appendChild(option);
    });

    // Select current week by default, or first available
    const currentWeek = getCurrentWeek();
    if (weeks.includes(currentWeek)) {
        weekSelector.value = currentWeek;
    } else if (weeks.length > 0) {
        weekSelector.value = weeks[0];
    }
}

// Get the current week number based on September 1, 2025
function getCurrentWeek() {
    const startDate = new Date(2025, 8, 1); // September 1, 2025 (months are 0-based)
    const now = new Date();
    if (now < startDate) return 0;
    // Calculate weeks elapsed (floor division for whole weeks)
    const msPerWeek = 7 * 24 * 60 * 60 * 1000;
    return Math.floor((now - startDate) / msPerWeek) + 1;
}

// Filter classes by selected week
function getClassesForWeek(classes, week) {
    if (!classes) return null;
    if (!Array.isArray(classes)) classes = [classes];
    const filtered = classes.filter(c => {
        if ('startWeek' in c && 'endWeek' in c) {
            // Handle cases where only one week is defined (default end to start)
            const start = c.startWeek;
            const end = c.endWeek || c.startWeek;
            return week >= start && week <= end;
        }
        // If no week range, include by default (e.g., one-off classes)
        return true;
    });
    return filtered.length ? filtered : null;
}

// Render timetable table body for selected week
function renderScheduleTable(selectedWeek) {
    const tbody = document.getElementById('scheduleBody');
    if (!tbody) {
        console.error('Schedule body element not found');
        return;
    }
    tbody.innerHTML = '';

    pairsTimeRanges.forEach((pair, pairIndex) => {
        const tr = document.createElement('tr');

        // Pair number cell
        const pairCell = document.createElement('td');
        pairCell.textContent = pairIndex + 1;
        pairCell.classList.add('border', 'border-gray-300', 'px-6', 'py-3', 'font-semibold', 'whitespace-nowrap');
        tr.appendChild(pairCell);

        // Time cell
        const timeCell = document.createElement('td');
        timeCell.textContent = `${pair.start} - ${pair.end}`;
        timeCell.classList.add('border', 'border-gray-300', 'px-6', 'py-3', 'font-semibold', 'whitespace-nowrap');
        tr.appendChild(timeCell);

        daysOfWeek.forEach(day => {
            const daySchedule = scheduleData[day] || [];
            const pairData = daySchedule[pairIndex]; // Could be undefined if schedule is incomplete
            const classesToRender = getClassesForWeek(pairData, selectedWeek);

            const td = document.createElement('td');
            td.classList.add('border', 'border-gray-300', 'px-4', 'py-3', 'align-top', 'whitespace-normal');

            if (classesToRender && classesToRender.length > 0) {
                classesToRender.forEach(cls => {
                    const classDiv = document.createElement('div');
                    classDiv.classList.add('mb-1', 'text-indigo-700', 'break-words');

                    if (cls.link) {
                        const link = document.createElement('a');
                        link.href = cls.link;
                        link.target = '_blank';
                        link.rel = 'noopener noreferrer';
                        link.classList.add('text-blue-600', 'underline');
                        link.textContent = cls.subject || '';
                        classDiv.appendChild(link);
                    } else {
                        classDiv.textContent = cls.subject || '';
                    }

                    const details = document.createElement('div');
                    details.classList.add('text-sm', 'text-gray-600');
                    details.textContent = `${cls.room || ''}${cls.professor ? ', ' + cls.professor : ''}`;
                    classDiv.appendChild(details);

                    td.appendChild(classDiv);
                });
            } else {
                td.classList.add('text-center', 'italic', 'text-gray-400');
                td.textContent = '-';
            }

            tr.appendChild(td);
        });

        tbody.appendChild(tr);
    });
}

// Update time
function updateCurrentTime() {
    const now = new Date();
    const timeStr = now.toLocaleTimeString('ru-RU', { hour12: false });
    const timeElement = document.getElementById('currentTime');
    if (timeElement) {
        timeElement.textContent = timeStr;
    }
}

// Initialize
fillWeekSelector();
const weekSelector = document.getElementById('weekSelector');
if (weekSelector) {
    const initialWeek = parseInt(weekSelector.value) || getAllWeeks()[0] || 1; // Fallback
    renderScheduleTable(initialWeek);

    weekSelector.addEventListener('change', () => {
        const selected = parseInt(weekSelector.value);
        if (!isNaN(selected)) {
            renderScheduleTable(selected);
        }
    });
}

updateCurrentTime();
setInterval(updateCurrentTime, 1000);