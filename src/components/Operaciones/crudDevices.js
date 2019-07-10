import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import logo from '../../img/logo.png';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import { createMuiTheme, MuiThemeProvider, withStyles } from "@material-ui/core/styles";
import Table from "../../components/Auxiliares/Table";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


import { ThemeProvider } from '@material-ui/styles';
import green from '@material-ui/core/colors/green';
import orange from '@material-ui/core/colors/orange';
import blue from '@material-ui/core/colors/blue';

import Input from '@material-ui/core/Input';
import store from '../../store'
import { withRouter } from "react-router";
import createHistory from "history/createBrowserHistory";
import AddCircle from '@material-ui/icons/AddCircle';
//+"?token="+token

var config_data = require('../../ipconfig.json')
var back_end = config_data.backIP
var devices = []

class crudDevices extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          devices: [],
          type: "",
          washer: [],
          washerO: [],
          iron: [],
          ironO: [],
          state: "",
          stateM: "",
          idDev: "",
          typeDev: ""
        };
       this.onChangeD = this.onChangeD.bind(this);
       this.onChangeL = this.onChangeL.bind(this);
       this.onChangeDM = this.onChangeDM.bind(this);
       this.onChangeLM = this.onChangeLM.bind(this);
       this.washerOff = this.washerOff.bind(this);
       this.ironOff = this.ironOff.bind(this);
       this.iron = this.iron.bind(this);
       this.washer= this.washer.bind(this);
       this.createDevice = this.createDevice.bind(this);

       this.findDevice = this.findDevice.bind(this);

       this.changeDevice = this.changeDevice.bind(this);
      
       this.componentWillMount = this.componentWillMount.bind(this); 
    }

    async washer(){
      var token = sessionStorage.getItem("TokenA")    
      return fetch(back_end + "/devices/byTypeAndState/Washer/true"+"?token="+token, {
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
          for (var i = 0; i < json.length; i++) {
            devices.push(<MenuItem value={this.state.washer[i]["id"]}>{this.state.washer[i]["id"]}</MenuItem>);
          }
              
        })
        .catch(error => {
          console.log(error);
        });
    }
    
    async washerOff(){
      var token = sessionStorage.getItem("TokenA")    
      return fetch(back_end + "/devices/byTypeAndState/Washer/false"+"?token="+token, {
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
          this.setState({washerO: json})       
          for (var i = 0; i < json.length; i++) {
            devices.push(<MenuItem value={this.state.washerO[i]["id"]}>{this.state.washerO[i]["id"]}</MenuItem>);
          } 
              
        })
        .catch(error => {
          console.log(error);
        });
    }
    async ironOff(){
      var token = sessionStorage.getItem("TokenA")    
      return fetch(back_end + "/devices/byTypeAndState/Iron/false"+"?token="+token, {
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
          this.setState({ironO: json}) 
          for (var i = 0; i < json.length; i++) {
            devices.push(<MenuItem value={this.state.ironO[i]["id"]}>{this.state.ironO[i]["id"]}</MenuItem>);
          }        
              
        })
        .catch(error => {
          console.log(error);
        });
    }
    
    async iron(){
      var token = sessionStorage.getItem("TokenA")  
      return fetch(back_end + "/devices/byTypeAndState/Iron/true"+"?token="+token, {
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
          for (var i = 0; i < json.length; i++) {
            devices.push(<MenuItem value={this.state.iron[i]["id"]}>{this.state.iron[i]["id"]}</MenuItem>);
          }
              
        })
        .catch(error => {
          console.log(error);
        });
    }

    async componentDidMount(){ 
      this.washer() //Obtener lavadoras por estado: On
      this.washerOff() //Obtener lavadoras por estado: Off
      this.iron() //Obtener planchas por estado; On
      this.ironOff() //Obtener planchas por estado; On  
    }
    async componentWillMount(){   
      
       
      var token = sessionStorage.getItem("TokenA")
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
          var device = []
          var row = [];
          for(var i in json){
            for(var j in (json[i])){
              if(json[i][j] == 'true'){
              row.push(true)
              }else if(json[i][j] == 'false'){
                row.push(false)
              }else{
              row.push(json[i][j]);
            }            
            }
            device.push(row)
            row = [];
          }
        this.setState({devices: device})
        })
        .catch(error => {
          console.log(error);
        });
  
      
     
    }

    async findDevice(){    
  
      
      var token = sessionStorage.getItem("TokenA")
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
          for(var i in json){
            for(var j in (json[i])){
              if(json[i]["id"] == this.state.idDev){
              this.setState({typeDev: json[i]["type"] })
              }
            }            
            }        
        })
        .catch(error => {
          console.log(error);
        });
    }

    async changeDevice(){
      this.findDevice()
      var token = sessionStorage.getItem("TokenA") 
      var id = this.state.idDev
      console.log(id)
      const request = require('request')
        request.put(back_end + "/devices/"+id+"?token="+token, {
        headers: { 'Content-type': 'application/json' },
        json: {			
                lotId : 0,
                state: this.state.stateM,
                type: this.state.typeDev
        }
        }, (error, res, body) => {
        if (error) {
            console.error(error)
            return
        }else{
          var devices = []
          this.setState({washer: [],
            washerO: [],
            iron: [],
            ironO: [],})
          this.componentWillMount()
        }
        }
        )}
    
  
       async createDevice(){
        var token = sessionStorage.getItem("TokenA")
            const request = require('request')
            request.post(back_end + '/devices'+"?token="+token, {
              json: {			
                state : this.state.state,
                type : this.state.type,
                lotId : 0,
              }
            }, (error, res, body) => {
              if (error) {
                console.error(error)                                      
              }else{
                var devices = []
                this.setState({washer: [],
                  washerO: [],
                  iron: [],
                  ironO: [],})
                this.componentWillMount()
                
              }
            }                        
            )}

        

    onChangeD(event){
        this.setState({type: event.target.value})
    }
    onChangeL(event){
        this.setState({state: event.target.value})
    }
    onChangeDM(event){
      this.setState({idDev: event.target.value})
  }
  onChangeLM(event){
      this.setState({stateM: event.target.value})
  }
    
