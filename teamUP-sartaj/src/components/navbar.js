import React, { Component } from 'react';
import { Navbar,Nav,Form,FormControl,Button,DropdownButton,Dropdown } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';
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
                            <Link to="/home"><Nav.Link href="#home"><h6 className="navbar_text">HOME</h6></Nav.Link></Link>
                            <Link to="/findpeople"><Nav.Link href="#findpeople"><h6 className="navbar_text">FIND PEOPLE</h6></Nav.Link></Link>
                            <Link to="/idea"><Nav.Link href="#idea"><h6 className="navbar_text">IDEAS</h6></Nav.Link></Link>
                            <Link to="/competition"><Nav.Link href="#competition"><h6 className="navbar_text">COMPETITIONS</h6></Nav.Link></Link>
                            <Link to="/competition"><Nav.Link href="#"><h6 className="navbar_text">DISCUSSION FORUM</h6></Nav.Link></Link>
                            <Link to="/competition"><Nav.Link href="#"><h6 className="navbar_text">ABOUT US</h6></Nav.Link></Link>
                        </Nav>
                        <Form inline>
                            <i className="nav-icon"><FaPlus /></i>
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
