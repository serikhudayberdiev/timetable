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
            {
                subject: "Теория и методика обучения русскому языку",
                type: "Л.",
                startWeek: 1,
                endWeek: 9,
                hours: 18,
                professor: "Юсупова З.Ф.",
                room: "ЦОР",
                link: "https://edu.kpfu.ru/course/view.php?id=5900"
            }
        ],
        [
            {
                subject: "Основы правоведения и противодействия коррупции",
                type: "Л.",
                startWeek: 1,
                endWeek: 2,
                hours: 18,
                professor: "Путинцев А.В.",
                room: "ауд. 249(2)",
                link: "https://telemost.yandex.ru/j/98263998355596"
            },
            {
                subject: "Основы правоведения и противодействия коррупции",
                type: "Л.",
                startWeek: 4,
                endWeek: 10,
                hours: 18,
                professor: "Путинцев А.В.",
                room: "ауд. 249(2)",
                link: "https://telemost.yandex.ru/j/98263998355596"
            }
        ],
        [
            {
                subject: "Техники бесконфликтного взаимодействия в образовании",
                type: "Л.",
                startWeek: 1,
                endWeek: 2,
                hours: 18,
                professor: "Оренбурова Л.В.",
                room: "ауд. 249(2)",
                link: "https://telemost.360.yandex.ru/j/6141610595"
            },
            {
                subject: "Техники бесконфликтного взаимодействия в образовании",
                type: "Л.",
                startWeek: 4,
                endWeek: 10,
                hours: 18,
                professor: "Оренбурова Л.В.",
                room: "ауд. 249(2)",
                link: "https://telemost.360.yandex.ru/j/6141610595"
            },
            {
                subject: "Практический курс английского языка",
                type: "Пр.",
                startWeek: 11,
                endWeek: 12,
                hours: 4,
                professor: "Туганова С.В.",
                room: "ауд. 249(2)",
                link: "https://telemost.yandex.ru/j/77819180497511"
            }
        ],
        [
            {
                subject: "Технологии цифрового образования",
                type: "Л.",
                startWeek: 1,
                endWeek: 2,
                hours: 10,
                professor: "Батрова Н.И.",
                room: "ауд. 249(2)",
                link: "https://telemost.360.yandex.ru/j/2469171479"
            },
            {
                subject: "Технологии цифрового образования",
                type: "Л.",
                startWeek: 4,
                endWeek: 6,
                hours: 10,
                professor: "Батрова Н.И.",
                room: "ауд. 249(2)",
                link: "https://telemost.360.yandex.ru/j/2469171479"
            },
            {
                subject: "Лексикология английского языка",
                type: "Пр.",
                startWeek: 7,
                endWeek: 14,
                hours: 16,
                professor: "Исмагилова Г.К.",
                room: "ауд. 249(2)",
                link: "https://telemost.yandex.ru/j/90501006242707"
            }
        ],
        [],
        [],
        []
    ],

    Tuesday: [
        [
            {
                subject: "Технологии цифрового образования",
                type: "Пр.",
                startWeek: 1,
                endWeek: 13,
                hours: 26,
                professor: "Мухаметшин Л.М.",
                room: "ауд. 330"
            }
        ],
        [
            {
                subject: "Практический курс английского языка",
                type: "Пр.",
                startWeek: 1,
                endWeek: 17,
                hours: 34,
                professor: "Марико М.Л.",
                room: "ауд. 422",
                group: "Б"
            }
        ],
        [
            {
                subject: "Практический курс английского языка",
                type: "Пр.",
                startWeek: 1,
                endWeek: 2,
                hours: 4,
                professor: "Марико М.Л.",
                room: "ауд. 422",
                group: "Б"
            }
        ],
        [],
        [],
        [],
        []
    ],

    Wednesday: [
        [
            {
                subject: "Практический курс английского языка",
                type: "Пр.",
                startWeek: 1,
                endWeek: 8,
                hours: 16,
                professor: "Мубаракшина А.М.",
                room: "ауд. 218",
                group: "А"
            },
            {
                subject: "Теория и методика обучения русскому языку",
                type: "Пр.",
                startWeek: 9,
                endWeek: 17,
                hours: 18,
                professor: "Нуруллина Г.М.",
                room: "ауд. 221"
            }
        ],
        [
            {
                subject: "Практический курс английского языка",
                type: "Пр.",
                startWeek: 1,
                endWeek: 17,
                hours: 34,
                professor: "Мубаракшина А.М.",
                room: "ауд. 303",
                group: "А"
            },
            {
                subject: "Практикум по культуре речевого общения на английском языке",
                type: "Пр.",
                startWeek: 1,
                endWeek: 9,
                hours: 18,
                professor: "Мифтахова Л.Б.",
                room: "ауд. 302",
                group: "Б"
            }
        ],
        [
            {
                subject: "Элективные курсы по физической культуре и спорту",
                type: "Пр.",
                startWeek: 1,
                endWeek: 16,
                hours: 32,
                professor: "Бутлерова",
                room: "4"
            }
        ],
        [],
        [],
        [],
    ],

    Thursday: [
        [
            {
                subject: "Практикум по культуре речевого общения на английском языке",
                type: "Пр.",
                startWeek: 1,
                endWeek: 17,
                hours: 34,
                professor: "Литвиненко Е.В.",
                room: "ауд. 323",
                group: "А"
            },
            {
                subject: "Практический курс английского языка",
                type: "Пр.",
                startWeek: 1,
                endWeek: 17,
                hours: 34,
                professor: "Марико М.Л.",
                room: "ауд. 348",
                group: "Б"
            }
        ],
        [
            {
                subject: "Морфология русского языка",
                type: "Пр.",
                startWeek: 1,
                endWeek: 17,
                hours: 34,
                professor: "Усманова Л.А.",
                room: "ауд. 349"
            }
        ],
        [
            {
                subject: "Техники бесконфликтного взаимодействия в образовании",
                type: "Пр.",
                startWeek: 1,
                endWeek: 9,
                hours: 18,
                professor: "Оренбурова Л.В.",
                room: "ауд. 318"
            },
            {
                subject: "Практикум по культуре речевого общения на английском языке",
                type: "Пр.",
                startWeek: 10,
                endWeek: 17,
                hours: 16,
                professor: "Мифтахова Л.Б.",
                room: "ауд. 252а",
                group: "Б"
            }
        ],
        [],
        [],
        [],
        []
    ],

    Friday: [
        [
            {
                subject: "Основы правоведения и противодействия коррупции",
                type: "Пр.",
                startWeek: 1,
                endWeek: 9,
                hours: 18,
                professor: "Путинцев А.В.",
                room: "ауд. 243/244"
            },
            {
                subject: "Практический курс английского языка",
                type: "Пр.",
                startWeek: 10,
                endWeek: 10,
                hours: 2,
                professor: "Мубаракшина А.М.",
                room: "ауд. 422",
                group: "А"
            }
        ],
        [
            {
                subject: "Практический курс английского языка",
                type: "Пр.",
                startWeek: 1,
                endWeek: 10,
                hours: 20,
                professor: "Мубаракшина А.М.",
                room: "ауд. 323",
                group: "А"
            },
            {
                subject: "Теория и методика обучения английскому языку",
                type: "Пр.",
                startWeek: 13,
                endWeek: 17,
                hours: 10,
                professor: "Насибуллова Г.Р.",
                room: "ауд. 216"
            }
        ],
        [
            {
                subject: "Современные модели уроков русского языка",
                type: "Л.",
                startWeek: 1,
                endWeek: 3,
                hours: 6,
                professor: "Ячина Н.П.",
                room: "ауд. 342/343"
            },
            {
                subject: "Морфология русского языка",
                type: "Л.",
                startWeek: 6,
                endWeek: 14,
                hours: 18,
                professor: "Корнеева Т.А.",
                room: "ауд. 355"
            },
            {
                subject: "Практический курс русского языка",
                type: "Пр.",
                startWeek: 16,
                endWeek: 16,
                hours: 2,
                professor: "Каримуллина Р.Н.",
                room: "ауд. 221"
            },
            {
                subject: "Морфология русского языка",
                type: "Пр.",
                startWeek: 17,
                endWeek: 17,
                hours: 2,
                professor: "Усманова Л.А.",
                room: "ауд. 318"
            }
        ],
        [
            {
                subject: "Теория и методика обучения английскому языку",
                type: "Л.",
                startWeek: 1,
                endWeek: 9,
                hours: 18,
                professor: "Насибуллова Г.Р.",
                room: "ауд. 342/343"
            },
            {
                subject: "Теория и методика обучения английскому языку",
                type: "Пр.",
                startWeek: 14,
                endWeek: 17,
                hours: 8,
                professor: "Насибуллова Г.Р.",
                room: "ауд. 318"
            }
        ],
        [
            {
                subject: "Практика по профилю подготовки (в области русского языка)",
                type: "Пр.",
                startWeek: 1,
                endWeek: 17,
                hours: 34,
                professor: "Полякова И.В.",
                room: "ауд. 249(2)",
                link: "https://telemost.yandex.ru/j/33696633051561"
            }
        ],
        [],
        []
    ],

    Saturday: [
        [
            {
                subject: "Педагогическая практика",
                type: "Пр.",
                startWeek: 1,
                endWeek: 18,
                hours: 36,
                professor: "Каипова Р.Р.",
                room: "ауд. 348"
            }
        ],
        [
            {
                subject: "Современные модели уроков русского языка",
                type: "Пр.",
                startWeek: 12,
                endWeek: 17,
                hours: 12,
                professor: "Куклина Н.В.",
                room: "ауд. 349"
            }
        ],
        [
            {
                subject: "Элективные курсы по физической культуре и спорту",
                type: "Пр.",
                startWeek: 1,
                endWeek: 16,
                hours: 32,
                professor: "Бутлерова",
                room: "4"
            }
        ],
        [
            {
                subject: "Практический курс русского языка",
                type: "Пр.",
                startWeek: 1,
                endWeek: 17,
                hours: 34,
                professor: "Каримуллина Р.Н.",
                room: "ауд. 348"
            }
        ],
        [],
        [],
        []
    ]
};

const daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

const dayNamesRu = {
    Monday: 'Понедельник',
    Tuesday: 'Вторник',
    Wednesday: 'Среда',
    Thursday: 'Четверг',
    Friday: 'Пятница',
    Saturday: 'Суббота',
    WholeWeek: 'Вся неделя'
};

let currentDay = daysOfWeek[(new Date().getDay() + 6) % 7];
let weekOffset = 0;


/* =========================================================
   НОМЕР ТЕКУЩЕЙ НЕДЕЛИ
========================================================= */

function getWeekNumber() {
    // 9 февраля 2026 = начало 1 недели
    const startDate = new Date(2026, 1, 9);
    const now = new Date();

    if (now < startDate) return 0;

    return Math.floor(
        (now - startDate) / (7 * 24 * 60 * 60 * 1000)
    ) + 1;
}


/* =========================================================
   ПОЛУЧИТЬ ЗАНЯТИЯ НА НЕДЕЛЮ
========================================================= */

function getClassesForWeek(classes, currentWeek) {
    if (!classes || currentWeek <= 0) return null;

    if (!Array.isArray(classes)) {
        classes = [classes];
    }

    const filtered = classes.filter(cls => {

        if (Array.isArray(cls.startWeek)) {
            return cls.startWeek.includes(currentWeek);
        }

        if (
            'startWeek' in cls &&
            'endWeek' in cls
        ) {
            return (
                currentWeek >= cls.startWeek &&
                currentWeek <= cls.endWeek
            );
        }

        return true;
    });

    return filtered.length ? filtered : null;
}


