import React, { Component } from 'react';
import TileHomeToDo from './tilehomeToDo'
import NavigationBar from './navbar';
import TileFindHome from './tilehomeFind';
import Profile from './profile_home'
import { MdModeEdit } from 'react-icons/md';
import Projects_Card from './ongoing_projects_card';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <NavigationBar />
                
                <div className="home">
                    <div className="home_card grid1">
                    <div className="row mr-0">
                            <h4 className="card_heading col-10">PROFILE</h4>
                            <button className="card_heading_btn col-1 m-2"><MdModeEdit /></button>
                        </div>
                        <Profile />
                    </div>
                    <div className="home_card grid2">
                        <div className="row mr-0">
                            <h4 className="card_heading col-10">TO-DO LIST</h4>
                            <button className="card_heading_btn col-1 m-2">+</button>
                        </div>
                        <TileHomeToDo />
                        <TileHomeToDo />
                        <TileHomeToDo />
                        <TileHomeToDo />
                        <TileHomeToDo />
                    </div>
                    <div className="home_card grid3">
                        <h4 className="card_heading">FIND PEOPLE</h4>
                        <div className="row">
                            <TileFindHome />
                            <TileFindHome />
                            <TileFindHome />
                            <TileFindHome />
                            <TileFindHome />
                            <TileFindHome />
                        </div>
                    </div>
                    <div className="home_card grid4">
                    <div className="row mt-2">
                            <h4 className="card_heading col-10">PROJECTS WORKING ON</h4>
                            <button className="card_heading_btn_prj col-1 mt-2 mb-2 ">+</button>
                        </div>
                        <div className="row">
                            <Projects_Card />
                            <Projects_Card />
                            <Projects_Card />
                            <Projects_Card />
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Home;