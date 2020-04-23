import React from 'react';
import ReactDom from 'react-dom'
import Button from 'react-dom';
import useState from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';
import { FaBeer, FaGoogle, FaGooglePlus, FaGithub, FaYoutube } from 'react-icons/fa';
import pic from './pic.png';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/container';
import a1 from './a1.png';
import Alert from 'react-bootstrap/Alert';
import img from './img.png';
import img1 from './img1.png'
import img2 from './img2.png'
import img3 from './img3.png'
import img4 from './img 4.png'
import img5 from './img 5.png'
import insta from './insta.png'
import you from './you.png'
import * as ReactBootstrap from 'react-bootstrap'
import Popover from 'react-bootstrap/Popover'
import { OverlayTrigger, overlay } from 'react-bootstrap'
import render from 'react'
import StickyFooter from 'react-sticky-footer'
import Figure from 'react-bootstrap/Figure'


import { ToastHeader, Toast, Toastbody } from 'react-bootstrap';



const popover  = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Village Girl</Popover.Title>
    <Popover.Content>
      And here's <strong>Girl</strong>. It's
      right?
    </Popover.Content>
  </Popover>
);



const example = () => (
  <OverlayTrigger trigger="click" placement="right" overlay={popover}>
    <Button variant="success">Click me to see</Button>
  </OverlayTrigger>
)




function App() {


  return (

    <>
      <div className="root col" >

        <Navbar sticky='top' className='navbar' collapseOnSelect expand="lg" variant="dark">
          <Navbar.Brand href="#home">Colors</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Home</Nav.Link>

              <Nav.Link eventKey={2} href="#memes">
                About
      </Nav.Link>
              <Nav.Link href="#deets">More</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <body>
          <Jumbotron className='jum'>
            <Container>
              <img className='img' src={a1} alt='src'></img>
              <h1 className='hh'>&#9819; I'm Siri 
</h1>

              
              <p className='mainpara'><strong>☃  <em>Painting is just another way of keeping a diary” Pablo Picasso</em></strong></p>
              

            </Container>
          </Jumbotron>
          <hr />

          <div id='c'>
            <div className="row">
              <div className='col-sm-1'></div>
              <div id='c1' className="card col-sm-3">
                <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                  <button className='b' onClick={popover}><img id='i' src={img} alt={img} /></button>
                </OverlayTrigger>

              </div>
              <div className='col-sm-4'></div>
              <div id='c1' className="card col-sm-3">
                <img id='i' src={img1} alt={img1} />
              </div>
              <div className='col-sm-1'></div>

            </div>
          </div>

          <hr />

          <div id='c'>
            <div className="row">
              <div className='col-sm-1'></div>
              <div id='c1' className="card col-sm-3">
                <img id='i' src={img2} alt={img2} />
              </div>
              <div className='col-sm-4'></div>
              <div id='c1' className="card col-sm-3">
                <img id='i' src={img3} alt={img3} />
              </div>
              <div className='col-sm-1'></div>

            </div>
          </div>

          <hr />

          <div id='c'>
            <div className="row">
              <div className='col-sm-1'></div>
              <div id='c1' className="card col-sm-3">
                <img id='i' src={img4} alt="Avatar" />
              </div>
              <div className='col-sm-4'></div>
              <div id='c1' className="card col-sm-3">
                <img id='i' src={img5} alt="Avatar" />
              </div>
              <div className='col-sm-1'></div>

            </div>

            <hr />
            <Jumbotron className='jum' fluid>
              <Container >
                <ReactBootstrap.Row>
                  <ReactBootstrap.Col>
                    <a href='https://www.youtube.com/channel/UCnSA7ws4y0ZGDWLQJtu8vRw'><img className="youlogo" src={you} /></a>

                  </ReactBootstrap.Col>
                  <ReactBootstrap.Col>
                   <h2><strong>✔<em>Some Arts</em></strong></h2>
                   <h4>✔<em>start Paint</em></h4>
                   <h4>✔<em>Fallow Us</em></h4>
      </ReactBootstrap.Col>

                </ReactBootstrap.Row>

              </Container>
            </Jumbotron>
          </div>

        </body>







      </div>
      <div>
        <footer className="page">


          <a href='https://www.instagram.com/sireesha_kosuru/' className='a'> <img className='ins' src={insta} size={50} /></a>




          <div class="footer-copyright text-center py-3"><strong>© 2020 Copyrights Colors</strong>
            <li><small>This is a page where you can explore some colors</small></li>

          </div>

        </footer>

      </div>


    </>

  );
}


export default App;

