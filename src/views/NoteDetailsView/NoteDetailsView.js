import React from 'react';
import { connect } from 'react-redux';
import { editNote } from '../../actions';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/atoms/Button/Button';
import Input from '../../components/atoms/Input/Input';

const Wrapper = styled.div`
    display: grid;
    height: 700px;
    grid-template-rows: 0.2fr 0.8fr;
    padding-left: 20px;
`

const Header = styled.header`
    color: #4B6584;
`

const Title = styled.p`
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 20px;
`

const Category = styled.p`
    font-size: 16px;
`

const Content = styled.div`
    color: #343434;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 20px;
`

const HtmlEdit = styled.div`

`

const ButtonsWrapper = styled.div`
    display: grid;
    grid-template-columns: 130px auto;
`

class NoteDetailsView extends React.Component {
    state = {
        note: {
            id: '',
            title: '',
            category: '',
            content: '',
            created: ''
        },
        edit: false
    }

    handleEdit = (note = '') => {
        this.setState(prevState => ({
            note: note,
            edit: !prevState.edit
        }))
    }

    handleChangeText = (e) => {
        const note = this.state.note;
        note[e.target.id] = e.target.value
        this.setState({
            note
        })
    }

    handleSave = () => {
        this.props.editNote(this.state.note);
        this.handleEdit();
    }

    render() {
        const { notes, match } = this.props;
        const note = notes.filter(note => note.id.toString() === match.params.id)[0];
        console.log(this.state.note);
        const { title, category, content } = this.state.note;

        if (note === undefined) {
            return <Redirect to="/notes" />;
        }

        return (
            <Wrapper>
                <Header>
                    <Title>{!this.state.edit ? note.title : <Input placeholder="tytuł" id="title" value={title} onChange={this.handleChangeText} />}</Title>
                    <Category>Kategoria: {!this.state.edit ? (note.category ? note.category : <span>brak</span>) : <Input placeholder="kategoria" id="category" value={category} onChange={this.handleChangeText} />}</Category>
                </Header>
                <Content>
                    {!this.state.edit ? (note.content ? note.content : <p>Brak treści</p>) : <Input as="textarea" textarea resize="none" placeholder="treść" id="content" value={content} onChange={this.handleChangeText} />}
                    {/* {!this.state.edit ? (note.content ? note.content : <p>Brak treści</p>) : <HtmlEdit contenteditable="true" id="content" onChange={this.handleChangeText}>{content}</HtmlEdit>} */}
                    <ButtonsWrapper>
                        {!this.state.edit ? <Button onClick={() => this.handleEdit(note)} large>edytuj</Button> : <Button onClick={this.handleSave} large>zapisz</Button>}
                        {!this.state.edit && <Link to="/notes"><Button large>zamknij</Button></Link>}
                    </ButtonsWrapper>
                </Content>
            </Wrapper >
        )
    }
}

const mapStateToProps = ({ notes }) => ({ notes });
const mapDispatchToProps = dispatch => ({
    editNote: (note) => dispatch(editNote(note))
})

export default connect(mapStateToProps, mapDispatchToProps)(NoteDetailsView);
