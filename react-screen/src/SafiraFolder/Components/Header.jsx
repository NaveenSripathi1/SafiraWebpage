// 
import React, { useState } from 'react';
import HomeDropdown from './HomeDropdown';
import ShopDropdown from './ShopDropdown';
import BlogDropdown from './BlogDropdown';
import PagesDropdown from './PagesDropdown';
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

const Header = () => {
    return (
        <header className="header">
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

            {/* Lower Header */}
            <div className="lowerHeader">
                <div className="inputSearch">
                    <input type="text" placeholder="Search here..." />
                </div>
                <div className="logo">

                    <img src="/assets/logo2.png" alt="safira logo" />

                </div>
                <div className="links">
                    <Link to="/login">REGISTER /</Link>
                    <Link to="/login">LOGIN</Link>
                    {/* <a href="#">REGISTER /</a> */}
                    {/* <a href="#">LOGIN</a> */}
                    <img src="/assets/heart-icon.png" alt="" height="20px" width="20px" />
                    <span className='count'>3</span>
                    <img src="/assets/cart-iocn.png" alt="" height="20px" width="20px" />
                    <span className='count'>2</span>
                </div>
            </div>

            {/* Navigation */}
            <nav className="nav">
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
                    <li><Link to="/contact-us">Contact Us</Link></li>
                    <li><a href="#">Vegetables</a></li>
                    <li><a href="#">Fruits</a></li>
                    <li><a href="#">Salads</a></li>
                </ul>
            </nav>
        </header >
    );
};

export default Header;
