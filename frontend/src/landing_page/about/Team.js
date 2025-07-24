import React from 'react'

function Team() {
    return (
        <div className='container'>
            <div className='row text-center border-top mt-5'>
                <h1 className='mt-5'>People</h1>
            </div>
            <div className ='row mt-5'>
                <div className= 'col p-5 text-center'>
                    <img src=" media/images/nithinKamath.jpg" alt="nithinKamath "  style={{borderRadius:"100%" ,width:"50%"}}/>
                    <h4 className='text-muted mt-5'>Nithin Kamath</h4>
                    <p className='text-muted '>Founder, CEO</p>
                </div>
                <div className= 'col mt-5'style={{lineHeight:"2"}}>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <a href=" " style={{textDecoration:"none"}}> Homepage </a>  /<a href=" " style={{textDecoration:"none"}}> TradingQnA </a>/ <a href=" "style={{textDecoration:"none"}}>Twitter</a></p>
                </div>
            </div>
        </div>
      );
}

export default Team;