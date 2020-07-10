import React, { Component } from 'react';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap';

class NavigationBar extends Component {
    state = {  }
    render() { 
        return (
            <div className="navigation_bar">
                <Navbar expand="lg">
                    <Navbar.Brand href="#home"><h3 className="navbar_title">Team<span>UP</span>.</h3></Navbar.Brand>
                    <Navbar.Toggle className="navbar_toggler_icon" aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse  id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home"><h6 className="navbar_text">HOME</h6></Nav.Link>
                            <Nav.Link href="#"><h6 className="navbar_text">FIND PEOPLE</h6></Nav.Link>
                            <Nav.Link href="#"><h6 className="navbar_text">DISCUSSION FORUM</h6></Nav.Link>
                            <Nav.Link href="#"><h6 className="navbar_text">COMPETITIONS</h6></Nav.Link>
                            <Nav.Link href="#"><h6 className="navbar_text">IDEAS</h6></Nav.Link>
                        </Nav>
                        <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button className="navbar_button" variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
          );
    }
}
 
export default NavigationBar;