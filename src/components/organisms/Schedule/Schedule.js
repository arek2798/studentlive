import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getSchedule, updateSchedule, createSchedule } from '../../../actions';
import DataField from '../../atoms/DataField/DataField';
import Button from '../../atoms/Button/Button';
import Modal from '../../molecules/Modal/Modal';

const DataFieldStyled = styled(DataField)`
    overflow-x: scroll;
    position: relative;
`
const TableWrapper = styled.div`
    width: 100%;
    max-height: calc(100vh - 100px);
    overflow: scroll;

    &::-webkit-scrollbar-track
    {
        box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        border-radius: 10px;
        background-color: #2F3438;
    }

    &::-webkit-scrollbar
    {
        width: 8px;
        height: 8px;
        background-color: #2F3438;
    }

    &::-webkit-scrollbar-thumb
    {
        border-radius: 10px;
        box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: #EB5757;
    }

    &::-webkit-scrollbar-corner {
        background: #2F3438;
    }

    @media (max-width: 500px) {
        &::-webkit-scrollbar
        {
            display: none;
        }
    }
`
const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    font-size: 13px;
    text-align: center;
    color: #DEDEDE;
    position: relative;

    caption {
        font-size: 20px;
        font-weight: 500;
        margin-bottom: 10px;
        margin-left: 50px;
        text-align: left;
    }

    thead {

        tr {
            border-bottom: 2px solid #25292E;
        }
        th:first-child {
            width: 10%;
        }
        th {
            width: calc(100%/6);
            position: sticky;
            top: 0;
            border-right: solid 2px #25292E;
            padding: 0 0 5px;
            background: #4F565A;
        }
        th:last-child {
            border-right: none;
        }
    }

    tbody {
        tr td:first-child {
            /* color: #EB5757; */
            /* color: #EB5757; */
            font-size: 12px;
            font-weight: 500;
            position: sticky;
            left: 0;
            /* background: #3E4549; */
            background: #4F565A;
            /* background: #1E3438; */
        }
        tr {
            border-bottom: solid 2px #25292E;
        }
        tr td {
            padding: 5px;
            border-right: solid 2px #25292E;
        }
        tr td:last-child {
            border-right: none;
        }
    }

    @media (max-width: 800px) {
        font-size: 11px;
    }
`

const ButtonWrapper = styled.div`
    text-align: right;
    padding: 5px 10px;
`
const Input = styled.textarea`
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    color: inherit;
    resize: none;
    font-size: 12px;
    overflow: hidden;
    outline: none;
`

class Schedule extends React.Component {
    state = {
        editMode: false,
        isLoading: true,
        schedule: []
    }

    componentDidMount() {
        this.props.getSchedule();
    }

    componentDidUpdate() {
        if (this.props.isLoading !== this.state.isLoading) {
            this.setState({
                isLoading: this.props.isLoading,
                schedule: this.props.schedule[0].days,
            })
        }
    }

    handleEditMode = () => {
        if (this.state.editMode) this.props.updateSchedule(this.props.schedule[0]._id, this.state.schedule);

        this.setState(prevState => ({
            editMode: !prevState.editMode,
        }))
    }

    handleInputChange = (event, dayId, hour) => {
        const schedule = this.state.schedule;
        schedule[dayId][hour] = event.target.value;
        this.setState({
            schedule
        })
    }

    createTable = (edit) => {
        const { schedule } = this.state;
        let table = []
        for (let i = 7; i < 22; i++) {
            table.push(
                <tr key={i}>
                    <td>{`${i}:00 - ${i + 1}:00`}</td>
                    {!edit ?
                        schedule.map((day, index) => <td key={index}>{day[i]}</td>)
                        : schedule.map((day, index) => <td key={index}><Input type="text" value={day[i]} onChange={(e) => this.handleInputChange(e, index, i)} /></td>)}
                </tr>
            )
        }
        return table;
    }

    render() {
        return (
            <DataFieldStyled>
                <TableWrapper>
                    <Table>
                        <caption>Plan zajęć</caption>
                        <thead>
                            <tr>
                                <th>Godziny zajęć</th>
                                <th>Poniedziałek</th>
                                <th>Wtorek</th>
                                <th>Środa</th>
                                <th>Czwartek</th>
                                <th>Piątek</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!this.state.isLoading && (this.state.editMode ? this.createTable(true) : this.createTable())}
                        </tbody>
                    </Table>
                    {this.state.isLoading && <Modal height="60px">Trwa ładowanie...</Modal>}
                </TableWrapper>
                <ButtonWrapper>
                    <Button onClick={this.handleEditMode}>{this.state.editMode ? "Zapisz plan zajęć" : "Zmień plan zajęć"}</Button>
                </ButtonWrapper>
            </DataFieldStyled>
        )
    }
}

const mapStateToProps = ({ schedule, isLoading }) => ({ schedule, isLoading })
const mapDispatchToProps = dispatch => ({
    getSchedule: () => dispatch(getSchedule()),
    createSchedule: () => dispatch(createSchedule()),
    updateSchedule: (id, content) => dispatch(updateSchedule(id, content))
})

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);