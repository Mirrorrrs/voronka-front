import {SET_GROUP, SET_GROUPS} from "../types";


const initialState = {
    group:{},
    groups:[]
}

const groupReducer = (state=initialState, action)=>{
    switch (action.type){
        case SET_GROUP:
            return {
                ...state,
                group: action.payload
            }
        case SET_GROUPS:
            return {
                ...state,
                groups: action.payload
            }
        default:
            return initialState
    }
}

export default groupReducer