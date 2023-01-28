import { profileAPI, usersAPI } from "../components/Api/api";
const ADD_POST = 'ADD-POST';
//create user Profile then you click to userPhoto
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState =  
{    posts: [
        {message: "It's my first post", count:'15'},
        {message: "It's my second post", count: '21'}
        ],
    profile: null,
    status: ''    
};  

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                count: 0
            };
            return {...state,
                posts: [...state.posts, newPost],
                newPostText: '' }
        }
        
            case SET_USER_PROFILE: { 
                return {...state, profile: action.profile}
            }
            case SET_STATUS: { 
                return {...state, status: action.status}
            }       
            default:
                return state;
    }
}

//створюємо функці] для створення об'єктів (action) в MyPosts для додавання постів та їх зміни
export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile: profile })
export const setStatus = (status) => ({type: SET_STATUS, status })      


export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {dispatch (setUserProfile(response.data));
    });
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch (setStatus(response.data));
    });
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
        dispatch (setStatus(status));
        }
    });
}

export default profileReducer;

    
