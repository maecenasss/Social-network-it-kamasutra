import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState =  {
    initialized: false
    
};

//отримуємо із АРІ в action data - id, email, login
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: 
               return {
                ...state,
                initialized: true, 
                    }           
        default:
                 return state
        }
    }

//створюємо функці] для створення об'єктів (action) в MyPosts для додавання постів та їх зміни
//ActionCreator - функція задача якої вернути об'єкт action
export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})

export const initializeApp = () => (dispatch) => {
    let promise = dispatch (getAuthUserData());

    Promise.all ([promise])
        .then (()=> {
            dispatch (initializedSuccess())
        });
    }

export default appReducer;

    
