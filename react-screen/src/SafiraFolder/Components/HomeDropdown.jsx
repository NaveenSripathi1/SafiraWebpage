import React from 'react'

const HomeDropdown = () => {
    return (
        <div className="HomeDropdown">

            <div className="dropdown-column">
                <h4 className="dropdown-title">ORGANIC</h4>
                <ul className="dropdown-list">
                    <li><a href="#">Organic 1</a></li>
                    <li><a href="#">Organic 2</a></li>
                    <li><a href="#">Organic 3</a></li>
                    <li><a href="#">Organic 4</a></li>
                    <li><a href="#">Organic 5</a></li>
                </ul>
            </div>

            <div className="dropdown-column">
                <h4 className="dropdown-title">FASHION</h4>
                <ul className="dropdown-list">
                    <li><a href="#">Fashion 1</a></li>
                    <li><a href="#">Fashion 2</a></li>
                    <li><a href="#">Fashion 3 <span className='soon'>(Comming Soon)</span></a></li>
                    <li><a href="#">Fashion 4 <span className='soon'>(Comming Soon)</span></a></li>
                </ul>
            </div>

            <div className="dropdown-column">
                <h4 className="dropdown-title">COSMETIC</h4>
                <ul className="dropdown-list">
                    <li><a href="#">Cosmetic 1</a></li>
                    <li><a href="#">Cosmetic 2</a></li>
                    <li><a href="#">Cosmetic 3 <span className='soon'>(Comming Soon)</span></a></li>
                    <li><a href="#">Cosmetic 4 <span className='soon'>(Comming Soon)</span></a></li>
                </ul>
            </div>

        </div>
    )
}

export default HomeDropdown
