import {applyMiddleware, combineReducers, createStore, compose} from "redux";
import profileReducer from "./profilePageReducer";
import dialogsReducer from "./dialogPageReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersPageReducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import appReducer from "./app-reducer";

let reducers = combineReducers({
        profilePage: profileReducer,  //profilePage: profileReducer
        dialogsPage: dialogsReducer,  //dialogsPage: dialogsReducer
        usersPage: usersReducer,
        sidebar: sidebarReducer,   // ...
        authPage: authReducer,
        appPage: appReducer,
        form: formReducer
    }
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers((applyMiddleware(thunkMiddleware))));

window.store = store

export default store;