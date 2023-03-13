import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Chip from './modules/Chip';
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

        </div>
    )
}

export default Marketsummary