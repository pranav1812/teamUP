import React, { Component } from 'react';
import Navbar from './navbar';
import Project_Card from './project_card';
import Project_Todo from './project_todo';
import Project_Chat from './project_chat';

class Project extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Navbar />
                <div className="project">
                    <div className="row">
                        <h4 className="col-12 project_heading">Name of the Project</h4>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-3 mb-3">
                            <Project_Card />
                        </div>
                        <div className="col-12 col-md-4 mb-3">
                            <Project_Todo />
                        </div>
                        <div className="col-12 col-md-5 mb-3">
                            <Project_Chat />
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Project;