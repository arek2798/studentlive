import React from 'react';
import AddNewSidebar from '../../molecules/AddNewSidebar/AddNewSidebar';
import AddNoteForm from '../AddNoteForm/AddNoteForm';


const AddNewNoteSidebar = ({ isSidebarActive, toggleSidebar }) => {
    return (
        <AddNewSidebar isSidebarActive={isSidebarActive} >
            <AddNoteForm toggleSidebar={toggleSidebar} />
        </AddNewSidebar >
    )
}

export default AddNewNoteSidebar;