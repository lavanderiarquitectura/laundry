import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import logo from '../../img/logo.png';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Table from "../../components/Auxiliares/Table";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import store from '../../store'
import Input from '@material-ui/core/Input';


var config_data = require('../../ipconfig.json')
var back_end = config_data.backIP
var washers = []
var lotWash = []
var lotIron = []
var lotFull = []
var irons = []

class crudOperations extends React.Component{


    constructor(props) {
        super(props);
        this.state = {
          devices: '',
          lote: '',
          devicesP: '',
          loteP: '',
          loteF: '',
          washer: [],
          iron: [],
          lavado: [],
          planchado: [],
          full: [],
          all: [],
        };
       this.onChangeD = this.onChangeD.bind(this);
       this.onChangeL = this.onChangeL.bind(this);
       this.onChangeDP = this.onChangeDP.bind(this);
       this.onChangeLP = this.onChangeLP.bind(this);
       this.onChangeLF = this.onChangeLF.bind(this);
       this.washer = this.washer.bind(this);
       this.iron = this.iron.bind(this);
       this.planchado = this.planchado.bind(this);
       this.lavado = this.lavado.bind(this);
       this.full = this.full.bind(this);
       this.saveLots = this.saveLots.bind(this);
       this.getLots = this.getLots.bind(this);
       
    }
    componentDidMount(){     

       this.washer()
       this.iron()
       this.lavado()
       this.planchado()
       this.full()
       this.getLots()

       

      }

      getLots(){
        var token = store.getState().token    
        return fetch(back_end + "/cloth_register/get/"+"?token="+token, {
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

            console.log("Lotes all");
            console.log(json);
            this.setState({all: json})
            this.saveLots()           

          })
          .catch(error => {
            console.log(error);
          });}

          saveLots(){
            const request = require('request')
            request.post(back_end + '/lots', {
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
                console.log("Logre registrarme")
                for( var i in this.state){
                    if( i == null){
                        window.location.reload()
                    }
                }
    
            }
            }
            )}
    


      lavado(){
        var token = store.getState().token    
        return fetch(back_end + "/lots/byTypeOperation/1"+"?token="+token, {
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

            console.log("Lotes para lavado");
            console.log(json);
            this.setState({lavado: json})
            for (var i = 0; i < json.length; i++) {
                lotWash.push(<MenuItem value={i}>{this.state.lavado[i]["id"]}</MenuItem>);
              }

          })
          .catch(error => {
            console.log(error);
          });
    }
    planchado(){
        var token = store.getState().token    
        return fetch(back_end + "/lots/byTypeOperation/2"+"?token="+token, {
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

            console.log("Lotes para planchado");
            console.log(json);
            this.setState({planchado: json})
            for (var i = 0; i < json.length; i++) {
                lotIron.push(<MenuItem value={i}>{this.state.planchado[i]["id"]}</MenuItem>);
              }

          })
          .catch(error => {
            console.log(error);
          });
    }

    full(){
        var token = store.getState().token    
        return fetch(back_end + "/lots/byTypeOperation/3"+"?token="+token, {
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

            console.log("Lotes para full");
            console.log(json);
            this.setState({full: json})
            for (var i = 0; i < json.length; i++) {
                lotFull.push(<MenuItem value={i}>{this.state.full[i]["id"]}</MenuItem>);
              }

          })
          .catch(error => {
            console.log(error);
          });
    }

    washer(){
        var token = store.getState().token    
        return fetch(back_end + "/devices/byType/Washer"+"?token="+token, {
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
            this.setState({washer: json})

            console.log("Lavadoras");
            console.log(json);
            console.log(json[1]["id"]);
            console.log(this.state.washer[1]["id"]);
            for (var i = 0; i < json.length; i++) {
              washers.push(<MenuItem value={i}>{this.state.washer[i]["id"]}</MenuItem>);
            }
                
          })
          .catch(error => {
            console.log(error);
          });
    }
    iron(){
        var token = store.getState().token    
        return fetch(back_end + "/devices/byType/Iron"+"?token="+token, {
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
            this.setState({iron: json})
            console.log("Planchas");
            console.log(json);
            for (var i = 0; i < json.length; i++) {
                irons.push(<MenuItem value={i}>{this.state.iron[i]["id"]}</MenuItem>);
            }
                
          })
          .catch(error => {
            console.log(error);
          });
    }

    onChangeD(event){
        this.setState({devices: event.target.value})
    }
    onChangeL(event){
        this.setState({lote: event.target.value})
    }
    onChangeDP(event){
        this.setState({devicesP: event.target.value})
    }
    onChangeLP(event){
        this.setState({loteP: event.target.value})
    }
    onChangeLF(event){
        this.setState({loteF: event.target.value})
    }
    