/* =========================================================
   ОПРЕДЕЛЕНИЕ ГРУППЫ А / Б
========================================================= */

function getGroup(cls) {

    // 1. Если group указана вручную — используем её
    if (cls.group) {
        const group = String(cls.group).toUpperCase();

        if (group === 'A') return 'А';
        if (group === 'B') return 'Б';

        return group;
    }

    const subject = cls.subject || '';

    // 2. Ищем 10.3-353А или 10.3-353Б
    const match = subject.match(/10\.3-353([АБAB])/i);

    if (!match) {
        return '';
    }

    const group = match[1].toUpperCase();

    if (group === 'A' || group === 'А') {
        return 'А';
    }

    if (group === 'B' || group === 'Б') {
        return 'Б';
    }

    return '';
}


/* =========================================================
   ОЧИСТКА НАЗВАНИЯ ПРЕДМЕТА
========================================================= */

function cleanSubject(subject) {

    if (!subject) return '';

    // Убираем 10.3-353А / 10.3-353Б
    return subject
        .replace(/^10\.3-353[АБAB]\s*/i, '')
        .trim();
}


/* =========================================================
   ОЧИСТКА ССЫЛКИ
========================================================= */

function cleanLink(link) {

    if (!link) return '';

    // Если ссылка в Markdown:
    // [https://example.com](https://example.com)
    const markdownMatch = link.match(
        /^\[.*?\]\((.*?)\)$/
    );

    if (markdownMatch) {
        return markdownMatch[1];
    }

    return link;
}


