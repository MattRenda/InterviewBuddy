import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

export const Header = () => {
    const linkStyle = {
        color: 'black',
        textDecoration: 'none'
    }
    const brandStyle = {
        textAlign: 'center',
        fontSize: '50px'
    }
    const navStyle = {
        display: 'inline',
        padding: '20px',
    }

    const containerStyle = {
        backgroundImage: `url(${'https://live.staticflickr.com/1690/25312859625_9cfe562a12_b.jpg'})`
    }

    const style = {
        margin: '20px'
    }
    return (
        <div>
            <div style={containerStyle}>
                <a style={linkStyle} href="/"><div style={brandStyle}>Interview Buddy</div></a>
            </div>
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs lg="2">
                    </Col>
                    <Col md="auto">
                        <Button style={style} variant="info" href="/">Home</Button>
                        <Button style={style} variant="info" href="/about">About</Button>
                    </Col>
                    <Col xs lg="2">
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

