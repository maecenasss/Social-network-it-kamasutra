import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer copy";

let store = {
    _state: {
        profilePage: {
            posts: [
                {message: "It's my first post", count:'15'},
                {message: "It's my second post", count: '21'}
                ],
            newPostText: 'it-kamasutra.com'
        },

        messagePage: {
            dialogs: [
                {id: 1, name:'Koliya'},
                {id: 2, name:'Vasya'},
                {id: 3, name:'Sasha'},
            ],
            messages: 
            [
                {id:1, message: 'Hi'},
                {id:2, message: 'How are you'},
                {id:3, message: 'Are you ok'},
            ],
            //creating new message area 
            newMessageBody: ''         
        },
        sidebar: {

        }   
    },
    _callSubscriber () {
        console.log ('State changed');
    },
    getState () {
        return this._state;
    },
     subscribe (observer) {
        this._callSubscriber = observer;
    },
    addPost () {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            count: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    dispatch (action) {
        this._state.profilePage = profileReducer (this._state.profilePage, action);
        this._state.messagePage = dialogReducer (this._state.messagePage, action);
        this._state.sidebar = sidebarReducer (this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.storage = store;
//обєкт state і методи rerenderEntireTree і тд переводимо в змінну сторе