import React from 'react';
import './App.css';
import Navbar from './components//Navbar/Navbar';
import { Route, Routes} from 'react-router-dom'
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersСontainer from './components/Users/UsersСontainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer'; 
import Login from './components/login/login';


const App = (props) => {

  return (
    <div className='app-wrapper'>
          <HeaderContainer />
          <Navbar />    
        <Routes >
            <Route path = '/dialogs' element = {<DialogsContainer />} />
            <Route path = '/profile/:userId' element = {<ProfileContainer/>} />
            <Route path = '/profile' element = {<ProfileContainer/>} />
            <Route path = '/users' element = {<UsersСontainer/>} />
            <Route path = '/login' element = {<Login/>} />
        </Routes>     
    </div>

    );
}

export default App;