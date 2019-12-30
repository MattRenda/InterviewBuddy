import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import { About } from './components/About';
import  Home  from './components/Home';
import Deck from './components/Deck'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const App = () => {
    const style ={
        paddingBottom: '50px'
    }
    return (
        <>
            <Header />
            <div style={style}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/deck" component={Deck}/>
                        <Route exact path="/about" component={About} />
                    </Switch>
                </BrowserRouter>
            </div>
            <Footer />
        </>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)