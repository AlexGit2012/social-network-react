import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../Redux/profilePageReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
    return {
        posts: state.profilePage.posts,
        postAva: state.profilePage.postAva,
        titleMyPosts: state.profilePage.titleMyPosts,
        newPostText: state.profilePage.newPostText
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