import React, { Component } from 'react';
import { Navbar,Nav,Form,FormControl,Button,Modal } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';
import { Link } from "react-router-dom";
class NavigationBar extends Component {
    constructor()
    {
        super();
        this.handleModal = this.handleModal.bind(this);
        this.state={
            show:false
        }
    }

    handleModal()
    {
        this.setState({show:!this.state.show})
    }

    render() {
        return (
            <div className="navigation_bar">
                <Navbar expand="xl">
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
                            <i className="nav-icon"  onClick={this.handleModal}><FaPlus /></i>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button className="navbar_button" variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                    <Modal show={this.state.show} onHide={()=>this.handleModal()}>
                                <Modal.Header  className="modal_header">
                                    <h2>Name</h2>
                                    <span className="close-modal-btn" onClick={this.handleModal}>x</span>
                                </Modal.Header>
                                <Modal.Body  className="modal_body">
                                    <div>
                                        
                                        <div className="row"> 
                                            <h6 className="col-3">Name: </h6>
                                            <p>ibIdvywvfj</p>
                                        </div>
                                        <div className="row"> 
                                            <h6 className="col-3">User-Name: </h6>
                                            <p>ibIdvywvfj</p>
                                        </div>
                                        <div className="row"> 
                                            <h6 className="col-3">Branch: </h6>
                                            <p>coe</p>
                                        </div>
                                        <div className="row"> 
                                            <h6 className="col-3">Bio: </h6>
                                            <p>lsnnnKKBFkbiBKNDoBBEEIK NEKB  oibwirg BFHAIV</p>
                                        </div>
                                        <div className="row"> 
                                            <h6 className="col-3">Skills: </h6>
                                            <p>lsnnnKKBFkbiBKNDoBBEEIK NEKB  oibwirg BFHAIV</p>
                                        </div>
                                        <div className="row"> 
                                            <h6 className="col-3">Fields Interested: </h6>
                                            <p>lsnnnKKBFkbiBKNDoBBEEIK NEKB  oibwirg BFHAIV</p>
                                        </div>
                                        <div className="row"> 
                                            <h6 className="col-3">Git-Hub Link: </h6>
                                            <p>lsnnnKKB</p>
                                        </div>
                                        <div className="row"> 
                                            <h6 className="col-3">E-Mail: </h6>
                                            <p>lsnnnKKB</p>
                                        </div>
                                        <div className="row"> 
                                            <h6 className="col-3">Projects: </h6>
                                        </div>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer className="modal_header">
                                    <Button className="modal_btn" onClick={this.handleModal}>Chat</Button>
                                    <Button className="modal_btn" onClick={this.handleModal}>Close</Button>
                                </Modal.Footer>
                            </Modal>
                </Navbar>
            </div>
          );
    }
}

export default NavigationBar;
