import React from "react";
import { NavLink } from "react-router-dom";
import styles from './users.module.css'
import userPhoto from 'C:/ИТ/React/It-Kamasutra/react-way-of-samurai/src/assets/img/profile.png'

let Users = (props) => {
    //create pages counter and create pages area & округляємо до цілого
    let pagesCount = Math.ceil (props.totalUsersCount/props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    
    return <div className='app-wrapper app-wrapper-content'>
    {/*робимо так щоб відображося виділення сторінки юзера що відкрита*/}
    <div>
     {pages.map (p => {
         return  <span onClick = {() => {props.onPageChanged(p)}} className={props.currentPage === p && styles.selectedPage} > {p} </span>
     })}
     </div>

    {//make areas from state - users
     props.users.map (u => <div key = {u.id}>
         {/* створюємо картинку юзера і кнопку фолов */}
         <span>
             <div>
                <NavLink to = {'/Profile/'}>
                 <img src={u.photos.small != null ? u.photos.small : userPhoto} className = {styles.userPhoto} alt=""/>
                 </NavLink>
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

export default Users;