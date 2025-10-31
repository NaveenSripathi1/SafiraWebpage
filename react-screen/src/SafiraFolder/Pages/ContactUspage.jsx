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

const ContactUspage = () => {
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
                <h1>Contact Us</h1>
                <a href="">Home / Contact</a>
            </div>
            <div className='maps'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.483095539415!2d78.36437847501124!3d17.43657698345914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb939f3603a84f%3A0x39ef47e23a528f53!2sCJSS%20Technologies%20Private%20limited!5e0!3m2!1sen!2sin!4v1761634462883!5m2!1sen!2sin" width="600" height="450" title="mapping" allowfullscreen referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='main-contact'>
                <div className='inner-contact'>
                    <h3>Contact Us</h3>
                    <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum formas human. qui sequitur mutationem consuetudium lectorum. Mirum est notare quam</p><br />
                    <hr />
                    <p>📠 Address : No 40 Baria Sreet 133/2 NewYork City</p>
                    <hr />
                    <p>📧 Infor@roadthemes.com</p>
                    <hr />
                    <p>📞 0(1234) 567 890</p>
                </div>
                <div className='inner-contact'>
                    <h3>Tell us your project</h3>
                    <form action="">
                        <label htmlFor="">Your Name (required)</label><br />
                        <input type="text" placeholder='Name *' required /><br />
                        <label htmlFor="">Your Email (required)</label><br />
                        <input type="text" placeholder='Email *' required /><br />
                        <label htmlFor="">Subject</label><br />
                        <input type="text" placeholder='Subject *' /><br />
                        <label htmlFor="message">Your Message</label><br />
                        <input type="text" id='message' placeholder='Message *' /><br />
                        <button id='sendBtn'>Send</button>

                    </form>

                </div>

            </div>
            <hr id='horizontal' />

            <br /><br />
            <UpperFooter />
            <Footer />
        </div >
    );
};

export default ContactUspage;
