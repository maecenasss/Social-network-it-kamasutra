const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState =  {
    users: []
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

        case SET_USERS: 
            return {...state, users: [...state.users, ...action.users ]}              
            
        default:
                 return state
        }
    }

//створюємо функці] для створення об'єктів (action) в MyPosts для додавання постів та їх зміни
export const followActionCreator = (userID) => ({type: FOLLOW, userID })
export const unfollowActionCreator = (userID) => ({type: UNFOLLOW, userID })
export const setUsersActionCreator = (users) => ({type: SET_USERS, users })

export default usersReducer;

    
