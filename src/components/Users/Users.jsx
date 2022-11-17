import React from "react";
import styles from './users.module.css'

let Users = (props) => {
//перед відрисовкою утворюємо юзерів, переносимо state із user-reducer
if (props.users.length ===0) {    
props.setUsers ([
        {id: 1, photoUrl: 'https://yt3.ggpht.com/OHmYWgb5Eyq9OHvuoYTvU9Pc-5rkos9a85CmEwquJYbxFtyUeMqg8S_waOGDcU2NodnaeO0d=s900-c-k-c0x00ffffff-no-rj', followed: false, fullName: 'Sasha', status: 'Student', location: {country: 'Ukraine', city:'Kyiv'}},
        {id: 2, photoUrl: 'https://yt3.ggpht.com/OHmYWgb5Eyq9OHvuoYTvU9Pc-5rkos9a85CmEwquJYbxFtyUeMqg8S_waOGDcU2NodnaeO0d=s900-c-k-c0x00ffffff-no-rj', followed: true, fullName: 'Oleg', status: 'Soldier', location: {country: 'Ukraine', city:'Yahniki'}},
        {id: 3, photoUrl: 'https://yt3.ggpht.com/OHmYWgb5Eyq9OHvuoYTvU9Pc-5rkos9a85CmEwquJYbxFtyUeMqg8S_waOGDcU2NodnaeO0d=s900-c-k-c0x00ffffff-no-rj', followed: true, fullName: 'Sergiy', status: 'Boss', location: {country: 'Ukraine', city:'Sumy'}}
        ]
    ) 
    }   
    return <div className='app-wrapper app-wrapper-content'>
        {//make areas from state - users
            props.users.map (u => <div key = {u.id}>
                {/* створюємо картинку юзера і кнопку фолов */}
                <span>
                    <div>
                        <img src={u.photoUrl} className = {styles.userPhoto} alt=""/>
                    </div>
                    <div>
                        {/* створюємо переключателі фолов і анфолов за допомогою тернарних операторів */}
                        { u.followed
                        ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                        : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                {/* створюємо області із іменем та статусом */}
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                {/* створюємо область та місто */}
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </div>)
        }
    </div>
}

export default Users;