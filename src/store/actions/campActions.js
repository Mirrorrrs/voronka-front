import {$authHost} from "../../http";
import {SET_CAMPS, SET_GROUP, SET_GROUPS} from "../types";

export const getCamps = ()=>async dispatch=>{
    try {
        const data = (await $authHost.get("camp/all_camps")).data
        if (data.camps.length!=0){
            dispatch({
                type:SET_CAMPS,
                payload:data.camps
            })
        }

    }catch (e) {
        throw e
    }
}

export const getCamp = (params)=>async dispatch=>{
    try {
        const data = (await $authHost.get("group/getGroup",{
            params:params
        })).data

        if (data.group){
            dispatch({
                type:SET_GROUP,
                payload:data.group
            })
        }

    }catch (e) {
        throw e
    }
}
