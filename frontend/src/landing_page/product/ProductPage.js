import React from 'react'
import Hero from './Hero'
import LeftImage from './LeftImage'
import RightImage from './RightImage'
import Univers from './Univers'

function ProductPage() {
    return ( <>
    <Hero/>
    <LeftImage
    imageURL="media/images/kite.png "
    productName="Kite "
    productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices. "
    tryDemo=" "
    learnMore=" "
    googlePlay=" "
    appStore=""
    />
     <RightImage
     imageURL = " media/images/console.png"
     productName = "Console "
     productDescription = "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations. "
     learnMore =" "
     />
     <LeftImage
    imageURL="media/images/coin.png "
    productName="Coin"
    productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices. "
    tryDemo=" "
    learnMore=" "
    googlePlay=" "
    appStore=""
    />
     <RightImage
     imageURL = "media/images/kiteconnect.png"
     productName = "Kite Connect API"
     productDescription = "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
     learnMore =" "
     />
     <LeftImage
    imageURL="media/images/varsity.png "
    productName="Varsity mobile"
    productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go. "
    tryDemo=" "
    learnMore=" "
    googlePlay=" "
    appStore=""
    />
    
   <h4 className='mt-5 text-center text-muted'>Want to know more about our technology stack? Check out the<a href=" "style={{textDecoration:"none"}} >Zerodha.tech </a>"blog.</h4>
    <Univers/>
    </> );
}

export default ProductPage;