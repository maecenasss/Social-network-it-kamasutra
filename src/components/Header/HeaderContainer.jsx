import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import 'C:/ИТ/React/It-Kamasutra/react-way-of-samurai/src/App.css'
import { logout } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {

    render () {  
    return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});
export default connect (mapStateToProps, {logout}) (HeaderContainer);