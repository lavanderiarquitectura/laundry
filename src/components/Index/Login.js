import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import logo from '../../img/logo.png';

class Login extends React.Component{
    
    render(){

        const styles ={
            divLogin :{
                padding: "15px 15px",
                borderRadius: "10px",
                marginTop: "20px",
                backgroundColor: "#FAFAFA",

            },
            botonInicio:{
                width: '90%',
                height: '40px',
                marginBottom: '5px',
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
                height: '50px',
            },
            logo:{
                width: '60%',
            },
            olvidaste:{
                fontSize:"12px",
                marginBottom: "5px",
                marginRight: "15px",
                textAlign: "right",
            },

        }

        return(
            <div className="container col-3" style={styles.divLogin}>
                <form>
                <div className="form-group" style={styles.divInput}>
                    <img id="logo" src={logo} style={styles.logo}></img>
                </div>
                <div className="form-group" style={styles.divInput}>
                    <TextField
                        autoFocus
                        id="cedula"
                        label="Número de Cedula"
                        margin="normal"
                        style = {styles.inputs}
                        variant="outlined"
                    />
               </div>
                <div className="form-group" style={styles.divInput}>                
                <TextField
                        id="password"
                        label="Contraseña"
                        type="password"
                        style = {styles.inputs}
                        margin="normal"
                        variant="outlined"
                    />
                <div style={styles.olvidaste}><a>¿Olvidaste tu </a><Link to='/'><a>contraseña</a></Link><a>?</a></div>
                </div>
                <div className="form-group" style={styles.divInput}>                
                    <Link to='/'><Button variant="outlined" focusVisible style={styles.botonInicio} color="primary">Ingresar</Button></Link>
                </div>
               </form>
                
            </div>
            )
    }
}

export default Login;