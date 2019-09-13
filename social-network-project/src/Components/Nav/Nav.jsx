import React from 'react';
import s from "./Nav.module.css";
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={s.nav}>
            <div>
                <NavLink to='/Profile' activeClassName={s.active}>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/Dialogs' activeClassName={s.active}>Messages</NavLink>
            </div>
            <div>
                <NavLink to='/Users' activeClassName={s.active}>Users</NavLink>
            </div>
            <div>News</div>
            <div>Music</div>
            <div>-----</div>
            <div>Settings</div>
        </nav>
    );
};

export default Nav;