import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Jumbotron, Container } from 'react-bootstrap'

export const About = () => {

    return (
        <div>
            <Jumbotron fluid>
                <Container>
                    <p>
                        Interview Buddy allows you to fill out flash cards to quiz yourself for an upcoming interview.<br />
                        Filling out the card below and submitting it will save one card to your deck of flash cards.<br />
                        Happy studying!
                            </p>
                    <p >
                        Once you've finished you can start by clicking the "Time to study!" button.
                        </p>
                </Container>
            </Jumbotron>

        </div>
    )

}
