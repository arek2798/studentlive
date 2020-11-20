import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../../actions';
import LoginInput from '../../atoms/LoginInput/LoginInput';
import Button from '../../atoms/Button/Button';

const Form = styled.form`
    display: flex;
    height: 250px;
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
const PassForgot = styled.p`
    width: 100%;
    font-size: 10px;
    text-align: right;
    
    a {
        color: #FFFFFF;
    }
`
const LinkStyled = styled(Link)`
    text-decoration: underline;
    color: #EB5757;
`
const Error = styled.p`
    font-size: 14px;
    color: #EB5757;
`
const DemoInfo = styled.p`
    font-size: 10px;

    span {
        color: #EB5757;
    }
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
        this.props.loginUser(this.state);
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <InputWrapper>
                    <LoginInput placeholder="e-mail" name="email" value={this.state.email} onChange={this.handleInput} required />
                    <LoginInput type="password" placeholder="hasło" name="password" value={this.state.password} onChange={this.handleInput} required />
                    {/* <PassForgot><LinkStyled to="/registration">Nie pamiętam hasła</LinkStyled></PassForgot> */}
                </InputWrapper>
                {this.props.errorCode === 21 && <Error>Konto o takim adresie e-mail nie istnieje</Error>}
                {this.props.errorCode === 22 && <Error>Wprowadzone hasło jest nieprawidłowe</Error>}
                <Button type="submit" login >zaloguj się</Button>
                <p>Nie masz jeszcze konta? <LinkStyled to="/registration">Załóż je!</LinkStyled></p>
                <DemoInfo>Wersja demo dostępna po podaniu danych: email: <span>demo</span> hasło: <span>demo</span></DemoInfo>
            </Form>
        )
    }
}

const mapStateToProps = ({ errorCode }) => ({ errorCode });

const mapDispatchToProps = dispatch => ({
    loginUser: (user) => dispatch(loginUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);