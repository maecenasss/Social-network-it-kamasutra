//creating new message area 
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {

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
    }


const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {...state, 
                    newMessageBody: action.body};
               
        case SEND_MESSAGE:
        let body = state.newMessageBody;
        return {...state,
            newMessageBody: '',
            messages: [...state.messages,{id:4, message: body}]
         }
            default:
            return state; 
    }
}
export const sendMessageCreator = () => ({type: SEND_MESSAGE}
    )
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body}
      )

export default dialogReducer