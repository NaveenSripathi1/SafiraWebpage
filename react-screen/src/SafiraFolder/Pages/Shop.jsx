import React, { useState } from 'react';
import HomeDropdown from '../Components/HomeDropdown';
import ShopDropdown from '../Components/ShopDropdown';
import BlogDropdown from '../Components/BlogDropdown';
import PagesDropdown from '../Components/PagesDropdown';
import UpperFooter from '../Components/UpperFooter';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

const Dropdown = ({ title, items }) => {
    const [open, setOpen] = useState(false);

    return (
        <div
            className="dropdown"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <button className="dropbtn">
                {title} <span className="arrow">▾</span>
            </button>
            {open && (
                <div className="dropdown-content">
                    {items.map((item, idx) => (
                        <a href="#" key={idx}>
                            {item}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

const Shop = () => {
    return (

        <div className="header">
            {/* Upper Header */}
            <div className="upperHeader">
                <div className="lang-currency">
                    <Dropdown title="Language" items={['French', 'Spanish', 'Russian']} />
                    <span className="divider">|</span>
                    <Dropdown title="Currency" items={['USD', 'EUR', 'INR']} />
                </div>
                <div className="icons">
                    {['twitter', 'facebook', 'youtube', 'insta'].map((icon) => (
                        <img src={`/assets/${icon}.png`} alt={icon} key={icon} />
                    ))}
                </div>
            </div>
            <hr />

            {/* Lower Header */}
            <div className="lowerHeader1">
                <div className="logo1">
                    <Link to="/">
                        <img src="/assets/logo.png" alt="safira logo" />
                    </Link>
                </div>

                <div className="search-bar">

                    <select className="category-select">
                        <option>Select a categories</option>
                        <option>Accessories</option>
                        <option>Accessories & More</option>
                        <option>Butters & Eggs</option>
                        <option>Camera & Video</option>
                        <option>Monitors</option>
                        <option>Tablets</option>
                        <option>Laptops</option>
                        <option>Handbags</option>
                        <option>Headphones & Speakers</option>
                        <option>Herbs & Botanics</option>
                        <option>Vegetables</option>
                        <option>Shop</option>
                        <option>Laptops & Desktops</option>

                    </select>


                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search product..."
                    />

                    <button className="search-btn">
                        <img src="/assets/search-icon.png" alt="" height="20px" weight="20p" />

                    </button>
                </div>

                <div className="links1">
                    <Link to="/login">REGISTER /</Link>
                    <Link to="/login">LOGIN</Link>
                    <img src="/assets/heart-icon.png" alt="" height="20px" width="20px" />
                    <span className='count'>3</span>
                    <img src="/assets/cart-iocn.png" alt="" height="20px" width="20px" />
                    <span className='count'>2</span>
                </div>
            </div>


            <nav className="nav">
                <div className='category-div'>
                    <select className="category-select1">
                        <option >☰ All categories</option>
                        <option>Accessories</option>
                        <option>Accessories & More</option>
                        <option>Butters & Eggs</option>
                        <option>Camera & Video</option>
                        <option>Monitors</option>
                        <option>Tablets</option>
                        <option>Laptops</option>
                        <option>Handbags</option>
                        <option>Headphones & Speakers</option>
                        <option>Herbs & Botanics</option>
                        <option>Vegetables</option>
                        <option>Shop</option>
                        <option>Laptops & Desktops</option>
                    </select>
                </div>
                <ul>
                    <li>
                        <a href="#">Home⮟</a>
                        <HomeDropdown />
                    </li>
                    <li>
                        <Link to="/shop">Shop⮟</Link>
                        <ShopDropdown />
                    </li>
                    <li>
                        <Link to="/blogpage">Blog⮟</Link>
                        <BlogDropdown />
                    </li>
                    <li>
                        <a href="#">Pages⮟</a>
                        <PagesDropdown />
                    </li>
                    <li>
                        <Link to="/contact-us">Contact Us</Link>
                    </li>

                </ul>
                <div className='phone'>
                    <img src="/assets/phone.png" alt="" />
                    <div>
                        <p>(08) 23 456 789</p>
                        <p>Customer Support</p>
                    </div>
                </div>
            </nav>

            {/* login-banner */}
            <div className='login-banner'>
                <h1>Shop</h1>
                <a href="">Home / Shop</a>
            </div>

            <div className='mainShop'>
                <div className='shopDiv1'>
                    <h4>WOMEN</h4>
                    <hr />
                    <div className='inner-shop'>
                        <div className='inner-shop1'>
                            <li>
                                <a href="">Shoes</a>
                                <a href="">Bag</a>
                                <a href="">Clothing</a>
                            </li>
                        </div>
                        <div className='inner-shop2'>
                            <button>+</button>
                            <button>+</button>
                            <button>+</button>
                        </div>
                    </div>

                    <h4>FILTER BY PRICE</h4>
                    <div className="slider-container">
                        <input type="range" min="0" max="100" className="custom-slider" />
                    </div>
                    <div className='inner-shop11'>
                        <div className='inner-shop2'>
                            <button>Filters</button>
                        </div>
                        <div className='inner-shop1'>
                            <li>
                                <a href="">$0 - $20</a>
                            </li>
                        </div>
                    </div>
                    <h4>SELECT BY COLOR</h4>
                    <hr />
                    <div className='inner-shop'>

                        <div className='inner-shop1'>
                            <li>
                                <a href="">Black</a>
                                <a href="">Blue</a>
                                <a href="">Brown</a>
                                <a href="">Green</a>
                            </li>
                        </div>
                        <div className='inner-shop2'>
                            <button>(6)</button>
                            <button>(8)</button>
                            <button>(10)</button>
                            <button>(6)</button>
                        </div>
                    </div>
                    <h4>SELECT BY SIZE</h4>
                    <hr />
                    <div className='inner-shop'>

                        <div className='inner-shop1'>
                            <li>
                                <a href="">S</a>
                                <a href="">M</a>
                                <a href="">L</a>
                                <a href="">XL</a>
                                <a href="">XLL</a>
                            </li>
                        </div>
                        <div className='inner-shop2'>
                            <button>(6)</button>
                            <button>(8)</button>
                            <button>(10)</button>
                            <button>(6)</button>
                            <button>(4)</button>
                        </div>
                    </div>
                    <br />
                    <h4>MANUFACTURER</h4>
                    <hr />
                    <div className='inner-shop'>

                        <div className='inner-shop1'>
                            <li>
                                <a href="">Break Parts</a>
                                <a href="">Accesories</a>
                                <a href="">Engine Parts</a>
                                <a href="">Hermes</a>
                                <a href="">Louis vuitton</a>
                            </li>
                        </div>
                        <div className='inner-shop2'>
                            <button>(6)</button>
                            <button>(8)</button>
                            <button>(10)</button>
                            <button>(6)</button>
                            <button>(4)</button>
                        </div>
                    </div>
                    <br />
                    <h4>PRODUCT TAGS</h4>
                    <hr />
                    <div className='inner-shop'>
                        <div className='inner-button'>
                            <button>Men</button>
                            <button>Women</button>
                            <button>Watches</button>
                            <button>Bags</button>
                            <button>Dress</button>
                            <button>Belt</button>
                            <button>Accesories</button>
                            <button>Shoes</button>
                        </div>
                    </div>
                    <br /><br />
                    {/* <div className='inner-shop'> */}
                    <img src="/assets/banner17.webp" alt="" />
                    {/* </div> */}
                </div>
                <div className='shopDiv2'>
                    <div className='shopDiv22'>
                        <div className="shop-toolbar-wrapper">
                            <div className="shop-toolbar">
                                <button><img src="/assets/bkg_grid_hover.png" alt="" /></button>
                                <button><img src="/assets/bkg_grid4.png" alt="" /></button>
                                <button><img src="/assets/bkg_list.png" alt="" /></button>
                            </div>
                        </div>
                        <div className='shop-sorting'>
                            <select name="" id="sorting">
                                <option value="">Sort by average rating</option>
                                <option value="">Sort by popularity</option>
                                <option value="">Sort by newness</option>
                                <option value="">Sort by price: low to high</option>
                                <option value="">Sort by price: high to low</option>
                                <option value="">Product Name: Z</option>
                            </select>
                        </div>
                        <div>
                            <p>Showing 1-9 of 21 results</p>
                        </div>
                    </div>
                    <div className="group-list">
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

                            <li>
                                <div className="img-wrapper">
                                    <img src="/assets/product5.jpg" alt="Product 5" className="main-img" />
                                    <img src="/assets/product17.jpg" alt="Hover 5" className="hover-img" />
                                </div>
                                <p>Aliquam Consequent</p>
                                <p>Fruits</p>
                                <pre>$46.00  <strike>$312.00</strike></pre>
                            </li>


                            <li>
                                <div className="img-wrapper">
                                    <img src="/assets/product6.jpg" alt="Product 6" className="main-img" />
                                    <img src="/assets/product16.jpg" alt="Hover 6" className="hover-img" />
                                </div>
                                <p>Aliquam Consequent</p>
                                <p>Fruits</p>
                                <pre>$126.00  <strike>$462.00</strike></pre>
                            </li>

                        </div>


                    </div>
                    <br />
                    <div className="next-pages">
                        <button id='first'>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>next</button>
                        <button>&gt;&gt;</button>
                    </div>
                </div>
            </div>
            <hr id='horizontal' />
            <br />
            <UpperFooter />
            <Footer />
        </div >
    );
};

export default Shop;
