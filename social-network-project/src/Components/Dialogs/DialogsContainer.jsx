import React from 'react';
import {addDialogMessageActionCreator, updateNewMessageTextActionCreator} from "../Redux/dialogPageReducer";
import DialogsPage from './DialogsPage';
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";


const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        AddNewMessagePost: (newMessageText) => {
            dispatch(addDialogMessageActionCreator(newMessageText))
        }
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(DialogsPage)