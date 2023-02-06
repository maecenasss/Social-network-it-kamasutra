import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from '../../Common/Preloader/Preloader';
import ProfileStatusWithHooks from './profileStatusWithHooks';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }  
  
  return (
    <div>
      <div>
        <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' alt = '#' />
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} alt = '#' />
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
      </div>
    </div>

  )
}
export default ProfileInfo;
