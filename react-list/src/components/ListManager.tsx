/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, CSSProperties, useState, useEffect } from 'react';
import './listManager.css';
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
    };
    onChange: (newValue: string[]) => void;
}

const ListManager: FC<IListManager> = ({ data = [], style, onChange }) => {

    //Data not selected.
    const [availableData, setDataAvailable] = useState<string[]>([...data]);
    //Data already filtered.
    const [dataShown, setDataShown] = useState<string[]>([...data]);
    // 
    const [dataSelected, setDataSelected] = useState<string[]>([]);
    // Text to filter.
    const [filterText, setFilterText] = useState("");

    /**
     * Finds the selected value, remove it from the data available and put it in the data selected.
     */
    const selectValue = (value: string) => {
        let indexFound = availableData.indexOf(value);

        if (indexFound > -1) {
            let elementRemoved = availableData.splice(indexFound, 1)[0];
            setDataAvailable([...availableData]);
            setDataSelected([...dataSelected, elementRemoved]);
        }

    }

    /**
    * Finds the selected value, remove it from the data selected and put it in the data available
    */
    const removeValue = (value: string) => {
        let indexFound = dataSelected.indexOf(value);

        if (indexFound > -1) {
            let elementRemoved = dataSelected.splice(indexFound, 1)[0];
            setDataAvailable([...availableData, elementRemoved]);
            setDataSelected([...dataSelected]);
        }
    }

    useEffect(() => {
        setDataShown(availableData.filter(element =>
            element.toLocaleLowerCase().includes(filterText.toLocaleLowerCase())
        ));
    }, [availableData.length]);


    useEffect( ( ) => {
        onChange(dataSelected);
    }, [dataSelected.length]);

    return <div className="LM-container">
        <div className="LM-header" style={style?.header}>

            <input
                type="text"
                placeholder='Type to search'
                value={filterText}
                onChange={({ target: { value } }) => {

                    setDataShown(value ? availableData.filter(element =>
                        element.toLocaleLowerCase().includes(value.toLocaleLowerCase())
                    ) : availableData);

                    setFilterText(value);
                }} />

            <Button
                className={"LM-clear-all"}
                text={"clear All"}
                style={style?.clearBtn}
                disabled={!dataSelected.length}
                onClick= {  () => { 
                    setDataAvailable([...data]);
                    setDataShown([...data]);
                    setDataSelected([]);
                }}
            />
        </div>
        <List className="LM-list-available"  >

            {
                dataShown.map((value, i) =>
                    <Button
                        key={"available" + i}
                        text={value}
                        className="my-list-btn"
                        onClick={(e) => { selectValue(e.target.value) }}
                    />
                )
            }

        </List>

        <List className="LM-list-selected" >
            {
                dataSelected.map((value, i) =>
                    <Button
                        key={"selected" + i}
                        text={value}
                        className="my-list-btn"
                        onClick={(e) => { removeValue(e.target.value) }}
                    />
                )
            }
        </List>


    </div>
}


export default ListManager;