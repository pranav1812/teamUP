import React, { Component } from 'react';
import Profile_Img from '../images/test2.png' 

class Profile extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div className="profile">
                    <img className="profile_img" src={Profile_Img}></img>
                    <div className="profile_text">
                        <h2>COMPLETE NAME</h2>
                        <h3>@username</h3>
                        <h6>Description lorem jfwaoiwhwe l waeil wa wa ek kgegmg</h6>
                        <div className="row mt-5">
                            <div className="col-6 mt-4">
                                <h6>Mobile No: 9786246692</h6>
                                <h6>E-Mail: abc@thapar.edu</h6>
                                <h6>Skills: App development, Web Development, Machine learning,
                                    Block Chain,Internet of Things, Artificial Intelligence
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