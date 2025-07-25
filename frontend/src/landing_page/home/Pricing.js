import React from 'react'
function Pricing() {
    return ( 
    <div className='container p-5'>
        <div className='row mt-5'>
            <div className='col-4'>
                <h1 className ='mb-4'>Unbeatable pricing</h1>
                <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                <a href=''style ={{textDecoration:'none'}}>See Pricing <i class="fa-solid fa-arrow-right"></i></a>
            </div>
            <div className='col-2'>

            </div>
            <div className='col-6 mt-5'>
                <div className ='row text-center'>
                    <div className ='col p-2 border'>
                        <h1 className ='fs-2'>₹0</h1>
                        <p >Free equity delivery and direct mutual funds</p>
                    </div>
                     <div className ='col p-2 border'>
                        <h1 className ='fs-2'>₹20</h1>
                        <p>Intraday and F&O</p>
                    </div>
                </div>
            </div>
        </div>
    </div> );
}

export default Pricing;