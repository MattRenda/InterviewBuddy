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
            .then(res => { this.setState({ counter: res.data.questionNumber }) })
            .catch(err => { console.log(err) })

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

    reRender = () => {
        this.setState(this.baseState)
    }
    render() {

        return (
            <div>

                <Container>

                    <form onSubmit={this.handleSubmit}>
                        <p className="question-number">Question {this.state.counter + 1}</p>

                        <input
                            className="question-input"
                            placeholder="Question"
                            onChange={this.handleChange}
                            type='text'
                            name='question'
                            required
                        ></input>
                        <input
                            className="question-answer"
                            placeholder="Answer"
                            onChange={this.handleChange}
                            type='text'
                            name='answer'
                            required
                        ></input>

                        <div className="buttons">
                            <button onClick={this.resetQuestions}>Reset</button>
                            <button type='submit' >Submit Question!</button>
                        </div>


                    </form>

                    <div className="buttons"><button><a style={{textDecoration:'none', color:'black'}} href="/deck">Time to study!</a></button>
                    </div>


                </Container>
            </div>
        )
    }
}

export default Home;