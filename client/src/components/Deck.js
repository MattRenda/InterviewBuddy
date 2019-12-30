import React, { Component } from 'react'
import { Card, Button, Col, Row, Container } from 'react-bootstrap'
import axios from 'axios'

class Deck extends Component{
    constructor(props) {
        super(props);
        this.state = {
            question:'',
            answer:'',
            display: 'none',
            previousQuestion: ''
        };

    }
    componentDidMount =() =>{
        this.callQuestion();
    }
    
    callQuestion =() =>{
        this.setState({display: 'none'})
        let self = this;
        axios.get('/api/cards')
        .then(function (response) {
            // handle success
            if(response.data.question != self.state.previousQuestion){
             self.setState({previousQuestion:response.data.question})
             const q = response.data.question;
             const a = response.data.answer;
             self.setState({question: q, answer: a})
            }
            else self.callQuestion();
         })
    }
 
 
     showAnswer = () =>{
      if(this.state.display === 'none'){
        this.setState({display: 'block'})
      }
      else if(this.state.display === 'block'){
        this.setState({display: 'none'})
      }

    }
        
    
    render(){
        const style = {
            marginTop: '50px'
        }
   
        return (
            <div> 
                <Container>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <Card style={{ width: '17rem' }}>
                                <Card.Body>
                                    <Card.Title>Question</Card.Title>
                                    <Card.Text>
                                        {this.state.question}
                                       <div style={{
                                           display: this.state.display}}>{this.state.answer}</div> 
                                     </Card.Text>
                                     <Button variant="primary" onClick={this.showAnswer}>Check</Button>
                                    <Button variant="primary" onClick={this.callQuestion}>Next Question!</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    
    }
}
export default Deck;