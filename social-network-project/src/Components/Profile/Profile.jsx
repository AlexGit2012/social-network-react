import React from 'react';
import s from "../Profile/ProfilePage.module.css";

const Profile = (props) => {
    return (
        <div className={s.ProfilePage}>
            <div className={s.avatar}>
                <img src={props.profilePage.profileImg}></img>
            </div>
            <div>{props.profilePage.nameUser}
                <br/>
                {props.profilePage.age}
            </div>
        </div>
    )
}

export default Profile;