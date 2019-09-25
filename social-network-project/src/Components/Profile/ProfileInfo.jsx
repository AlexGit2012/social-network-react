import React from 'react';
import s from "../Profile/ProfilePage.module.css";
import Preloader from "../Common/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={s.ProfilePage}>
            <div className={s.avatar}>
                <div>
                    <img src={props.profile.photos.large}/>
                </div>
                <div>
                    {props.profile.fullName}
                </div>
                <img src={props.profilePage.profileImg}></img>
            </div>
            <div>{props.profilePage.nameUser}
                <br/>
                {props.profilePage.age}
            </div>
        </div>
    )
}

export default ProfileInfo;