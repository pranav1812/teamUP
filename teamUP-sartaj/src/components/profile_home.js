import React, { Component } from 'react';
import Profile_Img from '../images/test2.png'
import axios from 'axios';
class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      profile: '',
      profileImg: ''
     }
  }
  componentDidMount(){
    axios.get('http://localhost:8000/register/getprofile').then(response => {

      this.setState({
        profile: response.data.profile,
        profileImg: response.data.profileImg
      })
      console.log(this.state.profileImg)
    }).catch(err => {
      console.log(err)
    });
  }

    render() {
        return (
            <div>
                <div className="profile">
                    <img className="profile_img" src={this.state.profileImg} alt="abc" />
                    <div className="profile_text">
                        <h2>{this.state.profile.name}</h2>
                        <h3>{this.state.profile.username}</h3>
                        <h6>{this.state.profile.tellus}</h6>
                        <div className="row mt-5">
                            <div className="col-6 mt-4">
                                <h6>Mobile No: {this.state.profile.phone}</h6>
                                <h6>E-Mail: {this.state.profile.mail}</h6>
                                <h6>Skills: {this.state.profile.username}
                                </h6>
                            </div>
                            <div className="col-6">
                                <h5>COMPLETED PROJECTS</h5>
                                <li>Project 1</li>
                                <li>Project 1</li>
                                <li>Project 1</li>
                                <li>Project 1</li>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
         );
    }
}

export default Profile;
