import React, { Component } from 'react';
import { Navbar,Dropdown,DropdownButton } from 'react-bootstrap';

import ls from 'local-storage'

class FindNav extends Component {
    state = {  }
    
    setFilter=(e)=>{
        this.setState({
            ppf: e.target.value.toLowerCase()
        })
    }

    filter=()=>{
               
        ls.set("people_filter", this.state.ppf)     
        alert(ls.get("people_filter"))  
    }
    render() { 
        return (            
        <div>        
            <input onBlur={this.setFilter} />
            <button onClick={this.filter} >Filter</button>           
        </div>
         );
    }
}
 
export default FindNav;