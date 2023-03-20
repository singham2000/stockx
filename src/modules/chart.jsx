import React from 'react'


const Chart = () => {
  //   {
  //     "NSECode": "ITC",
  //     "TodayOpen": 373.3,
  //     "TodayHigh": 379.35,
  //     "TodayLow": 372,
  //     "TodayClose": 375.55,
  //     "ltp": 378.8,
  //     "dayChange": "3.25",
  //     "dayChangePerc": "0.87",
  //     "volume": 10122167,
  //     "totalBuyQty": 0,
  //     "totalSellQty": 41
  // }
  return (
    <div
      className='box-container'
    >
      <div>
        <ul>
          <li>NSECode ITC</li>
          <li>Today Open 373.3</li>
          <li>Today High 379.35</li>
          <li>Today Low 372</li>
          <li>Today Close 375.55</li>
          <li>Last traded price 378.8</li>
          <li>dayChange 3.25</li>
          <li>dayChange Percentage 0.87</li>
          <li>volume 10122167</li>
          <li>total Buy Quantity 0</li>
          <li>total Sell Quantity 41</li>
        </ul>
      </div>
    </div>
  )
}

export default Chart