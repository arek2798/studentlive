import styled from 'styled-components';

const AddNewSidebar = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: ${({ width }) => width ? width : "650px"};
    height: 100vh;
    max-width: 100vw;
    padding: 30px 30px 100px;
    background: #2F3438;
    border-left: 5px solid #EB5757;
    box-shadow: -5px 0 20px -2px rgba(0, 0, 0, 0.3);
    transform: translateX(${({ isSidebarActive }) => (isSidebarActive ? '0%' : '100%')});
    transition: transform 0.4s ease-in-out;
`

export default AddNewSidebar;