import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import DataField from '../../atoms/DataField/DataField';
import Button from '../../atoms/Button/Button';

const Field = styled(DataField)`
    text-align: right;
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

const NextTasksField = ({ tasks }) => {
    let upcommingTasks = tasks.filter(task => !task.done)
    upcommingTasks = upcommingTasks.slice(0, 4);

    return (
        <Field>
            <Heading>zadania do wykonania</Heading>
            {upcommingTasks.map(task => (
                <ListItem key={task._id}>
                    <Date>{task.date} {task.time}</Date>
                    <Title>{task.content}</Title>
                </ListItem>
            ))}
            <Link to="/todo"><Button small>Zobacz więcej</Button></Link>
        </Field>
    );
}


const mapStateToProps = ({ tasks }) => ({ tasks })

export default connect(mapStateToProps)(NextTasksField);