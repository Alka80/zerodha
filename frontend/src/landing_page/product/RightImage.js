import React from 'react'

function RightImage({imageURL,productName,productDescription,learnMore}) {
    return ( 
        <div className ='container'>
         <div className='row '>
            <div className='col mt-5'>
                <h1 className='mt-5'>{productName}</h1>
                <p>{productDescription}</p>
               <a href="{learnMore}" >Learn More <i class="fa-solid fa-arrow-right"></i></a>
            </div>
             <div className='col '>
               <img src={imageURL} alt="imageURL"/>
             </div>
          </div>
          </div>);
}

export default RightImage;