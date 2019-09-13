/*
import profileReducer from "./profilePageReducer";
import dialogsReducer from "./dialogPageReducer";

const addPost = 'MP/ADD-POST';
const updateNewPostText = 'MP/UPDATE-NEW-POST-TEXT';

const addDialogMessage = 'MP/ADD-DIALOG-MESSAGE';
const updateNewMessageText = 'MP/UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {
        profilePage: {
            nameUser: "Cristian B.",
            age: "age: 45",
            titleMyPosts: "My Posts",
            profileImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU3CHTNo9LJXaM9yb6dMoVZRmS6AEykcPFwbwyM0nbdE-32iJh",
            postAva: "https://www.meme-arsenal.com/memes/50a94528b727ee99bd80c428cd5cd294.jpg",
            empty: "",
            messages: [{id: 1, message: "HI JACK!"}, {id: 2, message: "How are u7"}, {id: 3, message: "I'am fine)"}],
            newPostText: "it-kamasutra.com"
        },
        dialogsPage: {
            dialogItem: [
                {id: 1, name: "Andrey"},
                {id: 2, name: "Alexey"},
                {id: 3, name: "Kirill"},
                {id: 4, name: "Victor"},
                {id: 5, name: "Igorek"}
            ],
            messages: [
                {id: 1, message: "Have a nice day!"},
                {id: 2, message: "Where are i am?"},
                {id: 3, message: "Great job!"},
            ],
            newMessageText: ''
        }


    },
    _callSubscriber() {
        console.log('_State changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this.callSubscriber = observer; /// паттерн наблюдатель (observer), похож на publisher-subscriber
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this.callSubscriber(this._state);
    }

}

window.store = store;

export default store;*/
