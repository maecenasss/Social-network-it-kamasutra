import React, { Component } from 'react';
import './App.css';
import Navbar from './components//Navbar/Navbar';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersСontainer from './components/Users/UsersСontainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer'; 
import Login from './components/login/login';
import { connect, Provider } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/Common/Preloader/Preloader';
import store from './redux/redux-store';



class App extends Component {
  componentDidMount () {
    this.props.initializeApp()
}
render() {

  if (!this.props.initialized) {
    return <Preloader/>
  }
    return (
      <div className='app-wrapper'>
          <HeaderContainer />
          <Navbar />
          <Routes>
            <Route path='/dialogs' element={<DialogsContainer />} />
            <Route path='/profile/:userId' element={<ProfileContainer />} />
            <Route path='/profile' element={<ProfileContainer />} />
            <Route path='/users' element={<UsersСontainer />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = connect (mapStateToProps, {initializeApp}) (App);

let SamuraiJsApp = (props) => {
return <BrowserRouter >
          <Provider store={store}>
            <AppContainer/>
          </Provider>
        </BrowserRouter>
}

export default SamuraiJsApp
