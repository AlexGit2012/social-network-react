import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem';
import Message from './Message';


const DialogsPage = (props) => {

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        debugger;
        props.updateOnMessageChange(text);

    }

    let addNewMessagePost = () => {
        props.updateAddNewMessagePost();
    }

    let newMessageElement = React.createRef();

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
                <div>
                    <textarea onChange={onMessageChange} ref={newMessageElement}
                              value={props.dialogsPage.newMessageText}/>
                </div>
                <div>
                    <button onClick={addNewMessagePost}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default DialogsPage;