/* eslint-disable no-undef */
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validator';
import { TextArea } from '../../Common/Preloader/FormControl/FormControl';
import s from './MyPosts.module.css';
import Post from './Post/Post';

let maxLength10 = maxLengthCreator(10); 

let AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
          <div>
              <Field name='newPostText' component={TextArea} validate={[ required, maxLength10 ]} placeholder = {'Post message'}/>
          </div>
          <div>
              <button>Add post</button>
          </div>
  </form>
  )
}

let AddNewPostFormRedux = reduxForm({form:'ProfileAddNewPostForm'})(AddNewPostForm);

const MyPosts = React.memo (props =>{
  let postsElements = 
  [...props.posts]
    .reverse()
    .map(p => <Post message={p.message} count={p.count} />);

  let newPostElement = React.createRef();

  let onAddPost = values => {
    this.props.addPost(values.newPostText);
  };

  return (
  <div className={s.postsBlock}>
              <h2>My posts</h2>
              <AddNewPostFormRedux onSubmit={onAddPost} />
              <div className={s.posts}>
                {postsElements}
              </div>
    </div>);
})


export default MyPosts;