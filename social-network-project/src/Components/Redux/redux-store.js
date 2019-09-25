import {combineReducers, createStore} from "redux";
import profileReducer from "./profilePageReducer";
import dialogsReducer from "./dialogPageReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersPageReducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
        profilePage: profileReducer,  //profilePage: profileReducer
        dialogsPage: dialogsReducer,  //dialogsPage: dialogsReducer
        usersPage: usersReducer,
        sidebar: sidebarReducer,   // ...
        authPage: authReducer
    }
);

let store = createStore(reducers);

window.store = store

export default store;