import React, { Component } from 'react';
import {MdModeEdit} from 'react-icons/md'

class Project_Card extends Component {
    state = {  }
    render() { 
        return (  
            <div>
                <div className="project_card  project_info">
                    <div className="row mr-0">
                            <h4 className="card_heading col-10">PROJECT INFO</h4>
                            <button className="card_heading_btn col-1 m-2"><MdModeEdit /></button>
                        </div>
                        
                            <div className="profile_text">
                                <h2>COMPLETE NAME</h2>
                                <h3>STATUS</h3>
                                <h6>Description lorem jfwaoiwhwe l waeil wa wa ek kgegmg</h6>
                                <div className="row mt-5">
                                    <div className="col-12 mt-3">
                                        <h5>MEMBERS</h5>
                                        <h6>iohi dpio i</h6>
                                        <h6>njsbvub</h6>
                                        <h6>njsbvub</h6>
                                        <h6>njsbvub</h6>
                                    </div>
                                </div>
                                <h6>Git-Hub Repository: jhckuuh;vw</h6>    
                            </div>
                </div>
            </div>
        );
    }
}
 
export default Project_Card;