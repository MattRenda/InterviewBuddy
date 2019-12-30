import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Jumbotron,Container} from 'react-bootstrap'

export const About = () => {

    return (
        <div>
            <Jumbotron fluid>
                <Container>
                    <p>
                        About this page, <br /> This website was created to help
                        interviewees prep for upcoming interviews.
                         </p>
                </Container>
            </Jumbotron>

        </div>
    )

}
