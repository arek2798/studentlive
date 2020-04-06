import React from 'react';
// import styled from 'styled-components';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LoginPageTemplate from '../../templates/LoginPageTemplates';
import LoginForm from '../../components/organisms/LoginForm/LoginForm';
import { cos } from 'redux-persist';


class LoginView extends React.Component {
    state = {

    }

    render() {
        if (this.props.userID) {
            return <Redirect to="/dashboard" />;
        }
        return (
            <LoginPageTemplate>
                <LoginForm />
            </LoginPageTemplate>
        )
    }
}

const mapStateToProps = ({ userID }) => ({ userID })

export default connect(mapStateToProps)(LoginView);