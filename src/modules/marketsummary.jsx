import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Chip from './Chip';
import Card from './card';
// import {apicalls} from '../apicalls'
// console.log(apicalls());
const Marketsummary = () => {
    return (
        <div className='container'>
            <div className='button-1'>
                <h1>
                    Market Summary
                </h1>
                <ArrowForwardIcon style={{ fontSize: "2.5rem" }} />
            </div>
            <div className='flex-1'>
                <Chip label="Indices" />
                <Chip label="Stocks" />
                <Chip label="Crypto" />
                <Chip label="Forex" />
                <Chip label="Futures" />
                <Chip label="Bonds" />
            </div>
            <div className="flex-1">
                <Card logo='50' name="Nifty" price="17043.30" status='-0.65'/>
                <Card logo='BSE' name="Sensex" price="77843.30" status='5.65'/>
            </div>
        </div>
    )
}

export default Marketsummary