import React from 'react';
import styled from 'styled-components';
import { addNote } from '../../../actions';
import { connect } from 'react-redux';
import Heading from '../../atoms/Heading/Heading';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';


const Form = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

class AddNoteForm extends React.Component {
    state = {
        title: '',
        category: '',
        content: '',
        created: ''
    }

    handleText = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const date = new Date();
        const created = `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)} ${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}`;
        this.setState({
            created
        },
            () => this.props.addNote(this.state)
        )
        this.props.toggleSidebar();
    }

    render() {
        const { title, category, content } = this.state;
        return (
            <Form autoComplete="off" onSubmit={this.handleSubmit}>
                <Heading>Dodaj nową notatkę</Heading>
                <Input placeholder="tytuł notatki" id="title" value={title} onChange={this.handleText} required />
                <Input placeholder="kategoria" id="category" value={category} onChange={this.handleText} />
                <Input as="textarea" textarea resize="none" placeholder="treść" id="content" value={content} onChange={this.handleText} />
                <Button large type="submit">dodaj</Button>
            </Form>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    addNote: (note) => dispatch(addNote(note)),
})

export default connect(null, mapDispatchToProps)(AddNoteForm);