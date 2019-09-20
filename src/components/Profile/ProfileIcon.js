import React, { Component } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';


class ProfileIcon extends Component {
  constructor(props){
    super(props);
    this.state = {
      dropdownOpen: false,
    };
  }
  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }))
  }
  render() {
    console.log(this.state.dropdownOpen)
    return (
      <div className="pa4 tc">
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle
            tag="span"
            data-toggle="dropdown"
            aria-expanded={this.state.dropdownOpen}
          >
            <img
              src="http://tachyons.io/img/logo.jpg"
              className="br-100 ba h3 w3 dib" alt="avatar"
            />
        </DropdownToggle>
          <DropdownMenu
            className="b--transparent shadow-5"
            style={{marginTop: '20px', backgroundColor: 'rgba(255, 255, 255, 0.5)'}}
          >
            <DropdownItem>Profile</DropdownItem>
            <DropdownItem>Sign out</DropdownItem>
            <DropdownItem disabled>More cool stuff (comming soon´)</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

export default ProfileIcon;