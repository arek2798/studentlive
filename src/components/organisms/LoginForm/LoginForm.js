import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../../actions';
import LoginInput from '../../atoms/LoginInput/LoginInput';
import Button from '../../atoms/Button/Button';

const Form = styled.form`
    display: flex;
    height: 230px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`
const InputWrapper = styled.div`
    display: flex;
    height: 94px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`
const LinkStyled = styled(Link)`
    text-decoration: underline;
    color: #EB5757;
`

class LoginForm extends React.Component {
    state = {
        email: "",
        password: ""
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);

        this.props.loginUser(this.state);
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <InputWrapper>
                    <LoginInput placeholder="e-mail" name="email" value={this.state.email} onChange={this.handleInput} />
                    <LoginInput type="password" placeholder="hasło" name="password" value={this.state.password} onChange={this.handleInput} />
                </InputWrapper>
                <Button type="submit" login >zaloguj się</Button>
                <p>Nie masz jeszcze konta? <LinkStyled to="/registration">Załóż je!</LinkStyled></p>
            </Form>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    loginUser: (user) => dispatch(loginUser(user))
})

export default connect(null, mapDispatchToProps)(LoginForm);