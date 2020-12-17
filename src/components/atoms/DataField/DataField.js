import styled from 'styled-components';

const DataField = styled.div`
    background-color: #2F3438;
    color: #FFFFFF;
    box-shadow: 5px 5px 10px -5px rgba(0,0,0, 0.25);
    font-weight: 400;
    padding: 10px;
    border-radius: 10px;
    overflow-x: scroll;

    &::-webkit-scrollbar {
        display: none;
    }
`

export default DataField;