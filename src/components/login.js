import React from 'react';
import { Component } from 'react';
import { Form,Button } from 'react-bootstrap';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            new_user: true
         };
    }

    toggleState = (e) => {
        this.setState({
            new_user: !this.state.new_user 
        })
        console.log(this.state.new_user);
    }
    
    render() { 
        return ( 
            <div className="container">
                <h1 className="login_title">LOG IN</h1> 
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label  className="login_text" >Email address</Form.Label>
                        <Form.Control  type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label  className="login_text">Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check  className="login_text" type="checkbox" label="Check me out" />
                    </Form.Group>
                    
                    <div className="row">
                        <Button className="login_button" type="submit">
                            Log In
                        </Button>
                        <Button onClick={this.toggleState} className="login_button" type="submit">
                            Cancel
                        </Button>
                    </div>
                    <Form.Label  className="login_text" >Not a User, <a>Sign In</a></Form.Label>
                </Form>
            </div>
            
         )
    }
}
 
export default Login;