import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import logo from '../../img/logo.png';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Table from "../Auxiliares/Table";

var config_data = require('../../ipconfig.json')
var back_end = config_data.backIP

class Prendas extends React.Component{


    componentDidMount(){
        
        var token = sessionStorage.getItem("Token") 
          return fetch(back_end + "/cloth_register/get/room/"+this.props.room+"?token="+token, {
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
              console.log("Prendas por habitacion"); 
              console.log(json);
            })
            .catch(error => {
              console.log(error);
            });
      }
    
render(){

    const styles={
        title:{
            textAlign: "center",
            margin:"5px",
            color: "#020347",
            fontFamily : 'Sanchez',
        }
    }

   const headings = [
                    'ID',
                    'Cloth',
                    'Color', 
                    'Fabric',
                    'Service',
                    'State',
                    
                ];
    
    const rows = [];

    
    return(
        <div className="container"style={{display: this.props.display}}>
            <div className="row" id="Head">
                <div className="col" id="title">
                    <h3 style={styles.title}>Cloth</h3>
                </div>               
            </div>
            <div className="row" id="table">
                <div className="col">
                <Table headings={headings} rows={rows} style={{width:"100%"}} />
                </div>
            </div>
        </div>

    );
}
}

export default Prendas;