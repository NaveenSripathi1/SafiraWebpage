import React from 'react'
import { Link } from 'react-router-dom'

const PagesDropdown = () => {
    return (
        <div className='BlogDropdown'>
            <div className="dropdown-column">
                <ul className="dropdown-list">
                    <li><Link to="/AboutUspage">About Us</Link></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Frequently Questions</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Error 404</a></li>
                </ul>
            </div>
        </div>
    )
}

export default PagesDropdown