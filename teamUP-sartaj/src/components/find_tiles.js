import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

class FindTile extends Component {
    state = {

     }

    render() {
        return (
            <div>
                <div className="find_tile">
                    <Card className="find_card">
                        <Card.Img variant="top" src={this.props.people.profileImg} />
                        <Card.Body>
                            <Card.Title>{this.props.people.name}</Card.Title>
                            <Card.Text>
                               {this.props.people.tellus}...
                            </Card.Text>
                            <Button className="home_find_button">View Full Profile</Button>
                        </Card.Body>
                    </Card>
                </div>

            </div>
         );
    }
}

export default FindTile;
