const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
//створюємо перемикач між сторінками юзерс
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
//create count of pages 
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
//create loader on page Users
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState =  {
    users: [],
    //create users pages
    pageSize: 5,
    totalUsersCount: 50,
    currentPage: 1,
    isFetching: true
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
            
        default:
                 return state
        }
    }

//створюємо функці] для створення об'єктів (action) в MyPosts для додавання постів та їх зміни
export const followActionCreator = (userID) => ({type: FOLLOW, userID })
export const unfollowActionCreator = (userID) => ({type: UNFOLLOW, userID })
export const setUsersActionCreator = (users) => ({type: SET_USERS, users })
export const setCurrentPageActionCreator = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCountActionCreator = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count:totalUsersCount })
export const toggleIsFetchingActionCreator = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching })

export default usersReducer;

    
