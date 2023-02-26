import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from '../../Common/Preloader/Preloader';
import ProfileStatusWithHooks from './profileStatusWithHooks';

const ProfileInfo = ({profile, status, updateStatus}) => {
  if (!profile) {
    return <Preloader/>
  }  
  return (
    <div>
      <div>
        <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' alt = '#' />
      </div>
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large} alt = '#' />
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
      </div>
    </div>

  )
}
export default ProfileInfo;
