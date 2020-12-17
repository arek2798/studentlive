import styled from 'styled-components';

const Table = styled.table`
    border-collapse: collapse;
    border: hidden;
    text-align: center;

    tr {
      font-size: 14px;
      
      th {
        color: #DEDEDE;
        font-weight: 400;
        font-size: 14px;
        padding: 5px 10px;
        border: 2px solid #25292E;
      }

      td {
        padding: 5px;
        font-weight: 400;
        border-left: 2px solid #25292E;
      }

      td:first-child {
        text-align: left;
      }
    }
`

export default Table;