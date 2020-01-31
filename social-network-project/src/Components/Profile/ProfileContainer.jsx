import React from 'react';
import Profile from "./Profile";
import {getOneUserData, getStatus, setUsersProfile, updateUserStatus} from "../Redux/profilePageReducer";
import {Redirect, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {
    getAuthPageUserID,
    getIsAuthValue,
    getProfile,
    getProfilePage,
    getProfilePageStatus
} from "../Redux/users-selectors";

class ProfileContainer extends React.Component {


    componentDidMount() {
        let userID = this.props.match.params.userID;
        if (!userID) {
            userID = this.props.authorisedUserID
            if (!userID) {
                this.props.history.push("/login")
            }
        }
        else {

        }

        this.props.getOneUserData(userID)
        this.props.getStatus(userID)

    }

    render () {

        if (!this.props.isAuth) {return <Redirect to='/login'/>}

        return <div>
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus} />
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        profilePage:getProfilePage(state),
        profile: getProfile(state),
        isAuth:getIsAuthValue(state),
        status: getProfilePageStatus(state),
        authorisedUserID: getAuthPageUserID(state)
    }
}


export default compose(
    withRouter,
    connect (mapStateToProps, {setUsersProfile, getOneUserData, getStatus, updateUserStatus}),
    withAuthRedirect
)(ProfileContainer)