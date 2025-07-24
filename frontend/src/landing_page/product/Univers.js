import React from 'react'
function Univers() {
    return (
        <div className='container'>
            <div className='row text-center mt-5'>
                <h2>The Zerodha Universe</h2>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
               <div className='row mt-5'>
                <div className ='col-4 p-3'>
                    <img src="media/images/smallcaseLogo.png" alt="smallcaseLogo"/>
                    <p className ='text-small text-muted'>Thematic investment platform</p>
                </div>
                <div className ='col-4 p-3'>
                    <img src="media/images/streakLogo.png" alt="streakLogo" style={{width:"40%"}}/>
                    <p className ='text-small text-muted'>Algo and strategy platform</p>
                </div>
                <div className ='col-4 p-3'>
                    <img src="media/images/sensibullLogo.svg" alt="sensibullLogo" style={{width:"50%"}}/>
                    <p className ='text-small text-muted'>Option Trading platform</p>
                </div>
                </div>
                 <div className='row'>
                 <div className ='col-4 p-3'>
                    <img src="media/images/zerodhaFundhouse.png" alt="zerodhaFundhouse"style={{width:"50%"}}/>
                    <p className ='text-small text-muted'>Assect Management</p>
                </div>
                <div className ='col-4 p-3'>
                    <img src="media/images/goldenpiLogo.png" alt="goldenpiLogo"/>
                    <p className ='text-small text-muted'>Bonds trading platform</p>
                </div>
                <div className ='col-4 p-3'>
                    <img src="media/images/dittoLogo.png" alt="dittoLogo" style={{width:"35%"}}/>
                    <p className ='text-small text-muted'>Insurance</p>
                </div>
                </div>
                 <button className = 'p-2 btn btn-primary fs-5 mb-5' style ={{width:"20%", margin : " 0 auto"}}>Sign up for free</button>
            </div>
           
        </div>
     );
}

export default Univers;