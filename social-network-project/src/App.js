import React, {Component} from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import Dialogs from './Components/Dialogs/Dialogs'
import UsersContainer from './Components/Users/UsersContainer'
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import Preloader from "./Components/Common/Preloader";
import {initializeApp} from "./Components/Redux/app-reducer";
import store from "./Components/Redux/redux-store";


class App extends Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        if (!this.props.initialized){
            return <Preloader />
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs' render={() => <Dialogs/>}
                    />
                    <Route path='/profile/:userID?'
                           render={() => <ProfileContainer/>}
                    />
                    <Route path='/users' render={() => <UsersContainer/>}
                    />
                    <Route path='/login' render={() => <Login/>}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.appPage.initialized
    }
}

let AppContainer = compose(
    withRouter,
    connect (mapStateToProps, {initializeApp}))(App);

let SamuraiJSApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp;