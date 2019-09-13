const ADD_DIALOGS_MESSAGE = 'MP/ADD-DIALOG-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'MP/UPDATE-NEW-MESSAGE-TEXT';

let initialState = {

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

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DIALOGS_MESSAGE:
            return {
                ...state,
                messages:[...state.messages,{id: 4,message: state.newMessageText}],
                newMessageText: ''

            };
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newMessage
            };
        default:
            return state;
    }

}

export const addDialogMessageActionCreator = () => ({type: ADD_DIALOGS_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text})

export default dialogsReducer;