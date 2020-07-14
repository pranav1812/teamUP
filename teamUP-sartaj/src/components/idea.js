import React, { Component } from 'react';
import NavBar from './navbar';
import Idea_Card from './idea_card';
import Idea_Img from '../images/idea.svg';
import Footer from './footer';

class Idea extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <NavBar />
                
                <div className="container">
                    <div className="row idea">
                        <h1 className="col-12 col-md-5 idea_heading">Find and Join New Ideas to <span>Work</span> upon</h1>
                        <img src={Idea_Img} className="col-12 col-md-7"></img>
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
                <Footer />
            </div>
         );
    }
}
 
export default Idea;
