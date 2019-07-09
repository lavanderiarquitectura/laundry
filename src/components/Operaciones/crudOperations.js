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
var lotEnd = []
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
          washerO: [],
          iron: [],
          ironO: [],

          lavadoS: [],
          lavadoW: [],
          lavadoF: [],
          ironS: [],
          ironI: [],
          ironF: [],
          fullS: [],
          fullW: [],
          fullI: [],
          fullF: [],


        };
       this.onChangeD = this.onChangeD.bind(this);
       this.onChangeL = this.onChangeL.bind(this);
       this.onChangeDP = this.onChangeDP.bind(this);
       this.onChangeLP = this.onChangeLP.bind(this);
       this.onChangeLF = this.onChangeLF.bind(this);

       this.washer = this.washer.bind(this);
       this.iron = this.iron.bind(this);

       
       this.lavStandBy = this.lavStandBy.bind(this);
       this.lavWash = this.lavWash.bind(this);
       this.plStandBy = this.plStandBy.bind(this);
       this.plIron = this.plIron.bind(this);
       this.fullStandBy = this.fullStandBy.bind(this);
       this.fullWash = this.fullWash.bind(this);
       this.fullIron = this.fullIron.bind(this);

       this.washerOff = this.washerOff.bind(this);
       this.ironOff = this.ironOff.bind(this);

        this.getLotetoLav = this.getLotetoLav.bind(this);
       this.changeStateLoteP = this.changeStateLoteP.bind(this); 

       this.findServiceFabric = this.findServiceFabric.bind(this);

       this.findDevWithLot = this.findDevWithLot.bind(this);
       this.delLotetoLav = this.delLotetoLav.bind(this);

       this.delLotetoPla = this.delLotetoPla.bind(this);
       this.getLotetoPla = this.getLotetoPla.bind(this);
       this.findService = this.findService.bind(this);
       this.changeStateLoteF = this.changeStateLoteF.bind(this);

       this.findDevWithLotF = this.findDevWithLotF.bind(this);
       this.findServiceF = this.findServiceF.bind(this);
       this.changeStateLoteX = this.changeStateLoteX.bind(this);


      
       
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
    componentDidMount(){     

       this.washer() //Obtener lavadoras por estado: On
       this.washerOff() //Obtener lavadoras por estado: Off
       this.iron() //Obtener planchas por estado; On
       this.ironOff() //Obtener planchas por estado; On

       this.lavStandBy() //Obtener lotes de lavado por estado
       this.lavWash() //Obtener lotes de lavado por estado

       this.plStandBy() //Obtener lotes de planchado por estado
       this.plIron() //Obtener lotes de planchado por estado

       this.fullStandBy() //Obtener lotes full por estado
       this.fullWash() //Obtener lotes full por estado
       this.fullIron() //Obtener lotes full por estado

      }

      async lavStandBy(){
        var token = sessionStorage.getItem("TokenA")  
        return fetch(back_end + "/lots/byOperationAndState/1/0"+"?token="+token, {
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
            this.setState({lavadoS: json})
            for (var i = 0; i < json.length; i++) {
                lotWash.push(<MenuItem value={this.state.lavadoS[i]["id"]}>{this.state.lavadoS[i]["id"]}</MenuItem>);
              }

          })
          .catch(error => {
            console.log(error);
          });
    }

    async lavWash(){
      var token = sessionStorage.getItem("TokenA")   
      return fetch(back_end + "/lots/byOperationAndState/1/1"+"?token="+token, {
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
          this.setState({lavadoW: json})
          for (var i = 0; i < json.length; i++) {
              lotEnd.push(<MenuItem value={this.state.lavadoW[i]["id"]}>{this.state.lavadoW[i]["id"]}</MenuItem>);
            }

        })
        .catch(error => {
          console.log(error);
        });
  }

  async plStandBy(){
    var token = sessionStorage.getItem("TokenA")   
    return fetch(back_end + "/lots/byOperationAndState/2/0"+"?token="+token, {
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

        this.setState({ironS: json})
        for (var i = 0; i < json.length; i++) {
            lotIron.push(<MenuItem value={this.state.ironS[i]["id"]}>{this.state.ironS[i]["id"]}</MenuItem>);
          }

      })
      .catch(error => {
        console.log(error);
      });
}
async plIron(){
  var token = sessionStorage.getItem("TokenA")   
    return fetch(back_end + "/lots/byOperationAndState/2/1"+"?token="+token, {
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
        this.setState({ironI: json})
        for (var i = 0; i < json.length; i++) {
            lotEnd.push(<MenuItem value={this.state.ironI[i]["id"]}>{this.state.ironI[i]["id"]}</MenuItem>);
          }

      })
      .catch(error => {
        console.log(error);
      });
}

