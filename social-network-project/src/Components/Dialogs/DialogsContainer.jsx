import React from 'react';
import {addDialogMessageActionCreator, updateNewMessageTextActionCreator} from "../Redux/dialogPageReducer";
import DialogsPage from './DialogsPage';
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateAddNewMessagePost: () => {
            dispatch(addDialogMessageActionCreator())
        },
        updateOnMessageChange: (text) => {
            dispatch(updateNewMessageTextActionCreator(text));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsPage);

export default DialogsContainer;