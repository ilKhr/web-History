import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const logoTrtu = "https://s8.hostingkartinok.com/uploads/images/2019/12/e75bb074ef0917d6eb94a41370b137fc.jpg"

class NavbarComponents extends Component {
    state = {}
    render() {
        return (
        <>
        <Navbar bg="dark" variant="dark" >
        <Navbar.Brand href="/"><img src={logoTrtu} alt="" width="60" height="60" /></Navbar.Brand>
                    <Nav className="mr-200">
                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link href='/university'>University</Nav.Link>
                            <Nav.Link href='/museum'>Museum</Nav.Link>
                            <Nav.Link href='/exhibit'>Exhibit</Nav.Link>
                    </Nav>
                    </Navbar>
            </>
                );
            }
        }
        
export default NavbarComponents;