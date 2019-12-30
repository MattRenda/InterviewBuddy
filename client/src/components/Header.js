import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

export const Header = () => {
  
    return (
        <div>
            <div className='constainerStyle' >
                <a className='linkStyle' href='/'><div className='brandStyle'>Interview Buddy</div></a>
            </div>
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs lg="2">
                    </Col>
                    <Col md="auto">
                        <Button className='style' variant="info" href='/'>Home</Button>
                        <Button className='style' variant="info" href='/about'>About</Button>
                    </Col>
                    <Col xs lg="2">
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

