import React from 'react';
import MyPostsContainer from "../Posts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo";
import {updateUserStatus} from "../Redux/profilePageReducer";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo
                profile={props.profile}
                profilePage={props.profilePage}
                status={props.status}
                updateUserStatus={props.updateUserStatus}
            />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;