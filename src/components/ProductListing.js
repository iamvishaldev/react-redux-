import React, { useEffect } from 'react'
import ProductComponent from './ProductComponent'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { setProducts } from '../redux/actions/productActions'

function ProductListing() {

    useEffect(() => {
        fetchProducts()
    }, [])
    // ones we get data from server we need to store the data to store 
    const dispatch = useDispatch()
    // to get the access of the redux store
    const products = useSelector((state) => state)
    // console.log(products)

    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products')
            .catch(
                (error) =>
                    console.log('fetchProducts', error)
            )
        dispatch(setProducts(response.data))
    }

    console.log("Products", products)

    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    )
}

export default ProductListing
