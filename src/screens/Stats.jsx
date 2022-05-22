import React, {useEffect, useState} from 'react';
import ContentContainer from "../components/content_container/ContentContainer";
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import {orange} from "@mui/material/colors";
import {$authHost} from "../http";

const Stats = () => {
    const [per, setPer] = useState(0)
    const fetch = async ()=>{
       const data = await $authHost.get("review/get_persentage")
        setPer(Math.floor(data.data))
    }

    useEffect(()=>{
        fetch()
    },[])
    return (
        <ContentContainer title={"Статистика"}>
            <div style={{width:"100%",display:"flex", flexDirection:"column",alignItems:"center"}}>
                <h2>Средняя удовлетворенность детей по пунктам(еда, активность, что-то еще)</h2>
                <LocalFireDepartmentIcon fontSize={"large"}></LocalFireDepartmentIcon>
                <h5 style={{
                    fontSize:"110px",
                    margin:0,
                    color:orange[700]
                }}>{per}%</h5>
            </div>
        </ContentContainer>
    );
};

export default Stats;