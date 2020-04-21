import axios from 'axios';

export const addNewUser = (newUser) => (dispatch) => {
    dispatch({ type: 'ADD_USER_REQUEST' });

    return axios
        .post('https://studentlive-backend.herokuapp.com/api/user', {
            ...newUser
        })
        .then(({ data }) => {
            dispatch({
                type: 'ADD_USER_SUCCESS',
                payload: {
                    data
                },
            })
            return data
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: 'ADD_USER_FAILURE' })
        })
}

export const loginUser = (user) => (dispatch) => {
    dispatch({ type: 'LOGIN_USER_REQUEST' });
    return axios
        .post('https://studentlive-backend.herokuapp.com/api/user/signin', {
            email: user.email,
            password: user.password
        })
        .then(({ data }) => {
            dispatch({
                type: 'LOGIN_USER_SUCCESS',
                payload: {
                    data
                },
            })
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: 'LOGIN_USER_FAILURE' })
        })
}

export const userLogout = () => (dispatch) => {
    dispatch({
        type: 'LOGOUT_USER',
    })
}

export const addNewSubject = (subjectContent) => (dispatch, getState) => {
    dispatch({ type: 'ADD_SUBJECT_REQUEST' });

    return axios
        .post('https://studentlive-backend.herokuapp.com/api/subject', {
            userID: getState().userID,
            ...subjectContent
        })
        .then(({ data }) => {
            dispatch({
                type: 'ADD_SUBJECT_SUCCESS',
                payload: {
                    data
                },
            })
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: 'ADD_SUBJECT_FAILURE' })
        })
}

export const fetchSubjects = () => (dispatch, getState) => {
    dispatch({ type: 'FETCH_SUBJECTS_REQUEST' });

    return axios
        .get('https://studentlive-backend.herokuapp.com/api/subjects', {
            params: {
                userID: getState().userID,
            },
        })
        .then(({ data }) => {
            dispatch({
                type: 'FETCH_SUBJECTS_SUCCESS',
                payload: {
                    data
                },
            })
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: 'FETCH_SUBJECTS_FAILURE' })
        })
}

export const editSubject = (subject) => (dispatch) => {
    dispatch({ type: 'UPDATE_SUBJECT_REQUEST' });
    return axios
        .put(`https://studentlive-backend.herokuapp.com/api/subject/${subject._id}`, subject)
        .then(({ data }) => {
            dispatch({
                type: 'UPDATE_SUBJECT_SUCCESS',
                payload: {
                    data
                },
            })
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: 'UPDATE_SUBJECT_FAILURE' })
        })
}

export const removeSubject = (id) => (dispatch) => {
    dispatch({ type: 'DELETE_SUBJECT_REQUEST' });

    return axios
        .delete(`https://studentlive-backend.herokuapp.com/api/subject/${id}`)
        .then(() => {
            dispatch({
                type: 'DELETE_SUBJECT_SUCCESS',
                payload: {
                    id
                },
            });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: 'DELETE_SUBJECT_FAILURE' })
        })
}
// ------------------------------------------------------------------------------------------------------------
export const fetchNotes = () => (dispatch, getState) => {
    dispatch({ type: 'FETCH_NOTES_REQUEST' });
    return axios
        .get('https://studentlive-backend.herokuapp.com/api/notes', {
            params: {
                userID: getState().userID
            }
        })
        .then(({ data }) => {
            dispatch({
                type: 'FETCH_NOTES_SUCCESS',
                payload: {
                    data
                }
            })
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: 'FETCH_NOTES_FAILURE' });
        })
}

export const fetchOneNote = (id) => (dispatch) => {
    dispatch({ type: 'FETCH_NOTE_REQUEST' });
    return axios
        .get('https://studentlive-backend.herokuapp.com/api/note', {
            params: {
                id: id
            }
        })
        .then(({ data }) => {
            dispatch({
                type: 'FETCH_NOTE_SUCCESS',
                payload: {
                    data
                }
            })
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: 'FETCH_NOTE_FAILURE' });
        })
}

export const editNote = (note) => (dispatch) => {
    dispatch({ type: 'UPDATE_NOTE_REQUEST' });
    console.log(note);

    return axios
        .put(`https://studentlive-backend.herokuapp.com/api/note/${note._id}`, note)
        .then(({ data }) => {
            dispatch({
                type: 'UPDATE_NOTE_SUCCESS',
                payload: {
                    data
                },
            })
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: 'UPDATE_NOTE_FAILURE' })
        })
}

