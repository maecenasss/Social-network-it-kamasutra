//creating new message area 
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
     }


const dialogReducer = (state = initialState, action) => {
    switch (action.type) {            
        case SEND_MESSAGE:
        let body = action.newMessageBody;
        return {...state,
            newMessageBody: '',
            messages: [...state.messages,{id:4, message: body}]
         }
            default:
            return state; 
    }
}
export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody}
    )

export default dialogReducer