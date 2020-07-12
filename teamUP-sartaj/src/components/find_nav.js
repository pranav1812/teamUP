import React, { Component } from 'react';
import { Navbar,Dropdown,DropdownButton } from 'react-bootstrap';

class FindNav extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Navbar expand="lg">
                <DropdownButton class="find_nav_btn" id="dropdown-item-button" title="Filter By">
                    <Dropdown.Item as="button">Action</Dropdown.Item>
                    <Dropdown.Item as="button">Another action</Dropdown.Item>
                    <Dropdown.Item as="button">Something else</Dropdown.Item>
                </DropdownButton>
                <DropdownButton class="find_nav_btn" id="dropdown-item-button" title="Sort By">
                    <Dropdown.Item as="button">Action</Dropdown.Item>
                    <Dropdown.Item as="button">Another action</Dropdown.Item>
                    <Dropdown.Item as="button">Something else</Dropdown.Item>
                </DropdownButton>
                </Navbar>
            </div>
         );
    }
}
 
export default FindNav;