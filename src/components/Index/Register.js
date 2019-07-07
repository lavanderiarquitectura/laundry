import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import logo from '../../img/logo.png';
import axios from 'axios';

var config_data = require('../../ipconfig.json')
var back_end = config_data.backIP

class Register extends React.Component{

    constructor(props){
        super(props);
        this.state={
            name: "",
            lastname:"",
            idnumber:"",
            room:"",
            password:""
        }
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeLastname = this.handleChangeLastname.bind(this);
        this.handleChangeIdNumber = this.handleChangeIdNumber.bind(this);
        this.handleChangeRoom = this.handleChangeRoom.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);
        this.register = this.register.bind(this);

        this.in = this.in.bind(this);

        this.validate = this.validate.bind(this);

    }

    register(){
        const request = require('request')
        request.post(back_end + '/api/users', {
            headers: { 'Content-type': 'application/json' },
            json: {			
                        name : this.state.name,
                        last_name : this.state.lastname,
                        personal_id: this.state.idnumber,
                        password: this.state.password,
                        room_id: this.state.room,
                        username: this.state.idnumber
            }
            }, (error, res, body) => {
            if (error) {
                console.error(error)
                return
            }else{
                
                return this.props.history.push('/');
    
            }
            }
            )
    }
    in(){
        sessionStorage.setItem("Navbar", 0);
        
    }
    validate(){
        var aux = true;
        var user = [this.state.name,this.state.lastname,this.state.idnumber,
            this.state.password, this.state.room]
        for(var i in user){
            if( user[i] ==  ""){
                aux = false      
            }
        }

        if( aux == true ){
          this.register()

        }else{
            alert("Faltan datos. Complete todo el formulario.");                    
            window.location.reload()
        }
        }
    

    handleChangeName(event){        
        this.setState({name: event.target.value})
    }
    handleChangeLastname(event){
        this.setState({lastname: event.target.value})
    }
    handleChangeIdNumber(event){
        this.setState({idnumber: event.target.value})
    }
    handleChangeRoom(event){
        this.setState({room: event.target.value})
    }
    handleChangePass(event){
        this.setState({password: event.target.value})
    }

    render(){

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
                marginTop:'8px',
                marginBottom: '5px',
            },
            label:{
                color: 'white',
            },
            divInput:{
                textAlign: 'center',
                marginBottom: '14px'
            },
            div:{
                textAlign: 'center',
                marginBottom: '0.5px'
            },
            inputs:{
                marginTop: '8px',
                height: '40px',
                marginBottom: '0',
            },
            logo:{
                width: '60%',
            },
            signin:{
                fontSize:"12px",
                marginBottom: "5px",
                marginTop: '5px',
                textAlign: "center",
            },
            title:{
                textAlign: 'center',
                marginBottom: '0',
                fontFamily : 'Sanchez',
                color: "#020347"
            },
            text:{
                textAlign: 'center',
                fontSize: '11px',
                marginBottom: '5px',

                fontFamily : 'Sanchez',
                color: "#020347"
            }


        }


        var op = sessionStorage.getItem("Operators");
        var us = sessionStorage.getItem("Users");
        var reg
        if( op ==  "true"){

            sessionStorage.setItem("Navbar", 2);
            this.props.history.push('/operaciones');
        }else if( us === "true"){            

            sessionStorage.setItem("Navbar", 1);
            this.props.history.push('/informacion');
        }else{
            reg =         
            <div className="row">
            <div className="container col-md-3 mb-8" style={styles.divLogin}>
                <form>
                <div className="form-group" style={styles.div}>
                    <img id="logo" src={logo} style={styles.logo}></img>
                </div>    
               <h3 className="font" style={styles.title}>Register</h3>
               <h4 style={styles.text}>Create an account for use our services.</h4>
               <div className="form-group" style={styles.divInput}>
                    <TextField
                        autoFocus
                        id="name"
                        label="Name"
                        onChange={this.handleChangeName}
                        margin="normal"
                        style = {styles.inputs}
                        variant="outlined"
                    />
               </div>
               <div className="form-group" style={styles.divInput}>
                    <TextField
                        id="lastname"
                        label="Lastname"
                        onChange={this.handleChangeLastname}
                        margin="normal"
                        style = {styles.inputs}
                        variant="outlined"
                    />
               </div>
               <div className="form-group" style={styles.divInput}>
                    <TextField
                        id="idnumber"
                        label="Identificacion number"
                        onChange={this.handleChangeIdNumber}
                        margin="normal"
                        style = {styles.inputs}
                        variant="outlined"
                    />
               </div>
               <div className="form-group" style={styles.divInput}>
                    <TextField
                        id="room"
                        label="Number Room"
                        margin="normal"
                        onChange={this.handleChangeRoom}
                        style = {styles.inputs}
                        variant="outlined"
                    />
               </div>
                <div className="form-group" style={styles.divInput}>                
                <TextField
                        id="password"
                        label="Password"
                        type="password"
                        onChange={this.handleChangePass}
                        style = {styles.inputs}
                        margin="normal"
                        variant="outlined"
                    />
                </div>
                <div className="form-group" style={styles.divInput}>                
              
                    <Button variant="outlined" onClick={this.validate} style={styles.botonInicio} color="primary">Register</Button>
                </div>
                <div className="form-group" style={styles.signin}><a>Already have an account?</a><Link to='/'><a onClick={this.in} > Sign in</a></Link></div>
                
               </form>
                
            </div>
            </div>
        }

        
        return(
        <div className='container'>
        {reg}
        </div>
        )
    }
}

export default Register;