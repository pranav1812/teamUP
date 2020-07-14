import React, { Component } from 'react';
import Navbar from './navbar';
import Comment from './comment';
import {Button} from 'react-bootstrap';
import {FaArrowAltCircleUp,FaArrowAltCircleDown,FaBookmark} from 'react-icons/fa';

class Topic extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="discussion_topic">
                <Navbar />
                <div className="container topic">
                    <div className="row">
                        <h3 className="col-10">Topic of Discussion</h3>
                        <i className="topic_icons"><FaArrowAltCircleUp /></i>
                        <i className="topic_icons"><FaArrowAltCircleDown /></i>
                        <i className="topic_icons"><FaBookmark /></i>
                    </div>
                    <p>description nsljfhoahv; oia vh  v khwa lhwawebf fkbkevfatt bfkfabw</p>
                    <h4>Number of People Involved in the discussion</h4>
                    <h4>Comments: </h4>
                    <div className="row">
                        <input className="topic_input col-7 col-sm-9 ml-4 mr-2" placeholder="Add Comment"></input>
                        <Button id="discussion_btn" className="col-3 col-sm-2">Add Comment</Button>
                    </div>
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                </div>
            </div>
         );
    }
}
 
export default Topic;