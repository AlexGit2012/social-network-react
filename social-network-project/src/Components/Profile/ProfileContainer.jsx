import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import * as axios from "axios";
import {setUsersProfile} from "../Redux/profilePageReducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userID = this.props.match.params.userID;
        if (!userID) {
            userID = 2
        }
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userID)
            .then(response => {
                this.props.setUsersProfile(response.data);

            });
    }

    render () {
        return <div>
            <Profile {...this.props} profile={this.props.profile} />
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        profilePage:state.profilePage,
        profile: state.profilePage.profile
    }
}

let WithRouterDataContainer = withRouter(ProfileContainer)


export default connect (mapStateToProps, {setUsersProfile})(WithRouterDataContainer);
