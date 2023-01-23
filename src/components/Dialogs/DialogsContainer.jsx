import React from 'react';
import 'C:/ИТ/React/It-Kamasutra/react-way-of-samurai/src/App.css'
import { sendMessageCreator} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/AuthRedirect";
import { compose } from "redux";

let mapStateProps = (state) => {
    return {
        messagePage: state.messagePage,
          }
};

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) =>{
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
}

export default compose (
    connect (mapStateProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);

