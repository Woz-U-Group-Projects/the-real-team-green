<<<<<<< HEAD
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'

import styled from 'styled-components'

const HomeScreen = () => {
    const [products, setProducts] = useState([])
    
    useEffect(() => {
       const fetchProducts = async () => {
           const { data } = await axios.get('/api/products')

           setProducts(data)
       }

       fetchProducts()
    }, [])

    return (
        <>
            <Title>Latest Products</Title>
            
            <Row>
                {products.map(product =>
                <Col key={product._id}sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
                </Col>
                    )}
            </Row>
        </>
    )
}
const Title = styled.div`
   color: ${props => !props.light ? "#333" : "#eee"};
   font-size: 40px;
 `;
=======
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import { listProducts } from '../actions/productActions.js'

const HomeScreen = () => {
    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)
    const { error, products } = productList

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <>
            <h1>Latest Products</h1>
            {error ? (
                <h3>{error}</h3>
            ) : (
                <Row>
                    {products &&
                        products.map((product => (
                            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                <h3>{product.name}</h3>
                                <Product product={product} />
                            </Col>

                        )))

                    }
                </Row>)}

        </>
    )
}

>>>>>>> main
export default HomeScreen
