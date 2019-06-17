import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon ,MDBBtn} from "mdbreact";
import store from '../store';
import Power from '@material-ui/icons/PowerSettingsNew';
class NavbarLog extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggleCollapse = this.toggleCollapse.bind(this);
    this.outSesion = this.outSesion.bind(this);
}

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

outSesion= () => {
  store.dispatch({
    type:  "OUT",
    payload: "block",
})
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
    <div style={{display : store.getState().navlog}} >
    <MDBNavbar color="grey lighten-5" dark expand="md" >
      <MDBNavbarBrand style={styles.logo}>
         <MDBNavLink to="/" className="indigo-text" style={styles.text}>Cruise Laundry</MDBNavLink>
      </MDBNavbarBrand>
     
        <MDBNavbarNav left>
 
        </MDBNavbarNav>
        <MDBNavbarNav right>                   
          <MDBNavItem active style={styles.signup} >
            <MDBNavLink to="/"className="indigo-text"><Power onClick={this.outSesion()}/></MDBNavLink>
          </MDBNavItem>  
        </MDBNavbarNav>
    </MDBNavbar>
    </div>
    );
  }
}

export default NavbarLog;