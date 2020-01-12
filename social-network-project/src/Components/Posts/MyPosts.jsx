import React from 'react';
import Posts from "../Posts/Posts";
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {


    const onSubmit = (formData) => {
        console.log(formData.MyPostsText)
        props.addPost(formData.MyPostsText);
    }

    let postElements = props.posts
        .map(el =>
            <Posts img={props.postAva} message={el.message}/>
        )

    return (
        <MyPropsFormRedux postElements={postElements} onSubmit={onSubmit} />

    )
}

const MyPostsForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={"textarea"} name={"MyPostsText"} value={props.newPostText}/>
            <div>
                <button>Add post</button>
            </div>
            <div>
                <h1>{props.titleMyPosts}</h1>
            </div>
            {props.postElements}
        </form>
    )

}

const MyPropsFormRedux = reduxForm({form: "MyPostsForm"})(MyPostsForm)


export default MyPosts;