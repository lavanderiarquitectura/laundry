import React, {Component} from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import logo from '../../img/logo.png';
import axios from 'axios';

import store from '../../store'
import createHistory from "history/createBrowserHistory";


import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";


var config_data = require('../../ipconfig.json')
var back_end = config_data.backIP

class Login extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            personal_id:"",
            password:"",
            authentication: "",
        }
        this.handleChangeUser = this.handleChangeUser.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);
        this.obtenerAuth = this.obtenerAuth.bind(this);
        this.redirection = this.redirection.bind(this);

        this.register = this.register.bind(this);
    }

    
    handleChangeUser(event){        
        this.setState({personal_id: event.target.value})
    }
    handleChangePass(event){
        this.setState({password: event.target.value})
    }

    redirection(){

        sessionStorage.setItem("Navbar", 1);
        return this.props.history.push('/informacion');  
        
    }

    register(){

        sessionStorage.setItem("Navbar", 3);
        
    }

    addUser(){
        sessionStorage.setItem("id", this.state.personal_id)
        console.log(this.state.personal_id)
    }

    async obtenerAuth() {

       var cedula = this.state.personal_id
       var password = this.state.password
       
      /* const request = require('request')
       request.post("http://54.147.135.22:3001/ldap-auth/api/auth/".concat(cedula,"/",password), {
         headers: {
              "Content-Type": "text/plain",
              "Access-Control-Allow-Origin" : "*",
              
          }
       }, (error, res, body) => {
         if (error) {
           console.error(error)
           return                                       
         }else{
           console.log("Efectivo")
           console.log(body)
           
         }
       }                        
       )}*/

        return axios.get(back_end+"/authenticate/".concat(cedula,"/",password))
        
          .then(json => {

            const history = createHistory();
            console.log(json);   
            console.log(json.data.login);
            console.log("TPKEN");
            sessionStorage.setItem("Token", json.data.login);
           // this.setState( {authentication: json.data.login})
           if(json.data.login != undefined ){

                 sessionStorage.setItem("Users", true);
                sessionStorage.setItem("Operators", false);
                this.addUser()
                this.redirection()                
            }else{               
                alert("Credenciales incorrectas. Intentelo de nuevo");
                console.log(json.data.personalId);  
                window.location.reload();
            }
                     
                        
          })
          .catch(error => {
            console.log(error);
          });
        }
      
    


    
    render(){

      


        const theme = createMuiTheme({
            overrides: {
              MuiInputLabel: {
                outline: {
                  transform: "translate(14px, 13px) scale(1)"
                }
              }
            }
          });
    
        
        const styles ={
            divLogin :{
                padding: "15px 15px 8px 15px",
                borderRadius: "10px",
                marginTop: "20px",
                backgroundColor: "#FAFAFA",
                display: this.props.display,

            },
            botonInicio:{
                minWidth: '222px',
                height: '45px',
                marginBottom: '5px',
                marginTop:'8px',
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
                marginBottom: '14px',
            },
            logo:{
                width: '60%',
            },
            olvidaste:{
                fontSize:"12px",
                marginBottom: "0px",
                marginTop:"5px",
                textAlign: "center",
                padding: "0 0 0 124px"
            },
            signup:{
                fontSize:"12px",
                marginBottom: "5px",
                marginTop:"5px",
                textAlign: "center",
            }

        }

        var op = sessionStorage.getItem("Operators");
        var us = sessionStorage.getItem("Users");
        var login
        if( op ==  "true"){
            this.props.history.push('/operaciones');
        }else if( us === "true"){            
            this.props.history.push('/informacion');
        }else{
            login =  
            <form>
            <div className="form-group" style={styles.divInput}>
                <img id="logo" src={logo} style={styles.logo}></img>
            </div>
            <div className="form-group" style={styles.divInput}>
                <TextField
                    autoFocus
                    id="idnumber"
                    value={this.state.personal_id}
                    onChange={this.handleChangeUser}
                    label="Personal Id"
                    margin="normal"
                    style = {styles.inputs}
                    variant="outlined"
                />
           </div>
            <div className="form-group" style={styles.divInput}>                
            <TextField
                    id="password"
                    label="Password"
                    value={this.state.password}
                    onChange={this.handleChangePass}
                    type="password"
                    style = {styles.inputs}
                    margin="normal"
                    variant="outlined"
                />
           </div>
           <div className="form-group" style={styles.olvidaste}><a>Forgot </a><Link to='/'><a>password</a></Link><a>?</a></div>
            <div className="form-group" style={styles.divInput}>                
               <Button onClick={this.obtenerAuth} variant="outlined" focusVisible style={styles.botonInicio} color="primary">Login</Button>
            </div>
           <div className="form-group" style={styles.signup}><a>Don't an account? </a><Link to='/register'><a onClick={this.register}>Sign Up</a></Link></div>
           </form>
            
        }

        return(
            
            <div className="container col-md-3 mb-8" style={styles.divLogin} theme={theme}>
               {login}
            </div>
            )
    }
}

export default Login;