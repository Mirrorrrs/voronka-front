import React from 'react';
import ContentContainer from "../components/content_container/ContentContainer";
import {FormControl, InputLabel, OutlinedInput} from "@mui/material";
import {useParams} from "react-router";

const Group = () => {
    const {group_id} = useParams()
    return (
       <ContentContainer title={group_id =="new" ? "Создание отряда":"Отряд"}>

           <FormControl style={{width:"100%"}}>
               <InputLabel htmlFor="component-outlined">Название отряда</InputLabel>
               <OutlinedInput
                   id="component-outlined"
                   label="Название"
               />
           </FormControl>
       </ContentContainer>
    );
};

export default Group;