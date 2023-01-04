import React from 'react';
import s from './ProfileInfo.module.css'

class ProfileStatus extends React.Component {
    //створюємо локальний state
    state = {
        //створбємо режим редагування статуса edit mode 
        editMode: false
    } 
    activateEditMode () {
        //створюємо асинхронний метод setState для зміни state 
        this.setState ({
            editMode: true
        })   
    }

    deactivateEditMode () {
        //створюємо асинхронний метод setState для зміни state 
        this.setState ({
            editMode: false
        })   
    }
    
    render(){
    return (
        <div>
            {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                </div>
            }
        {this.state.editMode &&
            <div>
                {/* onBlur - метод коли поле статуса стає неактивним після того як з нього прибрати мишку; autoFocu - курсор в статусі стає біля останньої літери */}
                <input autoFocus = {true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status} />
            </div>
        }
        </div>
            )
    }
}
export default ProfileStatus;
