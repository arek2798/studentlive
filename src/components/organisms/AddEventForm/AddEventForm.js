import React from 'react';
import styled from 'styled-components';
import { addEvent } from '../../../actions';
import { connect } from 'react-redux';
import Heading from '../../atoms/Heading/Heading';
import Input from '../../atoms/Input/Input';
import CheckboxTask from '../../atoms/CheckboxTask/CheckboxTask';
import Button from '../../atoms/Button/Button';
import Label from '../../atoms/Label/Label';

const Form = styled.form`
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const StyledLabel = styled(Label)`
    font-size: 16px;
    color: #FFFFFF;
    margin-bottom: 10px;
`
const SectionWrapper = styled.div`
    height: ${({ height }) => height};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const TimeInputWrapper = styled.div`
    display: grid;
    grid-template-columns: 100px 30px 100px;
    color: #828282;
    font-weight: 600;
    text-align: center;
    line-height: 40px;
`
const ColorSpan = styled.span`
    color: ${({ color }) => color};
`

class AddEventForm extends React.Component {
    state = {
        date: '',
        finish: '',
        content: '',
        color: '#C0C0C0'
    }

    handleContent = (event) => {
        this.setState({
            content: event.target.value
        })
    }

    handleDateSet = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleColorSet = (event) => {
        this.setState({
            color: event.target.value
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const eventContent = this.state;
        eventContent.date = this.changeDateTime(this.state.date);
        eventContent.finish = this.changeDateTime(this.state.finish);
        this.props.addEvent(eventContent);
        this.setState({
            date: '',
            finish: '',
            content: '',
            color: '#C0C0C0'
        })
        this.props.sidebarToggle();
    }

    changeDateTime = (time) => {
        let date = new Date(this.props.date).setHours(time.slice(0, 2), time.slice(3, 5));
        date = new Date(date).toISOString();
        return date;
    }

    render() {
        const { date, finish, content, color } = this.state;

        return (
            <Form onSubmit={this.handleFormSubmit} autoComplete="off">
                <Heading>Dodaj do kalendarza</Heading>
                <Input placeholder="wydarzenie" id="content" value={content} onChange={this.handleContent} required />
                <SectionWrapper height="70px">
                    <StyledLabel>Czas trwania:</StyledLabel>
                    <TimeInputWrapper>
                        <Input width="110px" type="time" id="date" value={date} onChange={this.handleDateSet} required /> -
                        <Input width="110px" type="time" id="finish" value={finish} onChange={this.handleDateSet} required />
                    </TimeInputWrapper>
                </SectionWrapper>
                <SectionWrapper height="200px">
                    <StyledLabel>Kolor:</StyledLabel>
                    <CheckboxTask type="radio" name="color" value="#C0C0C0" onChange={this.handleColorSet} checked={color === "#C0C0C0"}><ColorSpan color="#C0C0C0">srebro</ColorSpan></CheckboxTask>
                    <CheckboxTask type="radio" name="color" value="#CF2942" onChange={this.handleColorSet} checked={color === "#CF2942"}><ColorSpan color="#CF2942">truskawka</ColorSpan></CheckboxTask>
                    <CheckboxTask type="radio" name="color" value="#DBB0EF" onChange={this.handleColorSet} checked={color === "#DBB0EF"}><ColorSpan color="#DBB0EF">wrzos</ColorSpan></CheckboxTask>
                    <CheckboxTask type="radio" name="color" value="#FF8000" onChange={this.handleColorSet} checked={color === "#FF8000"}><ColorSpan color="#FF8000">tycjan</ColorSpan></CheckboxTask>
                    <CheckboxTask type="radio" name="color" value="#6EBE9F" onChange={this.handleColorSet} checked={color === "#6EBE9F"}><ColorSpan color="#6EBE9F">patyna</ColorSpan></CheckboxTask>
                    <CheckboxTask type="radio" name="color" value="#007FFF" onChange={this.handleColorSet} checked={color === "#007FFF"}><ColorSpan color="#007FFF">lazur</ColorSpan></CheckboxTask>
                </SectionWrapper>
                <Button large type="submit">dodaj</Button>
            </Form>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    addEvent: (event) => dispatch(addEvent(event)),
})

export default connect(null, mapDispatchToProps)(AddEventForm);