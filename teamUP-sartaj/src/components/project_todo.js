import React, { Component } from 'react';
import Project_Todo_list from './project_todo_list';
import {FaPlusCircle} from 'react-icons/fa';

class Project_Todo extends Component {
    state = {  }
    render() { 
        return (  
            <div>
                <div className="project_card">
                    <div className="row mr-0">
                        <h4 className="card_heading col-10">TO-DO LIST</h4>
                        <i className="col-1 m-2"><FaPlusCircle /></i>
                    </div>
                    <Project_Todo_list />
                    <Project_Todo_list />
                    <Project_Todo_list /> 
                    <Project_Todo_list />
                    <Project_Todo_list />
                    <Project_Todo_list />
                    <Project_Todo_list /> 
                    <Project_Todo_list />
                    <Project_Todo_list />           
                </div>
            </div>
        );
    }
}
 
export default Project_Todo;