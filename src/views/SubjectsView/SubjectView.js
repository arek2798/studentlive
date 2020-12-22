import React from 'react';
import UserPageTemplate from '../../templates/UserPageTemplate';
import { connect } from 'react-redux';
import { fetchSubjects, removeSubject } from '../../actions';
import styled from 'styled-components';
import Button from '../../components/atoms/Button/Button';
import Modal from '../../components/molecules/Modal/Modal';
import Form from '../../components/organisms/Form/Form';
import DataField from '../../components/atoms/DataField/DataField';
import Table from '../../components/atoms/Table/Table';
import { Trash, Settings } from 'react-feather';

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
`
const TableWrapper = styled.div`
    width: 100%;
    max-height: calc(100vh - 100px);
    overflow: scroll;
    
    &::-webkit-scrollbar {
        display: none;
    }
`
const Options = styled.div`
    display: flex;
    width: 70px;
    justify-content: space-around;

    svg {
        transition: all .3s ease-in-out;
    }

    svg:hover {
        color: #EB5757;
        cursor: pointer;
    }
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

    componentDidMount() {
        const { fetchSubjects } = this.props;
        fetchSubjects();
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

    alphabeticalSorting = (a, b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        else return -1;
    }

    render() {
        const { subjects, removeSubject } = this.props;
        const subject = subjects.filter(subject => subject._id === this.state.activeSub)[0];

        return (
            <UserPageTemplate>
                <Wrapper>
                    <DataField >
                        <TableWrapper>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>nazwa przedmiotu</th>
                                        <th>rodzaj zajęć</th>
                                        <th>punkty ECTS</th>
                                        <th>zaliczenie</th>
                                        <th>ocena</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {subjects.sort((a, b) => this.alphabeticalSorting(a, b)).map((subject) => (
                                        <tr key={subject._id}>
                                            <td>{subject.name}</td>
                                            <td>{subject.lecture && "W "}{subject.exercise && "C "}{subject.laboratory && "L"}</td>
                                            <td>{subject.ects}</td>
                                            <td>{subject.credit ? <Correct>TAK</Correct> : <Wrong>NIE</Wrong>}</td>
                                            <td>{(subject.grade === null) ? <span>-</span> : <span>{subject.grade}</span>}</td>
                                            <td>
                                                <Options>
                                                    <Settings size={20} onClick={() => this.changeData(subject._id)} />
                                                    <Trash size={20} onClick={() => removeSubject(subject._id)} />
                                                </Options>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </TableWrapper>
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
            </UserPageTemplate>
        );
    };
};

const mapStateToProps = state => {
    const { subjects } = state;
    return { subjects };
}

const mapDispatchToProps = dispatch => ({
    removeSubject: (id) => dispatch(removeSubject(id)),
    fetchSubjects: () => dispatch(fetchSubjects())
})

export default connect(mapStateToProps, mapDispatchToProps)(SubjectsView);