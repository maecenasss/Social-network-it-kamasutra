/* eslint-disable no-undef */
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validator';
import { TextArea } from '../../Common/Preloader/FormControl/FormControl';
import s from './MyPosts.module.css';
import Post from './Post/Post';

let maxLength10 = maxLengthCreator(10); 

class MyPosts extends Component {

//shoudComponentUpdate - метод визначення нових props & state і заміни старих
shoudComponentUpdate (nextProps, nextState) {
//якщо наступні пропси/стейти не однакові із тими які отримані компонентою, то метод їх змінює на нові
  return nextProps !== this.props || nextState !== this.state 
      }

  render() {
    let postsElements = this.props.posts.map(p => <Post message={p.message} count={p.count} />);
    let newPostElement = React.createRef();

    let onAddPost = values => {
      this.props.addPost(values.newPostText);
    };

    return (<div className={s.postsBlock}>
                <h2>My posts</h2>
                <AddNewPostForm onSubmit={onAddPost} />
                <div className={s.posts}>
                  {postsElements}
                </div>
          </div>);
  }

}

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

AddNewPostForm = reduxForm({form:'ProfileAddNewPostForm'})(AddNewPostForm);

export default MyPosts;