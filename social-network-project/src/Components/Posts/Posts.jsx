import React from 'react';
import s from './Posts.module.css';

const Posts = (props) => {
    return(
        <div className={s.avatar}>
        <img src={props.img}/>
            {props.message}
        </div>
    );
};

export default Posts;