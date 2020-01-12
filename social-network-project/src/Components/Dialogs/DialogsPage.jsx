import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem';
import Message from './Message';
import {Field, reduxForm} from "redux-form";


const DialogsPage = (props) => {


    let addNewMessagePost = (dataForm) => {
        props.AddNewMessagePost(dataForm.DialogsPageText);
    }

    let dialogsElements = props.dialogsPage.dialogItem
        .map(el => <DialogItem id={el.id} name={el.name}/>);

    let messageElements = props.dialogsPage.messages
        .map(el => <Message message={el.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
            <div className={s.dialogTextArea}>
                <DialogsPageFormRedux newMessageText={props.dialogsPage.newMessageText} onSubmit={addNewMessagePost}/>
            </div>
        </div>
    )
}

const DialogsPageForm = (props) => {return (
    <form onSubmit={props.handleSubmit}>
        <div>
                    <Field component={"textarea"}
                           name={"DialogsPageText"}
                           value={props.newMessageText}/>
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>
)}

const DialogsPageFormRedux = reduxForm({form:"DialogsPageForm"})(DialogsPageForm)


export default DialogsPage