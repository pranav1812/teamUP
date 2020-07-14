import React, { Component } from 'react';
import NavigationBar from './navbar';
import FindTile from './find_tiles';
import FindNav from './find_nav';
import Footer from './footer';

class Find extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <NavigationBar />
                <FindNav />
                <div className="container find">
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <FindTile />
                        </div>
                        <div className="col-12 col-md-3">
                            <FindTile />
                        </div>
                        <div className="col-12 col-md-3">
                            <FindTile />
                        </div>
                        <div className="col-12 col-md-3">
                            <FindTile />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <FindTile />
                        </div>
                        <div className="col-12 col-md-3">
                            <FindTile />
                        </div>
                        <div className="col-12 col-md-3">
                            <FindTile />
                        </div>
                        <div className="col-12 col-md-3">
                            <FindTile />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <FindTile />
                        </div>
                        <div className="col-12 col-md-3">
                            <FindTile />
                        </div>
                        <div className="col-12 col-md-3">
                            <FindTile />
                        </div>
                        <div className="col-12 col-md-3">
                            <FindTile />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
         );
    }
}
 
export default Find;
