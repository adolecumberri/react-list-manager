

import React, { FC, useReducer } from 'react';

interface IListManager {
    data: [{
        [x: string]: any[];
    }, React.Dispatch<React.SetStateAction<{
        [x: string]: any[];
    }>>]
}

const ListManager: FC<IListManager> = ({ data }) => {




    return <>
<div className="header"></div>
<div className="list-available"></div>
<div className="list-selected"></div>
    </>
}


export default ListManager;