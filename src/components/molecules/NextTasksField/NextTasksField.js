import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTasks } from '../../../actions';
import DataField from '../../atoms/DataField/DataField';
import Button from '../../atoms/Button/Button';

const Field = styled(DataField)`
    text-align: right;
    min-width: 300px;
`

const Heading = styled.p`
    font-size: 16px;
    font-weight: 500;
    color: #828282;
    margin-bottom: 20px;
    text-align: center;
`

const ListItem = styled.div`
    font-size: 14px;
    font-weight: 500;
    display: flex;
    text-align: center;
`

const Date = styled.p`
    color: #EB5757;
    width: 240px;
    min-height: 30px;
    border-right: 3px solid #EEEEEE;
`

const Title = styled.p`
    width: 100%;
`
const Info = styled.p`
    font-size: 14px;
    padding-bottom: 20px;
    text-align: center;
`
class NextTasksField extends React.Component {
    state = {}

    componentDidMount() {
        this.props.getTasks();
    }

    render() {
        let upcommingTasks = this.props.tasks.filter(task => !task.done)
        upcommingTasks = upcommingTasks.slice(0, 4);

        return (
            <Field>
                <Heading>zadania do wykonania</Heading>
                {upcommingTasks.length ? upcommingTasks.map(task => (
                    <ListItem key={task._id}>
                        <Date>{task.date} {task.time}</Date>
                        <Title>{task.content}</Title>
                    </ListItem>
                )) : <Info>Brak zadań do wykonania</Info>}
                <Link to="/todo"><Button small>Zobacz więcej</Button></Link>
            </Field>
        );
    }
}

const mapStateToProps = ({ tasks }) => ({ tasks })

const mapDispatchToProps = dispatch => ({
    getTasks: () => dispatch(getTasks())
})

export default connect(mapStateToProps, mapDispatchToProps)(NextTasksField);