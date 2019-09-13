import React from 'react';
import Posts from "../Posts/Posts";

const MyPosts = (props) => {

    const onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    const addPost = () => {
        props.addPost();
    }


    let newPostElement = React.createRef();

    let postElements = props.posts
        .map(el =>
            <Posts img={props.postAva} message={el.message}/>
        )

    return (
        <div>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div>
                <h1>{props.titleMyPosts}</h1>
            </div>
            {postElements}
        </div>

    )
}

export default MyPosts;