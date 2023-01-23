/* eslint-disable no-undef */
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  
  let postsElements = props.posts.map (p => <Post message = {p.message} count = {p.count}/>)
  
  let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }  
return <div className={s.postsBlock}>
                <h2>My posts</h2>
                <AddNewPostForm onSubmit = {onAddPost}/>
                <div className={s.posts}>
                  {postsElements}
                </div>
          </div>
}

let AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
          <div>
              <Field name='newPostText' component='textarea'/>
          </div>
          <div>
              <button>Add post</button>
          </div>
  </form>
  )
}
AddNewPostForm = reduxForm({form:'ProfileAddNewPostForm'})(AddNewPostForm);

export default MyPosts;