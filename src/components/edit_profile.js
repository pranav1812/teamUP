import React from 'react';
import { Component } from 'react';
import { Form,Button } from 'react-bootstrap';

class EditProfile extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container">
                <h1 className="heading">Team<span>UP</span>.</h1>
                <div className="container edit_profile">
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label className="edit_profile_text">Your Image</Form.Label>
                        <Form.Control  className="edit_profile_text" type="file" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label className="edit_profile_text">Select Your Branch</Form.Label>
                        <Form.Control as="select">
                        <option>COE</option>
                        <option>CSE</option>
                        <option>ENC</option>
                        <option>ECE</option>
                        <option>ME</option>
                        <option>CE</option>
                        <option>BT</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.Description">
                        <Form.Label className="edit_profile_text">Tell us about yourselves</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="edit_profile_text">Select the fileds you are interested to work in</Form.Label>
                            <Form.Check  className="edit_profile_text" type="radio" label="Machine Learning" aria-label="radio 1" />
                            <Form.Check  className="edit_profile_text" type="radio" label="Web Development" aria-label="radio 1" />
                            <Form.Check  className="edit_profile_text" type="radio" label="Android App Development" aria-label="radio 1" />
                            <Form.Check  className="edit_profile_text" type="radio" label="Blockchain Technology" aria-label="radio 1" />
                            <Form.Check  className="edit_profile_text" type="radio" label="Internet of Things" aria-label="radio 1" />
                            <Form.Check  className="edit_profile_text" type="radio" label="Artificial Inteligence" aria-label="radio 1" />
                            <Form.Check  className="edit_profile_text" type="radio" label="Games Development" aria-label="radio 1" />
                            <Form.Check  className="edit_profile_text" type="radio" label="Competitive Coding" aria-label="radio 1" />
                    </Form.Group> 
                    <Form.Group controlId="exampleForm.Skills">
                        <Form.Label className="edit_profile_text">skills</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.">
                        <Form.Label className="edit_profile_text">Git-Hub profile</Form.Label>
                        <Form.Control as="input" />
                    </Form.Group>
                    <Button onClick={this.toggleState} className="edit_profile_button" type="submit">
                            Submit
                    </Button>
                </Form>
                </div>
                
            </div>

         );
    }
}
 
export default EditProfile;