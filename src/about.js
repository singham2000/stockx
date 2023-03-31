import React from 'react';
import Rimg from "./img/reactjs.jpg"
import JSimg from "./img/js.png";
import APIimg from "./img/api.jpg";
import SVGimg from "./img/svg.jpg";
import AXIOSimg from "./img/axios.png";
import YAHOOimg from "./img/yahoo.jpg";
const About = () => {
    return (
        <div>
            <div className="App">
                <div className='bg-black'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00cba9" fillOpacity="1" d="M0,288L30,250.7C60,213,120,139,180,138.7C240,139,300,213,360,208C420,203,480,117,540,106.7C600,96,660,160,720,181.3C780,203,840,181,900,186.7C960,192,1020,224,1080,245.3C1140,267,1200,277,1260,266.7C1320,256,1380,224,1410,208L1440,192L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
                    </svg>
                    <div className='head'>
                        <h1 id='quote'>Where World</h1>
                        <h1 className='gradient_text'>
                            Does Market
                        </h1>
                    </div>
                </div>
                <center>
                    <div className='bg-black description'>
                        Look first / Then leap. It's what you'd call our philosophy, that it doesn't matter who you are or what you trade, preparing first then committing is the best way of maximizing life's returns. We see this spirit in our users every day.
                    </div>
                </center>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fillOpacity="1" d="M0,64L40,90.7C80,117,160,171,240,170.7C320,171,400,117,480,112C560,107,640,149,720,160C800,171,880,149,960,170.7C1040,192,1120,256,1200,277.3C1280,299,1360,277,1400,266.7L1440,256L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
            </div>
            <div className='text_black'>
                Tech Used
                <div className='grid'>
                    <img src={Rimg} alt="" className='timg' />
                    <img src={JSimg} alt="" className='timg' />
                    <img src={APIimg} alt="" className='timg' />
                    <img src={SVGimg} alt="" className='timg' />
                    <img src={AXIOSimg} alt="" className='timg' />
                    <img src={YAHOOimg} alt="" className='timg' />
                </div>
            </div>
        </div>
    )
}

export default About