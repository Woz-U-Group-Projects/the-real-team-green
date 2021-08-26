import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
//import DarkMode from './components/DarkMode';
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
    <Route path='/' component={HomeScreen} exact />
    <Route path='/product/:id' component={ProductScreen} />
    </Container>
    </main>
    </Page>
    <Footer />
    </>
    </Router>
  );
}

// const ThemeImage = styled.img`
//     max-width: 40px;
    
// `;
const Button = styled.button`
  margin: 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: .2s all ease-in-out;
  background: none;
  color: ${props => !props.light ? "#333" : "#eee"};
  
  &:hover {
    transition: .2s all ease-in-out;
  
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

// const Title = styled.div`
//   color: ${props => !props.light ? "#333" : "#eee"};
//   font-size: 40px;
// `;

export default App;
