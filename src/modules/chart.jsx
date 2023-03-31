import React, { useContext, useState, useEffect } from 'react';
import dataContext from '../Context/dataContext';
import axios from 'axios'
// const proxy = 'https://cors-anywhere.herokuapp.com/';
import Chart from 'react-apexcharts';






const round = (number) => {
  return number ? +(number.toFixed(2)) : null;
}

const Charter = () => {
  const { selection } = useContext(dataContext);
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${selection}.NS`;
  const [loading, setLoading] = useState(true)
  const [series, setSeries] = useState([{
    data: []
  }]);
  const opt = {

    options: {
      plotOptions: {
        candlestick: {
          colors: {
            upward: '#3C90EB',
            downward: '#DF7D46'
          }
        }
      },
      chart: {
        type: 'area',
        height: 100
      },
      title: {
        text: selection,
        align: 'center'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime'
      },
      yaxis: {
        tooltip: {
          enabled: false
        }
      }
    },
  };
  useEffect(() => {
    let timeout;
    async function getData() {
      await axios.get(url).then((res) => {
        let data = res.data.chart.result[0];
        const quote = data.indicators.quote[0];
        console.log("quote", quote)
        const prices = data.timestamp.map((timestamp, index) => ({
          x: new Date(timestamp * 1000),
          y: [quote.open[index], quote.high[index], quote.low[index], quote.close[index]].map(round)
        }));
        setSeries(
          [{
            name: "adani",
            data: prices
          }]
        )
        setLoading(false)
        console.log("data", prices);
      })
      timeout = setTimeout(getData, 1000);
    }
    timeout = setTimeout(getData, 1000);
    return () => {
      clearTimeout(timeout);
    }
    // eslint-disable-next-line
  }, [])
  // eslint-disable-next-line
  return (
    <div
      className='box-container'
    >
      {/* <div>
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
      </div> */}
      <div className="chart">
        {
          loading ? <div>
            Loading...
          </div> : <Chart options={opt.options} series={series} type="candlestick" width="100%" height={500} />
        }

      </div>
    </div>
  )
}

export default Charter