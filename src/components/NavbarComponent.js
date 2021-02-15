import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Nav, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { base } from '../shared/baseurl';

class NavToggle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <div className="navbar__container">
                <Navbar className="shadow" color="light" light expand="md">
                    <div className="container-fluid">

                        <NavbarBrand className="logo offset-1" href="/">
                            <img src={base + '/images/logo.png'} className="logo__img" alt="COMIDA RÁPIDA" />
                        </NavbarBrand>

                        <NavbarToggler onClick={this.toggleNav} />

                        <Collapse isOpen={this.state.isNavOpen} navbar className="offset-md-1 offset-lg-3 offset-xl-5">
                            <Nav navbar>

                                <NavItem className="nav_item">
                                    <NavLink className="nav-link" to="/home">Home</NavLink>
                                </NavItem>

                                <NavItem className="nav_item">
                                    <NavLink className="nav-link" to="/menu">Menu</NavLink>
                                </NavItem>

                                <NavItem className="nav_item">
                                    <NavLink className="nav-link" to="/about">About</NavLink>
                                </NavItem>

                                <NavItem className="nav_item">
                                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default NavToggle;