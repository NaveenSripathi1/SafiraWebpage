import React from 'react'

const ShopDropdown = () => {
    return (
        <div className="HomeDropdown">

            <div className="dropdown-column">
                <h4 className="dropdown-title">Shop Layouts</h4>
                <ul className="dropdown-list">
                    <li><a href="#">Full Width</a></li>
                    <li><a href="#">Full Width List</a></li>
                    <li><a href="#">Right Sidebar</a></li>
                    <li><a href="#">Right Sidebar List</a></li>
                    <li><a href="#">List View</a></li>
                </ul>
            </div>

            <div className="dropdown-column">
                <h4 className="dropdown-title">Other Pages</h4>
                <ul className="dropdown-list">
                    <li><a href="#">Cart</a></li>
                    <li><a href="#">Wishlist</a></li>
                    <li><a href="#">Checkout</a></li>
                    <li><a href="#">My Account</a></li>
                    <li><a href="#">Error 404</a></li>
                </ul>
            </div>

            <div className="dropdown-column">
                <h4 className="dropdown-title">Product Types</h4>
                <ul className="dropdown-list">
                    <li><a href="#">Product Details</a></li>
                    <li><a href="#">Product Sidebar</a></li>
                    <li><a href="#">Product Grouped</a></li>
                    <li><a href="#">Product Variable</a></li>
                </ul>
            </div>

        </div >
    )
}

export default ShopDropdown