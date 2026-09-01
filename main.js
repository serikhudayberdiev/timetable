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
        [], // 1-я пара 8:30
        [], // 2-я пара 10:10
        [
            {
                subject: "Методика обучения видам речевой деятельности (в области русского языка)",
                type: "Пр.",
                startWeek: 16,
                endWeek: 17,
                hours: 4,
                professor: "Шамсутдинова А.И.",
                room: "349"
            },
            {
                subject: "Практика по профилю подготовки (в области русского языка)",
                type: "Пр.",
                startWeek: 12,
                endWeek: 13,
                hours: 4,
                professor: "Карасева А.И.",
                room: "350"
            },
            {
                subject: "Практика по профилю подготовки (в области русского языка)",
                type: "Пр.",
                startWeek: 10,
                endWeek: 10,
                hours: 2,
                professor: "Карасева А.И.",
                room: "411"
            },
            {
                subject: "Методика обучения видам речевой деятельности (в области русского языка)",
                type: "Пр.",
                startWeek: 14,
                endWeek: 14,
                hours: 2,
                professor: "Шамсутдинова А.И.",
                room: "243/244"
            },
            {
                subject: "Методика обучения видам речевой деятельности (в области русского языка)",
                type: "Пр.",
                startWeek: 11,
                endWeek: 11,
                hours: 2,
                professor: "Шамсутдинова А.И.",
                room: "207"
            },
            {
                subject: "Методика обучения видам речевой деятельности (в области русского языка)",
                type: "Пр.",
                startWeek: 15,
                endWeek: 15,
                hours: 2,
                professor: "Шамсутдинова А.И.",
                room: "207"
            }
        ],
        [
            {
                subject: "(B) Практический курс русского языка",
                type: "Пр.",
                startWeek: 2,
                endWeek: 6,
                hours: 10,
                professor: "Гусманова Д.Ш.",
                room: "306"
            },
            {
                subject: "(A) Иностранный язык в профессиональной коммуникации",
                type: "Пр.",
                startWeek: 2,
                endWeek: 17,
                hours: 32,
                professor: "Халиуллина С.А.",
                room: "322"
            }
        ],
        [
            {
                subject: "Синтаксис русского языка",
                type: "Л.",
                startWeek: 3,
                endWeek: 11,
                hours: 18,
                professor: "Фаттахова Н.Н.",
                room: "355"
            }
        ],
        [
            {
                subject: "(A) Аудирование аутентичных материалов (английский язык)",
                type: "Пр.",
                startWeek: 10,
                endWeek: 16,
                hours: 14,
                professor: "Волчкова В.И.",
                room: "302"
            }
        ],
        [
            {
                subject: "Финансово-экономический практикум",
                type: "Пр.",
                startWeek: 2,
                endWeek: 10,
                hours: 18,
                professor: "Игнатьева О.А.",
                room: "217"
            },
            {
                subject: "(A) Практический курс русского языка",
                type: "Пр.",
                startWeek: 12,
                endWeek: 17,
                hours: 12,
                professor: "Гусманова Д.Ш.",
                room: "217"
            }
        ]
    ],

    Tuesday: [
        [], // 1-я пара 8:30
        [
            {
                subject: "Финансово-экономический практикум",
                type: "Л.",
                startWeek: 1,
                endWeek: 9,
                hours: 18,
                professor: "Игнатьева О.А.",
                room: "249(2)",
                link: "https://telemost.yandex.ru/j/77768727482683"
            }
        ],
        [
            {
                subject: "Синтетическое чтение на английском языке",
                type: "Пр.",
                startWeek: 9,
                endWeek: 9,
                hours: 2,
                professor: "Гарифуллин А.Ф.",
                room: "314"
            },
            {
                subject: "(B) Практический курс английского языка",
                type: "Пр.",
                startWeek: 1,
                endWeek: 4,
                hours: 8,
                professor: "Халиуллина С.А.",
                room: "322"
            },
            {
                subject: "(A) Основы речевой англоязычной компетенции",
                type: "Пр.",
                startWeek: 1,
                endWeek: 8,
                hours: 16,
                professor: "Шейнина Д.П. (Мифтахова Л.Б.)",
                room: "323"
            },
        ],
        [
             {
                subject: "(A) Основы речевой англоязычной компетенции",
                type: "Пр.",
                startWeek: 1,
                endWeek: 1,
                hours: 2,
                professor: "Шейнина Д.П. (Мифтахова Л.Б.)",
                room: "302"
            },
            {
                subject: "(A) Основы речевой англоязычной компетенции",
                type: "Пр.",
                startWeek: 11,
                endWeek: 12,
                hours: 4,
                professor: "Шейнина Д.П. (Мифтахова Л.Б.)",
                room: "303"
            },
            {
                subject: "(A) Основы речевой англоязычной компетенции",
                type: "Пр.",
                startWeek: 16,
                endWeek: 16,
                hours: 2,
                professor: "Шейнина Д.П. (Мифтахова Л.Б.)",
                room: "318"
            },
            {
                subject: "(B) Практический курс английского языка",
                type: "Пр.",
                startWeek: 10,
                endWeek: 16,
                hours: 14,
                professor: "Халиуллина С.А.",
                room: "322"
            },
            {
                subject: "(A) Иностранный язык в профессиональной коммуникации",
                type: "Пр.",
                startWeek: 17,
                endWeek: 17,
                hours: 2,
                professor: "Халиуллина С.А.",
                room: "322"
            },
            {
                subject: "(B) Практический курс английского языка",
                type: "Пр.",
                startWeek: 1,
                endWeek: 4,
                hours: 8,
                professor: "Халиуллина С.А.",
                room: "408"
            },
            {
                subject: "(A) Основы речевой англоязычной компетенции",
                type: "Пр.",
                startWeek: 2,
                endWeek: 3,
                hours: 4,
                professor: "Шейнина Д.П. (Мифтахова Л.Б.)",
                room: "224"
            }
        ],
        [
            {
                subject: "Теория и методика обучения русскому языку",
                type: "Пр.",
                startWeek: 1,
                endWeek: 9,
                hours: 18,
                professor: "Нуруллина Г.М.",
                room: "211"
            },
            {
                subject: "(A) Практический курс русского языка",
                type: "Пр.",
                startWeek: 11,
                endWeek: 17,
                hours: 14,
                professor: "Гусманова Д.Ш.",
                room: "322"
            }
        ],
        [],
        []
    ],

    Wednesday: [
        [], // 1-я пара
        [], // 2-я пара
        [
            {
                subject: "(B) Практический курс русского языка",
                type: "Пр.",
                startWeek: 1,
                endWeek: 2,
                hours: 4,
                professor: "Гусманова Д.Ш.",
                room: "314"
            },
            {
                subject: "(B) Практический курс русского языка",
                type: "Пр.",
                startWeek: 11,
                endWeek: 14,
                hours: 8,
                professor: "Гусманова Д.Ш.",
                room: "322"
            }
        ], // 3-я пара
        [
           {
                subject: "Теория и методика обучения английскому языку",
                type: "Пр.",
                startWeek: 1,
                endWeek: 9,
                hours: 18,
                professor: "Насибуллова Г.Р.",
                room: "216"
            },
            {
                subject: "История английского языка",
                type: "Л.",
                startWeek: 11,
                endWeek: 17,
                hours: 14,
                professor: "Нурутдинова А.Р.",
                room: "342/343"
            }
        ],
        [
            
            {
                subject: "ДВ Язык делового общения",
                type: "Л.",
                startWeek: 11,
                endWeek: 16,
                hours: 12,
                professor: "Шакирова Д.Ш.",
                room: "342/343"
            },
            {
                subject: "История английского языка",
                type: "Л.",
                startWeek: 17,
                endWeek: 17,
                hours: 2,
                professor: "Нурутдинова А.Р.",
                room: "342/343"
            },
            {
                subject: "Методика обучения видам речевой деятельности (в области русского языка)",
                type: "Пр.",
                startWeek: 1,
                endWeek: 9,
                hours: 18,
                professor: "Шамсутдинова А.И.",
                room: "224(1-2н.)/207(3-9н.)"
            }
        ],
        [
             {
                subject: "Синтаксис русского языка",
                type: "Пр.",
                startWeek: 16,
                endWeek: 16,
                hours: 2,
                professor: "Фаронская С.А.",
                room: "308"
            },
            {
                subject: "Синтаксис русского языка",
                type: "Пр.",
                startWeek: 11,
                endWeek: 15,
                hours: 10,
                professor: "Фаронская С.А.",
                room: "314"
            }
        ],
        [
           {
                subject: "Синтаксис русского языка",
                type: "Пр.",
                startWeek: 11,
                endWeek: 16,
                hours: 12,
                professor: "Фаронская С.А.",
                room: "314"
            }
        ],
    ],

    Thursday: [
    // 8:30 - 10:00
    [
        {
            subject: "Основы речевой англоязычной компетенции",
            type: "Пр.",
            startWeek: 1,
            endWeek: 17,
            hours: 34,
            professor: "Измайлова Г.А.",
            room: "303",
            group: "Б"
        }
    ],

    // 10:10 - 11:40
    [
        {
            subject: "Аудирование аутентичных материалов (английский язык)",
            type: "Пр.",
            startWeek: 1,
            endWeek: 17,
            hours: 34,
            professor: "Шейнина Д.П.",
            room: "216",
            group: "Б"
        },
        {
            subject: "Практический курс английского языка",
            type: "Пр.",
            startWeek: 1,
            endWeek: 17,
            hours: 34,
            professor: "Измайлова Г.А.",
            room: "303",
            group: "А"
        }
    ],

    // 12:10 - 13:40
    [
        {
            subject: "Аудирование аутентичных материалов (английский язык)",
            type: "Пр.",
            startWeek: 2,
            endWeek: 5,
            hours: 8,
            professor: "Шейнина Д.П.",
            room: "301",
            group: "Б"
        },
        {
            subject: "Аудирование аутентичных материалов (английский язык)",
            type: "Пр.",
            startWeek: 11,
            endWeek: 15,
            hours: 10,
            professor: "Шейнина Д.П.",
            room: "301",
            group: "Б"
        },
        {
            subject: "Аудирование аутентичных материалов (английский язык)",
            type: "Пр.",
            startWeek: 10,
            endWeek: 10,
            hours: 2,
            professor: "Шейнина Д.П.",
            room: "323",
            group: "Б"
        },
        {
            subject: "Практический курс русского языка",
            type: "Пр.",
            startWeek: 11,
            endWeek: 15,
            hours: 10,
            professor: "Гусманова Д.Ш.",
            room: "323",
            group: "А"
        },
        {
            subject: "Практический курс русского языка",
            type: "Пр.",
            startWeek: 16,
            endWeek: 17,
            hours: 4,
            professor: "Гусманова Д.Ш.",
            room: "323",
            group: "Б"
        }
    ],

    // 13:50 - 15:20
    [
        {
            subject: "Синтаксис русского языка",
            type: "Пр.",
            startWeek: 1,
            endWeek: 6,
            hours: 12,
            professor: "Фаронская С.А.",
            room: "411"
        },
        {
            subject: "Методика обучения видам речевой деятельности (в области русского языка)",
            type: "Пр.",
            startWeek: 7,
            endWeek: 10,
            hours: 8,
            professor: "Шамсутдинова А.И.",
            room: "411"
        },
        {
            subject: "Методика обучения видам речевой деятельности (в области русского языка)",
            type: "Л.",
            startWeek: 11,
            endWeek: 16,
            hours: 12,
            professor: "Шамсутдинова А.И.",
            room: "355"
        },
        {
            subject: "История английского языка",
            type: "Л.",
            startWeek: 17,
            endWeek: 17,
            hours: 2,
            professor: "Нурутдинова А.Р.",
            room: "346/347"
        }
    ],

    // 15:50 - 17:20
    [
        {
            subject: "История русского литературного языка",
            type: "Пр.",
            startWeek: 11,
            endWeek: 14,
            hours: 8,
            professor: "Карасева А.И.",
            room: "241/242"
        },
        {
            subject: "История русского литературного языка",
            type: "Пр.",
            startWeek: 8,
            endWeek: 9,
            hours: 4,
            professor: "Карасева А.И.",
            room: "426"
        },
        {
            subject: "История русского литературного языка",
            type: "Пр.",
            startWeek: 15,
            endWeek: 17,
            hours: 6,
            professor: "Карасева А.И.",
            room: "404"
        }
    ],

    // 17:30 - 19:00
    [],

    // 19:10 - 20:40
    []
    ],

