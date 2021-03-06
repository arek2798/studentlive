const initialState = {
    userID: "",
    isLoading: false,
    errorCode: 0,
    subjects: [],
    notes: [],
    tasks: [],
    schedule: [],
    events: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ('ADD_USER_SUCCESS'):
            let err;
            if (!action.payload.data) err = 11;
            return {
                ...state,
                errorCode: err
            }
        case ('LOGIN_USER_SUCCESS'):
            localStorage.setItem('userID', action.payload.data._id);
            return {
                ...state,
                userID: action.payload.data._id,
                user: action.payload.data,
                errorCode: action.payload.data.errorCode,
            }
        case ('LOGOUT_USER'):
            localStorage.removeItem('userID');
            return {
                userID: "",
                isLoading: false,
                subjects: [],
                notes: [],
                tasks: [],
                schedule: [],
                events: []
            }
        // ------------------------------------------------------------------------------------------------------------   
        case ('FETCH_SUBJECTS_SUCCESS'):
            return {
                ...state,
                subjects: action.payload.data
            }
        case ('ADD_SUBJECT_SUCCESS'):
            return {
                ...state,
                subjects: [...state.subjects, action.payload.data]
            }
        case ('UPDATE_SUBJECT_SUCCESS'):
            const subjects = state.subjects;
            subjects[action.payload.data._id] = action.payload.data;
            return {
                ...state,
                subjects
            }
        case ('DELETE_SUBJECT_SUCCESS'):
            return {
                ...state,
                subjects: [
                    ...state.subjects.filter(subject => subject._id !== action.payload.id)
                ]
            }
        // ------------------------------------------------------------------------------------------------------------
        case ('FETCH_NOTES_SUCCESS'):
            return {
                ...state,
                notes: action.payload.data
            }
        case ('ADD_NOTE_SUCCESS'):
            return {
                ...state,
                notes: [...state.notes, action.payload.data]
            }
        case ('UPDATE_NOTE_SUCCESS'):
            const notes = state.notes;
            notes[action.payload.data._id] = action.payload.data;
            console.log(notes)
            console.log(notes[action.payload.data._id])
            console.log(action.payload.data)
            return {
                ...state,
                notes
            }
        case ('DELETE_NOTE_SUCCESS'):
            return {
                ...state,
                notes: [
                    ...state.notes.filter(note => note._id !== action.payload.id)
                ]
            }
        // ------------------------------------------------------------------------------------------------------------
        case ('FETCH_EVENTS_SUCCESS'):
            return {
                ...state,
                events: action.payload.data
            }
        case ('ADD_EVENT_SUCCESS'):
            return {
                ...state,
                events: [...state.events, action.payload.data]
            }
        case ('DELETE_EVENT_SUCCESS'):
            return {
                ...state,
                events: [
                    ...state.events.filter(event => event._id !== action.payload.id)
                ]
            }
        // ------------------------------------------------------------------------------------------------------------
        case ('FETCH_TASKS_SUCCESS'):
            return {
                ...state,
                tasks: action.payload.data
            }
        case ('ADD_TASK_SUCCESS'):
            return {
                ...state,
                tasks: [...state.tasks, action.payload.data]
            }
        case ('DO_TASK_SUCCESS'):
            const tasks = state.tasks.map(task => {
                if (task._id === action.payload.data._id) return { ...task, done: task.done };
                else return { ...task };
            });
            return {
                ...state,
                tasks
            }
        case ('DELETE_TASK_SUCCESS'):
            return {
                ...state,
                tasks: [
                    ...state.tasks.filter(task => task._id !== action.payload.id)
                ]
            }
        //--------------------------------------------------------------------------------------------------------------
        case ('FETCH_SCHEDULE_REQUEST'):
            return {
                ...state,
                isLoading: true
            }
        case ('FETCH_SCHEDULE_SUCCESS'):
            return {
                ...state,
                schedule: [...action.payload.data],
                isLoading: false
            }
        case ('UPDATE_SCHEDULE_SUCCESS'):
            return {
                ...state,
                schedule: [action.payload.data]
            }
        case ('CREATE_SCHEDULE_SUCCESS'):
            return {
                ...state,
                schedule: [...action.payload.data]
            }
        default:
            return state;
    }

};

export default rootReducer;