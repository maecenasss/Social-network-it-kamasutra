import {configureStore} from "@reduxjs/toolkit";
import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer copy";
import usersReducer from "./users-reducer";

//створюємо двіжок шляхом комбінації ред'юсерів


let store = configureStore ({
    reducer: {
    messagePage: dialogReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
    }
})

window.store = store;

export default store;