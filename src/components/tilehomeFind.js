import React, { Component } from 'react';
import {Card,Button } from 'react-bootstrap';

class TileFindHome extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="home_tile_find">
                <Card className="home_find_card">
                    <Card.Img variant="top" src="#" />
                    <Card.Body>
                        <Card.Title>Name</Card.Title>
                        <Card.Text>
                            nfjknv l4h3u4iu l gtqgy gygksejgzbb
                        </Card.Text>
                        <Button type="button" className="home_find_button">View Profile</Button>
                    </Card.Body>
                </Card>
            </div>
         );
    }
}
 
export default TileFindHome;