/* =========================================================
   ЭКРАНИРОВАНИЕ HTML
========================================================= */

function escapeHtml(value) {

    if (value === null || value === undefined) {
        return '';
    }

    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}


/* =========================================================
   ОТРИСОВКА ОДНОЙ ПАРЫ
========================================================= */

function renderPairRow(pair, classesToRender, tbody) {

    if (
        !classesToRender ||
        classesToRender.length === 0
    ) {
        return;
    }

    const tr = document.createElement('tr');

    tr.classList.add(
        'hover:bg-indigo-50',
        'transition'
    );


    /* Время */

    const timeCell = document.createElement('td');

    timeCell.className =
        'px-6 py-3 align-top font-medium whitespace-nowrap';

    timeCell.textContent =
        `${pair.start} - ${pair.end}`;

    tr.appendChild(timeCell);


    /* Предмет */

    const subjectCell = document.createElement('td');

    subjectCell.className =
        'px-6 py-3';


    subjectCell.innerHTML = classesToRender
        .map(cls => {

            const group = getGroup(cls);

            const groupText = group
                ? `<span class="font-bold text-indigo-700">(${escapeHtml(group)})</span> `
                : '';

            const subject = cleanSubject(
                cls.subject
            );

            const link = cleanLink(
                cls.link
            );


            if (link) {

                return `
                    <div class="mb-1">
                        <a
                            href="${escapeHtml(link)}"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="text-blue-600 underline hover:text-blue-800"
                        >
                            ${groupText}${escapeHtml(subject)}
                        </a>
                    </div>
                `;

            }


            return `
                <div class="mb-1">
                    ${groupText}${escapeHtml(subject)}
                </div>
            `;

        })
        .join('');


    tr.appendChild(subjectCell);


    /* Тип */

    const typeCell = document.createElement('td');

    typeCell.className =
        'px-6 py-3 whitespace-nowrap';

    typeCell.innerHTML = classesToRender
        .map(cls => `
            <div class="mb-1">
                ${escapeHtml(cls.type || '')}
            </div>
        `)
        .join('');

    tr.appendChild(typeCell);


    /* Аудитория */

    const roomCell = document.createElement('td');

    roomCell.className =
        'px-6 py-3 whitespace-nowrap';

    roomCell.innerHTML = classesToRender
        .map(cls => `
            <div class="mb-1">
                ${escapeHtml(cls.room || '')}
            </div>
        `)
        .join('');

    tr.appendChild(roomCell);


    /* Преподаватель */

    const profCell = document.createElement('td');

    profCell.className =
        'px-6 py-3';

    profCell.innerHTML = classesToRender
        .map(cls => {

            if (cls.professor) {

                return `
                    <div class="mb-1">
                        ${escapeHtml(cls.professor)}
                    </div>
                `;

            }

            if (cls.professors) {

                return `
                    <div class="mb-1">
                        ${escapeHtml(
                            cls.professors.join(', ')
                        )}
                    </div>
                `;

            }

            return '<div></div>';

        })
        .join('');

    tr.appendChild(profCell);


    tbody.appendChild(tr);
}


