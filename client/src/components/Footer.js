import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Navbar, Container, Nav } from 'react-bootstrap'
import {mdbreact} from 'mdbreact'

export const Footer = () => {
    const divStyle = {
        backgroundColor: '#394646',
        position: 'relative',
        left: '0',
        bottom: '0',
        right: '0',
        height: '40px'
    }


    return (
        <footer class="page-footer font-small cyan darken-3">

            <div class="container">

                <div class="row">

                    <div class="col-md-12 py-5">
                        <div class="mb-5 flex-center">

                            <a class="fb-ic">
                                <i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>
                            <a class="tw-ic">
                                <i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>
                            <a class="gplus-ic">
                                <i class="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>
                            <a class="li-ic">
                                <i class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>
                            <a class="ins-ic">
                                <i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>
                            <a class="pin-ic">
                                <i class="fab fa-pinterest fa-lg white-text fa-2x"> </i>
                            </a>
                        </div>
                    </div>

                </div>

            </div>

            <div class="footer-copyright text-center py-3">Copyright © 2019 by Matthew Renda. All rights reserved.
          
        </div>

    </footer>

    )
}