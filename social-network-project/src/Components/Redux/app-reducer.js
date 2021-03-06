import {getUserDataOnProfilePage} from "./auth-reducer";

const SET_INITIALIZED = 'MP/SET_INITIALIZED';

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state;
    }
}

export const setInitializedSuccess = () => ({
    type: SET_INITIALIZED
});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getUserDataOnProfilePage())
    Promise.all([promise]).then(() => {
            dispatch(setInitializedSuccess())
        }
    )
}


export default appReducer;