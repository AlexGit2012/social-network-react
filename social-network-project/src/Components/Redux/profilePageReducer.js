import {profileAPI} from "../../API/Api";

const ADD_POST = 'MP/ADD-POST';
const SET_USERS_PROFILE = 'MP/SET_USERS_PROFILE';
const SET_USER_STATUS = 'MP/SET_USER_STATUS'

let initialState = {

    nameUser: "Cristian B.",
    age: "age: 45",
    titleMyPosts: "My Posts",
    profileImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU3CHTNo9LJXaM9yb6dMoVZRmS6AEykcPFwbwyM0nbdE-32iJh",
    postAva: "https://www.meme-arsenal.com/memes/50a94528b727ee99bd80c428cd5cd294.jpg",
    empty: "",
    posts: [{id: 1, message: "HI JACK!"}, {id: 2, message: "How are u7"}, {id: 3, message: "I'am fine)"}],
    newPostText: "it-kamasutra.com",
    profile: null,
    status: ""

}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {id: 5, message: action.newPostText}],
                newPostText: ''
            };
        }
        case SET_USERS_PROFILE: {
            return {
                ...state,
                profile: action.profileData
            }
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const setUsersProfile = (profileData) => ({type: SET_USERS_PROFILE, profileData})
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})

export const getStatus = (userID) => {
    return (dispatch) => {
        profileAPI.getStatus(userID)
            .then(data => {
                dispatch(setUserStatus(data.data))
            })
    }
}

export const updateUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(data => {
                if (data.data.resultCode === 0) {
                    dispatch(setUserStatus(status))
                }
            })
    }
}

export const getOneUserData = (userID) => {
    return (dispatch) => {
        profileAPI.getOneUserData(userID)
            .then(data => {
                dispatch(setUsersProfile(data))
            });
    }
}

export default profileReducer;