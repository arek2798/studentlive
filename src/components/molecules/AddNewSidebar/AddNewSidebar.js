import styled from 'styled-components';


const AddNewSidebar = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 650px;
    height: 100vh;
    padding: 30px 30px 100px;
    background: #FFFFFF;
    border-left: 5px solid #EB5757;
    box-shadow: -5px 0 10px -2px rgba(90, 90, 90, 0.4);
    transform: translateX(${({ isSidebarActive }) => (isSidebarActive ? '0%' : '100%')});
    transition: transform 0.4s ease-in-out;
`

export default AddNewSidebar;