import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavBar = () => {
    return (
        <div>
            <Navbar expand="sm" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="Generic CRUD!"
                        />
                        Generic CRUD React App
                    </Navbar.Brand>

                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/submit">Submit</Nav.Link>
                        <Nav.Link href="/submitAsync">Submit Async</Nav.Link>
                        <Nav.Link href="/upload">Upload files</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
        /*
        <div>
            {// Navigation Bar based on Bootstrap 5.0}
            <nav class="navbar navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img
                            src={logo}
                            alt=""
                            width="30"
                            height="24"
                            class="d-line-block align-text-top"
                        />
                        Generic CRUD
                    </a>
                    
                </div>
            </nav>
            </div> */
    );
};

export default NavBar;
