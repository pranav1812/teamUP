import React, { Component }  from 'react';
import { Card, Button,Modal } from 'react-bootstrap';
import Modal_img from '../images/test2.png';

class FindTile extends Component {
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
            <div>
                <div className="find_tile">
                    <Card className="find_card">
                        <Card.Img variant="top" src="/" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button className="home_find_button" onClick={this.handleModal}>View Full Profile</Button>
                            <Modal show={this.state.show} onHide={()=>this.handleModal()}>
                                <Modal.Header  className="modal_header">
                                    <h2>Name</h2>
                                    <span className="close-modal-btn" onClick={this.handleModal}>x</span>
                                </Modal.Header>
                                <Modal.Body  className="modal_body">
                                    <div>
                                        <img className="modal_img" src={ Modal_img }  />
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
                        </Card.Body>
                    </Card>
                </div>
                
            </div>   
         );
    }
}
  
 
export default FindTile;