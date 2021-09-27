import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Paginate from '../components/Paginate'
import { listProducts } from '../actions/productActions.js'

const HomeScreen = ({ match }) => {
    const keyword = match.params.keyword
    const pageNumber = match.params.pageNumber || 1
    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)
    const { error, products, page, pages } = productList

    useEffect(() => {
        dispatch(listProducts(keyword, pageNumber))
    }, [dispatch, keyword, pageNumber])

    const isDarkMode = (localStorage.getItem("isDarkMode") === 'true');
    const myStyle = isDarkMode ? {color: 'white'} : {color: 'black'}

    return (
        <>
            <h1>Products</h1>
            {error ? (
                <h3>{error}</h3>
            ) : (
                <>
                <Row>
                    {products &&
                        products.map((product => (
                            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                <h3 style={myStyle}>{product.name}</h3>
                                <Product product={product} />
                            </Col>
                        )))}
                <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''}/>
                </Row>
                </>
                )}

        </>
    )
}

export default HomeScreen
