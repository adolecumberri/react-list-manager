

import React, { FC, useReducer, CSSProperties, useState } from 'react';
import './listManager.css';
import TextInput from './common/TextInput';
import Button from './common/Button';
import List from './common/List';


interface IListManager {
    data?: string[];
    style?: {
        header?: CSSProperties,
        lists?: CSSProperties,
        listBtns?: CSSProperties,
        clearBtn?: CSSProperties,
        searchInput?: CSSProperties,
    }
}

const ListManager: FC<IListManager> = ({ data=[], style }) => {

    const [] = useState([]);
    const [] = useState([]);
    const [] = useState([]);




    return <div className="LM-container">
        <div className="LM-header" style={style?.header}>

            <TextInput /> <Button text={"clear All"} style={style?.clearBtn}/>

        </div>
        <List className="list-available" values={["hola", "adios", "saludos"]} onClick={()=>{}} />

        <List className="list-selected" values={[]} onClick={()=>{}} />


    </div>
}


export default ListManager;