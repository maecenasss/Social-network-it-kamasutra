import React from "react";
import 'C:/ИТ/React/It-Kamasutra/react-way-of-samurai/src/App.css'
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateProps = (state) => {
    return {
        messagePage: state.messagePage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },

        sendMessage: () =>{
            dispatch(sendMessageCreator())

        }
    }
}

const DialogsContainer = connect (mapStateProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;