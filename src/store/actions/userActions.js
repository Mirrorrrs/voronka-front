import {$authHost, $host} from "../../http";
import {SET_TOKEN, SET_USER_DATA, SET_USERS, TOKEN_REMOVE} from "../types";

export const authUser = (params)=>async dispatch=>{
    try {
        const data = (await $host.post("auth/signin",params)).data
        localStorage.setItem("accessToken",data.accessToken)
        localStorage.setItem("userData",JSON.stringify(data.user))
        dispatch({
            type:SET_TOKEN,
            payload:data.accessToken
        })
        dispatch({
            type:SET_USER_DATA,
            payload:data.user
        })
    }catch (e) {
        throw e
    }
}

export const getAllUsers = ()=>async dispatch=>{
    try {
        const data = (await $authHost.get("user/all_users")).data
        dispatch({
            type:SET_USERS,
            payload:data.users
        })
    }catch (e) {
        throw e
    }
}

export const updateChildBalance = (params)=>async dispatch=>{
    try {
        const data = await $authHost.post("user/update_balance",params)
    }catch (e) {
        throw e
    }
}

export const userLogout = ()=> dispatch=>{
    try {
        localStorage.removeItem("accessToken")
        localStorage.removeItem("userData")
        dispatch({
            type:TOKEN_REMOVE,
        })
    }catch (e) {
        throw e
    }
}

export const getAuthToken = ()=> dispatch=>{
    try {
        const data = localStorage.getItem("accessToken")
        const userData = JSON.parse(localStorage.getItem("userData"))

        if (data && userData){
            dispatch({
                type:SET_TOKEN,
                payload:data
            })

            dispatch({
                type:SET_USER_DATA,
                payload:userData
            })

            return data
        }else {
            return null
        }

    }catch (e) {
        throw e
    }
}