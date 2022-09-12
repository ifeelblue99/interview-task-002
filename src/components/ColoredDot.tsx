import React from 'react'

export interface I_ColoredDot {
    color: string
}

const ColoredDot: React.FC<I_ColoredDot> = ({ color }) => {
    return (
        <div style={
            {
                marginRight: "4px",
                display: "inline-block",
                borderRadius: "50%",
                width: "13px",
                height: "13px",
                backgroundColor: color
            }
        } >
        </div>
    )
}

export default ColoredDot