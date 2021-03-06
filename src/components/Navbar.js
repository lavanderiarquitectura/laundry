import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon ,MDBBtn} from "mdbreact";

class Navbar extends React.Component {

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
    }
  }

  return (
    <MDBNavbar color="grey lighten-5" dark expand="md" >
      <MDBNavbarBrand style={styles.logo}>
         <MDBNavLink to="/" className="indigo-text">Cruise Laundry</MDBNavLink>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={this.toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
        <MDBNavbarNav left>
 
        </MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBNavItem active style={styles.signup} >
            <MDBNavLink to="/register" className="indigo-text">Sign Up</MDBNavLink>
          </MDBNavItem>         
          <MDBNavItem active style={styles.signup} >
            <MDBNavLink to="/" className="indigo-text">Operator</MDBNavLink>
          </MDBNavItem>  
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
    );
  }
}

export default Navbar;