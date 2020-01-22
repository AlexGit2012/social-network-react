import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getUserDataOnProfilePage, logout, setAuthUserData} from "../Redux/auth-reducer";

class HeaderContainer extends React.Component {

    render(){
    return (
        <Header {...this.props}/>
    )}
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.authPage.isAuth,
        login: state.authPage.login
    }
}

export default connect (mapStateToProps, {setAuthUserData,getUserDataOnProfilePage, logout})(HeaderContainer);