import React, { useContext } from 'react';
import dataContext from '../Context/dataContext';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Chip from './Chip';
import Card from './card';
import Charter from './chart';
const Marketsummary = () => {

    // RELIANCE ,ITC, ADANIENT
    const { data, selection } = useContext(dataContext);
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
                <Chip label="Stocks" selection={true} />
                <Chip label="Crypto" />
                <Chip label="Forex" />
                <Chip label="Futures" />
                <Chip label="Bonds" />
            </div>
            <div className="flex-1">
                <Card logo='ITC' selection={selection === "ITC" ? true : false} name={data["ITC"]?.NSECode} price={data["ITC"]?.TodayOpen} status={data["ITC"]?.dayChangePerc} />
                <Card logo='REL' selection={selection === "RELIANCE" ? true : false} name={data["RELIANCE"]?.NSECode} price={data["RELIANCE"]?.TodayOpen} status={data["RELIANCE"]?.dayChangePerc} />
                <Card logo='AD' selection={selection === "ADANIENT" ? true : false} name={data["ADANIENT"]?.NSECode} price={data["ADANIENT"]?.TodayOpen} status={data["ADANIENT"]?.dayChangePerc} />
            </div>
            <Charter />
        </div>
    )
}

export default Marketsummary