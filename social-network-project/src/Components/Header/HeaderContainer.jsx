import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getUserDataOnProfilePage, logout, setAuthUserData} from "../Redux/auth-reducer";
import {getIsAuthValue, getLoginStatus} from "../Redux/users-selectors";

class HeaderContainer extends React.Component {

    render(){
    return (
        <Header {...this.props}/>
    )}
}

const mapStateToProps = (state) => {
    return {
        isAuth: getIsAuthValue(state),
        login: getLoginStatus(state)
    }
}

export default connect (mapStateToProps, {setAuthUserData,getUserDataOnProfilePage, logout})(HeaderContainer);