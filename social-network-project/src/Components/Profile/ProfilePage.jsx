import React from 'react';
import MyPostsContainer from "../Posts/MyPostsContainer";
import ProfileContainer from "./ProfileContainer";


const ProfilePage = (props) => {

    return (
        <div>
            <ProfileContainer/>
            <MyPostsContainer store={props.store}/>
        </div>

    )
}

export default ProfilePage;