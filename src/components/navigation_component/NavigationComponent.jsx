import React, {useEffect, useRef} from 'react';
import {Route, Routes} from "react-router-dom";
import {routes} from "../../routes"

import {useDispatch} from "react-redux";
import {getAuthToken} from "../../store/actions/userActions";
import {useNavigate} from "react-router";

const NavigationComponent = () => {
    const firstLoaded = useRef(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect( ()=>{
        if (!firstLoaded.current){
            const token =  dispatch(getAuthToken())
            // if (token){
            //     navigate("/")
            // }else{
            //     navigate("/signin")
            // }
        }
    },[firstLoaded])
    return (
            <Routes>
                {routes.map((el,num)=>{
                    return <Route exact key={num} path={el.path} element={el.component}/>
                })}

            </Routes>
    );
};

export default NavigationComponent;