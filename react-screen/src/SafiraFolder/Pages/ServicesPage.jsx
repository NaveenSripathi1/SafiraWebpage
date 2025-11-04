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

const ServicesPage = () => {
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
                <h1>Services</h1>
                <a href="">Home / Our Services</a>
            </div>

            <div className="services-first-cont">
                <div className="services-img">
                    <img src="/assets/services1.webp" alt="" />
                    <h3>DESIGN THE COVER</h3>
                    <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
                </div>
                <div className="services-img">
                    <img src="/assets/services2.webp" alt="" />
                    <h3>DESIGN THE COVER</h3>
                    <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
                </div>
                <div className="services-img">
                    <img src="/assets/services3.webp" alt="" />
                    <h3>DESIGN THE COVER</h3>
                    <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
                </div>
            </div>
            <div className="services-second-cont">
                <div className='our-services'>
                    <h2>OUR SERVICES</h2>
                    <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit..</p>

                </div>

                <div className='service-branding-cont'>
                    <div>
                        <div className="service-logos">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sliders-horizontal-icon lucide-sliders-horizontal"><path d="M10 5H3" /><path d="M12 19H3" /><path d="M14 3v4" /><path d="M16 17v4" /><path d="M21 12h-9" /><path d="M21 19h-5" /><path d="M21 5h-7" /><path d="M8 10v4" /><path d="M8 12H3" /></svg>
                        </div>
                        <div className="service-big-content">
                            <div className="service-first">
                                <h5>BRANDING</h5>
                            </div>
                            <div className="service-second">
                                <p>Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="service-logos">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-umbrella-icon lucide-umbrella"><path d="M12 13v7a2 2 0 0 0 4 0" /><path d="M12 2v2" /><path d="M20.992 13a1 1 0 0 0 .97-1.274 10.284 10.284 0 0 0-19.923 0A1 1 0 0 0 3 13z" /></svg>
                        </div>
                        <div className="service-big-content">
                            <div className="service-first">
                                <h5>WEB DESIGN</h5>
                            </div>
                            <div className="service-second">
                                <p>Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="service-logos">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-camera-icon lucide-camera"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z" /><circle cx="12" cy="13" r="3" /></svg>
                        </div>
                        <div className="service-big-content">
                            <div className="service-first">
                                <h5>PHOTOGRAPHY</h5>
                            </div>
                            <div className="service-second">
                                <p>Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="service-logos">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cog-icon lucide-cog"><path d="M11 10.27 7 3.34" /><path d="m11 13.73-4 6.93" /><path d="M12 22v-2" /><path d="M12 2v2" /><path d="M14 12h8" /><path d="m17 20.66-1-1.73" /><path d="m17 3.34-1 1.73" /><path d="M2 12h2" /><path d="m20.66 17-1.73-1" /><path d="m20.66 7-1.73 1" /><path d="m3.34 17 1.73-1" /><path d="m3.34 7 1.73 1" /><circle cx="12" cy="12" r="2" /><circle cx="12" cy="12" r="8" /></svg>
                        </div>
                        <div className="service-big-content">
                            <div className="service-first">
                                <h5>WEB DEVELOPMENT</h5>
                            </div>
                            <div className="service-second">
                                <p>Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="service-logos">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-code-icon lucide-file-code"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" /><path d="M14 2v5a1 1 0 0 0 1 1h5" /><path d="M10 12.5 8 15l2 2.5" /><path d="m14 12.5 2 2.5-2 2.5" /></svg>
                        </div>
                        <div className="service-big-content">
                            <div className="service-first">
                                <h5>CODING</h5>
                            </div>
                            <div className="service-second">
                                <p>Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="service-logos">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-column-icon lucide-chart-column"><path d="M3 3v16a2 2 0 0 0 2 2h16" /><path d="M18 17V9" /><path d="M13 17V5" /><path d="M8 17v-3" /></svg>
                        </div>
                        <div className="service-big-content">
                            <div className="service-first">
                                <h5>MARKETING</h5>
                            </div>
                            <div className="service-second">
                                <p>Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="service-logos">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-headset-icon lucide-headset"><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" /><path d="M21 16v2a4 4 0 0 1-4 4h-5" /></svg>
                        </div>
                        <div className="service-big-content">
                            <div className="service-first">
                                <h5>SUPPORT</h5>
                            </div>
                            <div className="service-second">
                                <p>Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="service-logos">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-leaf-icon lucide-leaf"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" /></svg>
                        </div>
                        <div className="service-big-content">
                            <div className="service-first">
                                <h5>GRAPHIC DESIGN</h5>
                            </div>
                            <div className="service-second">
                                <p>Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="service-bg-man">
                <div className='service-bg-div1'>
                    <img src="/assets/services4.webp" alt="" />
                </div>
                <div className='service-bg-div2'>
                    <h2>UNLIMITED IDEAS</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, suscipit dolorum ullam soluta voluptatem quasi molestias illum possimus, accusantium assumenda inventore debitis ducimus. Quis ducimus, consequatur corrupti, sunt rerum sit atque eum inventore. Autem excepturi reiciendis voluptate totam sit, sunt fugiat voluptatum beatae voluptas ab quia vitae accusamus assumenda facilis perferendis, quam itaque aliquid qui omnis culpa consectetur placeat ipsa quaerat.</p>
                    <button>MORE INFO &gt;</button>
                </div>
            </div>
            <div className="purchase-cards-main">
                <div className="purchase-cards">
                    <div className="purchase-title">
                        <h3>STANDARD</h3>
                    </div>
                    <div className='purchase-content'>
                        <h1>£19<span>/ Month</span></h1>
                    </div>
                    <hr />
                    <div className='purchase-list'>
                        <li>2 GB Webspace</li>
                        <hr />
                        <li>1 Domain</li>
                        <hr />
                        <li>PHP 5 Enabled</li>
                        <hr />
                        <li>24 - Support</li>
                        <hr />
                        <button>PURCHASE NOW</button>
                    </div>
                </div>
                <div className="purchase-cards">
                    <div className="purchase-title">
                        <h3>RETURNS</h3>
                    </div>
                    <div className='purchase-content'>
                        <h1>£23<span>/ Month</span></h1>
                    </div>
                    <hr />
                    <div className='purchase-list'>
                        <li>2 GB Webspace</li>
                        <hr />
                        <li>1 Domain</li>
                        <hr />
                        <li>PHP 5 Enabled</li>
                        <hr />
                        <li>24 - Support</li>
                        <hr />
                        <button className='even-btn'>PURCHASE NOW</button>
                    </div>
                </div>
                <div className="purchase-cards">
                    <div className="purchase-title">
                        <h3>AFFILIATE</h3>
                    </div>
                    <div className='purchase-content'>
                        <h1>£20<span>/ Month</span></h1>
                    </div>
                    <hr />
                    <div className='purchase-list'>
                        <li>2 GB Webspace</li>
                        <hr />
                        <li>1 Domain</li>
                        <hr />
                        <li>PHP 5 Enabled</li>
                        <hr />
                        <li>24 - Support</li>
                        <hr />
                        <button>PURCHASE NOW</button>
                    </div>
                </div>
                <div className="purchase-cards">
                    <div className="purchase-title">
                        <h3>SPECIALS</h3>
                    </div>
                    <div className='purchase-content'>
                        <h1>£25<span>/ Month</span></h1>
                    </div>
                    <hr />
                    <div className='purchase-list'>
                        <li>2 GB Webspace</li>
                        <hr />
                        <li>1 Domain</li>
                        <hr />
                        <li>PHP 5 Enabled</li>
                        <hr />
                        <li>24 - Support</li>
                        <hr />
                        <button className='even-btn'>PURCHASE NOW</button>
                    </div>

                </div>
            </div>
            <div className='belowcards-div'>
                <div>
                    <h2>Advantages of Mobile ecommerce theme</h2>
                    <p><i>Build a professional website system and great user experience</i></p>
                </div>
                <div className='purchase-list'>
                    <button>MORE INFO &gt;</button>
                </div>
            </div>

            <hr id='horizontal' />

            <br /><br /><br />
            <UpperFooter />
            <Footer />
        </div >
    );
};

export default ServicesPage;
