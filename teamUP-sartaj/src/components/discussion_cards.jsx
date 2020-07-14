import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Comment from './comment';

class Discussion_Cards extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container discussion">
                <div className="row">
                    <h3 className="col-6 col-sm-9">Topic of Discussion</h3>
                    <Button className="col-4 col-sm-2" id="discussion_btn">Join Discussion</Button>
                </div>
                <p>description nsljfhoahv; oia vh  v khwa lhwawebf fkbkevfatt bfkfabw</p>
                <h4>Number of People Involved in the discussion</h4>
                <h4>Top Comments: </h4>
                <Comment />
                <Comment />
            </div>
         );
    }
}
 
export default Discussion_Cards;