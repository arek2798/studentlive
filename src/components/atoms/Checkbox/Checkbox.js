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
    top: 3px;
    left: 0;
    height: 12px;
    width: 12px;
    border-radius: 6px;
    background-color: #25292E;

    
    ${Input}:checked ~ &::after {
        display: block;
        position: relative;
        top: 0;
        left: 0;
        width: 12px;
        height: 12px;
        border-radius: 6px;
        content: "";
        background-color: #EB5757;
    }
`

const Label = styled.label`
    font-weight: 400;
    font-size: 14px;
    margin-right: 15px;
    user-select: none;
    cursor: pointer;
    padding-left: 15px;
    position: relative;
    color: #DDDDDD;

    &:hover ${Input} ~ ${Checkmark} {
        background-color: #363A3F;
    }
`

const Checkbox = ({ children, type, name, checked, value, onChange }) => (
    <Label>
        <Input type={type ? type : "checkbox"} name={name} value={value} checked={checked} onChange={onChange} />
        <Checkmark></Checkmark>
        {children}
    </Label>
)

export default Checkbox;