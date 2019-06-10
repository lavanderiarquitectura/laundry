import React, {Component} from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import logo from '../../img/logo.png';
import axios from 'axios';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";


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
    }

    handleChangeUser(event){        
        this.setState({personal_id: event.target.value})
    }
    handleChangePass(event){
        this.setState({password: event.target.value})
    }


    async obtenerAuth() {

       var cedula = this.state.personal_id
       var password = this.state.password
       
        return fetch("http://localhost:3005/api/users/".concat(cedula,"/",password), {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin" : "*"
            }
          })
          .then(json => {
            console.log(json);   
            console.log(json.login);  
            this.setState( {authentication: json.login})
            return this.props.history.push('/informacion');  
            
                        
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
                minWidth: '80%',
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

        return(
            
            <div className="container col-md-3 mb-8" style={styles.divLogin} theme={theme}>
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
                   <Link to="/informacion"><Button onClick={this.obtenerAuth} variant="outlined" focusVisible style={styles.botonInicio} color="primary">Login</Button></Link>
                </div>
               <div className="form-group" style={styles.signup}><a>Don't an account? </a><Link to='/register'><a>Sign Up</a></Link></div>
               </form>
                
            </div>
            )
    }
}

export default Login;