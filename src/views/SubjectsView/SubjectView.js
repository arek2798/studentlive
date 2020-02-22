import React from 'react';
import { connect } from 'react-redux';
import { removeSubject } from '../../actions';
import styled from 'styled-components';
import Button from '../../components/atoms/Button/Button';
import Modal from '../../components/molecules/Modal/Modal';
import Form from '../../components/organisms/Form/Form';
import DataField from '../../components/atoms/DataField/DataField';
import Table from '../../components/atoms/Table/Table';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
`

const Correct = styled.span`
    color: #27AE60;
`

const Wrong = styled.span`
    color: #EB5757;
`

const TextRight = styled.div`
    padding-top: 20px;
    text-align: right;
`

const TextCenter = styled.div`
    padding-top: 20px;
    text-align: center;
`

class SubjectsView extends React.Component {
    state = {
        activeSub: 0,
        modalOpen: false,
        editModalOpen: false
    }

    openModal = (edit) => {
        edit ?
            this.setState(prevState => ({
                editModalOpen: !prevState.editModalOpen,
            }))
            :
            this.setState(prevState => ({
                modalOpen: !prevState.modalOpen,
            }))
    }

    changeData = (id) => {
        this.setState({
            activeSub: id
        })
        this.openModal(true)
    }

    render() {
        const { subjects, removeSubject } = this.props;
        const subject = subjects.filter(subject => subject.id === this.state.activeSub)[0];

        return (
            <Wrapper>
                <DataField >
                    <Table>
                        <thead>
                            <tr>
                                <th>nazwa przedmiotu</th>
                                <th>rodzaj zajęć</th>
                                <th>punkty ECTS</th>
                                <th>zaliczenie</th>
                                <th>ocena</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {subjects.map((subject) => (
                                <tr key={subject.name}>
                                    <td>{subject.name}</td>
                                    <td>{subject.type.lecture && "W "}{subject.type.exercise && "C "}{subject.type.laboratory && "L"}</td>
                                    <td>{subject.ects}</td>
                                    <td>{subject.credit ? <Correct>TAK</Correct> : <Wrong>NIE</Wrong>}</td>
                                    <td>{subject.grade === '' ? <span>-</span> : <span>{subject.grade}</span>}</td>
                                    <td><Button small onClick={() => this.changeData(subject.id)}>zmien dane</Button></td>
                                    <td><Button small onClick={() => removeSubject(subject.id)}>usuń</Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    {!subjects.length && <><TextCenter>dodaj przedmiot do listy zajęć</TextCenter></>}
                    <TextRight>
                        <Button onClick={() => this.openModal(false)}>dodaj nowy</Button>
                    </TextRight>
                </DataField>
                {this.state.modalOpen &&
                    <Modal>
                        <Button onClick={() => this.openModal(false)} close>X</Button>
                        <Form openModal={() => this.openModal(false)} />
                    </Modal>}
                {this.state.editModalOpen &&
                    <Modal>
                        <Button onClick={() => this.openModal(true)} close>X</Button>
                        <Form openModal={() => this.openModal(true)} subject={subject} edit />
                    </Modal>}
            </Wrapper>
        );
    };
};

const mapStateToProps = ({ subjects }) => ({ subjects });

const mapDispatchToProps = dispatch => ({
    removeSubject: (id) => dispatch(removeSubject(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(SubjectsView);