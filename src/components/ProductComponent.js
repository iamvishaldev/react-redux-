import React, { useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'

function ProductComponent() {

    const ProductList = useSelector((state) => state.allProducts.products)
    const { id, name } = ProductList[0]

    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = async () => {
        const result = await axios.get('https://fakestoreapi.com/products')
            .catch(
                (error) =>
                    console.log('fetchProducts', error)
            )
        console.log(result)
    }

    return (
        <div className="four column wide">
            <div className="ui link cards">
                <div className="card">
                    <div className="image"></div>
                    <div className="content">
                        <div className="header">{name}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductComponent
