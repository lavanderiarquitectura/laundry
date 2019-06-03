import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon ,MDBBtn} from "mdbreact";

class NavbarLog extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggleCollapse = this.toggleCollapse.bind(this);
}

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}


render() {
  

  const styles ={
    icon :{
        marginRight: "10px",
    },
    signup :{
      marginRight: "5px",
    },
    logo :{
      padding: "0",

    },
    text :{
      fontFamily: 'Lobster',
    }


  }

  return (
    <MDBNavbar color="grey lighten-5" dark expand="md" >
      <MDBNavbarBrand style={styles.logo}>
         <MDBNavLink to="/" className="indigo-text" style={styles.text}>Cruise Laundry</MDBNavLink>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={this.toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
        <MDBNavbarNav left>
 
        </MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBNavItem active style={styles.signup} >
            <MDBNavLink to="/" className="indigo-text">Logout</MDBNavLink>
          </MDBNavItem> 
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
    );
  }
}

export default NavbarLog;