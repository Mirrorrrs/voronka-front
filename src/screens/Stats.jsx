import React from 'react';
import ContentContainer from "../components/content_container/ContentContainer";
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import {orange} from "@mui/material/colors";

const Stats = () => {
    return (
        <ContentContainer title={"Статистика"}>
            <div style={{width:"100%",display:"flex", flexDirection:"column",alignItems:"center"}}>
                <h2>Средняя удовлетворенность детей по пунктам(еда, активность, что-то еще)</h2>
                <LocalFireDepartmentIcon fontSize={"large"}></LocalFireDepartmentIcon>
                <h5 style={{
                    fontSize:"110px",
                    margin:0,
                    color:orange[700]
                }}>72%</h5>
            </div>
        </ContentContainer>
    );
};

export default Stats;