import {SET_TOKEN, SET_USER, SET_USER_DATA, SET_USERS, TOKEN_REMOVE} from "../types";


const initialState = {
    user: {},
    users:[],
    accessToken:"",
    currentUser: {}
}

const userReducer = (state=initialState, action)=>{
    switch (action.type){
        case SET_USER:
            return {
                ...state,
                user: action.payload
            }
        case SET_USERS:
            return {
                ...state,
                users: action.payload
            }
        case SET_TOKEN:
            return {
                ...state,
                accessToken: action.payload
            }
        case TOKEN_REMOVE:
            return {
                ...state,
                accessToken: ""
            }
        case SET_USER_DATA:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return initialState
    }
}

export default userReducer