import React from "react";
import 'C:/ИТ/React/It-Kamasutra/react-way-of-samurai/src/App.css'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./DialogMessage/Mesage";
import { Navigate, redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { TextArea } from "../Common/Preloader/FormControl/FormControl";
import { required, maxLengthCreator } from "../../utils/validator";

const Dialogs = (props) => {

    let state = props.messagePage;
    
    let dialogsElements = state.dialogs.map (d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = state.messages.map (m => <Message message = {m.message}/>)
    let newMessageBody = state.newMessageBody;

     let addNewMassage = (values) => {
        props.sendMessage(values.newMessageBody)
      };
    //якщо юзер не залогінений, повертаємо до логіну 
    if (!props.isAuth) return <Navigate to = {'/login'}/>

    return (
        <div className='app-wrapper app-wrapper-content'>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    { dialogsElements }
                </div>

                <div className={s.messages}>
                    <div>{ messagesElements }</div>
                </div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMassage}/>             
        </div>      
        )
}

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return <form onSubmit = {props.handleSubmit}>
        <div>
        <Field component={TextArea} validate ={[required, maxLength50]} 
        name = 'newMessageBody' placeholder="Enter your message"/>
        </div>
    <div> <button>Send</button> </div>
    </form>
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default Dialogs;