import React, { Component } from 'react';
import NavigationBar from './navbar';
import FindTile from './find_tiles';
import FindNav from './find_nav';

class Find extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <NavigationBar />
                <FindNav />
                <div className="container find">
                    <div className="row">
                        <div className="col-12 col-sm-4">
                            <FindTile />
                        </div>
                        <div className="col-12 col-sm-4">
                            <FindTile />
                        </div>
                        <div className="col-12 col-sm-4">
                            <FindTile />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-4">
                            <FindTile />
                        </div>
                        <div className="col-12 col-sm-4">
                            <FindTile />
                        </div>
                        <div className="col-12 col-sm-4">
                            <FindTile />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-4">
                            <FindTile />
                        </div>
                        <div className="col-12 col-sm-4">
                            <FindTile />
                        </div>
                        <div className="col-12 col-sm-4">
                            <FindTile />
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Find;
