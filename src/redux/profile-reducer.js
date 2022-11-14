const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState =  
{    posts: [
        {message: "It's my first post", count:'15'},
        {message: "It's my second post", count: '21'}
        ],
    newPostText: 'it-kamasutra.com'
    }


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                count: 0
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT:{ 
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }

            default:
                return state;
    }
}

//створюємо функці] для створення об'єктів (action) в MyPosts для додавання постів та їх зміни
export const addPostActionCreator = () => ({type: ADD_POST})
export const onPostChangeActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT,newText: text})

export default profileReducer;

    
