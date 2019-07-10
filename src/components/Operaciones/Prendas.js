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
import { identity } from 'rxjs';

var config_data = require('../../ipconfig.json')
var back_end = config_data.backIP

class Prendas extends React.Component{
    constructor(props){
        super(props);
        this.state={
            prendas: []
        }
        this.convertColor = this.convertColor.bind(this);
        this.convertPrenda = this.convertPrenda.bind(this);
        this.convertTela = this.convertTela.bind(this);

        this.convertService = this.convertService.bind(this);
        this.obtenerRopa =  this.obtenerRopa.bind(this);
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
    convertTela(id){
        var tela = ['Acrylic',"Cotton","Denim","Flannel", "Leather", "Linen", "Silk", "Velvet", "Wool"]
        for( var i in tela){
            if( i == id-1){
                return tela[i]
            }
        }
    }

    obtenerRopa(){

         this.setState({prendas: []})
        
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
            for(var i in json){ 

              var prenda = this.convertPrenda(json[i]["tipo_prenda_id_tipo_prenda"])
              row.push(prenda)
              var color = this.convertColor(json[i]["color"])
              row.push(color)
              var tela = this.convertTela(json[i]["tipo_tela_id_tipo_tela"])
              row.push(tela)
              var service = this.convertService(json[i]["tipo_operacion_id_tipo_operacion"])
              row.push(service)
              row.push(json[i]["marca"]);                                      
                                 

          lotes.push(row)
          row = [];
          this.setState({prendas: lotes})
        }

            })
            .catch(error => {
              console.log(error);
            });
        }

    componentDidMount(){
      this.obtenerRopa()
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
                    'Cloth',
                    'Color', 
                    'Fabric',
                    'Service',
                    'Brand',
                    
                ];
    
    const rows = this.state.prendas;

    
    return(
        <div className="container"style={{display: this.props.display}}>
            <div className="row" id="Head">
                <div className="col" id="title">
                    <h3 style={styles.title}>Clothes</h3>
                </div>               
            </div>
            <div className="row" id="table">
                <div className="col" style={{height: "250px", overflowY: "auto"}}>
                <Table headings={headings} rows={rows} style={{width:"100%"}} />
                </div>
            </div>
        </div>

    );
}
}

export default Prendas;