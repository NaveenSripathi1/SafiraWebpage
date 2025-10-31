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

const Bloglist3 = () => {
    return (

        <div className="header">
            <div className='header1'>
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
                <h1>Blog</h1>
                <a href="">Home / Blog</a>
            </div>
            <div className='main-productDiv'>


                <div className='blog-right'>
                    <h4>Search</h4>
                    <hr />
                    <input type="search" name="" id="search-input" placeholder='Search...' />
                    <button id='search'>SEARCH</button>
                    <h4>Recent Comments</h4>
                    <hr />
                    <div className='post-wrapper'>
                        <div className='post-img'>
                            <a href="">
                                <img src="/assets/comment2.png.webp" alt="" />
                            </a>
                        </div>
                        <div className='post-info'>
                            <span>
                                <a href="">demo</a>
                                " says:"
                            </span>
                            <a href="">Quisque semper <br /> nunc</a>
                        </div>
                    </div>

                    <div className='post-wrapper'>
                        <div className='post-img'>
                            <a href="">
                                <img src="/assets/comment2.png.webp" alt="" />
                            </a>
                        </div>
                        <div className='post-info'>
                            <span>
                                <a href="">demo</a>
                                " says:"
                            </span>
                            <a href="">Quisque orci<br /> porta...</a>
                        </div>

                    </div>
                    <div className='post-wrapper'>
                        <div className='post-img'>
                            <a href="">
                                <img src="/assets/comment2.png.webp" alt="" />
                            </a>
                        </div>
                        <div className='post-info'>
                            <span>
                                <a href="">demo</a>
                                " says:"
                            </span>
                            <a href="">Quisque semper <br /> nunc</a>
                        </div>
                    </div>

                    <h4>Recent Posts</h4>
                    <hr />
                    <div className='post-wrapper'>
                        <div className='post-img1'>
                            <a href="">
                                <img src="/assets/blog1.jpg" alt="" />
                            </a>
                        </div>
                        <div className='post-info'>
                            <a href="">Blog image post</a>
                            <p>March 16, 2018</p>
                        </div>
                    </div>
                    <div className='post-wrapper'>
                        <div className='post-img1'>
                            <a href="">
                                <img src="/assets/blog2.jpg" alt="" />
                            </a>
                        </div>
                        <div className='post-info'>
                            <a href="">Post with gallery</a>
                            <p>March 16, 2018</p>
                        </div>

                    </div>
                    <div className='post-wrapper'>
                        <div className='post-img1'>
                            <a href="">
                                <img src="/assets/blog3.jpg" alt="" />
                            </a>
                        </div>
                        <div className='post-info'>
                            <a href="">Post with audio</a>
                            <p>March 16, 2018</p>
                        </div>
                    </div>

                    <h4>Categories</h4>
                    <hr />
                    <div className='categories-list'>
                        <li><a href="">Audio</a></li>
                        <li><a href="">Company</a></li>
                        <li><a href="">Gallery</a></li>
                        <li><a href="">Image</a></li>
                        <li><a href="">Other</a></li>
                        <li><a href="">Travel</a></li>
                    </div>

                    <h4>Tag products</h4>
                    <hr />
                    <div className='tag-buttons'>
                        <button>asian</button>
                        <button>brown</button>
                        <button>euro</button>
                    </div>

                </div>

                <div className="productsList111">
                    <li><img src="/assets/blog1.jpg" alt="" />
                        <div>
                            <p>Lorem ipsum dolor sit amet,<br /> elit. Impedit, aliquam animi,<br /> saepe ex.</p><br />
                            <p>23/06/2024 | ecommerce</p>
                        </div>
                    </li>
                    <li><img src="/assets/blog2.jpg" alt="" />
                        <p>Lorem ipsum dolor sit amet,<br /> elit. Impedit, aliquam animi,<br /> saepe ex.</p><br />
                        <p>23/06/2024 | ecommerce</p>
                    </li>
                    <li><img src="/assets/blog3.jpg" alt="" />
                        <p>Lorem ipsum dolor sit amet,<br /> elit. Impedit, aliquam animi,<br /> saepe ex.</p><br />
                        <p>23/06/2024 | ecommerce</p>
                    </li>
                    <li><img src="/assets/blog1.jpg" alt="" />
                        <p>Lorem ipsum dolor sit amet,<br /> elit. Impedit, aliquam animi,<br /> saepe ex.</p><br />
                        <p>23/06/2024 | ecommerce</p>
                    </li>
                    <li><img src="/assets/blog2.jpg" alt="" />
                        <p>Lorem ipsum dolor sit amet,<br /> elit. Impedit, aliquam animi,<br /> saepe ex.</p><br />
                        <p>23/06/2024 | ecommerce</p>
                    </li>
                    <li><img src="/assets/blog3.jpg" alt="" />
                        <p>Lorem ipsum dolor sit amet,<br /> elit. Impedit, aliquam animi,<br /> saepe ex.</p><br />
                        <p>23/06/2024 | ecommerce</p>
                    </li>
                    <li><img src="/assets/blog1.jpg" alt="" />
                        <p>Lorem ipsum dolor sit amet,<br /> elit. Impedit, aliquam animi,<br /> saepe ex.</p><br />
                        <p>23/06/2024 | ecommerce</p>
                    </li>
                    <li><img src="/assets/blog2.jpg" alt="" />
                        <p>Lorem ipsum dolor sit amet,<br /> elit. Impedit, aliquam animi,<br /> saepe ex.</p><br />
                        <p>23/06/2024 | ecommerce</p>
                    </li>
                    <li><img src="/assets/blog3.jpg" alt="" />
                        <p>Lorem ipsum dolor sit amet,<br /> elit. Impedit, aliquam animi,<br /> saepe ex.</p><br />
                        <p>23/06/2024 | ecommerce</p>
                    </li>
                </div>
            </div>
            <br /><br />
            <div className="next-pages1">
                <button id='first'>1</button>
                <button>2</button>
                <button>3</button>
                <button>next</button>
                <button>&gt;&gt;</button>
            </div>


            <hr id='horizontal' />
            <br /><br />
            <UpperFooter />
            <Footer />
        </div >
    );
};

export default Bloglist3;
