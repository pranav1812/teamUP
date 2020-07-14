import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Home from './components/home';
import EditProfile from './components/edit_profile';
import Find from "./components/findpeople";
import Idea from "./components/idea";
import Competition from "./components/competition";
import Project from "./components/project";
import Discussion_Forum from './components/discussion_forum';
import Topic from './components/discussion_topic';
//import App from './App.';

ReactDOM.render(
  <Router>
    <Route path="/editprofile" component={EditProfile} exact/>
    <Route path="/" component={App} exact/>
    <Route path="/home" component={Home} exact/>
    <Route path="/findpeople" component={Find} exact/>
    <Route path="/idea" component={Idea} exact/>
    <Route path="/competition" component={Competition} exact/>
    <Route path="/project" component={Project} exact/>
    <Route path="/discussion" component={Discussion_Forum} exact/>
    <Route path="/topic" component={Topic} exact/>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
