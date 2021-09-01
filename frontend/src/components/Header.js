import React from 'react'
<<<<<<< HEAD
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap'



const Header = () => {
    
    return (
        <header>
            <Navbar bg="dark" variant="dark" class="nav">
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>EZShop</Navbar.Brand>
=======
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown, Image } from 'react-bootstrap'
import { logout } from '../actions/userActions'
import { Link } from 'react-router-dom'


const Header = () => {
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    const logoutHandler = () =>{
        dispatch(logout())
    }
    return (
        <header>
            <Navbar bg="dark" variant="dark">
                <Container fluid>
                    <LinkContainer to='/'>
                        <Navbar.Brand>
                            <Link to='/'>
                                <img src='./images/logo.png' alt='EZShop' width="auto" height='auto' className='d-inline-block align-top mr-auto'></img>
                            </Link>
                            </Navbar.Brand>
>>>>>>> main
                    </LinkContainer>
                    <Nav className="ml-auto">
                        <LinkContainer to='/cart'>
                            <Nav.Link><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
                        </LinkContainer>
<<<<<<< HEAD
                        <LinkContainer to='/login'>
                            <Nav.Link><i className='fas fa-user'></i>Sign In</Nav.Link>
                        </LinkContainer>
=======
                        {userInfo ? (
                            <NavDropdown title={userInfo.name} id='username'>
                                <LinkContainer to='/profile'>
                                    <NavDropdown.Item>Profile</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        ): <LinkContainer to='/login'>
                        <Nav.Link><i className='fas fa-user'></i>Sign in</Nav.Link>
                    </LinkContainer> }
                        
>>>>>>> main
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}

<<<<<<< HEAD


 export default Header




=======
export default Header
>>>>>>> main
