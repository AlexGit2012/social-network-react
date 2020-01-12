const ADD_DIALOGS_MESSAGE = 'MP/ADD-DIALOG-MESSAGE';

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
                messages:[...state.messages,{id: 4,message: action.newMessageText}],
                newMessageText: ''

            };
        default:
            return state;
    }

}

export const addDialogMessageActionCreator = (newMessageText) => ({type: ADD_DIALOGS_MESSAGE,newMessageText});


export default dialogsReducer;