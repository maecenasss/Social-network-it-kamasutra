const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
//create user Profile then you click to userPhoto
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState =  
{    posts: [
        {message: "It's my first post", count:'15'},
        {message: "It's my second post", count: '21'}
        ],
    newPostText: 'it-kamasutra.com',
    profile: null    
};  

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                count: 0
            };
            return {...state,
                posts: [...state.posts, newPost],
                newPostText: '' }
        }

        case UPDATE_NEW_POST_TEXT:
            return {...state,
                    newPostText: action.newText
            };
        
            case SET_USER_PROFILE: { 
                return {...state, profile: action.profile}
            }      

            default:
                return state;
    }
}

//створюємо функці] для створення об'єктів (action) в MyPosts для додавання постів та їх зміни
export const addPostActionCreator = () => ({type: ADD_POST})
export const onPostChangeActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile: profile })

export default profileReducer;

    
