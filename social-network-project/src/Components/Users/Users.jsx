import React from 'react';
import styles from './Users.module.css';
import userDefaultPhoto from '../../assets/images/download.png';
import preloader from '../../assets/images/preloader.svg';


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            { pages.map(p => {
                return <span className={
                    props.currentPage === p ? styles.selectedPage : undefined
                    /*this.props.currentPage === p && styles.selectedPage*/
                }
                             onClick={(e) => {props.onPageChanged(p);
                                 console.log(p)}}> {p} </span>})}

        </div>
        {
            props.users.map(u => <div className={styles.user} key={u.id}>
            <span>
                <div>
                    <img className={styles.photo} src={u.photos.small != null ? u.photos.small : userDefaultPhoto}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
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