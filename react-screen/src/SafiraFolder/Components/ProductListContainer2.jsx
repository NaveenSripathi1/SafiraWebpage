import React from 'react'

const products = [
    {
        id: 1,
        image: '/assets/product1.jpg',
        hoverImage: '/assets/product21.jpg',
        title: 'Aliquam Consequat',
        category: 'Fruits',
        price: '26.00',
        oldPrice: '362.00'
    },
    {
        id: 2,
        image: '/assets/product2.jpg',
        hoverImage: '/assets/product20.jpg',
        title: 'Quisque In Arcu',
        category: 'Fruits',
        price: '20.00',
        oldPrice: '352.00'
    },
    {
        id: 3,
        image: '/assets/product3.jpg',
        hoverImage: '/assets/product19.jpg',
        title: 'Donec Non Est',
        category: 'Fruits',
        price: '46.00',
        oldPrice: '382.00'
    },
    {
        id: 4,
        image: '/assets/product4.jpg',
        hoverImage: '/assets/product10.jpg',
        title: 'Cas Meque Metus',
        category: 'Fruits',
        price: '72.00',
        oldPrice: '352.00'
    },
    {
        id: 5,
        image: '/assets/product5.jpg',
        hoverImage: '/assets/product17.jpg',
        title: 'Mauris Vel Tellus',
        category: 'Fruits',
        price: '56.00',
        oldPrice: '362.00'
    },
    {
        id: 6,
        image: '/assets/product6.jpg',
        hoverImage: '/assets/product16.jpg',
        title: 'Proin Lectus Ipsum',
        category: 'Fruits',
        price: '36.00',
        oldPrice: '282.00'
    }
]

const ProductListContainer2 = () => {
    return (
        <div className="container3">
            <div className="heading-section">
                <p><i>Recently added our store</i></p>
                <h1>Trending Products</h1>
            </div>
            <div className='big-cont'>
                <div className="banner-image">
                    <img src="/assets/banner4.jpg" alt="" />
                </div>
                <div className="productsList11">


                    <ul>
                        {products.map(p => (
                            <li key={p.id}>
                                <div className="product-card1">
                                    <div className="img-wrapper1">
                                        <img src={p.image} alt={p.title} className='main-img' />
                                        <img src={p.hoverImage} alt={p.title} className='hover-img' />
                                    </div>
                                    <div className="product-info1">
                                        <h3>{p.title}</h3>
                                        <span className="category1">{p.category}</span>
                                        <div className="price">
                                            <span className="current">${p.price}</span>
                                            {p.oldPrice && <strike className="old">${p.oldPrice}</strike>}
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default ProductListContainer2