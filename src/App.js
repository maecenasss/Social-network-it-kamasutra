import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components//Navbar/Navbar';
import { Route, Routes} from 'react-router-dom'
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersСontainer from './components/Users/UsersСontainer';
import ProfileContainer from './components/Profile/ProfileContainer';


const App = (props) => {

  return (
    <div className='app-wrapper'>
          <Header />
          <Navbar />    
        <Routes >
            <Route path = '/dialogs' element = {<DialogsContainer />} />
            <Route path = '/profile/:userId' element = {<ProfileContainer/>} />
            <Route path = '/profile' element = {<ProfileContainer/>} />
            <Route path = '/users' element = {<UsersСontainer/>} />
        </Routes>     
    </div>

    );
}

export default App;