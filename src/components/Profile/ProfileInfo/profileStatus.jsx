import React from 'react';
import s from './ProfileInfo.module.css'

class ProfileStatus extends React.Component {
    //створюємо локальний state
    state = {
        //створбємо режим редагування статуса edit mode 
        editMode: false,
        status: this.props.status
    } 
    activateEditMode = () => {
        //створюємо асинхронний метод setState для зміни state 
        this.setState ({
            editMode: true
        })   
    }

    deactivateEditMode = () => {
        //створюємо асинхронний метод setState для зміни state 
        this.setState ({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        //створюємо асинхронний метод setState для зміни state 
        this.setState ({
            status: e.currentTarget.value
        });
    }
    
    render(){
    return (
        <div>
            {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || 'No Status'}</span>
                </div>
            }
        {this.state.editMode &&
            <div>
                {/* onBlur - метод коли поле статуса стає неактивним після того як з нього прибрати мишку; autoFocu - курсор в статусі стає біля останньої літери */}
                <input onChange={this.onStatusChange} autoFocus = {true} onBlur={this.deactivateEditMode} value={this.state.status} />
            </div>
        }
        </div>
            )
    }
}
export default ProfileStatus;
