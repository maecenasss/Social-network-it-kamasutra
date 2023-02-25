import { usersAPI } from "../components/Api/api";
import { updateObjectInArray } from "../utils/object-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
//створюємо перемикач між сторінками юзерс
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
//create count of pages 
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
//create loader on page Users
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'


let initialState =  {
    users: [],
    //create users pages
    pageSize: 5,
    totalUsersCount: 50,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: 
               return {
                ...state,
                users: updateObjectInArray (state.users, action.userID, 'id', {followed: true})
            }
                
        case UNFOLLOW: 
            return {
                ...state,
                users: updateObjectInArray (state.users, action.userID, 'id', {followed: false}) 
            }

        case SET_USERS:{ 
            return {...state, users: action.users}  
        }     
            
        case SET_CURRENT_PAGE: { 
            return {...state,currentPage: action.currentPage}
        }

        case SET_TOTAL_USERS_COUNT: { 
            return {...state, totalUsersCount: action.count}
        }

        case TOGGLE_IS_FETCHING: { 
            return {...state, isFetching: action.isFetching}
        }

        case TOGGLE_IS_FOLLOWING_PROGRESS: { 
            return {...state, 
                followingInProgress: action.isFetching
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter (id=>id!==action.userID)
             }
        }     
        default:
        return state
        }
    }

//створюємо функці] для створення об'єктів (action) в MyPosts для додавання постів та їх зміни
export const followSuccess = (userID) => ({type: FOLLOW, userID })
export const unfollowSuccess = (userID) => ({type: UNFOLLOW, userID })
export const setUsers = (users) => ({type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count:totalUsersCount })
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingProgress = (isFetching, userID) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userID })

//створюємо thunk функцію для отримання юзерів із сервера
export const requestUsers = (page, pageSize) => {
    return async (dispatch) => {
        dispatch (toggleIsFetching (true));
        dispatch (setCurrentPage (page));

        let data = await usersAPI.getUsers (page, pageSize);
        dispatch (toggleIsFetching (false)); 
        dispatch (setUsers(data.items));
        dispatch (setTotalUsersCount(data.totalCount=100));
    }
}
//створємо thunk функцію для підписування/відписування від юзерів
//створюємо універсальну функцію для підписування/відписування 

const followUnfollowFlow = async (dispatch, userID, apiMethod, actionCreator) => { 
        dispatch (toggleFollowingProgress(true, userID));
        let response = await apiMethod (userID);
            
        if (response.data.resultCode === 0) {
                dispatch(actionCreator(userID));
        }
        dispatch (toggleFollowingProgress(false, userID));
}

export const follow = (userID) => {
    return async (dispatch) => {
        followUnfollowFlow (dispatch, userID, usersAPI.follow.bind (usersAPI), followSuccess);
    }
}

export const unfollow = (userID) => {
    return async (dispatch) => {
        followUnfollowFlow (dispatch, userID, usersAPI.unfollow.bind (usersAPI), unfollowSuccess);              
    }
}

export default usersReducer;

    
