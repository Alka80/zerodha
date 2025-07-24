import React from 'react'
function Awards() {
    return (
        <div className='container p-5 mb-5'>
            <div className= 'row'>
                <div className ='col-6'>
                    <img src ="media/images/largestBroker.svg" alt ="largerBroker" className= 'mb-5'/>
                </div>
                <div className ='col-6 p-2 mt-4' >
                    <h1>Largest stock broker in India</h1>
    <p className ='mb-5'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <ul>
                        <div className='row '>                       
                            <div className ='col-6'>
                                <li>
                                    <p>Futures and Options</p>
                                </li>
                                <li>
                                    <p>Commodity derivatives</p>
                                </li>
                                <li>
                                    <p>Currency derivatives</p>
                                </li>
                            </div>
                            <div className ='col-6'>
                                <li>
                                    <p>Stocks & IPOs</p>
                                </li>
                                <li>
                                    <p>Direct mutual funds</p>
                                </li>
                                <li>
                                    <p>Bonds and Govt. Securities</p>
                                </li>
                        </div>
                        </div> 
                    </ul>
                    <img src ='media/images/pressLogos.png' alt =" " style ={{width:"90%"}}/>
                </div>
            </div>
        </div>
     );
}

export default Awards;