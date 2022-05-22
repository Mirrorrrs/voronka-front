import {SET_CAMP, SET_CAMPS} from "../types";

const initialState = {
    camp:{},
    camps:[]
}

const campReducer = (state=initialState, action)=>{
    switch (action.type){
        case SET_CAMP:
            return {
                ...state,
                camp: action.payload
            }
        case SET_CAMPS:
            return {
                ...state,
                camps: action.payload
            }
        default:
            return initialState
    }
}

export default campReducer