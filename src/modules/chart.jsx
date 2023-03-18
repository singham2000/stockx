import React from 'react'
import axios from 'axios'
const Chart = () => {
    const key = process.env.REACT_APP_API_KEY;
    var url = `https://smartapi.angelbroking.com/publisher-login`;
    const config = {
        headers: {
            'X-ClientLocalIP': '192.168.168.168',
            'X-ClientPublicIP': '106.193.147.98',
            'X-MACAddress': 'fe80::216e:6507:4b90:3719',
        }
    };

    axios.post(url, config).then((response) => {
        console.log(response);
    })
    return (
        <div>

        </div >
    )
}

export default Chart