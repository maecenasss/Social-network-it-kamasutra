/* eslint-disable no-undef */
import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
  
  let newPostElement = React.createRef();


  let onAddPost = () => {
    props.addPost();
  }

    let postsElements = 
    props.posts.map (p => <Post message = {p.message} count = {p.count}/>)
    
    let onPostChange = () => {
      let text = newPostElement.current.value
      props.updateNewPostText(text);
    };
    
    return <div className={s.postsBlock}>
      <h2>My posts</h2>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
        </div>
        <div className={s.button}>
          <button onClick={onAddPost}>Add post</button>
        </div>
        <div className={s.posts}>
          { postsElements }       
        </div>
    </div>
  
}

export default MyPosts;