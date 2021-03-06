import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    html {
        font-size: 62.5%; 
    }
    
    body {
        font-size: 1.6rem;
        font-family: "Montserrat", sans-serif;
        color: #DEDEDE;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button, input {
        font-family: 'Montserrat', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight: 500;
        cursor: pointer;
    }

    .app {
        background-color: #25292E;
        width: 100vw;
        height: 100vh;
        overflow-x: hidden;
        display: flex;
        flex-wrap: nowrap;
    }

    main {
        width: 100%;
        padding: 30px 30px 30px 280px;
    }

    @media (max-width: 800px) {
        main {
            padding: 30px;
        }
    }

    @media (max-width: 500px) {
        main {
            padding: 30px 10px;
        }
    }
`;

export default GlobalStyle;