import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon ,MDBBtn} from "mdbreact";
import store from '../store';

class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggleCollapse = this.toggleCollapse.bind(this);
    this.logOut =  this.logOut.bind(this);
    this.register =  this.register.bind(this);
    this.operator =  this.operator.bind(this);
    this.in =  this.in.bind(this);

}
componentDidMount(){
}

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

logOut(){
  sessionStorage.setItem("Navbar", 0);
  sessionStorage.setItem("Token", undefined);
  sessionStorage.setItem("TokenA", undefined);
  sessionStorage.setItem("Operators", false);
  sessionStorage.setItem("Users", false);
}
register(){
  sessionStorage.setItem("Navbar", 3);
}
operator(){
  sessionStorage.setItem("Navbar", 2);
}
in(){
  sessionStorage.setItem("Navbar", 0);
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
  var navbar
  const nav = sessionStorage.getItem("Navbar");
  console.log(nav)


  if(nav == 0 || nav == null || nav == undefined){ //Login
      navbar =
      <MDBNavbar color="grey lighten-5" dark expand="md" >
      <MDBNavbarBrand style={styles.logo}>
         <MDBNavLink to="/" className="indigo-text" onClick={this.in} style={styles.text}>Cruise Laundry</MDBNavLink>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={this.toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
        <MDBNavbarNav left>
 
        </MDBNavbarNav>
        <MDBNavbarNav right>
      <MDBNavItem active style={styles.signup} >
              <MDBNavLink to="/register" onClick={this.register} className="indigo-text">Sign Up</MDBNavLink>
      </MDBNavItem>         
      <MDBNavItem active style={styles.signup} >
              <MDBNavLink to="/login/operaciones" onClick={this.register} className="indigo-text">Operator</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem active style={styles.signup} >
              <MDBNavLink to="/" onClick={this.in} className="indigo-text">About Us</MDBNavLink>
      </MDBNavItem>  
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
     
  }else if(nav == 1){ //Informacion
      navbar =
      <MDBNavbar color="grey lighten-5" dark expand="md" >
      <MDBNavbarBrand style={styles.logo}>
         <MDBNavLink to="/" className="indigo-text" onClick={this.in} style={styles.text}>Cruise Laundry</MDBNavLink>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={this.toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
        <MDBNavbarNav left>
 
        </MDBNavbarNav>
        <MDBNavbarNav right>
        <MDBNavItem active style={styles.signup} >
            <MDBNavLink to="/" onClick = {this.logOut} className="indigo-text">Logout</MDBNavLink>
    </MDBNavItem>         
    <MDBNavItem active style={styles.signup} >
            <MDBNavLink to="/"onClick={this.in}  className="indigo-text">About Us</MDBNavLink>
    </MDBNavItem>  
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>

  }else if(nav == 2){ //Operator
    navbar =
    <MDBNavbar color="grey lighten-5" dark expand="md" >
      <MDBNavbarBrand style={styles.logo}>
         <MDBNavLink to="/" className="indigo-text" onClick={this.in} style={styles.text}>Cruise Laundry</MDBNavLink>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={this.toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
        <MDBNavbarNav left>
 
        </MDBNavbarNav>
        <MDBNavbarNav right>
        <MDBNavItem active style={styles.signup} >
            <MDBNavLink to="/" onClick = {this.logOut} className="indigo-text">Logout</MDBNavLink>
    </MDBNavItem>         
    <MDBNavItem active style={styles.signup} >
            <MDBNavLink to="/" onClick={this.in} className="indigo-text">About Us</MDBNavLink>
    </MDBNavItem> 
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>

  }else if(nav == 3){ //Register
    navbar =
    <MDBNavbar color="grey lighten-5" dark expand="md" >
      <MDBNavbarBrand style={styles.logo}>
         <MDBNavLink to="/" className="indigo-text" onClick={this.in} style={styles.text}>Cruise Laundry</MDBNavLink>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={this.toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
        <MDBNavbarNav left>
 
        </MDBNavbarNav>
        <MDBNavbarNav right>
        <MDBNavItem active style={styles.signup} >
            <MDBNavLink to="/" className="indigo-text" onClick={this.in}>Sign In</MDBNavLink>
        </MDBNavItem>    
        <MDBNavItem active style={styles.signup} >
                <MDBNavLink to="/login/operaciones" onClick={this.register} className="indigo-text">Operator</MDBNavLink>
        </MDBNavItem>     
        <MDBNavItem active style={styles.signup} >
                <MDBNavLink to="/"onClick={this.in} className="indigo-text">About Us</MDBNavLink>
        </MDBNavItem> 
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  
 
  }

  return (
    <div style={{display : store.getState().nav}} >
    {navbar}
    </div>
    );
  }
}

export default Navbar;