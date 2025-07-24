import React from 'react'

function LeftImage({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
    return ( 
        <div className='cantainer'>
    <div className='row ' style={{ marginTop: "30px", marginBottom:"30px" }}>
            <div className='col-7 '> 
              <img src={imageURL} style ={{width:"80%" }} className=' 'alt="imageURL "/>
            </div>
             <div className='col-5 p-5 mt-5'>
              <h1>{productName}</h1>
              <p className='mt-3'>{productDescription}</p>
              <div>
                <a href={tryDemo} style={{textDecoration:"none"}} >Try Demo<i class="fa-solid fa-arrow-right"></i></a> 
              <a href={learnMore} style={{marginLeft:"80px" ,textDecoration:"none"}}>Learn More<i class="fa-solid fa-arrow-right"></i></a> 
              </div>
              <div className=' mt-3'>
                <a href={googlePlay} ><img src ="media/images/googlePlayBadge.svg "alt ="googlePlay "/></a> 
               <a href={appStore} style={{marginLeft:"20px"}}><img src ="media/images/appstoreBadge.svg"alt ="appStore "/></a> </div>
              
             </div>
          </div>
         
          </div> );
}

export default LeftImage;