import {applyMiddleware, configureStore} from "@reduxjs/toolkit";
import authReducer from "./auth-reducer";
import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer copy";
import usersReducer from "./users-reducer";
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form';

//створюємо двіжок шляхом комбінації ред'юсерів

let store = configureStore ({
    reducer: {
    messagePage: dialogReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
    },
    
}, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;