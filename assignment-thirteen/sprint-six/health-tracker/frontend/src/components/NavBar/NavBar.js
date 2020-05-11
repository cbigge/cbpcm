import React from 'react'
import { withRouter } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import auth0Client from '../Auth'
import './NavBar.css'

function NavBar(props) {
    const signOut = () => {
        auth0Client.signOut()
        props.history.replace('/')
    }

    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <Navbar.Brand href="#">HealthIO</Navbar.Brand>
            <Navbar.Toggle aria-controls="main-nav" />
            <Navbar.Collapse id="main-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/">
                        <Nav.Link>Dashboard</Nav.Link>
                    </LinkContainer>
                </Nav>
                <Nav>
                    {
                        !auth0Client.isAuthenticated() &&
                        <Button variant="outline-info" onClick={auth0Client.signIn}>Login</Button>
                    }
                    {
                        auth0Client.isAuthenticated() &&
                        <React.Fragment>
                            <Image roundedCircle src={auth0Client.getProfile().picture} className="nav-img pr-2 d-none d-lg-inline" />
                            <Navbar.Text>
                                Welcome, {auth0Client.getProfile().name}
                            </Navbar.Text>
                            <Button variant="outline-info" className="ml-2" onClick={() => {signOut()}}>Sign Out</Button>
                        </React.Fragment>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(NavBar);