async fullStandBy(){
    var token = sessionStorage.getItem("TokenA")  
    return fetch(back_end + "/lots/byOperationAndState/3/0"+"?token="+token, {
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

        this.setState({fullS: json})
        for (var i = 0; i < json.length; i++) {
            lotWash.push(<MenuItem value={this.state.fullS[i]["id"]}>{this.state.fullS[i]["id"]}</MenuItem>);
          }

      })
      .catch(error => {
        console.log(error);
      });
}

async fullWash(){
  var token = sessionStorage.getItem("TokenA")  
  return fetch(back_end + "/lots/byOperationAndState/3/1"+"?token="+token, {
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
      this.setState({fullW: json})
      for (var i = 0; i < json.length; i++) {
          lotIron.push(<MenuItem value={this.state.fullW[i]["id"]}>{this.state.fullW[i]["id"]}</MenuItem>);
        }

    })
    .catch(error => {
      console.log(error);
    });
}

async fullIron(){
  var token = sessionStorage.getItem("TokenA")    
  return fetch(back_end + "/lots/byOperationAndState/3/2"+"?token="+token, {
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
      this.setState({fullI: json})
      for (var i = 0; i < json.length; i++) {
          lotEnd.push(<MenuItem value={this.state.fullI[i]["id"]}>{this.state.fullI[i]["id"]}</MenuItem>);
        }

    })
    .catch(error => {
      console.log(error);
    });
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
        washers.push(<MenuItem value={this.state.washer[i]["id"]}>{this.state.washer[i]["id"]}</MenuItem>);
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
          irons.push(<MenuItem value={this.state.iron[i]["id"]}>{this.state.iron[i]["id"]}</MenuItem>);
      }
          
    })
    .catch(error => {
      console.log(error);
    });
}

//Operacion asignacion de lotes a lavado

  getLotetoLav(){
    var token = sessionStorage.getItem("TokenA") 
    const request = require('request')
        request.put(back_end + "/devices/"+this.state.devices+"?token="+token, {
        headers: { 'Content-type': 'application/json' },
        json: {			
                lotId : this.state.lote,
                state: false,
                type: "Washer"
        }
        }, (error, res, body) => {
        if (error) {
            console.error(error)
            return
        }else{
        
          this.findServiceFabric()

        }
        }
        )
}

findServiceFabric(){
  var token = sessionStorage.getItem("TokenA") 
  var type = ""
  var fabric = ""   
  return fetch(back_end + "/lots/"+this.state.lote+"?token="+token, {
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
          type = json["typeOperation"]
          fabric = json["typeFabric"]
      this.changeStateLoteP(type, fabric)

    })
    .catch(error => {
      console.log(error);
    }); 
    
}
//Cambiar estado de los lotes a lavado

changeStateLoteP(t, f){
  var token = sessionStorage.getItem("TokenA")    
  const request = require('request')
      request.put(back_end + "/lots/"+this.state.lote+"?token="+token, {
      headers: { 'Content-type': 'application/json' },
      json: {			
              state : 1,
              typeFabric: f,
              typeOperation: t

      }
      }, (error, res, body) => {
      if (error) {
          console.error(error)
          return
      }else{
        washers = []
        lotWash = []
        lotIron = []
        lotEnd = []
        irons = []
        this.componentDidMount()

      }
      }
      )
}


//Operacion asignacion de lotes a planchado

//Buscamos dispositivos que tengan asignado el Lote

findDevWithLot(){
  console.log("entreee")
  for (var i = 0; i < this.state.washerO.length; i++) {
    console.log(this.state.washerO[i]["lotId"])
    if(this.state.washerO[i]["lotId"] == this.state.loteP){
        var id = this.state.washerO[i]["id"]
        this.delLotetoLav(id)
        this.getLotetoPla()
    }else{
      this.getLotetoPla()
    }
  }   
}

//Designacion del lote a dispositivos que lo posean

delLotetoLav(id){
  var token = sessionStorage.getItem("TokenA") 
  const request = require('request')
      request.put(back_end + "/devices/"+id+"?token="+token, {
      headers: { 'Content-type': 'application/json' },
      json: {			
              lotId : 0,
              state: true,
              type: "Washer"
      }
      }, (error, res, body) => {
      if (error) {
          console.error(error)
          return
      }else{

      }
      }
      )
}

