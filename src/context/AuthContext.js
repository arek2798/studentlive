import React from 'react';
import { connect } from 'react-redux';

const AuthContext = React.createContext();

class Provider extends React.Component {
    state = {
        isAuth: this.props.userID ? true : false
    };

    componentDidUpdate(prevProps, prevState) {
        this.checkIsAuth(prevState);
    }

    checkIsAuth = (prevState = '') => {
        let logged = (this.props.userID ? true : false);
        if (prevState.isAuth !== logged) {
            this.setState({
                isAuth: logged
            })
        }
    }

    render() {
        return (
            <AuthContext.Provider value={{ isAuth: this.state.isAuth }}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

const AuthConsumer = AuthContext.Consumer

const mapStateToProps = ({ userID }) => ({ userID });

const AuthProvider = (connect(mapStateToProps)(Provider));

export { AuthProvider, AuthConsumer }