/* =========================================================
   ОТРИСОВКА РАСПИСАНИЯ
========================================================= */

function renderSchedule() {

    const currentWeek =
        getWeekNumber() + weekOffset;


    /* Номер недели */

    const weekNumberEl =
        document.getElementById('weekNumber');

    if (weekNumberEl) {
        weekNumberEl.textContent =
            currentWeek;
    }


    /* День */

    const currentDayEl =
        document.getElementById('currentDay');

    const dayLabel =
        dayNamesRu[currentDay] ||
        currentDay;

    if (currentDayEl) {
        currentDayEl.textContent =
            dayLabel;
    }


    /* Таблица */

    const tbody =
        document.getElementById('scheduleBody');

    if (!tbody) {

        console.error(
            'Schedule body element not found'
        );

        return;
    }


    tbody.innerHTML = '';


    /* =====================================================
       ВСЯ НЕДЕЛЯ
    ===================================================== */

    if (currentDay === 'WholeWeek') {

        daysOfWeek.forEach(day => {

            const daySchedule =
                scheduleData[day] ||
                Array(
                    pairsTimeRanges.length
                ).fill(null);

            let hasAnyClass = false;


            /* Заголовок дня */

            const headerRow =
                document.createElement('tr');

            headerRow.classList.add(
                'bg-indigo-100',
                'font-bold',
                'text-indigo-900'
            );

            headerRow.innerHTML = `
                <td
                    colspan="5"
                    class="text-center py-2"
                >
                    ${escapeHtml(
                        dayNamesRu[day] || day
                    )}
                </td>
            `;

            tbody.appendChild(headerRow);


            /* Пары */

            pairsTimeRanges.forEach(
                (pair, index) => {

                    const pairData =
                        daySchedule[index];

                    const classesToRender =
                        getClassesForWeek(
                            pairData,
                            currentWeek
                        );

                    if (
                        classesToRender &&
                        classesToRender.length
                    ) {

                        hasAnyClass = true;

                        renderPairRow(
                            pair,
                            classesToRender,
                            tbody
                        );
                    }
                }
            );


            /* Нет занятий */

            if (!hasAnyClass) {

                const tr =
                    document.createElement('tr');

                tr.classList.add(
                    'text-center',
                    'italic',
                    'text-gray-400'
                );

                tr.innerHTML = `
                    <td
                        colspan="5"
                        class="px-6 py-4"
                    >
                        Занятий нет на
                        ${escapeHtml(
                            dayNamesRu[day] || day
                        )}
                    </td>
                `;

                tbody.appendChild(tr);
            }

        });

        return;
    }


    /* =====================================================
       ОДИН ДЕНЬ
    ===================================================== */

    const daySchedule =
        scheduleData[currentDay] ||
        Array(
            pairsTimeRanges.length
        ).fill(null);

    let hasAnyClass = false;


    pairsTimeRanges.forEach(
        (pair, index) => {

            const pairData =
                daySchedule[index];

            const classesToRender =
                getClassesForWeek(
                    pairData,
                    currentWeek
                );

            if (
                classesToRender &&
                classesToRender.length
            ) {

                hasAnyClass = true;

                renderPairRow(
                    pair,
                    classesToRender,
                    tbody
                );
            }
        }
    );


    /* Нет занятий */

    if (!hasAnyClass) {

        const tr =
            document.createElement('tr');

        tr.classList.add(
            'text-center',
            'italic',
            'text-gray-400'
        );

        tr.innerHTML = `
            <td
                colspan="5"
                class="px-6 py-4"
            >
                Занятий нет сегодня
            </td>
        `;

        tbody.appendChild(tr);
    }
}


