import { Component } from 'react';
import Main from './components/main';

import Colors from './utils/colors.js';
import logoIcon from './components/images/oowlish.svg';
/*Nav className={'px-0' = 0 pra esquerda | my-4 = 4 pra cima e pra baixo | pt-3 = 3 acima | 'pb-5' = 5 abaixo} */

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';

class App extends Component {
  
  render() {
  return (
    <div>
      {[false].map((expand) => (
        <Navbar key={expand} style={{background: Colors.Gridcolor}} expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">
        <img src={logoIcon} style={{width: '75px', filter: "invert(100%) sepia(100%) saturate(0%) hue-rotate(261deg) brightness(103%) contrast(103%)", align:"center"}}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Browse our pages
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Dashboard</Nav.Link>
                  <Nav.Link href="/charts">Charts</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      
            <div className="page-content" />
            <Main/>
    </div>
  );
}
}

export default App;