import React from 'react'

const UpperFooter = () => {
    return (
        <div>
            <div className='upperFooter'>
                <div className='lowerContent'>
                    <img src="/assets/logo.png" alt="" />
                    <p>We are the team of designers and developers that create high quality eCommerce, Wordpress, Shopify</p>
                    <p><b>Address:</b>    4710-4890 Breckinridge USA <br />
                        <b>Email: </b> <a href="">demo@hastmeets.com</a><br />
                        <b>Call us: </b>(08) 23 456 789
                    </p>

                </div>
                <div className='lowerContent' id='one'>
                    <h3>Information</h3>
                    <a href="">About Us</a><br />
                    <a href="">Delivery Information</a><br />
                    <a href="">Privacy Policy</a><br />
                    <a href="">Terms & Conditions</a><br />
                    <a href="">Contact Us</a><br />
                    <a href="">Site Map</a>
                </div>
                <div className='lowerContent' id='two'>
                    <h3>Extras</h3>
                    <a href="">Brands</a><br />
                    <a href="">Gift Certificates</a><br />
                    <a href="">Affiliate</a><br />
                    <a href="">Specials</a><br />
                    <a href="">Returns</a><br />
                    <a href="">Order History</a>
                </div>
                <div className='lowerContent' id='three'>
                    <h3>Sign Up Newsletter</h3>
                    <p>Get updates by subscribe our weekly newsletter</p>
                    <input type="email" id="email" autocomplete="off" placeholder="Enter your Email" />
                    <button id="submit">Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default UpperFooter