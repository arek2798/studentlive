export const addNewSubject = (subjectContent) => {
    const getId = () =>
        `${Math.random()
            .toString(36)
            .substr(2, 9)}`;

    return {
        type: 'ADD_NEW_SUBJECT',
        payload: {
            subject: {
                id: getId(),
                ...subjectContent
            }
        }
    }
}

export const editSubject = (subject) => ({
    type: 'EDIT_SUBJECT',
    payload: {
        subject
    }
})

export const removeSubject = (id) => ({
    type: 'REMOVE_SUBJECT',
    payload: {
        id
    }
})

export const editNote = (note) => ({
    type: 'EDIT_NOTE',
    payload: {
        note
    }
})

export const addNote = (noteContent) => {
    const getId = () =>
        `${Math.random()
            .toString(36)
            .substr(2, 9)}`;

    return {
        type: 'ADD_NOTE',
        payload: {
            note: {
                id: getId(),
                ...noteContent
            }
        }
    }
}

export const removeNote = (id) => ({
    type: 'REMOVE_NOTE',
    payload: {
        id
    }
})

export const addTask = (taskContent) => {
    const getId = () =>
        `${Math.random()
            .toString(36)
            .substr(2, 9)}`;

    return {
        type: 'ADD_TASK',
        payload: {
            task: {
                id: getId(),
                done: false,
                ...taskContent
            }
        }
    }
}

export const doTask = (id) => ({
    type: 'DO_TASK',
    payload: {
        id
    }
})

export const removeTask = (id) => ({
    type: 'REMOVE_TASK',
    payload: {
        id
    }
})