/* =========================================================
   ТЕКУЩЕЕ ВРЕМЯ
========================================================= */

function updateCurrentTime() {

    const now = new Date();

    const timeStr =
        now.toLocaleTimeString(
            'ru-RU',
            {
                hour12: false
            }
        );

    const timeElement =
        document.getElementById(
            'currentTime'
        );

    if (timeElement) {
        timeElement.textContent =
            timeStr;
    }
}


/* =========================================================
   ФОРМАТ ВРЕМЕНИ
========================================================= */

function formatDuration(ms) {

    let totalSeconds =
        Math.max(
            0,
            Math.floor(ms / 1000)
        );

    const hours =
        Math.floor(
            totalSeconds / 3600
        );

    totalSeconds %= 3600;

    const minutes =
        Math.floor(
            totalSeconds / 60
        );

    const seconds =
        totalSeconds % 60;


    const parts = [];


    if (hours > 0) {
        parts.push(`${hours}ч`);
    }

    if (minutes > 0) {
        parts.push(`${minutes}м`);
    }

    if (
        seconds > 0 ||
        parts.length === 0
    ) {
        parts.push(`${seconds}с`);
    }


    return parts.join(' ');
}


/* =========================================================
   ТАЙМЕР
========================================================= */

function updateTimer() {

    const now = new Date();

    const timerTextEl =
        document.getElementById(
            'timerText'
        );

    const currentDayEl =
        document.getElementById(
            'currentDay'
        );

    if (
        !timerTextEl ||
        !currentDayEl
    ) {
        return;
    }


    currentDayEl.textContent =
        dayNamesRu[currentDay] ||
        currentDay;


    const today =
        daysOfWeek[
            (new Date().getDay() + 6) % 7
        ];


    /* Таймер работает только сегодня */

    if (
        currentDay !== today ||
        weekOffset !== 0 ||
        currentDay === 'WholeWeek' ||
        !scheduleData[currentDay]
    ) {

        timerTextEl.textContent =
            currentDay === 'WholeWeek'
                ? 'Это расписание на эту неделю'
                : 'Выберите сегодня, чтобы увидеть живой таймер';

        return;
    }


    const daySchedule =
        scheduleData[currentDay];

    const currentWeek =
        getWeekNumber() + weekOffset;

    let timerSet = false;


    for (
        let i = 0;
        i < pairsTimeRanges.length;
        i++
    ) {

        const pair =
            pairsTimeRanges[i];


        const [
            startH,
            startM
        ] =
            pair.start
                .split(':')
                .map(Number);


        const [
            endH,
            endM
        ] =
            pair.end
                .split(':')
                .map(Number);


        const start =
            new Date(
                now.getFullYear(),
                now.getMonth(),
                now.getDate(),
                startH,
                startM,
                0
            );


        const end =
            new Date(
                now.getFullYear(),
                now.getMonth(),
                now.getDate(),
                endH,
                endM,
                0
            );


        const pairClasses =
            daySchedule[i];


        const classesToRender =
            getClassesForWeek(
                pairClasses,
                currentWeek
            );


        if (
            !classesToRender ||
            classesToRender.length === 0
        ) {
            continue;
        }


        /* Следующая пара */

        if (now < start) {

            const diff =
                start - now;

            timerTextEl.textContent =
                `Следующая пара начинается через ${formatDuration(diff)}`;

            timerSet = true;

            break;
        }


        /* Сейчас идёт пара */

        if (
            now >= start &&
            now < end
        ) {

            const diff =
                end - now;

            timerTextEl.textContent =
                `Текущая пара заканчивается через ${formatDuration(diff)}`;

            timerSet = true;

            break;
        }
    }


    if (!timerSet) {

        timerTextEl.textContent =
            'Больше занятий сегодня нет';
    }
}


