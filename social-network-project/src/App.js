import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import Dialogs from './Components/Dialogs/Dialogs'
import UsersContainer from './Components/Users/UsersContainer'
import {Route} from 'react-router-dom';
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Nav/>
            <div className="app-wrapper-content">
                <Route path='/dialogs' render={() => <Dialogs />}
                />
                <Route path='/profile/:userID?'
                       render={() => <ProfileContainer />}
                />
                <Route path='/users' render={() => <UsersContainer />}
                />
            </div>
        </div>
    );
}


export default App;
