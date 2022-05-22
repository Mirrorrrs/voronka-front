import axios from "axios";

const $authHost = axios.create({
    baseURL:"http://192.168.147.99:4000"
})

const $host = axios.create({
    baseURL:"http://192.168.147.99:4000"
})

$authHost.interceptors.request.use( (config)=>{
    const token = localStorage.getItem("accessToken")
    config.headers.authorization = "Bearer " + token
    return config
});

$authHost.interceptors.response.use(response => {
    return response;
}, async error => {
    throw error;
});

export {$authHost,$host}