/* =========================================================
   КНОПКИ ДНЕЙ
========================================================= */

document
    .querySelectorAll('.day-btn')
    .forEach(btn => {

        btn.addEventListener(
            'click',
            () => {

                currentDay =
                    btn.getAttribute(
                        'data-day'
                    );


                document
                    .querySelectorAll(
                        '.day-btn'
                    )
                    .forEach(b => {

                        b.classList.remove(
                            'ring-4',
                            'ring-offset-2',
                            'ring-blue-300'
                        );
                    });


                btn.classList.add(
                    'ring-4',
                    'ring-offset-2',
                    'ring-blue-300'
                );


                const showWeekBtn =
                    document.getElementById(
                        'showWeekBtn'
                    );

                if (showWeekBtn) {

                    showWeekBtn.classList.remove(
                        'ring-4',
                        'ring-offset-2',
                        'ring-blue-300'
                    );
                }


                renderSchedule();
                updateTimer();
            }
        );
    });


/* =========================================================
   ВСЯ НЕДЕЛЯ
========================================================= */

const showWeekBtn =
    document.getElementById(
        'showWeekBtn'
    );

if (showWeekBtn) {

    showWeekBtn.addEventListener(
        'click',
        () => {

            currentDay =
                'WholeWeek';


            document
                .querySelectorAll(
                    '.day-btn'
                )
                .forEach(b => {

                    b.classList.remove(
                        'ring-4',
                        'ring-offset-2',
                        'ring-blue-300'
                    );
                });


            showWeekBtn.classList.add(
                'ring-4',
                'ring-offset-2',
                'ring-blue-300'
            );


            renderSchedule();
            updateTimer();
        }
    );
}


/* =========================================================
   ПРЕДЫДУЩАЯ НЕДЕЛЯ
========================================================= */

const prevWeekBtn =
    document.getElementById(
        'prevWeekBtn'
    );

if (prevWeekBtn) {

    prevWeekBtn.addEventListener(
        'click',
        () => {

            weekOffset--;

            renderSchedule();
            updateTimer();
        }
    );
}


/* =========================================================
   СЛЕДУЮЩАЯ НЕДЕЛЯ
========================================================= */

const nextWeekBtn =
    document.getElementById(
        'nextWeekBtn'
    );

if (nextWeekBtn) {

    nextWeekBtn.addEventListener(
        'click',
        () => {

            weekOffset++;

            renderSchedule();
            updateTimer();
        }
    );
}


/* =========================================================
   ТЕКУЩАЯ НЕДЕЛЯ
========================================================= */

const resetWeekBtn =
    document.getElementById(
        'resetWeekBtn'
    );

if (resetWeekBtn) {

    resetWeekBtn.addEventListener(
        'click',
        () => {

            weekOffset = 0;

            renderSchedule();
            updateTimer();
        }
    );
}


/* =========================================================
   ПОДСВЕТКА ТЕКУЩЕГО ДНЯ
========================================================= */

const initBtn =
    document.querySelector(
        `.day-btn[data-day="${currentDay}"]`
    );

if (initBtn) {

    initBtn.classList.add(
        'ring-4',
        'ring-offset-2',
        'ring-blue-300'
    );
}


/* =========================================================
   ПЕРВЫЙ ЗАПУСК
========================================================= */

renderSchedule();

updateCurrentTime();

updateTimer();


/* =========================================================
   ОБНОВЛЕНИЕ КАЖДУЮ СЕКУНДУ
========================================================= */

setInterval(() => {

    updateCurrentTime();

    updateTimer();

}, 1000);