Friday: [
    // 1-я пара — 8:30
    [
        {
            subject: "Иностранный язык в профессиональной коммуникации",
            type: "Пр.",
            startWeek: 1,
            endWeek: 17,
            hours: 34,
            professor: "Мубаракшина А.М.",
            room: "216",
            group: "Б"
        },
        {
            subject: "Аудирование аутентичных материалов (английский язык)",
            type: "Пр.",
            startWeek: 3,
            endWeek: 17,
            hours: 30,
            professor: "Волчкова В.И.",
            room: "318",
            group: "А"
        }
    ],

    // 2-я пара — 10:10
    [
        {
            subject: "Аудирование аутентичных материалов (английский язык)",
            type: "Пр.",
            startWeek: 11,
            endWeek: 14,
            hours: 8,
            professor: "Волчкова В.И.",
            room: "303",
            group: "А"
        },
        {
            subject: "Аудирование аутентичных материалов (английский язык)",
            type: "Пр.",
            startWeek: 17,
            endWeek: 17,
            hours: 2,
            professor: "Волчкова В.И.",
            room: "306",
            group: "А"
        },
        {
            subject: "История английского языка",
            type: "Пр.",
            startWeek: 1,
            endWeek: 9,
            hours: 18,
            professor: "Нурутдинова А.Р.",
            room: "308"
        },
        {
            subject: "Практический курс русского языка",
            type: "Пр.",
            startWeek: 14,
            endWeek: 17,
            hours: 8,
            professor: "Гусманова Д.Ш.",
            room: "342/343",
            group: "Б"
        }
    ],

    // 3-я пара — 12:10
    [
        {
            subject: "Практический курс английского языка",
            type: "Пр.",
            startWeek: 11,
            endWeek: 14,
            hours: 8,
            professor: "Халиуллина С.А.",
            room: "323",
            group: "Б"
        },
        {
            subject: "Иностранный язык в профессиональной коммуникации",
            type: "Пр.",
            startWeek: 17,
            endWeek: 17,
            hours: 2,
            professor: "Мубаракшина А.М.",
            room: "504",
            group: "Б"
        },
        {
            subject: "Практический курс английского языка",
            type: "Пр.",
            startWeek: 1,
            endWeek: 8,
            hours: 16,
            professor: "Халиуллина С.А.",
            room: "408",
            group: "Б"
        },
        {
            subject: "Практический курс английского языка",
            type: "Пр.",
            startWeek: 1,
            endWeek: 9,
            hours: 18,
            professor: "Измайлова Г.А.",
            room: "405(1-5,7-9н.)/407(6н.)",
            group: "А"
        }
    ],

    // 4-я пара — 13:50
    [
        {
            subject: "Практический курс русского языка",
            type: "Пр.",
            startWeek: 17,
            endWeek: 17,
            hours: 2,
            professor: "Гусманова Д.Ш.",
            room: "221",
            group: "Б"
        },
        {
            subject: "Теория и методика обучения русскому языку",
            type: "Л.",
            startWeek: 4,
            endWeek: 12,
            hours: 18,
            professor: "Нуруллина Г.М.",
            room: "355"
        },
        {
            subject: "История русского литературного языка",
            type: "Л.",
            startWeek: 13,
            endWeek: 13,
            hours: 2,
            professor: "Лукоянова Ю.К.",
            room: "355"
        },
        {
            subject: "Методика обучения видам речевой деятельности (в области русского языка)",
            type: "Л.",
            startWeek: 14,
            endWeek: 16,
            hours: 6,
            professor: "Шамсутдинова А.И.",
            room: "355"
        },
        {
            subject: "Иностранный язык в профессиональной коммуникации",
            type: "Пр.",
            startWeek: 1,
            endWeek: 1,
            hours: 2,
            professor: "Халиуллина С.А.",
            room: "504",
            group: "А"
        },
        {
            subject: "ФТД Формирование языковой личности школьника на уроках русского языка",
            type: "Пр.",
            startWeek: 3,
            endWeek: 3,
            hours: 2,
            professor: "Ижбаева Г.Р.",
            room: "207"
        }
    ],

    // 5-я пара — 15:50
    [
        {
            subject: "История русского литературного языка",
            type: "Л.",
            startWeek: 1,
            endWeek: 17,
            hours: 34,
            professor: "Лукоянова Ю.К.",
            room: "344/345"
        }
    ],

    // 6-я пара — 17:30
    [],

    // 7-я пара — 19:10
    []
],
    Saturday: [
        [], // 1-я пара
        [], // 2-я пара
    [
        {
            subject: "ФТД Формирование языковой личности школьника на уроках русского языка",
            type: "Л.",
            startWeek: 10,
            endWeek: 17,
            hours: 16,
            professor: "Ижбаева Г.Р.",
            room: "342/343"
        }
    ],
    [
        {
            subject: "ФТД Формирование языковой личности школьника на уроках русского языка",
            type: "Пр.",
            startWeek: 15,
            endWeek: 15,
            hours: 2,
            professor: "Ижбаева Г.Р.",
            room: "219/220"
        },
        {
            subject: "ФТД Формирование языковой личности школьника на уроках русского языка",
            type: "Пр.",
            startWeek: 16,
            endWeek: 17,
            hours: 4,
            professor: "Ижбаева Г.Р.",
            room: "318"
        },
        {
            subject: "Синтетическое чтение на английском языке",
            type: "Пр.",
            startWeek: 11,
            endWeek: 14,
            hours: 8,
            professor: "Гарифуллин А.Ф.",
            room: "411"
        },
        {
            subject: "ФТД Формирование языковой личности школьника на уроках русского языка",
            type: "Пр.",
            startWeek: 1,
            endWeek: 9,
            hours: 18,
            professor: "Ижбаева Г.Р.",
            room: "207"
        }
    ],
    [
        {
            subject: "Практика по профилю подготовки (в области русского языка)",
            type: "Пр.",
            startWeek: 1,
            endWeek: 14,
            hours: 28,
            professor: "Карасева А.И.",
            room: "411"
        },
        {
            subject: "ФТД Практикум по культуре речевого общения на английском языке",
            type: "Пр.",
            startWeek: 15,
            endWeek: 16,
            hours: 4,
            professor: "Нурутдинова А.Р.",
            room: "241/242"
        }
    ],
    [
        {
            subject: "Синтетическое чтение на английском языке",
            type: "Пр.",
            startWeek: 11,
            endWeek: 14,
            hours: 8,
            professor: "Гарифуллин А.Ф.",
            room: "350"
        },
        {
            subject: "ФТД Практикум по культуре речевого общения на английском языке",
            type: "Пр.",
            startWeek: 1,
            endWeek: 10,
            hours: 20,
            professor: "Нурутдинова А.Р.",
            room: "241/242"
        },
        {
            subject: "ФТД Практикум по культуре речевого общения на английском языке",
            type: "Пр.",
            startWeek: 15,
            endWeek: 16,
            hours: 4,
            professor: "Нурутдинова А.Р.",
            room: "241/242"
        },
        {
            subject: "ДВ Язык делового общения",
            type: "Пр.",
            startWeek: 3,
            endWeek: 14,
            hours: 24,
            professor: "Хакимуллина Д.Ф.",
            room: "348"
        },
        {
            subject: "Основы речевой англоязычной компетенции",
            type: "Пр.",
            startWeek: 15,
            endWeek: 17,
            hours: 6,
            professor: "Шейнина Д.П. (Мифтахова Л.Б.)",
            room: "348"
        }
    ],
    [
        {
            subject: "ФТД Практикум по культуре речевого общения на английском языке",
            type: "Пр.",
            startWeek: 15,
            endWeek: 16,
            hours: 4,
            professor: "Нурутдинова А.Р.",
            room: "241/242"
        }
    ],
    ]
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
    const startDate = new Date(2026, 8, 1);
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
