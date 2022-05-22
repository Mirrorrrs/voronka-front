import React, {useState} from 'react';
import Box from "@mui/material/Box";
import {Button, TextField} from "@mui/material";
import LogoText from "../assets/LogoText.png"
import {useDispatch} from "react-redux";
import {authUser} from "../store/actions/userActions";
import {useNavigate} from "react-router";

const Signin = () => {
    const [login, setLogin] = useState("")
    const navigate = useNavigate()
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const authorize =async ()=>{
        try{
            await dispatch(authUser({
                login,
                password
            }))
            navigate("/")
        }catch (e) {
            alert(e)
        }
    }
    return (
        <Box
            sx={{
                width: "100%",
                height: "100vh",
                backgroundColor: 'primary.light',
                display:"flex",
                justifyContent:"center",
                alignItems:"center"
            }}
        >
            <div style={{
                maxWidth:"350px",
                width:"100%",
                padding:"35px",
                borderRadius:"12px",
                backgroundColor:"white"
            }}>
                <div style={{
                    display:"flex",
                    justifyContent:"center"
                }}>
                    <img src={LogoText} alt=""/>
                </div>
                <TextField style={{width:"100%", marginTop:"20px"}} id="standard-basic" value={login} onChange={ev=>setLogin(ev.target.value)} label="Логин" variant="standard" />
                <TextField style={{width:"100%", marginTop:"20px"}}  id="standard-basic" value={password} onChange={ev=>setPassword(ev.target.value)} label="Пароль" variant="standard" />
                <Button style={{width:"100%", marginTop:"30px"}} onClick={authorize} variant="contained">Войти</Button>

            </div>
        </Box>
    );
};

export default Signin;