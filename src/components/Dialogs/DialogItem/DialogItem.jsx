import React from "react";
import 'C:/ИТ/React/It-Kamasutra/react-way-of-samurai/src/App.css'
import s from './../Dialogs.module.css'
import { NavLink } from "react-router-dom";


const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
            <div className={s.dialog + ' ' + s.active}>
                <NavLink to = {path}>{props.name}</NavLink>
            </div>
    )
}

export default DialogItem;