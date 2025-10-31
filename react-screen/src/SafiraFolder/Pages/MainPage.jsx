import React from 'react'
import Header from '../Components/Header'
import MiddleContainer from '../Components/MiddleContainer'
import MIddleContainer2 from '../Components/MIddleContainer2'
import ProductListContainer from '../Components/ProductListContainer'
import Bannerbg from '../Components/Bannerbg'
import ProductListContainer2 from '../Components/ProductListContainer2'

import Brands from '../Components/Brands'
import UpperFooter from '../Components/UpperFooter'
import Footer from '../Components/Footer'
import Blogpost from '../Components/Blogpost'
import ProductListContainer3 from '../Components/ProductListContainer3'

const MainPage = () => {
    return (
        <div>
            <Header />
            <MiddleContainer />
            <MIddleContainer2 />
            <ProductListContainer />
            <Bannerbg />
            <ProductListContainer2 />
            <Blogpost />
            <ProductListContainer3 />
            <Brands />
            <UpperFooter />
            <Footer />
        </div >
    )
}

export default MainPage