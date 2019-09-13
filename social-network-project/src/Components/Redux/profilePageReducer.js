const ADD_POST = 'MP/ADD-POST';
const UPDATE_NEW_POST_TEXT = 'MP/UPDATE-NEW-POST-TEXT';

let initialState = {

    nameUser: "Cristian B.",
    age: "age: 45",
    titleMyPosts: "My Posts",
    profileImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU3CHTNo9LJXaM9yb6dMoVZRmS6AEykcPFwbwyM0nbdE-32iJh",
    postAva: "https://www.meme-arsenal.com/memes/50a94528b727ee99bd80c428cd5cd294.jpg",
    empty: "",
    posts: [{id: 1, message: "HI JACK!"}, {id: 2, message: "How are u7"}, {id: 3, message: "I'am fine)"}],
    newPostText: "it-kamasutra.com"

}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:{
            return {
                ...state,
                posts: [...state.posts, {id: 5, message: state.newPostText}],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT:{
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;