import React, { FC, CSSProperties } from 'react';

interface IList {
    className: string;
    style?: CSSProperties;
}

const List: FC<IList> = ({ className = "", children, style }) => {

    return <div style={style} className={`list ${className}`}>
     {children}
    </div>
}


export default List;