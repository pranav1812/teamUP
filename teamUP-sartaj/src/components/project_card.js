import React, { Component } from 'react';
import {MdModeEdit} from 'react-icons/md'
import Members from './project_member';

/*const Member = props => (
  <h6>{props.memb.name}</h6>
)*/

class Project_Card extends Component {
    state = {  }

    /*members() {
      console.log(this.props.project.members)
    return this.props.project.members.map(memb => {
      return <Member memb={memb}/>;
    })
  }*/
    render() {
      console.log(this.props.project.members)
        return (
            <div>
                <div className="project_card  project_info">
                    <div className="row mr-0">

                            <h4 className="card_heading col-10">PROJECT INFO</h4>
                            <button className="card_heading_btn col-1 m-2"><MdModeEdit /></button>
                        </div>

                            <div className="profile_text">
                                <h2>{this.props.project.name}</h2>
                                <h6>{this.props.project.description}</h6>
                                <div className="row mt-5">
                                    <div className="col-12 mt-3">
                                        <h5>MEMBERS</h5>
                                        {/*this.members()*/}
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
