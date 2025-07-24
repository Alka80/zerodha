import React from 'react'

function Hero() {
    return ( 
        <div className='container'>
            <div className='row text-center '>
                <h1 className='mt-5'>Charges</h1>
                <h3 className='text-muted '>List of all charges and taxes</h3>
            </div>
             <div className='row ' style={{marginTop:"200px"}}>
                <div className='col'>
                    <img src="media/images/pricingEquity.svg" alt="pricingEquity" style={{width:"80%" }}/>
                </div>
                <div className='col'>
                    <img src="media/images/intradayTrades.svg" alt="intradayTrades" style={{width:"80%" }}/>
                </div>
                <div className='col'>
                    <img src="media/images/pricingEquity.svg" alt="pricingEquity"style={{width:"80%" }}/>
                </div>
            </div>
             <div className='row'>
                <div className='col text-center'>
                    <h3>Free equity delivery</h3>
                    <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col text-center'>
                   <h3>Intraday and F&O trades</h3>
                   <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col text-center'>
                   <h3>Free direct MF</h3>
                   <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;