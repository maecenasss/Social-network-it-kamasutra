import {applyMiddleware, configureStore} from "@reduxjs/toolkit";
import authReducer from "./auth-reducer";
import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer copy";
import usersReducer from "./users-reducer";
import thunkMiddleware from 'redux-thunk'

//створюємо двіжок шляхом комбінації ред'юсерів


let store = configureStore ({
    reducer: {
    messagePage: dialogReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
    },
    
}, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;