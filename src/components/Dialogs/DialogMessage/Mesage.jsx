import React from "react";
import 'C:/ИТ/React/It-Kamasutra/react-way-of-samurai/src/App.css'
import s from './../Dialogs.module.css'

const Message = (props) => {
    return (
            <div className={s.message}>{props.message}</div>
    )
}

export default Message;