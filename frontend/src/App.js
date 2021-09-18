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
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import Auth from './components/Auth';
import styled from 'styled-components';
import { useState } from 'react';
import FormWrap from './components/FormWrap';



function App() {
  const [isDarkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
        setDarkMode(!isDarkMode);
        console.log(isDarkMode)
  }
  let title=isDarkMode ? "Lighten": "Darken";

  return (
    <Router>
    <>
    <Header />
    <Wrap>
    <Button light={isDarkMode ? true : false}  onClick={handleToggle}>{title}</Button>
    </Wrap>

    <Page light={isDarkMode ? true : false}>
    
    
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
    <Route path='/' component={HomeScreen} exact />
    <Route path='/product/:id' component={ProductScreen} />
    <Route path='/cart/:id?' component={CartScreen} />
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
  font-size: .8rem;
  cursor: pointer;
  transition: .2s all ease-in-out;
  background-color: ${props => !props.light ? "#000000" : "#eee"};
  color: ${props => !props.light ? "#F8F0F0" : "#000000"};
  opacity: .7;
  font: bolder;
  border-radius: 50%;
  font-weight: 600;
  font-family: Gill Sans, sans-serif;

  &:hover {
    transition: .2s all ease-in-out;
  
  
  }
`;

const Page = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  display: grid;
  position: center;
  transition: .5s;
  background-color: ${props => props.light ? "#000000" : "#8DCFEE"};
`;

const Wrap = styled.div`
position: relative;
min-height: 10vh;
width: 100vw;
transition: .5s;
background-color: ${props => props.light ? "#000000" : "#8DCFEE"};

`;
export default App;
