import React, { Component } from 'react';
import Navbar from './navbar';
import { Button,Modal } from 'react-bootstrap';
import Discussion_Card from './discussion_cards';

class Discussion_Forum extends Component {
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
            <div className="discussion_forum">
                <Navbar />
                <div className="row discussion_heading">
                    <h3 className="col-7 col-sm-8">DISCUSSION FORUM</h3>
                    <Button id="discussion_btn" className="col-2" onClick={this.handleModal}>Add a New Topic</Button>
                </div>
                <Modal show={this.state.show} onHide={()=>this.handleModal()}>
                                <Modal.Header  className="modal_header">
                                    <h2>Name</h2>
                                    <span className="close-modal-btn" onClick={this.handleModal}>x</span>
                                </Modal.Header>
                                <Modal.Body  className="modal_body">
                                    <div>
                                        <div className="row">
                                            <h6 className="col-3">Topic: </h6>
                                            <input placeholder="Topic"></input>
                                        </div>
                                        <div className="row">
                                            <h6 className="col-3">Description: </h6>
                                            <input placeholder="Description of Topic"></input>
                                        </div>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer className="modal_header">
                                    <Button className="modal_btn">Add</Button>
                                    <Button className="modal_btn" onClick={this.handleModal}>Close</Button>
                                </Modal.Footer>
                            </Modal>
                <Discussion_Card />
                <Discussion_Card />
                <Discussion_Card />
                <Discussion_Card />
            </div>
         );
    }
}
 
export default Discussion_Forum;