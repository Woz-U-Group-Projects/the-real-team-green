import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap"
import Rating from '../components/Rating'


const ProductScreen = ({ match }) => {
    const [product, setProduct] = useState({})

    useEffect(() => {
        const fetchProduct = async () => {
            const { data } = await axios.get(`/api/products/${match.params.id}`)
 
            setProduct(data)
        }
 
        fetchProduct()
     }, [])


    return <>
    <Link className='btn btn-light my-3' to='/'>
        Back to home
    </Link>
    <Row>
        <Col md={6}>
            <Image src={product.image} alt={product.name} fluid ></Image>
        </Col>
        <Col md={6}>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h4>{product.name}</h4>
                </ListGroup.Item>
                <Card>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <Row>
                            <Col>
                            Price:
                            </Col>
                            <Col>
                            <strong>${product.price}</strong>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>
                            In stock?
                            </Col>
                            <Col>
                            {product.countInStock > 0 ? 'Yes' : 'No'}
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Button className='btn-block' size='lg' type='button' disabled={product.countInStock === 0}>
                            Add to cart
                        </Button>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
                <ListGroup.Item>
                    <Rating value={product.rating} text={`${product.numReviews} Reviews`} />
                </ListGroup.Item>
                <ListGroup.Item>
                    Price: ${product.price}
                </ListGroup.Item>
                <ListGroup.Item>
                    Description: {product.description}
                </ListGroup.Item>
            </ListGroup>
        </Col>
    </Row>
    </>
}


export default ProductScreen
