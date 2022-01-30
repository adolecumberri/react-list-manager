

import React, { FC, CSSProperties } from 'react';

interface IButton {
    className?: string;
    disabled?: boolean;
    onClick?: (e: any) => void;
    style?: CSSProperties;
    text: string;
}

const Button: FC<IButton> = ({ className, disabled = false, onClick, style, text }) => {

    return <>
        <input
            className={className}
            style={style}
            type="button"
            value={text}
            onClick={onClick}
            disabled={disabled} />
    </>
}


export default Button;