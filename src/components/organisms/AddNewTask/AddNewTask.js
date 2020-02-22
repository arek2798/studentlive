import React from 'react';
import AddNewSidebar from '../../molecules/AddNewSidebar/AddNewSidebar';
import AddTaskForm from '../AddTaskForm/AddTaskForm';


const AddNewTaskSidebar = ({ isSidebarActive, toggleSidebar }) => {
    return (
        <AddNewSidebar isSidebarActive={isSidebarActive} >
            <AddTaskForm toggleSidebar={toggleSidebar} />
        </AddNewSidebar >
    )
}

export default AddNewTaskSidebar;