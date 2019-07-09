import { Route, Link, Switch, Redirect } from 'react-router-dom';
import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import ReactDOM from 'react-dom';
import axios from 'axios';

import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import store from '../../store'
import createHistory from "history/createBrowserHistory";

var config_data = require('../../ipconfig.json')
var back_end = config_data.backIP

class LoginOper extends React.Component{


 
    constructor(props) {
        super(props);
        this.state = {
          
          user: '',
          password: '',
         
        };
       this.handleChangeUser = this.handleChangeUser.bind(this);
       this.handleChangePass = this.handleChangePass.bind(this);
       this.handleClose = this.handleClose.bind(this);
       this.notificar = this.notificar.bind(this);

       this.obtenerAuth = this.obtenerAuth.bind(this);
    }

    handleChangeUser(event){        
        this.setState({user: event.target.value})
    }
    handleChangePass(event){
        this.setState({password: event.target.value})
    }
    notificar(mss){
        this.setState({setOpen: true, open: true, message: mss})
    }   

    handleClose() {        
        this.setState({setOpen: false, open: false})
      }
   

    async obtenerAuth() {

        var user = this.state.user
        var password = this.state.password

        if( user == "" || password==""){
            this.notificar("Login failed. Enter your credentials.");
           }
    
 
         return axios.get(back_end+"/authenticate_operator/".concat(user,"/",password))
         
           .then(json => {
 
             const history = createHistory();
             console.log(json);   
             console.log(json.data.login);
             sessionStorage.setItem("TokenA", json.data.login);   
             if(json.data.login != undefined && json.data.login != "failure"){
                sessionStorage.setItem("Navbar", 2);
                sessionStorage.setItem("Users", false);
                sessionStorage.setItem("Operators", true);
                return this.props.history.push('/operaciones');              
             }else{
                this.notificar("Login failed. Invalid user or password.");
                 this.setState({password:"", user: ""})
             }
                      
                         
           })
           .catch(error => {
             console.log(error);
           });
         }
       

    
    render(){



        const styles ={
            
            botonI:{
                minWidth: '222px',
                height: '45px',
                marginBottom: '0px',
                marginTop:'8px',
            },
            divInput:{
                textAlign: 'center',
                marginBottom: '14px'
            },
            inputs:{
                marginTop: '8px',
                height: '40px',
                marginBottom: '0',
            },        
            text:{
                fontFamily : 'Sanchez',
                margin: "0"
            },
            divLogin :{
                padding: "15px 15px 8px 15px",
                borderRadius: "10px",
                marginTop: "20px",
                backgroundColor: "#FAFAFA",
                display: this.state.displayL,

            },

        }

        var op = sessionStorage.getItem("Operators");
        var us = sessionStorage.getItem("Users");
        var loginOperator
        if( op ==  "true"){

            sessionStorage.setItem("Navbar", 2);
            this.props.history.push('/operaciones');
        }else if( us === "true"){            

            sessionStorage.setItem("Navbar", 1);
            this.props.history.push('/informacion');
        }else{
        var loginOperator = 
            <div className="container col-md-2 mb-8" style={styles.divLogin}>
                <form>
                <div className='form-group' style={{textAlign:"center", margin:'auto'}}>
                     <h3 style={styles.text}>Operations</h3>
                </div>
                <div className="form-group" style={styles.divInput}>
                    <TextField
                        autoFocus
                        id="user"
                        value={this.state.user}
                        onChange={this.handleChangeUser}
                        label="User"
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
                <div className="form-group" style={styles.divInput}>                
                    <Button onClick={this.obtenerAuth} variant="outlined" focusVisible style={styles.botonI} color="primary">Login</Button>
                </div>
              </form>
                
            </div>
        
    }


        return(          
            <div>
                {loginOperator}
                <Snackbar
           variant="error"
           anchorOrigin={{
           vertical: 'bottom',
           horizontal: 'left',
           }}
           open={this.state.open}
           autoHideDuration={6000}
           onClose={this.handleClose}
           ContentProps={{
           'aria-describedby': 'message-id',
           }}
           message={<span id="message-id">{this.state.message}</span>}
           action={[                    
           <IconButton
               key="close"
               aria-label="Close"
               color="inherit"
               onClick={this.handleClose}
           >
               <CloseIcon />
           </IconButton>,
           ]}
           
       />
            </div>  
                   
            )
    }
}

export default LoginOper;