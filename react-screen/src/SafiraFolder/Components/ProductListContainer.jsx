
import React from 'react'

const ProductListContainer = () => {
    return (
        <div>

            <div className='container3'>
                <p><i>Recently added our store</i></p>
                <h1>Trending Products</h1>

                <div className="productBtn">
                    <ul>
                        <li><button className='activeBtn'>VEGETABLES</button></li>
                        <li><button className='btnList'>FRUITS</button></li>
                        <li><button className='btnList'>SALADS</button></li>
                    </ul>
                </div>

                <div className="productsList1">
                    <li>
                        <div className="img-wrapper">
                            <img src="/assets/product1.jpg" alt="Product 1" className="main-img" />
                            <img src="/assets/product21.jpg" alt="Hover 1" className="hover-img" />
                        </div>
                        <p>Aliquam Consequent</p>
                        <p>Fruits</p>
                        <pre>$26.00  <strike>$362.00</strike></pre>
                    </li>

                    <li>
                        <div className="img-wrapper">
                            <img src="/assets/product2(1).jpg" alt="Product 2" className="main-img" />
                            <img src="/assets/product20.jpg" alt="Hover 2" className="hover-img" />
                        </div>
                        <p>Aliquam Consequent</p>
                        <p>Fruits</p>
                        <pre>$46.00  <strike>$382.00</strike></pre>
                    </li>

                    <li>
                        <div className="img-wrapper">
                            <img src="/assets/product3.jpg" alt="Product 3" className="main-img" />
                            <img src="/assets/product19.jpg" alt="Hover 3" className="hover-img" />
                        </div>
                        <p>Aliquam Consequent</p>
                        <p>Fruits</p>
                        <pre>$24.00  <strike>$260.00</strike></pre>
                    </li>

                    <li>
                        <div className="img-wrapper">
                            <img src="/assets/product4.jpg" alt="Product 4" className="main-img" />
                            <img src="/assets/product10.jpg" alt="Hover 4" className="hover-img" />
                        </div>
                        <p>Aliquam Consequent</p>
                        <p>Fruits</p>
                        <pre>$66.00  <strike>$82.00</strike></pre>
                    </li>

                    <li>
                        <div className="img-wrapper">
                            <img src="/assets/product5.jpg" alt="Product 5" className="main-img" />
                            <img src="/assets/product17.jpg" alt="Hover 5" className="hover-img" />
                        </div>
                        <p>Aliquam Consequent</p>
                        <p>Fruits</p>
                        <pre>$46.00  <strike>$312.00</strike></pre>
                    </li>
                </div>
            </div>


            <div className='container3'>
                <p><i>Recently added our store</i></p>
                <h1>Mostview Products</h1>

                <div className="productsList1">
                    <li>
                        <div className="img-wrapper">
                            <img src="/assets/product6.jpg" alt="Product 6" className="main-img" />
                            <img src="/assets/product16.jpg" alt="Hover 6" className="hover-img" />
                        </div>
                        <p>Aliquam Consequent</p>
                        <p>Fruits</p>
                        <pre>$126.00  <strike>$462.00</strike></pre>
                    </li>

                    <li>
                        <div className="img-wrapper">
                            <img src="/assets/product7.jpg" alt="Product 7" className="main-img" />
                            <img src="/assets/product15.jpg" alt="Hover 7" className="hover-img" />
                        </div>
                        <p>Aliquam Consequent</p>
                        <p>Fruits</p>
                        <pre>$66.00  <strike>$98.00</strike></pre>
                    </li>

                    <li>
                        <div className="img-wrapper">
                            <img src="/assets/product8.jpg" alt="Product 8" className="main-img" />
                            <img src="/assets/product14.jpg" alt="Hover 8" className="hover-img" />
                        </div>
                        <p>Aliquam Consequent</p>
                        <p>Fruits</p>
                        <pre>$29.00  <strike>$89.00</strike></pre>
                    </li>

                    <li>
                        <div className="img-wrapper">
                            <img src="/assets/product9.jpg" alt="Product 9" className="main-img" />
                            <img src="/assets/product13.jpg" alt="Hover 9" className="hover-img" />
                        </div>
                        <p>Aliquam Consequent</p>
                        <p>Fruits</p>
                        <pre>$36.00  <strike>$32.00</strike></pre>
                    </li>

                    <li>
                        <div className="img-wrapper">
                            <img src="/assets/product10.jpg" alt="Product 10" className="main-img" />
                            <img src="/assets/product12.jpg" alt="Hover 10" className="hover-img" />
                        </div>
                        <p>Aliquam Consequent</p>
                        <p>Fruits</p>
                        <pre>$67.00  <strike>$353.00</strike></pre>
                    </li>
                </div>
            </div>
        </div>
    )
}

export default ProductListContainer
