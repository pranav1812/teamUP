import React from 'react';
import { Component } from 'react';
import { Form,Button } from 'react-bootstrap';

class Signup extends Component {
    
    render() { 
        return ( 
            <div className="container">
                <h1 className="signup_title">SIGN UP</h1> 
                <Form>
                    <Form.Group controlId="formBasicName">
                        <Form.Label  className="signup_text" >Name</Form.Label>
                        <Form.Control  type="name" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPhone">
                        <Form.Label  className="signup_text" >Mobile Number</Form.Label>
                        <Form.Control  type="number" placeholder="Enter Mobile Number" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label  className="signup_text" >Email address</Form.Label>
                        <Form.Control  type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label  className="signup_text">Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check  className="signup_text" type="checkbox" label="Check me out" />
                    </Form.Group>
                    
                    <div className="row">
                        <Button className="signup_button" type="submit">
                            Log In
                        </Button>
                        <Button className="signup_button" type="button">
                            Cancel
                        </Button>
                    </div>
                    <Form.Label  className="signup_text" >Already a user, <a>Sign In</a></Form.Label>
                </Form>
            </div>
            
         )
    }
}
 
export default Signup;