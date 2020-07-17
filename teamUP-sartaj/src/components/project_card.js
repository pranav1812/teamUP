import React, { Component } from 'react';
import {MdModeEdit} from 'react-icons/md'
import Members from './project_member';

class Project_Card extends Component {
    state = {  }
    render() { 
        return (  
            <div>
                <div className="project_card  project_info">
                    <div className="row mr-0">
                        <h4 className="card_heading col-10">PROJECT INFO</h4>
                        <i id="todo_btn"><MdModeEdit /></i>
                    </div>
                        
                    <div className="profile_text mt-5">
                        <h2>COMPLETE NAME</h2>
                        <h3>STATUS</h3>
                        <h6>Description lorem jfwaoiwhwe l waeil wa wa ek kgegmg</h6>
                        <div className="mt-3">
                            <h5>MEMBERS</h5>
                            <Members />
                            <Members />
                            <Members />
                            <Members />
                        </div>
                        <h6>Git-Hub Repository: jhckuuh;vw</h6>    
                    </div>
                </div> 
            </div>
        );
    }
}
 
export default Project_Card;