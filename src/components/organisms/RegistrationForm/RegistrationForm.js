import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addNewUser } from '../../../actions';
import LoginInput from '../../atoms/LoginInput/LoginInput';
import Button from '../../atoms/Button/Button';

const Form = styled.form`
    display: flex;
    height: 400px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`
const InputWrapper = styled.div`
    display: flex;
    height: 256px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`
const LinkStyled = styled(Link)`
    text-decoration: underline;
    color: #EB5757;
`
const Error = styled.p`
    color: #EB5757;
`

class RegistrationForm extends React.Component {
    state = {
        email: "",
        password: "",
        confirmPassword: "",
        name: "",
        faculty: "",
        error: ""
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {};
        for (let key in this.state) newUser[key] = this.state[key];
        if (!newUser.email || !newUser.password || !newUser.confirmPassword || !newUser.name || !newUser.faculty) {
            this.setState({
                error: "Musisz podać wszystkie informacje"
            })
        } else if (newUser.password !== newUser.confirmPassword) {
            this.setState({
                error: "Podane hasła muszą być takie same"
            })
        } else {
            this.setState({
                email: "",
                password: "",
                confirmPassword: "",
                name: "",
                faculty: "",
                error: ""
            })
            delete newUser.error;
            delete newUser.confirmPassword;
            this.props.addNewUser(newUser);
        }
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <InputWrapper>
                    <LoginInput placeholder="e-mail" name="email" value={this.state.email} onChange={this.handleInput} />
                    <LoginInput type="password" name="password" placeholder="hasło" value={this.state.password} onChange={this.handleInput} />
                    <LoginInput type="password" name="confirmPassword" placeholder="powtórz hasło" value={this.state.confirmPassword} onChange={this.handleInput} />
                    <LoginInput placeholder="imię" name="name" value={this.state.name} onChange={this.handleInput} />
                    <LoginInput placeholder="kierunek" name="faculty" value={this.state.faculty} onChange={this.handleInput} />
                </InputWrapper>
                <Error>{this.state.error || this.props.error}</Error>
                <Button type="submit" login >zarejestruj się</Button>
                <p>Posiadasz już konto? <LinkStyled to="/">Zaloguj się!</LinkStyled></p>
            </Form>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addNewUser: (user) => dispatch(addNewUser(user))
})

const mapStateToProps = ({ error }) => ({ error })

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);