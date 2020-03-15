const initialState = {
    subjects: [
        {
            id: 0,
            name: "ISD",
            type: {
                lecture: true,
                exercise: true,
                laboratory: false
            },
            ects: 2,
            credit: false,
            grade: ''
        },
        {
            id: 1,
            name: "EE",
            type: {
                lecture: true,
                exercise: true,
                laboratory: false
            },
            ects: 3,
            credit: true,
            grade: 3.5
        },
        {
            id: 2,
            name: "Obwody i sygnały",
            type: {
                lecture: false,
                exercise: false,
                laboratory: true
            },
            ects: 2,
            credit: true,
            grade: 3
        },
    ],
    notesCategories: [
        {
            id: 0,
            name: "wszystkie",
        },
        {
            id: 1,
            name: "Przetwarzanie sygnałów",
        },
        {
            id: 2,
            name: "Obwody i sygnały",
        },
        {
            id: 3,
            name: "Inżynieria systemów dynamicznych",
        },
    ],
    notes: [
        {
            id: 0,
            title: "zagadnienia na kolokwium",
            category: "Przetwarzanie sygnałów",
            content: "Klasyfikacje układów: \n Definicja 1 System statyczny (bezpamięciowy) - próbka wyjściowa y[n] nie zależy od próbki wejściowej x[n].Definicja 2 System, który nie jest statyczny jest systemem dynamicznym (pamięciowym),Definicja 3 System jest przyczynowy, gdy dla każdego pobudzenia przyczynowegoodpowiedź układu jest także przyczynowa. W przeciwnym razie system jest nieprzyczynowy. Definicja 4 System jest liniowy, gdy wykonuje operację, która jest liniowa. Definicja 5 System, który wykonuje operację, która nie zależy jawnie od numeru próbki n, to system jest stały w czasie.",
            created: "2020-02-12 12:40"
        },
        {
            id: 1,
            title: "zagadnienia na kolokwium 2",
            category: "Przetwarzanie sygnałów",
            content: "-lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
            created: "2020-02-12 12:40"
        },
        {
            id: 2,
            title: "Obwody i sygnały",
            category: "Obwody i sygnały",
            content: "-lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
            created: "2020-02-12 12:40"
        },
        {
            id: "zudngnza2",
            title: "ISD - instrukcja rozwiązywania zadań",
            category: "Inżynieria systemów dynamicznych",
            content: "-lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
            created: "2020-02-12 12:40"
        }
    ],
    tasks: [
        {
            id: 0,
            done: false,
            content: "przykładowe zadanie",
            date: "2020-02-17 17:30",
            important: true
        },
        {
            id: 'zudngnza2',
            done: false,
            content: "przykładowe zadanie 2",
            date: "2020-02-18 13:30",
            important: false
        },
    ],
    events: [
        {
            id: 0,
            title: 'All Day Event very long title',
            allDay: false,
            start: new Date(2020, 2, 20, 11, 0),
            end: new Date(2020, 2, 20, 12, 15),
        },
        {
            id: 1,
            title: 'Long Event',
            start: new Date(2020, 3, 7),
            end: new Date(2020, 3, 10),
        },
        {
            id: 2,
            title: 'DTS STARTS',
            start: new Date(2020, 2, 13, 0, 0, 0),
            end: new Date(2020, 2, 20, 0, 0, 0),
        },
    ]
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ('ADD_NEW_SUBJECT'):
            return {
                ...state,
                subjects: [...state.subjects, action.payload.subject]
            }
        case ('EDIT_SUBJECT'):
            const subjects = state.subjects;
            subjects[action.payload.subject.id] = action.payload.subject;
            return {
                ...state,
                subjects
            }
        case ('REMOVE_SUBJECT'):
            return {
                ...state,
                subjects: [
                    ...state.subjects.filter(subject => subject.id !== action.payload.id)
                ]
            }
        case ('ADD_NOTE'):
            return {
                ...state,
                notes: [...state.notes, action.payload.note]
            }
        case ('EDIT_NOTE'):
            const notes = state.notes;
            notes[action.payload.note.id] = action.payload.note;
            return {
                ...state,
                notes
            }
        case ('REMOVE_NOTE'):
            return {
                ...state,
                notes: [
                    ...state.notes.filter(note => note.id !== action.payload.id)
                ]
            }
        case ('ADD_TASK'):
            return {
                ...state,
                tasks: [...state.tasks, action.payload.task]
            }
        case ('DO_TASK'):
            const tasks = state.tasks.map(task => {
                if (task.id === action.payload.id) {
                    return { ...task, done: !task.done }
                } else {
                    return { ...task }
                }
            });
            return {
                ...state,
                tasks
            }
        case ('REMOVE_TASK'):
            return {
                ...state,
                tasks: [
                    ...state.tasks.filter(task => task.id !== action.payload.id)
                ]
            }

        default:
            return state;
    }

};

export default rootReducer;