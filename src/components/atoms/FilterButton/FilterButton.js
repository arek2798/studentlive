import React from 'react';
import styled from 'styled-components'

const Button = styled.button`
    border: none;
    background-color: ${props => props.active ? "#EB5757" : "#2F3438"};
    color: ${props => props.active ? "#DEDEDE" : "#DEDEDE"};
    min-width: 100px;
    height: 30px;
    padding: 0 5px;
    border-radius: 15px;
    white-space: nowrap;
    overflow: hidden;
    cursor: pointer;
    transition: all .1s ease-out;
    outline: none;
    box-shadow: 5px 5px 5px -5px rgba(70, 70, 70, 0.4);

    &:hover {
        background-color: #EB5757;
        color: #DEDEDE;
    }
`;



const FilterButton = ({ children, active, click }) => {
    return (
        <Button active={active} onClick={click}>
            {children.slice(0, 20)}
            {children.length > 20 && <>...</>}
        </Button>
    );
}

export default FilterButton;