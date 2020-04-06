import React from 'react';
// import styled from 'styled-components';
import LoginPageTemplate from '../../templates/LoginPageTemplates';
import RegistrationForm from '../../components/organisms/RegistrationForm/RegistrationForm';


class RegistrationPage extends React.Component {
    state = {

    }

    render() {
        return (
            <LoginPageTemplate>
                <RegistrationForm />
            </LoginPageTemplate>
        )
    }
}

export default RegistrationPage;