import React from 'react';
import Profile from "./Profile";
import {getOneUserData, getStatus, setUsersProfile, updateUserStatus} from "../Redux/profilePageReducer";
import {Redirect, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

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
        profilePage:state.profilePage,
        profile: state.profilePage.profile,
        isAuth:state.authPage.isAuth,
        status: state.profilePage.status,
        authorisedUserID: state.authPage.userID
    }
}


export default compose(
    withRouter,
    connect (mapStateToProps, {setUsersProfile, getOneUserData, getStatus, updateUserStatus}),
    withAuthRedirect
)(ProfileContainer)