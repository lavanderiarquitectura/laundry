import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import logo from '../../img/logo.png';

import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MeetingRoom from '@material-ui/icons/MeetingRoom';
import ShoppingCart from '@material-ui/icons/ShoppingCart';

import { createMuiTheme, withStyles, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import green from '@material-ui/core/colors/green';
import orange from '@material-ui/core/colors/orange';
import blue from '@material-ui/core/colors/blue';

import Table from "../../components/Auxiliares/Table";
import CrudDevices from '../../components/Operaciones/crudDevices';

import MenuItem from '@material-ui/core/MenuItem';
import CrudOperations from '../../components/Operaciones/crudOperations';
import Lote from '../../components/Operaciones/Lotes';
import store from '../../store'
var config_data = require('../../ipconfig.json')
var back_end = config_data.backIP



var config_data = require('../../ipconfig.json')
var back_end = config_data.backIP
class Operaciones extends React.Component{


 
    constructor(props) {
        super(props);
        this.state = {
          name: 'Juan Felipe Contreras',
          room: '401',
          cloths: '2',
          operation: 'none',
          devices: 'none',
          lote: 'none',

          lotes: [],
          dispositivos: [],
 };
       this.changeStateD = this.changeStateD.bind(this);
       this.changeStateL = this.changeStateL.bind(this);
       this.changeStateO = this.changeStateO.bind(this);

       this.lotes= this.lotes.bind(this);
       this.devices= this.devices.bind(this);
    }
    componentDidMount(){       
        this.lotes()
        this.devices()  

        sessionStorage.setItem("Navbar", 2);
    }

    //Cambio de vistas 
    changeStateD(){
            this.setState( {devices: "block", operation:"none", lote:'none'})
    }
    changeStateO(){
            this.setState( {devices: "none", operation:"block", lote:'none'})
    }
    changeStateL(){
            this.setState( {devices: "none", operation:"none", lote:'block'})
    }

 
    lotes(){
        var token = sessionStorage.getItem("Token") 
        return fetch(back_end + "/lots"+"?token="+token, {
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

            console.log("TODOS LOS LOTES");
            console.log(json);
            var lotes = []
            var row = [];
            for(var i in json){
                for(var j in (json[i])){ 

                if(j == "id"){
                  row.push(json[i][j]); 
                }

                if(j == "typeOperation"){             
                  if(j == "typeOperation" && json[i][j] == 1){
                    row.push("Washing");
                  }else if(j == "typeOperation" && json[i][j] == 2){
                    row.push("Ironing");
                  }else if(j == "typeOperation" && json[i][j] == 3){
                    row.push("Full Service");
                  }else{
                    row.push(json[i][j]);  
                  } 
                }

                if( j == "state" ){
                  if(json[i]["typeOperation"] == 1 && json[i][j] == 0){
                    row.push("Stand By");
                  }else if(json[i]["typeOperation"] == 1 && json[i][j] == 1){
                    row.push("Wash");
                  }else if(json[i]["typeOperation"] == 1 && json[i][j] == 2){
                    row.push("Finished");
                  }
                  if(json[i]["typeOperation"] == 2 && json[i][j] == 0){
                    row.push("Stand By");
                  }else if(json[i]["typeOperation"] == 2 && json[i][j] == 1){
                    row.push("Iron");
                  }else if(json[i]["typeOperation"] == 2 && json[i][j] == 2){
                    row.push("Finished");
                  }
                  if(json[i]["typeOperation"]== 3 && json[i][j] == 0){
                    row.push("Stand By");
                  }else if(json[i]["typeOperation"] == 3 && json[i][j] == 1){
                    row.push("Wash");
                  }else if(json[i]["typeOperation"] == 3 && json[i][j] == 2){
                    row.push("Iron");
                  }else if(json[i]["typeOperation"] == 3 && json[i][j] == 3){
                    row.push("Finished");
                  }               
                }                                     
                }
                lotes.push(row)
                row = [];
                this.setState({lotes: lotes})
            }

          })
          .catch(error => {
            console.log(error);
          });

        
    }

    devices(){
      var token = sessionStorage.getItem("Token")   
        return fetch(back_end + "/devices"+"?token="+token, {
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

            console.log("TODOS LOS DISPOSITIVOS");
            console.log(json);
            var lotes = this.state.lotes

            for(var i in json){
                for(var j in (json[i])){                  
                if(j == "lotId"){
                  for(var k in lotes){                    
                        if( lotes[k][0] == json[i][j]){
                          lotes[k].push(json[i]["id"])
                          lotes[k].push(json[i]["type"])
                        }
                    
                  }  
                }
                }
               
            }
            this.setState({lotes: lotes})
          })
          .catch(error => {
            console.log(error);
          });
    }
    
    render(){

        const headings = [

                    
                    'ID Lote',
                    'Type Service',          
                    'State Service',
                    'ID Device', 
                    'Type Device',
                ];
                const rows = this.state.lotes

        const ColorButton = withStyles(theme => ({
            root: {
              color: 'white',
              backgroundColor: green[500],
              '&:hover': {
                backgroundColor: green[700],
              },
            },
          }))(Button);

        const ColorButtonO = withStyles(theme => ({
            root: {
              color: 'white',
              backgroundColor: orange[500],
              '&:hover': {
                backgroundColor: orange[700],
              },
            },
          }))(Button);
        
        const ColorButtonB = withStyles(theme => ({
            root: {
              color: 'white',
              backgroundColor: blue[500],
              '&:hover': {
                backgroundColor: blue[700],
              },
            },
          }))(Button);


        const styles ={
            div :{
                padding: "15px 15px 8px 15px",
                borderRadius: "10px",
                marginTop: "20px",
                backgroundColor: "#FAFAFA",              
            },
            botonI:{
                width: '100%',
                height: '45px',
                marginBottom: '0px',
                marginTop:'5px',
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
            divButton:{
                padding: '5px 5px 5px 5px',
                margin: 'auto',
            },
            inputs:{
                marginTop: '8px',
                height: '40px',
                marginBottom: '0',
            },
            logo:{
                width: '80%',
                margin:'5px 0 5px 5px',
            },
            olvidaste:{
                fontSize:"12px",
                marginBottom: "5px",
                marginTop:"5px",
                textAlign: "center",
            },
            divButton:{
                padding:'0',
                margin:'auto',
                textAlign: "center",
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
                paddingTop:"10px",
            },
            divInfo:{
                paddingLeft:"5px",
            },
            row:{
                padding: "0",
                marginLeft: "5px",
                marginRight: "5px",
                backgroundColor: "white",
                paddingBottom: "0px",
                textAlign:'center',
            },
            rowBottom:{
                padding: "0",
                marginLeft: "5px",
                marginRight: "5px",
                marginTop:"10px",
                backgroundColor: "white",
                paddingBottom: "5px",
            },
            welcome:{
                textAlign:"center",
                marginTop:"10px",
            },
            text:{
                marginBottom:"3px",
                color: "#020347",
                fontFamily : 'Sanchez',
            },
            divLogin :{
                padding: "15px 15px 8px 15px",
                borderRadius: "10px",
                marginTop: "20px",
                backgroundColor: "#FAFAFA",

            },

        }
        var display = sessionStorage.getItem("Operators");
        var Operations
        if( display == "false" || display == null){
            Operations = <div style={{textAlign: "center", margin: "10px 0 0 0"}}><h1>ERROR 403 Forbidden - Usted no tiene permiso para acceder a esta ruta.</h1></div>
        }else{
          Operations =
            <div className="container col-md-5" style={styles.div}>
            <div className='row' style={styles.row}>
                <div className='col-md-2'>
                    <img id="logo" src={logo} style={styles.logo}></img>
                </div>
                <div className='col-md-8' style={{textAlign:"center", margin:'auto'}}>
                 <h3 style={styles.text}>Operations in Progress</h3>
               </div>
               <div className='col-2'> </div>
            </div>
            <div className='row' style={styles.rowBottom}>
                <div className='col' style={{textAlign:"center", margin:'5px 0px 0px 0px', height: "250px", overflowY: "auto", padding: "0"}}>
                <Table headings={headings} rows={rows} style={{width:"100%"}} />
               </div>
            </div>
            <div className='row' style={styles.rowBottom}>
                    <div className="col-md-4" style={styles.divButton}>               
                    <Link to='#'><ColorButtonB onClick={this.changeStateL} variant="outlined" focusVisible style={styles.botonInicio} color="primary">Add Lots</ColorButtonB></Link>
                    </div>
                    <div className="col-md-4" style={styles.divButton}>                
                    <Link to='#'><ColorButtonB onClick={this.changeStateO} variant="outlined" focusVisible style={styles.botonInicio} color="green">Operations</ColorButtonB></Link>
                    </div>
                    <div className="col-md-4" style={styles.divButton}>                
                    <Link to='#'><ColorButtonB onClick={this.changeStateD} variant="outlined" focusVisible style={styles.botonInicio} color="orange">Devices</ColorButtonB></Link>
                    
                </div>
            </div>
            <div className='row' style={styles.rowBottom}>
                <CrudDevices display={this.state.devices}/>
                <CrudOperations display={this.state.operation}/> 
                <Lote display={this.state.lote}/>        
            </div>
        </div>        

        }
        return(          
            <div> 
                {Operations}                 
            </div>  
                   
            )
    }
}

export default Operaciones;