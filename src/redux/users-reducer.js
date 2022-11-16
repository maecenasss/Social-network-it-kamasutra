const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState =  {
        users: [
        {id: 1, followed: false, fullName: 'Sasha', status: 'Student', location: {country: 'Ukraine', city:'Kyiv'}},
        {id: 2, followed: true, fullName: 'Oleg', status: 'Soldier', location: {country: 'Ukraine', city:'Yahniki'}},
        {id: 3, followed: true, fullName: 'Sergiy', status: 'Boss', location: {country: 'Ukraine', city:'Sumy'}}
        ],
}


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
            default:
                 return state
        }
    }

//створюємо функці] для створення об'єктів (action) в MyPosts для додавання постів та їх зміни
export const followActionCreator = (userID) => ({type: FOLLOW, userID })
export const unfollowActionCreator = (userID) => ({type: UNFOLLOW, userID })

export default usersReducer;

    
