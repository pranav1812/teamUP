import React, { Component } from 'react';

class TileHomeToDO extends Component {
    /*constructor(props){
      super(props);
      this.state = {
      }
    }*/
    render() {
       
        return (
            <div className="row align-items-center tile_home_todo mr-3 ml-3">
                 <div className="col-9">
                     {this.props.tod.task}
                 </div>
                 <div className="col-3 ml-0">
                     <button className="tile_home_button " type="button">Done</button>
                     <button className="tile_home_button ml-2 X" type="button">X</button>
                 </div>
            </div>
          );
    }
}

export default TileHomeToDO;
