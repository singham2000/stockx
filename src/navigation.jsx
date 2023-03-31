import React from 'react'

const Navigation = () => {
    return (
        <div className="App">
            <div className="bg-black">
                <nav>
                    <a href="/">
                        <h1 id='logo'>
                            StockX
                        </h1>
                    </a>

                    <div>
                        <ul>
                            <a href="/about">

                                <li className="link" >About</li>
                            </a>
                            <li className="link">Stocks</li>
                            <li className="link">Listings</li>
                            <li className="link chat">Chat</li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navigation