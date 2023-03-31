import React, { useContext, useEffect } from 'react';
import dataContext from '../Context/dataContext';



const selector = () => {
  
}
const Card = (props) => {
    const { setSelection } = useContext(dataContext);
    let colored = {
        color: "red"
    }
    let colorgreen = {
        color: 'green'
    }
    useEffect(() => {
        selector();
    }, [])

    return (
        <div className={props.selection ? "card sel" : "card"} onClick={() => { setSelection(props.name) }}>
            <div className="avatar">
                {props.logo}
            </div>
            <div className='stock-info'>
                <h1>{props.name}</h1>
                <div>
                    <p>
                        {props.price} INR
                    </p>
                    <p style={props.status < 0 ? colored : colorgreen}>
                        {props.status > 0 ? '+' : true} {props.status}%
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card