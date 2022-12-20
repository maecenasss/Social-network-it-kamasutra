import { authAPI } from "../components/Api/api";

const SET_USER_DATA = 'FOLLOW';


let initialState =  {
    userId: null,
    email: null,
    login: null,
    isAuth: false
    
};

//отримуємо із АРІ в action data - id, email, login
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: 
               return {
                ...state,
                ...action.data, 
                isAuth: true
        }           
        default:
                 return state
        }
    }

//створюємо функці] для створення об'єктів (action) в MyPosts для додавання постів та їх зміни
//ActionCreator - функція задача якої вернути об'єкт action
export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}})
export const getAuthUserData = () => (dispatch) => {
    authAPI.me()
    .then(response => {  
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch (setAuthUserData (id, email, login))
        }
    });
}
export default authReducer;

    
