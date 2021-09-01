import React, { useState, useEffect } from 'react'
<<<<<<< HEAD
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
     }, [match])


=======
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button, Form } from "react-bootstrap"
import Rating from '../components/Rating'
import { listProductDetails } from '../actions/productActions'

const ProductScreen = ({ history, match }) => {

    const [qty, setQty] = useState(1)

    const dispatch =useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const { product } = productDetails


    useEffect(() => {
       dispatch(listProductDetails(match.params.id))
     }, [dispatch, match])

     const cartHandler = () => {
         history.push(`/cart/${match.params.id}?qty=${qty}`)
     }
>>>>>>> main
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
<<<<<<< HEAD
                    <ListGroup.Item>
                        <Button className='btn-block' size='lg' type='button' disabled={product.countInStock === 0}>
=======

                    {product.countInStock > 0 && (
                        <ListGroup.Item>
                            <Row>
                                <Col>Qty</Col>
                                <Col>
                                <Form.Control as='select' value={qty} onChange={(e) =>
                                setQty(e.target.value)}>
                                    {[...Array(product.countInStock).keys()].map(x => (
                                        <option key={x + 1} value={x + 1}>
                                            {x + 1}
                                        </option>
                                    ))}
                                </Form.Control>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    )}
                    <ListGroup.Item>
                        <Button onClick={cartHandler}className='btn-block' size='lg' type='button' disabled={product.countInStock === 0}>
>>>>>>> main
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
