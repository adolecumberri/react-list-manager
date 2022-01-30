

import React, { FC, useReducer, CSSProperties } from 'react';

interface IButton {
    text: string;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    style?: CSSProperties;
}

const Button: FC<IButton> = ({ text, onClick, disabled = false, style }) => {

    return <>
        <input
            style={style}
            type="button"
            value={text}
            onClick={onClick}
            disabled={disabled} />
    </>
}


export default Button;