import axios from "axios";
import React from "react";
import styles from './users.module.css'
import userPhoto from 'C:/ИТ/React/It-Kamasutra/react-way-of-samurai/src/assets/img/profile.png'

//create class Users
class Users extends React.Component {
    
        //componentDidMount use for get request to server
        componentDidMount () {
        //перед відрисовкою утворюємо юзерів, переносимо state із user-reducer 
        //take request to server to get users state & after get state - setUsers
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                this.props.setUsers(response.data.items);
            });
        }
    

    //create method render what return jsx 
    render () {
        return <div className='app-wrapper app-wrapper-content'>
           <div>
            <span className={styles.selectedPage}>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
           </div>
           
           
           {//make areas from state - users
            this.props.users.map (u => <div key = {u.id}>
                {/* створюємо картинку юзера і кнопку фолов */}
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className = {styles.userPhoto} alt=""/>
                    </div>
                    <div>
                        {/* створюємо переключателі фолов і анфолов за допомогою тернарних операторів */}
                        { u.followed
                        ? <button onClick={() => {this.props.unfollow(u.id)}}>Unfollow</button>
                        : <button onClick={() => {this.props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                {/* створюємо області із іменем та статусом */}
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                {/* створюємо область та місто */}
                <span>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </span>
            </div>)
        }
    </div>
}
}

export default Users;