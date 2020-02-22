import styled from 'styled-components';

const Table = styled.table`
    border-collapse: collapse;
    border: hidden;
    text-align: center;

    tr {
      font-size: 14px;
      
      th {
        color: #828282;
        font-weight: 500;
        font-size: 16px;
        padding: 5px;
        border: 2px solid #EEEEEE;
      }

      td {
        padding: 5px;
        font-weight: 500;
        border-left: 2px solid #EEEEEE;
      }

      td:first-child {
        text-align: left;
      }
    }
`

export default Table;