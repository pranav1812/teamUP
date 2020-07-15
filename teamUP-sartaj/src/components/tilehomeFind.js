import React, { Component } from 'react';
import {Card,Button } from 'react-bootstrap';

class TileFindHome extends Component {
    state = {  }
    render() {
        return (
            <div className="home_tile_find">
                <Card className="home_find_card">
                    <Card.Img className="find_tile_img" variant="top" src={this.props.people.profileImg} />
                    <Card.Body>
                        <Card.Title>{this.props.people.name}</Card.Title>
                        <Card.Text>
                            {this.props.people.tellus}
                        </Card.Text>
                        <Button type="button" className="home_find_button">View Profile</Button>
                    </Card.Body>
                </Card>
            </div>
         );
    }
}

export default TileFindHome;
