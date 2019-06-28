import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import logo from '../../img/logo.png';

import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MeetingRoom from '@material-ui/icons/MeetingRoom';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Prendas from "../../components/Operaciones/Prendas";

import Factura from "../../components/Operaciones/Factura";

import { createMuiTheme, MuiThemeProvider, withStyles } from "@material-ui/core/styles";
import { ThemeProvider } from '@material-ui/styles';
import red from '@material-ui/core/colors/red';

import Person from '@material-ui/icons/Person';
import MonetizacionOn from '@material-ui/icons/MonetizationOn';

import store from '../../store'

var config_data = require('../../ipconfig.json')
var back_end = config_data.backIP

class Informacion extends React.Component{


    constructor(props) {
        super(props);
        this.state = {
          name: '',
          room: '',
          cloths: '0',
          invoice: 'none',
          clothes: 'none',
          id: '',
        };
        this.changeStateC = this.changeStateC.bind(this);
       this.changeStateI = this.changeStateI.bind(this);
     
       
      //  this.changeState = this.changeState.bind(this);
    }

    changeStateC(){
            this.setState( {clothes: "block", invoice:"none"})

    }
    changeStateI(){
            this.setState( {clothes: "none", invoice:"block"})
    }  

  

    componentDidMount(){       
	
	
        var token = store.getState().token
        var id = store.getState().user  
        
        console.log(token) 
        this.setState({id: id})

        return fetch(back_end + "/ldap-auth/api/auth/getuser/"+id+"?token="+token, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin" : "*"
            }
          })
          .then(response => {
            if (!response.ok) {
              
            }
            return response.json();
          })
          .then(json => {
            console.log(json);
            var id_user = this.state.id
            this.setState({name: json["name"] + " " + json["last_name"], room: json["room_id"]})       

                
          })
          .catch(error => {
            console.log(error);
          });
      }

    render(){

        const styles ={
            div :{
                padding: "5px 15px 8px 15px",
                borderRadius: "10px",
                marginTop: "20px",
                backgroundColor: "#FAFAFA",
                display: this.props.display,

            },
            botonInicio:{
                width: '90%',
                height: '45px',
                marginBottom: '0px',
                marginTop:'5px',
            },
            label:{
                color: 'white',
            },
            divInput:{
                textAlign: 'center',
                marginBottom: '0.5px'
            },
            inputs:{
                marginTop: '8px',
                height: '40px',
                marginBottom: '0',
            },
            logo:{
                width: '80%',
                marginLeft:'5px',
            },
            olvidaste:{
                fontSize:"12px",
                marginBottom: "5px",
                marginTop:"5px",
                textAlign: "center",
            },
            divBottom:{
                marginTop:"5px",
            },
            text:{
                width: "97%",
                marginBottom:"3px",
            },
            textR:{
                marginBottom:"3px",
                width: "46%"
            },
            textC:{
                marginBottom:"3px",
                marginLeft: "5px",
                width: "50%"
            },
            information:{
                paddingTop:"16px",
                paddingRight:"0",
            },
            buttons:{
                padding:"10px 0 0 0",
            },
            divInfo:{
                paddingLeft:"5px",
            },
            row:{
                padding: "0",
                marginLeft: "5px",
                marginRight: "5px",
                backgroundColor: "white",
                paddingBottom: "5px",
            },
            rowBottom:{
                padding: "0",
                marginLeft: "5px",
                marginRight: "5px",
                marginTop:"10px",
                backgroundColor: "white",
                paddingBottom: "5px",
                overflowX: "auto"
            },
            welcome:{
                textAlign:"center",
                marginTop:"10px",
            },

        }
        
        var display = sessionStorage.getItem("Users");
        var Informacion
        if( display == "false" || display == null){
            Informacion = <div style={{textAlign: "center", margin: "10px 0 0 0"}}><h1>ERROR 403 Forbidden - Usted no tiene permiso para acceder a esta ruta.</h1></div>
        }else{
            Informacion = <div className="container col-md-5 mb-10" style={styles.div}>               
            <div className='row' style={styles.row}>
                <div className='col-md-2' style={{textAlign: "center", margin:"auto"}}>
                    <img id="logo" src={logo} style={styles.logo}></img>
                </div>
                <div className='col-md-7' style={styles.information}>
                    <div style={styles.divInfo}>                        
                    <TextField
                        disabled
                        id="input-with-icon-textfield"
                        label="Name User"
                        style={styles.text}
                        value={this.state.name}
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                            <AccountCircle />
                            </InputAdornment>
                        ),
                        }}
                    />
                    <TextField
                        disabled
                        id="input-with-icon-textfield"
                        label="Number Room"
                        style={styles.textR}
                        value={this.state.room}
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                            <MeetingRoom />
                            </InputAdornment>
                        ),
                        }}
                    />
                    <TextField
                        disabled
                        id="input-with-icon-textfield"
                        label="Id Number"
                        style={styles.textC}
                        value={this.state.id}
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                            <ShoppingCart/>
                            </InputAdornment>
                        ),
                        }}
                    />
                    </div>                        
                </div>
                <div className='col-md-3' style={styles.buttons}>
                    <div className="" style={styles.divInput}>                
                    <Link to='#'><Button onClick={this.changeStateC} variant="outlined" focusVisible style={styles.botonInicio} color="primary"><Person/>Clothes</Button></Link>
                    </div>
                    <div className="" style={styles.divInput}>                
                    <Link to='#'><Button onClick={this.changeStateI}  variant="outlined" focusVisible style={styles.botonInicio} color="primary"><MonetizacionOn/>Billing</Button></Link>
                    </div>
                </div>
            </div>
            <div className='row' style={styles.rowBottom}>
                <div className='col-12 ' style={{textAlign: "center", padding: "0"}}>
                <Prendas display={this.state.clothes} room={this.state.room}/>
                <Factura display={this.state.invoice} room={this.state.room}/>
                </div>
            </div>
        </div>      
        }
        return(
            <div>
                {Informacion}
            </div>
            )
    }
}

export default Informacion;