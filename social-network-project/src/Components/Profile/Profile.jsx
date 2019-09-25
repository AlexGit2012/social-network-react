import React from 'react';
import MyPostsContainer from "../Posts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} profilePage={props.profilePage}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;