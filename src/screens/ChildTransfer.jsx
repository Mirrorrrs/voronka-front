import React, {useState} from 'react';
import ContentContainer from "../components/content_container/ContentContainer";
import {useDispatch, useSelector} from "react-redux";
import {Button, FormControl, InputLabel, MenuItem, OutlinedInput, Select} from "@mui/material";
import {updateChildBalance} from "../store/actions/userActions";

const ChildTransfer = () => {
    const children = useSelector(state=>state.user.currentUser?.children)
    const [child, setChild] = useState('')
    const [balance, setBalance] = useState('')
    const dispatch = useDispatch()
    const sendTransaction = async ()=>{
        await dispatch(updateChildBalance({
            child_id:child,
            balance:balance
        }))

        alert("Транзакция выполнена")
    }
    return (
        <ContentContainer title={"Перевод ребенку"}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Выберите ребенка</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={child}
                    label="Выберите ребенка"
                    onChange={(ev)=>setChild(ev.target.value)}
                >
                    {children && children.map(el=>{
                        return  <MenuItem value={el.id}>{`${el.surname || ""} ${el.name || ""} ${el.second_name || ""}`.trim()}</MenuItem>
                    })}
                </Select>
            </FormControl>
            <FormControl style={{width:"100%", marginTop:"20px"}}>
                <InputLabel  htmlFor="component-outlined">Сумма перевода</InputLabel>
                <OutlinedInput
                    id="component-outlined"
                    label="Сумма перевода"
                    value={balance}
                    onChange={ev=>setBalance(ev.target.value)}
                />
            </FormControl>
            <Button style={{ marginTop:"20px"}} onClick={sendTransaction}  variant="contained">Начислить</Button>
        </ContentContainer>
    );
};

export default ChildTransfer;