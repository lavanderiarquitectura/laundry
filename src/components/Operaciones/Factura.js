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

import CircularProgress from '@material-ui/core/CircularProgress';
import PDF from '@material-ui/icons/PictureAsPdf';


var config_data = require('../../ipconfig.json')
var back_end = config_data.backIP
class Factura extends React.Component{

    constructor(props) {
        super(props);
        this.state = {    
            total: "",
            prendas: [],

          loadinga: false,
          loadingb: false,


        };
      //  this.changeState = this.changeState.bind(this);
      this.obtenerPrecios = this.obtenerPrecios.bind(this);
      this.obtenerRopa = this.obtenerRopa.bind(this);

      this.convertColor = this.convertColor.bind(this);
      this.convertPrenda = this.convertPrenda.bind(this);
      this.convertService = this.convertService.bind(this);
    }


    componentDidMount(){

        this.obtenerRopa()
      }


    convertColor(id){
      var color = ['Blue',"Green","Red","Brown", "Yellow", "Gray", "Black", "White", "Orange", "Purple", "Pink", "Beige", "Various"]
      for( var i in color){
          if( i == id-1){
              return color[i]
          }
      }
  }
  convertPrenda(id){
      
      var prenda = ['T-Shirt',"Shirt","Sweater","Jacket", "Coat", "Jeans", "Pants", "Socks", "Shorts", "Skirt", "Dress", "Blouse", "Briefs"]
      for( var i in prenda ){
          if( i == id-1){
              return prenda[i]
          }
      }
  }
  convertService(id){
      
      var service = ['Washing',"Ironing","Full Service"]
      for( var i in service ){
          if( i == id-1){
              return service[i]
          }
      }
  }

  async obtenerRopa(){
        
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
              var lotes = []
              var row = [];

              console.log(json);
              for(var i in json){ 
                var prenda = this.convertPrenda(json[i]["tipo_prenda_id_tipo_prenda"])
                row.push(prenda)
                var color = this.convertColor(json[i]["color"])
                row.push(color)
                var service = this.convertService(json[i]["tipo_operacion_id_tipo_operacion"])
                row.push(service)
                row.push(json[i]["marca"]);   
                lotes.push(row)
                row = [];
                this.setState({prendas: lotes, loadinga: true})               
              }               
  
              this.obtenerPrecios()         
            })
            .catch(error => {
              console.log(error);
            });
        }

        async obtenerPrecios(){           
     
        var room = sessionStorage.getItem("Room") 
        var token = sessionStorage.getItem("Token")
        var aux = room
          return fetch(back_end + "/getfacturaglobal/"+aux+"/?token="+token, {
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
              console.log(json["total"]);
              console.log(json["facturas_locales"][0]["prendas"][0]["costo"])
              var prendas = this.state.prendas

              console.log(prendas)
              var len = json["facturas_locales"][0]["prendas"].length
              console.log(len)
              for(var i = 0; i < len; i++){
                  prendas[i].push(json["facturas_locales"][0]["prendas"][i]["costo"])
              }
              console.log(prendas[0])
              
              this.setState({prendas: prendas})
              

              this.setState({total: json["total"], loadingb: true })

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
            paddingRight: "30px",
            width: "150px"
        },
        totalDiv:{
            textAlign: "right",
            padding: "0"
        },
    }

   const headings = [
                    'Cloth',
                    'Color',                    
                    'Service', 
                    'Marca',
                    'Price',
                    
                ];
    
    const rows = this.state.prendas


        const ColorButtonB = withStyles(theme => ({
            root: {
              color: 'white',
              backgroundColor: red[500],
              '&:hover': {
                backgroundColor: red[700],
              },
            },
          }))(Button);

    var Tabla
          console.log(this.state.prendas.length)
          if( this.state.loadinga == true && this.state.loadingb == true || this.state.prendas.length == 0){
              Tabla =  <Table headings={headings} rows={rows} style={{width:"100%"}} />
          }else{
            Tabla = <CircularProgress style={{margin: "20px auto"}} />
          }
      
    return(
        <div className="container"style={{display: this.props.display}}>

            <div className="row" id="Head">
                <div className="col" id="title">
                    <h3 style={styles.title}>Billing</h3>
                </div>               
            </div>

            <div className="row" id="table">
                <div className="col" style={{height: "250px", overflowY: "auto"}}>
               {Tabla}
                </div>
            </div>

            <div className='row' style={{padding:"0"}}>
               
                <div className="col-6" style={{textAlign:"right%"}}>
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

    );
}
}

export default Factura;