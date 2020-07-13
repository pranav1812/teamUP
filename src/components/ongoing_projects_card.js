import React, { Component } from 'react';
import { Card,Button } from 'react-bootstrap';

class Projects_Card extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div>
                    <Card className="projects_card">
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
 
export default Projects_Card;