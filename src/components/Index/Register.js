import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import logo from '../../img/logo.png';
import axios from 'axios';

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

        this.validate = this.validate.bind(this);
        this.validateSingup = this.validateSingup.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

  handleSubmit(){
         const data = {
        name : this.state.name,
        last_name : this.state.lastname,
        room_id: this.state.room,
        personal_id: this.state.idnumber,

        is_active: true,
        password: this.state.password,
        }
        axios.post("localhost:3000/api/users", {data},
        {headers: 'Access-Control-Allow-Origin', mode: 'cors'}, 
        ).then(function(res) {
        console.log(data);
    }).catch(function (error) {
        console.log(error);

        console.log(data);
    });
    }

    async validate(){
		const request = require('request')
request.post('http://localhost:8085/api/users', {
  json: {			
  name : this.state.name,
            last_name : this.state.lastname,
            personal_id: this.state.idnumber,
            password: this.state.password,
            room_id: this.state.room,
            isActive: true
  }
}, (error, res, body) => {
  if (error) {
    console.error(error)
    return
  }
}
)}
    validateSingup(){
        const data = {
        name : this.state.name,
        last_name : this.state.lastname,
        personal_id: this.state.idnumber,
        password: this.state.password,
        room_id: this.state.room,
        isActive: true,
        }
        console.log(data);
       const options = {
        method: 'POST',  
        headers: "Access-Control-Allow-Origin",
        body: JSON.stringify(data)
        }
      
      
        const request = new Request('http://localhost:3000/api/users',options);
        fetch(request)
        .then(response => response.json())
        .then(
        data => console.log(data)
        );
        console.log(this.state);
      
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

    /*validateSingup(){
        const data = {
        name: this.state.name,
        last_name: this.state.lastname,
        personal_id: this.state.idnumber,
        room_id: this.state.room,
        idActive: true,
        password: this.state.password,
        }
        console.log(data);
        
        axios.post('http://localhost:8085/api/users',{
            method: 'post',
            url: '/localhost:8085/api/users',
            data: data
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }*/

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
                width: '90%',
                height: '40px',
                marginTop:'8px',
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
            },
            text:{
                textAlign: 'center',
                fontSize: '11px',
                marginBottom: '5px',
            }


        }
        
        return(
            <div className='container'>
                <div className="row">
            <div className="container col-3" style={styles.divLogin}>
                <form>
                <div className="form-group" style={styles.divInput}>
                    <img id="logo" src={logo} style={styles.logo}></img>
                </div>    
               <h3 style={styles.title}>Register</h3>
               <h4 style={styles.text}>Create an account for use own services.</h4>
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
                    <Link to='/'>
                    <Button variant="outlined" onClick={this.validate} style={styles.botonInicio} color="primary">Register</Button></Link>
                </div>
                <div className="form-group" style={styles.signin}><a>Already have an account?</a><Link to='/'><a> Sign in</a></Link></div>
                
               </form>
                
            </div>
            </div>
        </div>
        )
    }
}

export default Register;