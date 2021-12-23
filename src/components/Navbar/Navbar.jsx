import React from "react"

import './Navbar.scss'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Logo from '../../images/ICPC-Logo.png'

class NavigationBar extends React.Component {
    // state = {
    //     itemsMenu: [],
    //     itemsServices: [],
    //     menuShow: false
    // }
    async componentDidMount() {
        console.log('Navbar code')
    }
    // Componente do NavBar
    render () {
        return (
            <div className="navbar">
                <div><img src={Logo} width="70"/></div>
                <Nav
                activeKey="/"
                >
                    <Nav.Item>
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>
                    <NavDropdown title="Sobre" id="nav-dropdown">
                        <NavDropdown.Item href="/pilares">3 Pilares</NavDropdown.Item>
                        <NavDropdown.Item href="/metas">Metas</NavDropdown.Item>
                        <NavDropdown.Item href="/valores">Valores Permanentes</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item eventKey="4.4">All Itens</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Item>
                        <Nav.Link href='/problematica'>Problematica</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Projetos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Blog</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Contato</Nav.Link>
                    </Nav.Item>
                </Nav>
                {/* <Navbar bg="light" expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="#"><img src={Logo} width="70" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Link</Nav.Link>
                            <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" disabled>
                            Link
                            </Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar> */}
            </div>
        )
    }
}

export default NavigationBar