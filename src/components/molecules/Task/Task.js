import React from 'react';
import styled from 'styled-components';
import CheckboxTask from '../../atoms/CheckboxTask/CheckboxTask';
import { connect } from 'react-redux';
import { removeTask } from '../../../actions';
import { X } from 'react-feather';

const Wrapper = styled.div`
    padding: 10px 15px;
    border-radius: 10px;
    background: #2F3438;
    color: #FFFFFF;
    box-shadow: 4px 4px 10px -5px rgba(70, 70, 70, 0.4);
    display: grid;
    grid-template-columns: 20px auto 140px 50px 30px;
    align-items: center;
    
    > * {
        align-self: center;
    }

    @media (max-width: 800px) {
        font-size: 14px;
        grid-template-columns: 20px auto 80px 50px 30px;
    }

    @media (max-width: 500px) {
        font-size: 12px;
        grid-template-columns: 20px auto 80px 50px 30px;
    }
`
const Date = styled.span`
    font-weight: 400;
    padding-left: 5px; 
`
const Important = styled.span`
    font-weight: 400;
    color: #EB5757;
`
const RemoveBtn = styled.button`
    border: none;
    background: transparent;
    color: #DDDDDD;
    font-weight: 600;
    font-size: 18px;
    cursor: pointer;
    text-align: right;
    transition: all .1s ease-in-out;
    outline: none;

    &:hover {
        color: #EB5757;
    }
`

const Task = ({ children, id, date, time, important, checked, removeTask, onChange }) => (
    <Wrapper>
        <CheckboxTask checked={checked} onChange={onChange} />
        {children}
        <Date>{date} {time}</Date>
        <Important>{important && <>ważne!</>}</Important>
        <RemoveBtn onClick={() => removeTask(id)}>
            <X size={20} />
        </RemoveBtn>
    </Wrapper>
)

const mapDispatchToProps = dispatch => ({
    removeTask: (id) => dispatch(removeTask(id)),
})

export default connect(null, mapDispatchToProps)(Task);