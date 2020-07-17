import React, { Component } from 'react';
import { Card,Button,Modal } from 'react-bootstrap';

class Projects_Card extends Component {
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
                    <Card className="projects_card">
                        <Card.Body>
                            <Card.Title>{this.props.project.name}</Card.Title>
                            <Card.Text>
                              {this.props.project.description}
                            </Card.Text>
                            <Button  onClick={this.handleModal} className="home_find_button ongoing_projects_btn">View Full Project</Button>
                        </Card.Body>
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
                                            <h6 className="col-3">Created By: </h6>
                                            <p>ibIdvywvfj</p>
                                        </div>
                                        <div className="row">
                                            <h6 className="col-3">Description: </h6>
                                            <p>lsnnnKKBFkbiBKNDoBBEEIK NEKB  oibwirg BFHAIV</p>
                                        </div>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer className="modal_header">
                                    <Button className="modal_btn" onClick={this.handleModal}>Chat with Leader</Button>
                                    <Button className="modal_btn" onClick={this.handleModal}>Close</Button>
                                </Modal.Footer>
                            </Modal>
                    </Card>
                </div>
         );
    }
}

export default Projects_Card;
