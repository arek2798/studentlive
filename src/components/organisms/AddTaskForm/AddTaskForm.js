import React from 'react';
import styled from 'styled-components';
import Heading from '../../atoms/Heading/Heading';
import Input from '../../atoms/Input/Input';
import CheckboxTask from '../../atoms/CheckboxTask/CheckboxTask';
import Button from '../../atoms/Button/Button';
import Label from '../../atoms/Label/Label';
import { connect } from 'react-redux';
import { addTask } from '../../../actions';

const Form = styled.form`
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @media(max-width: 800px) {
        padding-top: 35px;
    }
`

const StyledLabel = styled(Label)`
    font-size: 16px;
    color: #4B6584;
`

const InputWrapper = styled.div`
    display: grid;
    grid-template-columns: 350px auto;
    max-width: 100%;

    @media(max-width: 500px) {
        grid-template-columns: none;
        grid-template-rows: 50px 40px;
    }
`

class AddTaskForm extends React.Component {
    state = {
        done: false,
        content: '',
        date: '',
        time: '',
        important: false,
    }

    UNSAFE_componentWillMount = () => {
        const date = new Date();
        this.setState({
            date: `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`,
            time: `${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}`
        })
    }

    handleText = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    handleCheckbox = (e) => {
        this.setState(prevState => ({
            important: !prevState.important,
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTask(this.state)
        this.props.toggleSidebar();
        const date = new Date();
        this.setState({
            content: '',
            date: `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`,
            time: `${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}`,
            important: false,
        })
    }


    render() {
        const { content, date, time, important } = this.state;
        return (
            <Form autoComplete="off" onSubmit={e => this.handleSubmit(e)}>
                <Heading>Dodaj nowe zadanie</Heading>
                <Input placeholder="zadanie" id="content" value={content} onChange={this.handleText} required />
                <StyledLabel>Termin wykonania zadania:</StyledLabel>
                <InputWrapper>
                    <Input width="300px" type="date" id="date" value={date} onChange={this.handleText} required />
                    <Input width="130px" type="time" id="time" value={time} onChange={this.handleText} />
                </InputWrapper>
                <CheckboxTask onChange={this.handleCheckbox} checked={important}>ważne</CheckboxTask>
                <Button large type="submit">dodaj</Button>
            </Form>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addTask: (task) => dispatch(addTask(task)),
})

export default connect(null, mapDispatchToProps)(AddTaskForm);