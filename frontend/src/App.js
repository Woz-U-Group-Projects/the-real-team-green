import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import UserEditScreen from './screens/UserEditScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';
import Auth from './components/Auth';
import styled from 'styled-components';
import { useState } from 'react';



function App() {
  const [isDarkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
        setDarkMode(!isDarkMode);
        console.log(isDarkMode)
  }   
  return (
    <Router>
    <>
    <Header />
    <Page light={isDarkMode ? true : false}>
    <Button light={isDarkMode ? true : false}  onClick={handleToggle}>Dark Mode</Button>
            {/* <ThemeImage src={ isDarkMode ? `${Moon}` : `${Sun}` }/> */}
    <main className='py-3'>
      <Container>
    <Route path='/login' component={LoginScreen} />    
    <Route path='/loginwithemail' component={Auth} />    
    <Route path='/order/:id' component={OrderScreen} />    
    <Route path='/placeorder' component={PlaceOrderScreen} />    
    <Route path='/payment' component={PaymentScreen} />    
    <Route path='/shipping' component={ShippingScreen} />    
    <Route path='/profile' component={ProfileScreen} />    
    <Route path='/register' component={RegisterScreen} />    
    <Route path='/search/:keyword' component={HomeScreen} />
    <Route path='/' component={HomeScreen} exact />
    <Route path='/page/:pageNumber' component={HomeScreen} exact />
    <Route path='/search/:keyword/page/pageNumber' component={HomeScreen} exact />
    <Route path='/product/:id' component={ProductScreen} />
    <Route path='/cart/:id?' component={CartScreen} />
    <Route path='/admin/userList' component={UserListScreen} />
    <Route path='/admin/user/:id/edit' component={UserEditScreen} />
    <Route path='/admin/productlist' component={ProductListScreen} exact />
    <Route path='/admin/productlist/:pageNumber' component={ProductListScreen} exact />
    <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
    <Route path='/admin/orderlist' component={OrderListScreen} />
    </Container>
    </main>
    </Page>
    <Footer />
    </>
    </Router>
  );
}

const Button = styled.button`
  margin: 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: .2s all ease-in-out;
  background: none;
  color: ${props => !props.light ? "#333" : "#eee"};
  
  &:hover {
    transition: .2s all ease-in-out;
  opacity: 1;
  radius: 25%;
  
  }
`;

const Page = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
  transition: .5s;
  background: ${props => props.light ? "#333" : "#eee"};
`;

export default App;
