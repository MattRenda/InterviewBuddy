import React, { Component } from 'react'
import { Card, Button, Col, Row, Container, Form } from 'react-bootstrap'
import axios from 'axios'
import Deck from './Deck'

class Home extends Component {
    constructor(props) {
        super(props);        

        this.state = {
            question: '',
            answer: '',
            counter: 0

        };
        axios.get('/api/cards/total')
        .then(res => {this.setState({counter: res.data.questionNumber}) })
        .catch(err => {console.log(err)})

        this.baseState = this.state;
    }


    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });

    }

    handleSubmit = (event) => {
        const { question, answer } = this.state;
        axios.post('/api/cards', { question, answer })
    }

    resetQuestions = () => {
        axios.post('/api/cards/reset');  
        this.reRender();
    }

    reRender =() =>{
        this.setState(this.baseState)
    }
    render() {
        const style = {
            marginTop: '50px'
        }

        return (
            <div>

                <Container>
                    <p>
                        Interview Buddy allows you to fill out flash cards to quiz yourself for an upcoming interview.<br />
                        Filling out the card below and submitting it will save one card to your deck of flash cards.<br />
                        Happy studying!
                    </p>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <Card style={{ width: '17rem' }}>
                                <Card.Body>
                                    <Form onSubmit={this.handleSubmit}>
                                        <Card.Title>Question {this.state.counter +1}</Card.Title>
                                        <Card.Text>
                                            <input
                                                placeholder="Question"
                                                onChange={this.handleChange}
                                                type='text'
                                                name='question'
                                            ></input>
                                            <input
                                                placeholder="Answer"
                                                onChange={this.handleChange}
                                                type='text'
                                                name='answer'
                                            ></input>
                                        </Card.Text>
                                        <Button variant="info" onClick={this.resetQuestions}>Reset</Button>
                                        <Button variant="info" type='submit' >Submit Question!</Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md="auto" >
                            <p style={style}>
                                Once you've finished you can start by clicking the "Time to study!" button below.
                        </p>
                            <div class="text-center">
                                <Button variant="info" href="/deck">Time to study!</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Home;