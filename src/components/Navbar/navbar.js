import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';


export default function NavHeader({ currentPage, pageChange }) {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand href="#aboutme" onClick={() => pageChange('Aboutme')}>Michael Heer</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav variant="pills" defaultActiveKey="/aboutme" className="justify-contents-end secondary">
                        <Nav.Link href="/React-Portfolio/#aboutme" onClick={() => pageChange('Aboutme')}>About Me</Nav.Link>
                        <Nav.Link href="/React-Portfolio/#portfolio" onClick={() => pageChange('Projects')}>Portfolio</Nav.Link>
                        <Nav.Link href="/React-Portfolio/#contactme" onClick={() => pageChange('ContactMe')}>Contact Me</Nav.Link>
                        <Nav.Link href="/React-Portfolio/#resume" onClick={() => pageChange('Resume')}>Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};