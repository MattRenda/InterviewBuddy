import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

export const Header = () => {

    return (
        <div className='header-color'>
            <Row >
                <Col >
                    <a style={{ textDecoration: 'none' }} href='/'>
                        <div className='linkStyle'>Interview Buddy</div>
                    </a>
                </Col>

                <Col >
                    <a style={{ textDecoration: 'none' }} variant="info" href='/'>
                        <div className='pos-home'>Home</div></a>
                    <a style={{ textDecoration: 'none' }} variant="info" href='/about'>
                        <div className='pos-about'>About</div></a>
                </Col>
            </Row>


        </div>

    )
}

