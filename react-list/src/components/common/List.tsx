import React, { FC, useReducer, CSSProperties } from 'react';
import Button from './Button';

interface IList {
    className: string;
    style?: CSSProperties;
    values: string[];
    onClick: () => void;
}

const List: FC<IList> = ({ className = "", values}) => {

    return <div className={`list ${className}`}>
        {
            values.map( (value, i )  => 
                <Button text={value} className="my-list-btn"/>
            )
        }
    </div>
}


export default List;