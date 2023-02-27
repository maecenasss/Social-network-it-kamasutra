import {applyMiddleware, combineReducers, compose, configureStore, createStore} from "@reduxjs/toolkit";
import authReducer from "./auth-reducer";
import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer copy";
import usersReducer from "./users-reducer";
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form';
import appReducer from "./app-reducer";

//створюємо двіжок шляхом комбінації ред'юсерів

let reducers = combineReducers ({
    messagePage: dialogReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer 
    });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore (reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.__store__ = store;

export default store;