export const addNote = (noteContent) => (dispatch, getState) => {
    dispatch({ type: 'ADD_NOTE_REQUEST' });
    return axios
        .post('https://studentlive-backend.herokuapp.com/api/note', {
            userID: getState().userID,
            ...noteContent
        })
        .then(({ data }) => {
            dispatch({
                type: 'ADD_NOTE_SUCCESS',
                payload: {
                    data
                }
            })
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: 'ADD_NOTE_FAILURE' });
        })
}

export const removeNote = (id) => (dispatch) => {
    dispatch({ type: 'DELETE_NOTE_REQUEST' })
    return axios
        .delete(`https://studentlive-backend.herokuapp.com/api/note/${id}`)
        .then(() => {
            dispatch({
                type: 'DELETE_NOTE_SUCCESS',
                payload: {
                    id
                },
            });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: 'DELETE_NOTE_FAILURE' })
        })
}
// ------------------------------------------------------------------------------------------------------------
export const getTasks = () => (dispatch, getState) => {
    dispatch({ type: 'FETCH_TASKS_REQUEST' });
    return axios
        .get('https://studentlive-backend.herokuapp.com/api/tasks', {
            params: {
                userID: getState().userID
            }
        })
        .then(({ data }) => {
            dispatch({
                type: 'FETCH_TASKS_SUCCESS',
                payload: {
                    data
                }
            })
        })
        .catch(err => {
            dispatch({ type: 'FETCH_TASKS_FAILURE' })
        });
}

export const addTask = (taskContent) => (dispatch, getState) => {
    dispatch({ type: 'ADD_TASK_REQUEST' });
    return axios
        .post('https://studentlive-backend.herokuapp.com/api/task', {
            userID: getState().userID,
            ...taskContent
        })
        .then(({ data }) => {
            dispatch({
                type: 'ADD_TASK_SUCCESS',
                payload: {
                    data
                }
            })
        })
        .catch(err => {
            dispatch({ type: 'ADD_TASK_FAILURE' })
        });
}

export const doTask = (id, task) => (dispatch, getState) => {
    dispatch({ type: 'DO_TASK_REQUEST' });
    return axios
        .put(`https://studentlive-backend.herokuapp.com/api/task/${id}`, {
            userID: getState().userID,
            ...task
        })
        .then(({ data }) => {
            console.log(data);

            dispatch({
                type: 'DO_TASK_SUCCESS',
                payload: {
                    data
                }
            })
        })
        .catch(err => {
            dispatch({ type: 'DO_TASK_FAILURE' })
        });
}

export const removeTask = (id) => (dispatch) => {
    dispatch({ type: 'DELETE_TASK_REQUEST' })

    return axios
        .delete(`https://studentlive-backend.herokuapp.com/api/task/${id}`)
        .then(() => {
            dispatch({
                type: 'DELETE_TASK_SUCCESS',
                payload: {
                    id
                },
            });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: 'DELETE_TASK_FAILURE' })
        })
}

export const getSchedule = () => (dispatch, getState) => {
    dispatch({ type: 'FETCH_SCHEDULE_REQUEST' });
    return axios
        .get('https://studentlive-backend.herokuapp.com/api/schedule', {
            params: {
                userID: getState().userID
            }
        })
        .then(({ data }) => {
            dispatch({
                type: 'FETCH_SCHEDULE_SUCCESS',
                payload: {
                    data
                }
            })
        })
        .catch(err => {
            dispatch({ type: 'FETCH_SCHEDULE_FAILURE' })
        });
}

export const updateSchedule = (id, days) => (dispatch, getState) => {
    dispatch({ type: 'UPDATE_SCHEDULE_REQUEST' });
    return axios
        .put(`https://studentlive-backend.herokuapp.com/api/schedule/${id}`, {
            userID: getState().userID,
            days
        })
        .then(({ data }) => {
            dispatch({
                type: 'UPDATE_SCHEDULE_SUCCESS',
                payload: {
                    data
                }
            })
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: 'UPDATE_SCHEDULE_FAILURE' })
        })
}

export const createSchedule = (userID) => (dispatch) => {
    dispatch({ type: 'CREATE_SCHEDULE_REQUEST' });

    return axios
        .post('https://studentlive-backend.herokuapp.com/api/schedule', {
            userID: userID,
            days: [{}, {}, {}, {}, {}]
        })
        .then(({ data }) => {
            dispatch({
                type: 'CREATE_SCHEDULE_SUCCESS',
                payload: {
                    data
                }
            })
        })
        .catch(err => {
            dispatch({ type: 'CREATE_SCHEDULE_FAILURE' })
        });
}


export const createUserAndSchedule = (newUser) => (dispatch) => {
    dispatch(addNewUser(newUser))
        .then((user) => {
            dispatch(createSchedule(user._id));
        });
}