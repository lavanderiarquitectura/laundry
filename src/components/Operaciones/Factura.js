import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import logo from '../../img/logo.png';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Table from "../Auxiliares/Table";
import InputAdornment from '@material-ui/core/InputAdornment';
import MonetizacionOn from '@material-ui/icons/MonetizationOn';
import { createMuiTheme, MuiThemeProvider, withStyles } from "@material-ui/core/styles";
import { ThemeProvider } from '@material-ui/styles';
import red from '@material-ui/core/colors/red';
import store from '../../store'

import PDF from '@material-ui/icons/PictureAsPdf';


var config_data = require('../../ipconfig.json')
var back_end = config_data.backIP
class Factura extends React.Component{

    constructor(props) {
        super(props);
        this.state = {          
            total: "0"

        };
      //  this.changeState = this.changeState.bind(this);
      this.obtenerPrecios = this.obtenerPrecios.bind(this);
      this.obtenerRopa = this.obtenerRopa.bind(this);
    }


    componentDidMount(){

        this.obtenerPrecios()
       // this.obtenerRopa()

      }

      obtenerRopa(){
     
        var room = sessionStorage.getItem("Room") 
        var token = sessionStorage.getItem("Token") 
        var aux = room
          return fetch(back_end + "/cloth_register/get/room/"+aux+"?token="+token, {
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

       obtenerPrecios(){           
     
        var room = sessionStorage.getItem("Room") 
        var token = sessionStorage.getItem("Token")
        var aux = room
          return fetch(back_end + "/getfacturaglobal/"+aux+"?token="+token, {
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
            console.log("Costo por prenda"); 
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
        },
        textR:{
            marginBottom:"3px",
            width: "46%"
        },
        botonInicio:{
            width: '40%',
            height: '40px',
            marginBottom: '0px',
            marginTop:'5px',
            marginRight:"10px"
        },
        total:{
        },
        totalDiv:{
            textAlign: "right",
            padding: "0"
        },
    }

   const headings = [
                    'ID',
                    'Cloth',
                    'Color',                    
                    'Service', 
                    'Price',
                    
                ];
    
    const rows = [
            

        ];


        const ColorButtonB = withStyles(theme => ({
            root: {
              color: 'white',
              backgroundColor: red[500],
              '&:hover': {
                backgroundColor: red[700],
              },
            },
          }))(Button);
    
    return(
        <div className="container"style={{display: this.props.display}}>
            <div className="row" id="Head">
                <div className="col" id="title">
                    <h3 style={styles.title}>Billing</h3>
                </div>               
            </div>
            <div className="row" id="table">
                <div className="col">
                <Table headings={headings} rows={rows} style={{width:"100%"}} />

                <div className='container row' style={{padding:"0"}}>
               
                <div className="col" style={{textAlign:"right%"}}>
                <Link to='#'><ColorButtonB onClick="" variant="outlined" focusVisible style={styles.botonInicio} color="red"><PDF/></ColorButtonB></Link>
                
                </div>

                <div className="col" style={styles.totalDiv}>
               
                <TextField
                            disabled
                            id="input-with-icon-textfield"
                            label="Total"
                            style={styles.total}
                            value={this.state.total}
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                <MonetizacionOn />
                                </InputAdornment>
                            ),
                            }}
                        />
                        </div>
                        </div>
                </div>
            </div>
        </div>

    );
}
}

export default Factura;