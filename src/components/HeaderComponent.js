import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar dark>
                <div className="container">
                    <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                </div>
                </Navbar>
                <Jumbotron>
                    <div class="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante Con Fusion</h1>
                                <p>We take inspiration from the React course</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        );
    }
}

export default Header;
