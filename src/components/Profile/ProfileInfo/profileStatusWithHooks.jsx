import React, { useEffect } from 'react';
import { useState } from 'react';

//useState - стандартна функція реакта для отримання стейта. Містить в собі: 1-елемент значення та 2-й елемент функція, що це значення змінює

const ProfileStatusWithHooks = (props) => {
    
   //функція хук для  управління вікном для зміни статуса
    let [editMode, setEditMode] = useState (false);
    //функція хук для управління зміною статуса
    let [status, setStatus] = useState (props.status);
    //функція хук для зміни статуса у разі зміни пропса (синхронізація)
    useEffect (()=>{
        setStatus(props.status);
    },[props.status]);

   const activateEditMode = () => {
    setEditMode (true)
   }
  
   const deactivateEditMode = () => {
    //після виходу із режиму редагування статусу без змін, повертається засетаний статус
        setEditMode (false)
        //заливаємо обновлений статус на сервер
        props.updateStatus(status);
    }
   
    const onStatusChange = (e) => {
        //створюємо асинхронний метод для зміни state 
        setStatus (e.currentTarget.value);
    }
        return (
        <div>
             {!editMode &&   
             <div>
                <span onDoubleClick={activateEditMode}>{props.status || '======='} </span>
            </div>
            }       
        {editMode &&
            <div>
                {/* onBlur - метод коли поле статуса стає неактивним після того як з нього прибрати мишку; autoFocu - курсор в статусі стає біля останньої літери */}
                <input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus = {true} 
                value = {status}/>
            </div>
            }
        </div>
        )
    }

export default ProfileStatusWithHooks;
