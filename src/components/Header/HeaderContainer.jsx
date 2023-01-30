import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import 'C:/ИТ/React/It-Kamasutra/react-way-of-samurai/src/App.css'
import { getAuthUserData} from '../../redux/auth-reducer';
import { logout } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
    componentDidMount () {
        this.props.getAuthUserData()
    }
    render () {  
    return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});
export default connect (mapStateToProps, {getAuthUserData, logout}) (HeaderContainer);