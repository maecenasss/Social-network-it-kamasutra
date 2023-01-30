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
                ...action.payload, 
                    }           
        default:
                 return state
        }
    }

//створюємо функці] для створення об'єктів (action) в MyPosts для додавання постів та їх зміни
//ActionCreator - функція задача якої вернути об'єкт action
export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}})

export const getAuthUserData = () => (dispatch) => {
    authAPI.me()
    .then(response => {  
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch (setAuthUserData (id, email, login, true))
        }
    });
}

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
    //якщо логіі і код є правильними, то отримуємо дані юзера із сервера
    .then(response => {  
    if (response.data.resultCode === 0) {
          dispatch (getAuthUserData())
        }
    });
}

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {  
//якщо вилогінюємся то установлюються нульові значення ід, емеіла і логіна
     if (response.data.resultCode === 0) {
          dispatch (setAuthUserData(null, null, null, false))
        }
    });
}

export default authReducer;

    
