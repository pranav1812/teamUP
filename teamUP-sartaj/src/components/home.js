import React, { Component } from 'react';
import TileHomeToDo from './tilehomeToDo'
import NavigationBar from './navbar';
import TileFindHome from './tilehomeFind';
import Profile from './profile_home'
import { MdModeEdit } from 'react-icons/md';
import Projects_Card from './ongoing_projects_card';
import {FaPlusCircle} from 'react-icons/fa';
import {Modal,Button} from 'react-bootstrap';
import Footer from './footer';
import axios from 'axios';

class Home extends Component {
  constructor(props){
    super(props);
    this.onChangeTodo = this.onChangeTodo.bind(this);
    //this.todolis = this.todolis.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      show:false,
      todo: "" ,
      todolists: [],
      peoples: []
     }
  }

  handleModal()
    {
        this.setState({show:!this.state.show})
    }

  onChangeTodo(e){
    this.setState({
      todo: e.target.value
    })
  }
  componentDidMount(){
    axios.get('http://localhost:8000/register/getprof')
    .then(response => {
      console.log(response.data.profs)
    this.setState({ peoples: response.data.profs })

  })
  .catch((error) => {
    console.log(error);
  })
  }
  onSubmit(e){
    e.preventDefault();
    
    const work = {
      tasks: this.state.todo
    }
    axios.put('http://localhost:8000/todo/personalToDo/add', work).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err)
    });

    axios.get('http://localhost:8000/todo/getpersonaltodo').then(response => {
      this.setState({
        todolists: response
      })
      console.log(response)
      alert(JSON.stringify(this.state.todolists))
    }).catch(err => {
      console.log(err)
    })

  }

  peopl(){
    return this.state.peoples.map(people => {
      return <TileFindHome people={people}/>
    })
  }


    render() {
        return (
            <div>
                <NavigationBar />

                <div className="home">
                    <div className="home_card grid1">
                    <div className="row mr-0">
                            <h4 className="card_heading col-10">PROFILE</h4>

                            <i className="todo_btn"><MdModeEdit /></i>
                        </div>
                        <Profile />
                    </div>
                    <div className="home_card grid2">
                        <h4 className="card_heading">TO-DO LIST</h4>
                        <div className="row">
                          <form className="col-11" onSubmit={this.onSubmit}>
                          <input className="inputtodo" type="text" placeholder="ADD TASK" value={this.state.todo} onChange={this.onChangeTodo} />

                          <button type='submit'>Add</button>

                          <i className="todo_btn"><FaPlusCircle /></i>

                          </form>
                          </div>
                    </div>
                    <div className="home_card grid3">
                        <h4 className="card_heading">FIND PEOPLE</h4>
                        <div className="row">
                            {this.peopl()}
                        </div>
                    </div>
                    <div className="home_card grid4">
                    <div className="row mt-2">
                            <h4 className="card_heading col-10">PROJECTS WORKING ON</h4>
                            {/*<button className="card_heading_btn_prj col-1 mt-2 mb-2 ">+</button>*/}
                            <i className="todo_btn"  onClick={this.handleModal}><FaPlusCircle /></i>
                            <Modal show={this.state.show} onHide={()=>this.handleModal()}>
                                <Modal.Header  className="modal_header">
                                    <h2>Name</h2>
                                    <span className="close-modal-btn" onClick={this.handleModal}>x</span>
                                </Modal.Header>
                                <Modal.Body  className="modal_body">
                                    <div>
                                        
                                        <div className="row"> 
                                            <h6 className="col-3">Name: </h6>
                                            <p>ibIdvywvfj</p>
                                        </div>
                                        <div className="row"> 
                                            <h6 className="col-3">User-Name: </h6>
                                            <p>ibIdvywvfj</p>
                                        </div>
                                        <div className="row"> 
                                            <h6 className="col-3">Branch: </h6>
                                            <p>coe</p>
                                        </div>
                                        <div className="row"> 
                                            <h6 className="col-3">Bio: </h6>
                                            <p>lsnnnKKBFkbiBKNDoBBEEIK NEKB  oibwirg BFHAIV</p>
                                        </div>
                                        <div className="row"> 
                                            <h6 className="col-3">Skills: </h6>
                                            <p>lsnnnKKBFkbiBKNDoBBEEIK NEKB  oibwirg BFHAIV</p>
                                        </div>
                                        <div className="row"> 
                                            <h6 className="col-3">Fields Interested: </h6>
                                            <p>lsnnnKKBFkbiBKNDoBBEEIK NEKB  oibwirg BFHAIV</p>
                                        </div>
                                        <div className="row"> 
                                            <h6 className="col-3">Git-Hub Link: </h6>
                                            <p>lsnnnKKB</p>
                                        </div>
                                        <div className="row"> 
                                            <h6 className="col-3">E-Mail: </h6>
                                            <p>lsnnnKKB</p>
                                        </div>
                                        <div className="row"> 
                                            <h6 className="col-3">Projects: </h6>
                                        </div>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer className="modal_header">
                                    <Button className="modal_btn" onClick={this.handleModal}>Chat</Button>
                                    <Button className="modal_btn" onClick={this.handleModal}>Close</Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                        <div className="row">
                            <Projects_Card />
                            <Projects_Card />
                            <Projects_Card />
                            <Projects_Card />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
         );
    }
}

export default Home;
