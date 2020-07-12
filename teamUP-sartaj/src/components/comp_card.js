import React, { Component } from 'react';
import {Card,Button} from 'react-bootstrap';

class Comp_Card extends Component {
    state = {  }
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
                            <Button className="home_find_button">View Full Profile</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
         );
    }
}
 
export default Comp_Card;