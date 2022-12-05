const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
//створюємо перемикач між сторінками юзерс
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
//create count of pages 
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
//create loader on page Users
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
//create user Profile then you click to userPhoto
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState =  {
    users: [],
    //create users pages
    pageSize: 5,
    totalUsersCount: 50,
    currentPage: 1,
    isFetching: true,
    profile: null

};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: 
               return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                        }
                    return u;  
                })
            }
                
        case UNFOLLOW: 
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                        }
                    return u;  
                })
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
        case SET_USER_PROFILE: { 
            return {...state, profile: action.profile}
        }

            
        default:
                 return state
        }
    }

//створюємо функці] для створення об'єктів (action) в MyPosts для додавання постів та їх зміни
export const follow = (userID) => ({type: FOLLOW, userID })
export const unfollow = (userID) => ({type: UNFOLLOW, userID })
export const setUsers = (users) => ({type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count:totalUsersCount })
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching })
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile })

export default usersReducer;

    
