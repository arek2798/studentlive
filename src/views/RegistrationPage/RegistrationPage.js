import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LoginPageTemplate from '../../templates/LoginPageTemplates';
import RegistrationForm from '../../components/organisms/RegistrationForm/RegistrationForm';


const RegistrationPage = ({ userID }) => {
    if (userID) {
        return <Redirect to="/dashboard" />;
    }
    return (
        <LoginPageTemplate>
            <RegistrationForm />
        </LoginPageTemplate>
    )
}

const mapStateToProps = ({ userID }) => ({ userID })

export default connect(mapStateToProps)(RegistrationPage);