import React from 'react'

const Chip = (props) => {
    return (
        <p className={props.selection ? 'chip selected' : 'chip'}>
            {props.label}
        </p>
    )
}

export default Chip