import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components//Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs'
import Profile from './components//Profile/Profile';
import { Route, Routes} from 'react-router-dom'
import DialogsContainer from './components/Dialogs/DialogsContainer';


const App = (props) => {

  return (
    <div className='app-wrapper'>
    
          <Header />
          <Navbar />
     
        <Routes >
            <Route path = '/Dialogs' element = {<DialogsContainer />} />
            <Route path = '/Profile' element = {<Profile />} />
        </Routes>
     
        </div>

    );
}

export default App;