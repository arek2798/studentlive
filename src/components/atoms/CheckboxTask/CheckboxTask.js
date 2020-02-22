import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
`
const Checkmark = styled.span`
    position: absolute;
    top: 0px;
    left: 0;
    height: 15px;
    width: 15px;
    background-color: #EEEEEE;

    
    ${Input}:checked ~ &::after {
        display: block;
        position: relative;
        top: -2px;
        left: 2px;
        width: 10px;
        height: 15px;
        content: '';
        border: solid #EB5757;
        border-width: 0px 4px 4px 0;
        transform: rotate(45deg);
        /* background-color: #EB5757; */
    } 
`
const Label = styled.label`
    position: relative;
    cursor: pointer;
    top: -7px;
    left: -3px;
    padding-left: 20px;
    width: 100px;
    color: #4B6584;
    font-weight: 500;

    &:hover ${Input} ~ ${Checkmark} {
        background-color: #CCCCCC;
    }
`

const CheckboxTask = ({ checked, onChange, children }) => (
    <Label>
        <Input type="checkbox" checked={checked} onChange={onChange} />
        <Checkmark />
        {children}
    </Label>
)

export default CheckboxTask;