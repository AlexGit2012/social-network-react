import {combineReducers, createStore} from "redux";
import profileReducer from "./profilePageReducer";
import dialogsReducer from "./dialogPageReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersPageReducer";

let reducers = combineReducers({
        profilePage: profileReducer,  //profilePage: profileReducer
        dialogsPage: dialogsReducer,  //dialogsPage: dialogsReducer
        usersPage: usersReducer,
        sidebar: sidebarReducer   // ...
    }
);

let store = createStore(reducers);

export default store;