import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LoginPageTemplate from '../../templates/LoginPageTemplates';
import LoginForm from '../../components/organisms/LoginForm/LoginForm';

const LoginView = ({ userID }) => {
    if (userID) {
        return <Redirect to="/dashboard" />;
    }
    return (
        <LoginPageTemplate>
            <LoginForm />
        </LoginPageTemplate>
    )
}

const mapStateToProps = ({ userID }) => ({ userID })

export default connect(mapStateToProps)(LoginView);