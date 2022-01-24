import React, {useState} from 'react';
import './ListHolder.css'

import {todayDate, month, year} from '../DateHandler'
import {Button} from "@chakra-ui/react";
import AddItems from "../AddItems";

const ListHolder = () => {
    const [todo, setToDo] = useState(false)
    const [itemValue, setItemValue] = useState([])
    const addItemsHandler = () => {
        console.log("clicked")
        setToDo(true)
    }
    console.log(itemValue)
    const getValueFromInputBar = (e) => {
        let newArry = [...itemValue, e]
        setItemValue(newArry)
    }

    return (
        <div className="container">
            <div className="dateContainer">
                <div className={"item1"}>{todayDate} </div>
                <div className={"item2"}>{month}</div>
                <div className={"item3"}>{year}</div>
            </div>
            <Button variant={"ghost"} size={'sm'} onClick={addItemsHandler}>+</Button>
            {todo ? <AddItems getValueFromInputBar={getValueFromInputBar} todo={setToDo}/> : <span></span>}
            <ol>
                {
                    itemValue.map( (i, index) => {
                        return <li key={index}>{i}</li>
                    } )
                }
            </ol>

        </div>
    );
};

export default ListHolder;