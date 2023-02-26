import React from "react";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {

    return <div className='app-wrapper app-wrapper-content'>
    {/*робимо так щоб відображося виділення сторінки юзера що відкрита*/}
  
        <Paginator currentPage = {currentPage} onPageChanged = {onPageChanged} totalUsersCount = {totalUsersCount} pageSize = {pageSize}/>
        <div>
    {//make areas from state - users
        users.map (u => <User user = {u} 
                            followingInProgress = {props.followingInProgress}
                            key = {u.id}
                            unfollow = {props.unfollow}
                            follow = {props.follow}/>)
 }
        </div>
</div>
}

export default Users;