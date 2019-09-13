import React from 'react';
import Profile from './Profile';
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        profilePage:state.profilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {}
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)

export default ProfileContainer;