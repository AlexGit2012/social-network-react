import React from 'react';
import Profile from "./Profile";
import {getOneUserData, setUsersProfile} from "../Redux/profilePageReducer";
import {Redirect, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userID = this.props.match.params.userID;
        if (!userID) {
            userID = 2
        }

        this.props.getOneUserData(userID)

    }

    render () {

        if (!this.props.isAuth) {return <Redirect to='/login'/>}

        return <div>
            <Profile {...this.props} profile={this.props.profile} />
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        profilePage:state.profilePage,
        profile: state.profilePage.profile,
        isAuth:state.authPage.isAuth
    }
}


export default compose(
    withRouter,
    connect (mapStateToProps, {setUsersProfile, getOneUserData}),
    withAuthRedirect
)(ProfileContainer)