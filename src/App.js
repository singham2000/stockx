import Marketsummary from './marketsummary';
import './styles/style.scss';
function App() {
  return (
    <div className="App">
      <nav>
        <h1 id='logo'>
          StockX
        </h1>
        <div>
          <ul>
            <li className="link">About</li>
            <li className="link">Stocks</li>
            <li className="link">Listings</li>
            <li className="link chat">Chat</li>
          </ul>
        </div>
      </nav>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00cba9" fill-opacity="1" d="M0,288L30,250.7C60,213,120,139,180,138.7C240,139,300,213,360,208C420,203,480,117,540,106.7C600,96,660,160,720,181.3C780,203,840,181,900,186.7C960,192,1020,224,1080,245.3C1140,267,1200,277,1260,266.7C1320,256,1380,224,1410,208L1440,192L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
      </svg>
      <div className='head'>
        <h1 id='quote'>
          “Do more of what works and less of what doesn’t.”
        </h1>
      </div>
      <div className='frame'>
      <video class="video-fPkHA2Uc" src="https://static.tradingview.com/static/bundles/chart-big.5ddfd85030f4ba213936.mp4" muted="" autoplay="" playsinline="" loop=""></video>
      </div>
      <Marketsummary/>
    </div>

  );
}

export default App;
