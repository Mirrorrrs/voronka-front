import {$authHost} from "../../http";
import {SET_GROUP, SET_GROUPS} from "../types";

export const getGroups = (params)=>async dispatch=>{
    try {
        const data = (await $authHost.get("group/getGroups",{
            params:params
        })).data
        if (data.groups.length!=0){
            dispatch({
                type:SET_GROUPS,
                payload:data.groups
            })
        }

    }catch (e) {
        throw e
    }
}

export const getGroup = (params)=>async dispatch=>{
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

export const createGroup = (params)=>async dispatch=>{
    try {
        const data = await $authHost.post("group/CreateGroup", params)
    }catch (e) {
        throw e
    }
}