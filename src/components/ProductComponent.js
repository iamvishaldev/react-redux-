import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'


function ProductComponent() {
    const ProductList = useSelector((state) => state.allProducts.products)

    const renderProductList = ProductList.map((currentProduct) => {
        const { category, description, id, title, rating, price, image } = currentProduct
        return (
            <div className="four wide column" key={id}>
                <Link to={`/product/${id}`}>
                    <div className="ui link cards">
                        <div className="card">
                            <div className="image">
                                <img src={image} alt={title} />
                            </div>
                            <div className="content">
                                <div className="header">{title}</div>
                                <div className="meta price">${price}</div>
                                <div className="meta">${category}</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    })

    return (
        <>{renderProductList}</>
    )
}

export default ProductComponent
