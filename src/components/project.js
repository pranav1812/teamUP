import React, { Component } from 'react';
import Navbar from './navbar';
import Project_Card from './project_card';

class Project extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Navbar />
                <div className="project">
                    <div className="row">
                        <h1 className="col-12 project_heading">Name of the Project</h1>
                    </div>
                    <div className="row">
                        <div className="col-5 ">
                            <Project_Card />
                        </div>
                        <div className="col-2">
                            <Project_Card />
                        </div>
                        <div className="col-4">
                            <Project_Card />
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Project;