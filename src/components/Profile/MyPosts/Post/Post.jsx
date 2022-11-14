import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/147/147142.png"
          alt=""
        />
        {props.message}
        <div>
        <span>like+{props.count}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;