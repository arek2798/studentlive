import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeNote } from '../../../actions';
import styled from 'styled-components';
import Button from '../../atoms/Button/Button';
import Modal from '../../molecules/Modal/Modal';


const Field = styled.div`
    height: 220px;
    width: 350px;
    margin: 10px;
    background-color: #2F3438;
    border-radius: 10px;
    box-shadow: 0 8px 10px -5px rgba(0,0,0,0.4);
    display: flex;
    flex-direction: column;
`;

const Header = styled.div`
    height: 45px;
    background-color: #EB5757;
    color: #DEDEDE;
    border-radius: 10px 10px 0 0;
    padding: 7px 10px;
`

const Title = styled.p`
    font-size: 14px;
    font-weight: 500;
`

const Category = styled.p`
    font-size: 10px;
    font-weight: 400;
`

const Body = styled.div`
    padding: 10px;
    font-size: 12px;
    font-weight: 400;
    color: #4B6584;
    display: grid;
    grid-template-rows: 130px 30px;
`

const Content = styled.div`
    cursor: pointer;
    overflow-y: hidden;
    margin-bottom: 5px;
    color: #DEDEDE;
`

const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

const AgreeButtons = styled(ButtonsWrapper)`
    justify-content: space-around;
    padding-top: 30px;
`

const Created = styled.span`
    line-height: 30px;
    color: #DEDEDE;
`

class NoteFiled extends React.Component {
    state = {
        modalOpen: false,
        _id: 0,
    }

    openModal = () => {
        this.setState(prevState => ({
            modalOpen: !prevState.modalOpen,
        }))
    }

    handleAgree = (agree) => {
        if (agree) {
            this.props.removeNote(this.state._id);
        }
        this.openModal();
    }

    handleRemove = (_id) => {
        this.openModal();
        this.setState({
            _id
        })
    }

    render() {
        const { note } = this.props
        const { _id, title, category, content, created } = note;
        return (
            <Field>
                <Header>
                    <Title>{title}</Title>
                    <Category>{category}</Category>
                </Header>
                <Body>
                    <Content as={Link} to={`/notes/${_id}`}>{content}</Content>
                    <ButtonsWrapper>
                        <Button onClick={() => this.handleRemove(_id)}>usuń</Button>
                        <Created>{created}</Created>
                    </ButtonsWrapper>
                </Body>
                {this.state.modalOpen &&
                    <Modal height="130px" big>
                        <p>Czy na pewno chcesz to usunąć?</p>
                        <AgreeButtons>
                            <Button onClick={() => this.handleAgree(true)} large>Tak</Button>
                            <Button onClick={() => this.handleAgree(false)} large>Nie</Button>
                        </AgreeButtons>
                    </Modal>}
            </Field>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    removeNote: (id) => dispatch(removeNote(id))
})

export default connect(null, mapDispatchToProps)(NoteFiled);