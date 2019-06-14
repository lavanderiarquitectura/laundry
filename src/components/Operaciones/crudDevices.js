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
import axios from 'axios';


import { ThemeProvider } from '@material-ui/styles';
import green from '@material-ui/core/colors/green';
import orange from '@material-ui/core/colors/orange';
import blue from '@material-ui/core/colors/blue';

import Input from '@material-ui/core/Input';

import AddCircle from '@material-ui/icons/AddCircle';


class crudDevices extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          devices: [],
          type: "",
          state: true,
        };
       this.onChangeD = this.onChangeD.bind(this);
       this.onChangeL = this.onChangeL.bind(this);
       this.createDevice = this.createDevice.bind(this);
       this.componentWillMount = this.componentWillMount.bind(this);    
    }

    async componentWillMount(){          
      return axios.get("http://3.83.99.143:3005/devices")
        .then(json => {
          console.log("Auth:");
          console.log(json);
          var device = []
          var row = [];
          for(var i in json.data){
            for(var j in (json.data[i])){
              if(json.data[i][j] == 'true'){
              row.push(true)
              }else if(json.data[i][j] == 'false'){
                row.push(false)
              }else{
              row.push(json.data[i][j]);
            }            
            }
            device.push(row)
            row = [];
          }
          
          console.log(device)
          this.setState({devices: device})
        })
        .catch(error => {
          console.log(error);
        });
    }

  
       async createDevice(){
                 
            const request = require('request')
            request.post('http://3.83.99.143:3005/devices', {
              json: {			
                state : this.state.state,
                type : this.state.type,
                lotId : null,
              }
            }, (error, res, body) => {
              if (error) {
                console.error(error)
                return                                       
              }else{
                console.log("Efectivo")
                window.location.reload()
                
              }
            }                        
            )}

        

    onChangeD(event){
        this.setState({type: event.target.value})

        console.log(this.state.devices);
    }
    onChangeL(event){
        this.setState({state: event.target.value})
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
                <div className="col">
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
        </div>

    );
}
}

export default crudDevices;