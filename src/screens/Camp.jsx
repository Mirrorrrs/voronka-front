import React, {useState} from 'react';
import ContentContainer from "../components/content_container/ContentContainer";
import {useParams} from "react-router";
import {Button, FormControl, InputLabel, OutlinedInput} from "@mui/material";
import {Map, Placemark, YMaps} from "react-yandex-maps";

const Camp = () => {
    const {camp_id} = useParams()
    const [coords, setCoords] = useState([])

    const onMapClick = (event)=>{
        setCoords(event.get("coords"))
    }
    return (
        <ContentContainer title={camp_id =="new" ? "Создание лагеря":"Лагерь"}>
            <FormControl style={{width:"100%"}}>
                <InputLabel htmlFor="component-outlined">Название лагеря</InputLabel>
                <OutlinedInput
                    id="component-outlined"
                    label="Название лагеря"
                />
            </FormControl>

            <h2>Выберите местоположение</h2>
            <span>Выбраны координаты {coords[0]} : {coords[1]}</span>
            <YMaps>
                <div style={{position:"relative", height:"600px", overflow:"hidden"}}>
                    <Map onClick={onMapClick.bind(this)} style={{width:"100%", height:"600px"}} defaultState={{ center: [55.75, 37.57], zoom: 9}} ></Map>
                </div>
            </YMaps>

            <Button style={{width:"100%", marginTop:"30px", height:"50px"}}  variant="contained">{camp_id =="new" ? "Создать":"Сохранить"}</Button>

        </ContentContainer>
    );
};

export default Camp;