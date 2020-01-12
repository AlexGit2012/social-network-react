import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profilePageReducer";
import dialogsReducer from "./dialogPageReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersPageReducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form'

let reducers = combineReducers({
        profilePage: profileReducer,  //profilePage: profileReducer
        dialogsPage: dialogsReducer,  //dialogsPage: dialogsReducer
        usersPage: usersReducer,
        sidebar: sidebarReducer,   // ...
        authPage: authReducer,
        form: formReducer
    }
);

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store

export default store;