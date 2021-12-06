import React from 'react'
import { useSelector } from 'react-redux'
import ProductComponent from './ProductComponent'

function ProductListing() {
    // to get the access of the redux store
    const products = useSelector((state) => state)
    // console.log(products)
    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    )
}

export default ProductListing
