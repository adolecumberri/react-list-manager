import React, { FC, useReducer, CSSProperties } from 'react';

interface IText {
}

const TextInput: FC<IText> = () => {

    return <>
            <input type="text" value="textesito" />
    </>
}


export default TextInput;