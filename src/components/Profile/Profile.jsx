import React from 'react';
import s from './Profile.module.css';
import 'C:/ИТ/React/It-Kamasutra/react-way-of-samurai/src/App.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {

    return (
    <div className={s.content}>
   <ProfileInfo profile = {props.profile}/>
   <MyPostsContainer/>
  </div>
  )
}
export default Profile;