render(){

    const styles={
        selector:{
            width: "150px",
            margin: "0 0 5px 0",
            color: "#020347",
            fontFamily : 'Sanchez',
        },
        button:{
            width: '150px'
        },
        title:{
            textAlign: "center",
            margin:"5px",
            color: "#020347",
            fontFamily : 'Sanchez',
        },
    }
  
    

    const Lavado = (
        <div className='container' style={{marginTop: "5px"}}>
            <div className='row'>
                <div className='col-md-4' id="lavado" style={{textAlign: "center", margin: "0 0 5px 0"}}>  

                <h3 style={styles.title}>Washers</h3>
                <FormControl style={styles.selector}>
                    <InputLabel shrink >
                    Available Washers
                    </InputLabel>
                    <Select
                    value={this.state.devices}
                    input={<Input name="device" id="age-label-placeholder" />}
                    onChange = {this.onChangeD}                   
                    name="device"
                    className=""
                    >
                    {washers}
                    </Select>
                </FormControl>

                <FormControl style={styles.selector}>
                    <InputLabel shrink >
                    Waiting Lot
                    </InputLabel>
                    <Select
                    value={this.state.lote}
                    input={<Input name="device" id="age-label-placeholder" />}                   
                    onChange = {this.onChangeL}        
                    name="device"
                    className=""
                    >
                    {lotWash}
                    </Select>
                </FormControl>
                
                <Button  color="secondary"  onClick={this.stateL} variant="contained" aria-label="Add" style={styles.button}>Washing</Button>
                  
            </div>
            <div className='col-md-4' id="planchado" style={{textAlign: "center", margin: "0 0 5px 0"}}>      
            <h3 style={styles.title}>Irons</h3>          
                <FormControl style={styles.selector}>
                    <InputLabel shrink >
                    Available Irons
                    </InputLabel>
                    <Select
                    value={this.state.devicesP}
                    input={<Input name="device" id="age-label-placeholder" />}
                    onChange = {this.onChangeDP}                   
                    name="device"
                    className=""
                    >
                    {irons}
                    </Select>
                </FormControl>

                <FormControl style={styles.selector}>
                    <InputLabel shrink >
                    Waiting Lot
                    </InputLabel>
                    <Select
                    value={this.state.loteP}
                    input={<Input name="device" id="age-label-placeholder" />}
                   
                    onChange = {this.onChangeLP}        
                    name="device"
                    className=""
                    >
                    {lotIron}
                    </Select>
                </FormControl>
                
                <Button  color="secondary"  onClick="" variant="contained" aria-label="Add" style={styles.button}>Ironing</Button>
                  
            </div>
            <div className='col-md-4' id="finalizado" style={{textAlign: "center", margin: "0 0 5px 0"}}>                
                <h3 style={styles.title}>Finalize</h3>
                <FormControl style={styles.selector}>
                    <InputLabel shrink >
                        Finished Lots
                    </InputLabel>
                    <Select
                    value={this.state.loteF}
                    input={<Input name="device" id="age-label-placeholder" />}
                   
                    onChange = {this.onChangeLF}        
                    name="device"
                    className=""
                    >
                    {lotFull}
                    </Select>
                </FormControl>
                
                <Button  color="secondary"  onClick="" variant="contained" aria-label="Add" style={styles.button}>Done</Button>
                  
            </div>
            </div>
        </div>
    );

 
    return(
        <div className="container" style={{display: this.props.display}}>
            <div className="row" id="Head">
                <div className="col" id="title">
                    <h3 style={styles.title}>Operations</h3>
                </div>               
            </div>
            <div className="row" id="table">
                <div className="col">
                    {Lavado}
                </div>
            </div>
        </div>

    );
}
}

export default crudOperations;