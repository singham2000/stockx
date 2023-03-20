import React from 'react'

const Card = (props) => {
    let colored = {
        color: "red"
    }
    let colorgreen = {
        color:'green'
    }
    return (
        <div className='card'>
            <div className="avatar">
                {props.logo}
            </div>
            <div className='stock-info'>
                <h1>{props.name}</h1>
                <div>
                    <p>
                        {props.price} INR
                    </p>
                    <p style={props.status<0?colored:colorgreen}>
                    {props.status>0?'+':true} {props.status}%
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card