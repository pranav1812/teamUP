import React, { Component } from 'react';
import { Navbar,Nav,Form,FormControl,Button,DropdownButton,Dropdown } from 'react-bootstrap';
import { GoPlus } from 'react-icons/go';
import { Link } from "react-router-dom";
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
                            <Nav.Link href="#home"><h6 className="navbar_text"><Link to="/home">HOME</Link></h6></Nav.Link>
                            <Nav.Link href="#"><h6 className="navbar_text"><Link to="/findpeople">FIND PEOPLE</Link></h6></Nav.Link>
                            <Nav.Link href="#"><h6 className="navbar_text"><Link to="/idea">IDEAS</Link></h6></Nav.Link>
                            <Nav.Link href="#"><h6 className="navbar_text"><Link to="/competition">COMPETITIONS</Link></h6></Nav.Link>
                            <Nav.Link href="#"><h6 className="navbar_text"><Link to="/competition">DISCUSSION FORUM</Link></h6></Nav.Link>
                            <Nav.Link href="#"><h6 className="navbar_text"><Link to="/competition">ABOUT US</Link></h6></Nav.Link>
                        </Nav>
                        <Form inline>
                            <DropdownButton id="dropdown-item-button" title="+">
                                <Dropdown.Item as="button">Action</Dropdown.Item>
                                <Dropdown.Item as="button">Another action</Dropdown.Item>
                                <Dropdown.Item as="button">Something else</Dropdown.Item>
                            </DropdownButton>
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
