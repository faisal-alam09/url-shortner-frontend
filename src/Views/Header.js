import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'

export default function Header() {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Url Shortner</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#features">shortned urls</Nav.Link>
                        <Nav.Link href="#pricing">About</Nav.Link>
                    </Nav>
                    <span>by faisal-alam</span>
                </Container>
            </Navbar>
        </>
    )
}
