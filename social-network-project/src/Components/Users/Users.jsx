import React from 'react';
import styles from './Users.module.css';
import userDefaultPhoto from '../../assets/images/download.png';
import {NavLink} from "react-router-dom";
import {userAPI} from "../../API/Api";


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={
                    props.currentPage === p ? styles.selectedPage : undefined
                    /*this.props.currentPage === p && styles.selectedPage*/
                }
                             onClick={(e) => {
                                 props.onPageChanged(p);
                                 console.log(p)
                             }}> {p} </span>
            })}

        </div>
        {
            props.users.map(u => <div className={styles.user} key={u.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img className={styles.photo}
                             src={u.photos.small != null ? u.photos.small : userDefaultPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button
                            disabled={props.isFollowingUnfollowing.some(id=>id===u.id)}
                            onClick={() => {
                                props.toggleisFollowingUnfollowing(true, u.id)
                                userAPI.unfollowUsers(u.id)
                                    .then(data => {
                                        if (data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                        props.toggleisFollowingUnfollowing(false, u.id)
                                    });


                            }}>Unfollow</button>
                        : <button
                            disabled={props.isFollowingUnfollowing.some(id=>id===u.id)}
                            onClick={() => {

                            props.toggleisFollowingUnfollowing(true, u.id)
                            userAPI.followUsers(u.id)
                                .then(data => {
                                    if (data.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                                    props.toggleisFollowingUnfollowing(false, u.id)
                                });

                        }}>Follow</button>}
                </div>
            </span>
                <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
            </span>
            </div>)
        }
    </div>


}

export default Users;