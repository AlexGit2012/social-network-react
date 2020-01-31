import React from 'react';
import {addPostActionCreator} from "../Redux/profilePageReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {getNewPostText, getPostAva, getPosts, getTitleMyPosts} from "../Redux/users-selectors";

let mapStateToProps = (state) =>{
    return {
        posts: getPosts(state),
        postAva: getPostAva(state),
        titleMyPosts: getTitleMyPosts(state),
        newPostText: getNewPostText(state)
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;