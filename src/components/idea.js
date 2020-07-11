import React, { Component } from 'react';
import NavBar from './navbar';
import Idea_Card from './idea_card';

class Idea extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <NavBar />
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <Idea_Card />
                        </div>
                        <div className="col-12 col-md-4">
                            <Idea_Card />
                        </div>
                        <div className="col-12 col-md-4">
                            <Idea_Card />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <Idea_Card />
                        </div>
                        <div className="col-12 col-md-4">
                            <Idea_Card />
                        </div>
                        <div className="col-12 col-md-4">
                            <Idea_Card />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <Idea_Card />
                        </div>
                        <div className="col-12 col-md-4">
                            <Idea_Card />
                        </div>
                        <div className="col-12 col-md-4">
                            <Idea_Card />
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Idea;
