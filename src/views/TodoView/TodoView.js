import React from 'react';
import UserPageTemplate from '../../templates/UserPageTemplate';
import styled from 'styled-components';
import FilterButton from '../../components/atoms/FilterButton/FilterButton';
import { connect } from 'react-redux';
import { getTasks, doTask } from '../../actions';
import Task from '../../components/molecules/Task/Task';
import IconButton from '../../components/atoms/IconButton/IconButton';
import AddNewTaskSidebar from '../../components/organisms/AddNewTask/AddNewTask';
import { Plus } from 'react-feather';

const CategoryFilter = styled.div`
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, min-content);
    grid-column-gap: 10px;
    overflow-x: scroll;
    
    &::-webkit-scrollbar {
        display: none;
    }

    @media (max-width: 800px) {
        padding-left: 40px;
    }

    @media (max-width: 500px) {
        padding-left: 60px;
    }
`
const TasksWrapper = styled.div`
    padding: 15px 0;
    display: grid;
    grid-row-gap: 10px;
`
const IconFixed = styled.div`
    position: fixed;
    bottom: 40px;
    right: 40px;
    z-index: 5;
`

const Info = styled.p`
    font-size: 18px;
    text-align: center;
    margin-top: 10px;
    color: #FFFFFF;
`

class TodoView extends React.Component {
    state = {
        activeFilter: "todo",
        isSidebarActive: false
    }

    componentDidMount() {
        this.props.getTasks();
    }

    changeFilter = filter => {
        this.setState({
            activeFilter: filter
        })
    }

    handleSidebarToggle = () => {
        this.setState(prevState => ({
            isSidebarActive: !prevState.isSidebarActive
        }))
    }

    handleDoTask = (id, task) => {
        const doneTask = task;
        doneTask.done = !doneTask.done;
        this.props.doTask(id, doneTask);
    }

    render() {
        const { activeFilter } = this.state;
        const tasksFilter = this.props.tasks.filter(task => {
            if (activeFilter === "todo") return task.done === false;
            else if (activeFilter === "important") return (task.important === true && task.done === false);
            else if (activeFilter === "done") return task.done === true;
            else return true;
        })
        if (activeFilter === "todo") tasksFilter.sort((a, b) => a.important < b.important ? 1 : -1);

        return (
            <UserPageTemplate>
                <CategoryFilter>
                    <FilterButton active={activeFilter === "todo"} click={() => this.changeFilter("todo")}>do zrobienia</FilterButton>
                    <FilterButton active={activeFilter === "important"} click={() => this.changeFilter("important")}>ważne</FilterButton>
                    <FilterButton active={activeFilter === "done"} click={() => this.changeFilter("done")}>zrobione</FilterButton>
                    <FilterButton active={activeFilter === "all"} click={() => this.changeFilter("all")}>wszystkie</FilterButton>
                </CategoryFilter>
                <TasksWrapper>
                    {tasksFilter.length ?
                        (tasksFilter.map(task => <Task key={task._id} id={task._id} checked={task.done} date={task.date} time={task.time} important={task.important} onChange={() => this.handleDoTask(task._id, task)}>{task.content}</Task>))
                        : <Info>Brak zadań</Info>
                    }
                </TasksWrapper>
                <IconFixed>
                    <IconButton onClick={this.handleSidebarToggle}>
                        <Plus size={30} strokeWidth={3} />
                    </IconButton>
                </IconFixed>
                <AddNewTaskSidebar isSidebarActive={this.state.isSidebarActive} toggleSidebar={this.handleSidebarToggle} />
            </UserPageTemplate>
        );
    }
}

const mapStateToProps = ({ tasks }) => ({ tasks });

const mapDispatchToProps = dispatch => ({
    getTasks: () => dispatch(getTasks()),
    doTask: (id, task) => dispatch(doTask(id, task))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoView);