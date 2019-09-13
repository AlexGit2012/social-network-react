import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import ProfilePage from './Components/Profile/ProfilePage';
import Dialogs from './Components/Dialogs/Dialogs'
import UsersContainer from './Components/Users/UsersContainer'
import {Route} from 'react-router-dom';


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Nav/>
            <div className="app-wrapper-content">
                <Route path='/Dialogs' render={() => <Dialogs />}
                />
                <Route path='/Profile' render={() => <ProfilePage />}
                />
                <Route path='/Users' render={() => <UsersContainer />}
                />
            </div>
        </div>
    );
}


export default App;
