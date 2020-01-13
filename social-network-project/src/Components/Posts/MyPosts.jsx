import React from 'react';
import Posts from "../Posts/Posts";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../utils/validators/validator";
import {Element} from '../Common/FormControls';

const maxLength20 = maxLengthCreator(20);
const Textarea = Element("textarea");

const MyPosts = (props) => {


    const onSubmit = (formData) => {
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
            <Field component={Textarea}
                   name={"MyPostsText"}
                   value={props.newPostText}
                    validate={[requiredField, maxLength20]}
            />
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