delLotetoPla(id){
  var token = sessionStorage.getItem("TokenA") 
  const request = require('request')
      request.put(back_end + "/devices/"+id+"?token="+token, {
      headers: { 'Content-type': 'application/json' },
      json: {			
              lotId : 0,
              state: "true",
              type: "Iron"
      }
      }, (error, res, body) => {
      if (error) {
          console.error(error)
          return
      }else{
      }
      }
      )
}


//Cambio estado de la plancha

getLotetoPla(){
  var token = sessionStorage.getItem("TokenA") 
  const request = require('request')  
      request(back_end + "/devices/"+this.state.devicesP+"?token="+token, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      json: {			
              lotId : this.state.loteP,
              state: false,
              type: "Iron"
      }
      }, (error, res, body) => {
      if (error) {
          console.error(error)
          return
      }else{
        //Buscamos el tipo de servicio que requiere el lote
        this.findService()

      }
      }
      )
}

findService(){
  var token = sessionStorage.getItem("TokenA")    
  return fetch(back_end + "/lots/"+this.state.loteP+"?token="+token, {
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
        if(json["typeOperation"] == 2 ){
          this.changeStateLoteF(1,2,json["typeFabric"])
        }else if(json["typeOperation"] == 3){
          this.changeStateLoteF(2,3,json["typeFabric"])
        }     
          
    })
    .catch(error => {
      console.log(error);
    }); 
}

changeStateLoteF(state, type, fabric){
var token = sessionStorage.getItem("TokenA")    
const request = require('request')
    request.put(back_end + "/lots/"+this.state.loteP+"?token="+token, {
    headers: { 'Content-type': 'application/json' },
    json: {			
            state : state,
            typeFabric: fabric,
            typeOperation: type,
    }
    }, (error, res, body) => {
    if (error) {
        console.error(error)
        return
    }else{
      washers = []
      lotWash = []
      lotIron = []
      lotEnd = []
      irons = []
      this.componentDidMount()

    }
    }
    )
}

//Operacion asignacion de lotes a finalizado

findDevWithLotF(){
  for (var i = 0;  i < this.state.washerO.length; i++) {
    console.log(this.state.washerO[i]["lotId"] )
    if(this.state.washerO[i]["lotId"] == this.state.loteF){
        var id = this.state.washerO[i]["id"]
        this.delLotetoLav(id)
        this.findServiceF()
    }
  }
  for (var i = 0;  i < this.state.ironO.length; i++) {
    if(this.state.ironO[i]["lotId"] == this.state.loteF){
        var id = this.state.ironO[i]["id"]
        this.delLotetoPla(id)
        this.findServiceF()
        
    }
  } 
}

findServiceF(){
  var token = sessionStorage.getItem("TokenA")    
  return fetch(back_end + "/lots/"+this.state.loteF+"?token="+token, {
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
          if(json["typeOperation"] == 1){
            this.changeStateLoteX(2, 1, json["typeFabric"])
          }else if(json["typeOperation"] == 2){
            this.changeStateLoteX(2, 2, json["typeFabric"])  
          }else if(json["typeOperation"] == 3){
            this.changeStateLoteX(3, 3, json["typeFabric"])  
          }

    })
    .catch(error => {
      console.log(error);
    }); 
}

changeStateLoteX(state, type, fabric){
  var token = sessionStorage.getItem("TokenA")    
  const request = require('request')
      request.put(back_end + "/lots/"+this.state.loteF+"?token="+token, {
      headers: { 'Content-type': 'application/json' },
      json: {			
              state : state,
              typeFabric: fabric,
              typeOperation: type,
              isFinished: true
      }
      }, (error, res, body) => {
      if (error) {
          console.error(error)
          return
      }else{
  
        washers = []
        lotWash = []
        lotIron = []
        lotEnd = []
        irons = []
        this.componentDidMount()
      }
      }
      )
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
                
                <Button  color="secondary"  onClick={this.getLotetoLav} variant="contained" aria-label="Add" style={styles.button}>Washing</Button>
                  
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
                
                <Button  color="secondary"  onClick={this.findDevWithLot} variant="contained" aria-label="Add" style={styles.button}>Ironing</Button>
                  
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
                    {lotEnd}
                    </Select>
                </FormControl>
                
                <Button  color="secondary"  onClick={this.findDevWithLotF} variant="contained" aria-label="Add" style={styles.button}>Done</Button>
                  
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