import React from 'react';
import { connect } from 'react-redux';
import { addNewSubject, editSubject } from '../../../actions';
import styled from 'styled-components';
import Label from '../../atoms/Label/Label';
import Input from '../../atoms/Input/Input';
import Checkbox from '../../atoms/Checkbox/Checkbox';
import Button from '../../atoms/Button/Button';

const FormContent = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`

const AddFragment = styled.div`
    height: 100%;
    display: grid;
    grid-template-rows: repeat(8, 1fr);

    > * {
        align-self: center;
    }
`

const FlexTemplate = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ShortInput = styled(Input)`
    width: 40px;
    text-align: center;
    margin: 0 auto 0 10px;

    &::-webkit-inner-spin-button, 
    &::-webkit-outer-spin-button { 
        -webkit-appearance: none; 
        margin: 0; 
    }
`

const Error = styled.span`
    color: #EB5757;
    font-size: 14px;
    line-height: 10px;
`

class Form extends React.Component {
    state = {
        subject: {
            name: "",
            type: {
                lecture: false,
                exercise: false,
                laboratory: false
            },
            ects: '',
            credit: false,
            grade: '',
        },
        error: false,
        errorContent: "potrzebne wszystkie informacje"
    }

    UNSAFE_componentWillMount() {
        if (this.props.edit) {
            this.setState({
                subject: this.props.subject
            })
        }
    }

    handleText = (e) => {
        let subject = this.state.subject;
        subject[e.target.id] = e.target.value;
        this.setState({
            subject
        })
    }

    handleType = (e) => {
        let subject = this.state.subject;
        subject.type[e.target.value] = e.target.checked
        this.setState({
            subject
        })
    }

    handleCredit = (e) => {
        let subject = this.state.subject;
        subject.credit = e.target.value === "true" ? true : false;
        subject.grade = subject.credit ? subject.grade : "";
        this.setState({
            subject
        })
    }

    addSubject = (e) => {
        e.preventDefault();
        const { name, type, ects, credit, grade } = this.state.subject;

        if (!name || (!type.lecture && !type.exercise && !type.laboratory) || !ects) {
            this.setState({
                error: true,
                errorContent: "potrzebne wszystkie informacje"
            })
        } else if (credit && (grade % 0.5 !== 0 || grade < 2 || grade > 5)) {
            this.setState({
                error: true,
                errorContent: "niepoprawna ocena"
            })
        } else {
            if (this.props.edit) this.props.editSubject(this.state.subject);
            else this.props.addNewSubject(this.state.subject)
            this.props.openModal();
        };
    }

    render() {
        const { name, type, ects, credit, grade } = this.state.subject;
        const { edit } = this.props;
        return (
            <FormContent autoComplete="off" onSubmit={(e) => this.addSubject(e)}>
                <AddFragment>
                    <Label htmlFor="name">nazwa przedmiotu:</Label>
                    <Input small id="name" value={name} onChange={this.handleText} />
                    <Label>rodzaj zajęć:</Label>
                    <FlexTemplate>
                        <Checkbox checked={type.lecture} value="lecture" onChange={this.handleType}>wykłady</Checkbox>
                        <Checkbox checked={type.exercise} value="exercise" onChange={this.handleType}>ćwiczenia</Checkbox>
                        <Checkbox checked={type.laboratory} value="laboratory" onChange={this.handleType}>laboratoria</Checkbox>
                    </FlexTemplate>
                    <FlexTemplate>
                        <Label htmlFor="ects">liczba punktów ECTS:</Label>
                        <ShortInput type="number" small id="ects" value={ects} onChange={this.handleText} />
                    </FlexTemplate>
                    {edit && <FlexTemplate>
                        <Label>zaliczenie:</Label>
                        <Checkbox type="radio" name="credit" value="true" checked={credit === true} onChange={this.handleCredit}>TAK</Checkbox>
                        <Checkbox type="radio" name="credit" value="false" checked={credit === false} onChange={this.handleCredit}>NIE</Checkbox>
                    </FlexTemplate>}
                    {credit && <FlexTemplate><Label htmlFor="grade">ocena:</Label><ShortInput small type="number" step="0.5" id="grade" onChange={this.handleText} value={grade} /></FlexTemplate>}
                    {this.state.error && <Error>{this.state.errorContent}</Error>}
                </AddFragment>
                <Button type="submit" large>{edit ? "zapisz" : "dodaj"} </Button>
            </FormContent>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addNewSubject: (subject) => dispatch(addNewSubject(subject)),
    editSubject: (subject) => dispatch(editSubject(subject)),
})

export default connect(null, mapDispatchToProps)(Form);