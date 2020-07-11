import React, { Component } from 'react';
import TileHomeToDo from './tilehomeToDo'
import NavigationBar from './navbar';
import TileFindHome from './tilehomeFind';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <NavigationBar />
                
                <div className="home">
                    <div className="home_card grid1">
                        <h4 className="card_heading">PROFILE</h4>
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
                        <h4 className="card_heading">UPCOMING COMPETITIONS</h4>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Home;