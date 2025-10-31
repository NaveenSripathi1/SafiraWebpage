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

const AboutUspage = () => {
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
                        <a href="#">REGISTER /</a>
                        <a href="#">LOGIN</a>
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
                <h1>About Us</h1>
                <a href="">Home / About Us</a>

            </div>
            <div className='aboutus-container'>
                <div className='aboutus-big'>
                    <img src="/assets/about1.webp" alt="" />
                    <h2>We are a digital agency focused on delivering content and utility user-experiences.</h2>
                    <div>
                        <p>Adipiscing lacus ut elementum, nec duis, tempor litora turpis dapibus. Imperdiet cursus odio tortor in elementum. Egestas nunc eleifend feugiat lectus laoreet, vel nunc taciti integer cras. Hac pede dis, praesent nibh ac dui mauris sit. Pellentesque mi, facilisi mauris, elit sociis leo sodales accumsan. Iaculis ac fringilla torquent lorem consectetuer, sociosqu phasellus risus urna aliquam, ornare</p>
                    </div>
                </div>
            </div>



            <hr id='horizontal' />

            <br /><br /><br />
            <UpperFooter />
            <Footer />
        </div >
    );
};

export default AboutUspage;
