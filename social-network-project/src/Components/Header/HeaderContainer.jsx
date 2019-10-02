import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getUserDataOnProfilePage, setAuthUserData} from "../Redux/auth-reducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getUserDataOnProfilePage()
    }

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

export default connect (mapStateToProps, {setAuthUserData,getUserDataOnProfilePage})(HeaderContainer);