render(){
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
        title:{
            textAlign: "center",
            margin:"5px",

            color: "#020347",
            fontFamily : 'Sanchez',
        },
        titleS:{
          textAlign: "center",
          margin:"0 0 8px 0",
          color: "#020347",
          fontFamily : 'Sanchez',
      },
        add:{
            textAlign: "right"
        },
        button:{
           margin:"5px 6px 5px"
        },
        div:{
            textAlign:"left",
            margin:"5px 3px 0 0",
            padding: "0px"
         },
        divB:{
            textAlign:"center",
            padding: "0px"
         },
        buttonAdd:{
            margin:"5px 3px 0 0",
            width:"65%",
            height: "40px",
            padding: "5px"
         },
         divInput:{
            textAlign: 'center',
            padding: "0"
        },
        inputs:{
            margin: "5px 3px 0 0",
            padding: "0"
    },text:{
        margin: "15px 0 0 0",
        padding: "0",
        fontSize:"22px",
        color: "#020347",
        fontFamily : 'Sanchez',
    }, selector:{
        width: "150px",
        margin: "0 0 5px 0"
    }
    }

 

    const headings = [
        'ID',
        'State',
        'Type',
        'Id Lote',
    ];
    const rows = this.state.devices

    

    return(
        <div className="container" style={{display: this.props.display}}>
            <div className="row" id="Head">
                
                <div className="col" id="title">
                    <h3 style={styles.titleS}>Devices</h3>
                </div>
            </div>
            <div className="row" id="table">
                <div className="col" style={{height: "250px", overflowY: "auto"}}>
                <Table headings={headings} rows={rows} style={{width:"100%"} } />
                </div>
            </div>
            
            <div className="row">
                <div className="container">

                <form className="row" style={{marginLeft: "0"}}> 

                <div className="container">
                  <div className="form-group col-md" style={styles.titleS}>
                      <h3 style={styles.text}>New Device</h3>
                </div>
               </div>

               <div className="container">
               <div className="row">
               <div className="form-group col-md-4" style={styles.divInput}>
               <FormControl style={styles.selector}>
                    <InputLabel shrink >
                    Type Device
                    </InputLabel>
                    <Select
                    value={this.state.type}
                    input={<Input name="device" id="age-label-placeholder" />}
                    onChange = {this.onChangeD}                 
                    name="device"
                    className=""
                    >
                    <MenuItem value={"Washer"}>Washer</MenuItem>
                    <MenuItem value={"Iron"}>Iron</MenuItem>
                    </Select>
                </FormControl>
               </div>
               <div className="form-group col-md-4" style={styles.divInput}>
               <FormControl style={styles.selector}>
                    <InputLabel shrink >
                    State Device
                    </InputLabel>
                    <Select
                    value={this.state.state}
                    input={<Input name="device" id="age-label-placeholder" />}
                    onChange = {this.onChangeL}             
                    name="device"
                    className=""
                    >
                    <MenuItem value={true}>On</MenuItem>
                    <MenuItem value={false}>Off</MenuItem>
                    </Select>
                </FormControl>
               </div>
               
               <div className="form-group col-md-4" style={styles.divB}>
                 <Link to="/operaciones"><ColorButtonB  color="primary"  onClick={this.createDevice} variant="contained" aria-label="Add" style={styles.buttonAdd}><AddCircle/></ColorButtonB></Link>
                 </div>     
                 </div>
 
               </div>  
               </form>
                </div>            
            </div>

            <div className="row">
                <div className="container">

                <form className="row" style={{marginLeft: "0"}}> 

                <div className="container">
                  <div className="form-group col-md" style={styles.titleS}>
                      <h3 style={styles.text}>Change State</h3>
                </div>
               </div>

               <div className="container">
               <div className="row">
               <div className="form-group col-md-4" style={styles.divInput}>
               <FormControl style={styles.selector}>
                    <InputLabel shrink >
                    Id Device
                    </InputLabel>
                    <Select
                    value={this.state.idDev}
                    input={<Input name="id" id="age-label-placeholder" />}
                    onChange = {this.onChangeDM}                 
                    name="id"
                    className=""
                    >
                   {devices}
                    </Select>
                </FormControl>
               </div>
               <div className="form-group col-md-4" style={styles.divInput}>
               <FormControl style={styles.selector}>
                    <InputLabel shrink >
                    State Device
                    </InputLabel>
                    <Select
                    value={this.state.stateM}
                    input={<Input name="device" id="age-label-placeholder" />}
                    onChange = {this.onChangeLM}             
                    name="device"
                    className=""
                    >
                    <MenuItem value={true}>On</MenuItem>
                    <MenuItem value={false}>Off</MenuItem>
                    </Select>
                </FormControl>
               </div>
               
               <div className="form-group col-md-4" style={styles.divB}>
                 <Link to="/operaciones"><ColorButtonB  color="primary"  onClick={this.changeDevice} variant="contained" aria-label="Add" style={styles.buttonAdd}><AddCircle/></ColorButtonB></Link>
                 </div>     
                 </div>
 
               </div>
               </form>
                </div>
            
            </div>

        </div>

    );
}
}

export default crudDevices;