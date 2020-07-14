import React, { Component } from 'react';
import NavigationBar from './navbar';
import FindTile from './find_tiles';
import FindNav from './find_nav';
import Footer from './footer';
import axios from 'axios';

class Find extends Component {
    constructor(props){
      super(props);
      this.state = {
        peoples: []

       }
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
    peopl(){
      return this.state.peoples.map(people => {
        return <div className="col-12 col-md-3">
        <FindTile people={people}/>
        </div>
      })
    }
    render() {
        return (
            <div>
                <NavigationBar />
                <FindNav />
                <div className="container find">
                    <div className="row">
                        {this.peopl()}
                </div>
                </div>
                <Footer />
            </div>
         );
    }
}

export default Find;
