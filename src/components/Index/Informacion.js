import {Link} from 'react-router-dom';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import logo from '../../img/logo.png';

import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MeetingRoom from '@material-ui/icons/MeetingRoom';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Prendas from "../../components/Operaciones/Prendas";

import Factura from "../../components/Operaciones/Factura";


import Person from '@material-ui/icons/Person';
import MonetizacionOn from '@material-ui/icons/MonetizationOn';


import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import Error from '../../components/Auxiliares/Error'

var config_data = require('../../ipconfig.json')
var back_end = config_data.backIP
var back_reg = config_data.backRegistro

class Informacion extends React.Component{


    constructor(props) {
        super(props);
        this.state = {
          name: '',
          room: '',
          cloths: '0',
          invoice: 'none',
          clothes: 'block',
          id: '',
          state: false,
          setOpen: false,
          open: false,
        };
        this.changeStateC = this.changeStateC.bind(this);
       this.changeStateI = this.changeStateI.bind(this);

       this.State = this.State.bind(this);
       this.verifyState = this.verifyState.bind(this);

       this.obtenerUser = this.obtenerUser.bind(this);
     
       this.handleClose = this.handleClose.bind(this);
       this.notificar = this.notificar.bind(this);

       
      //  this.changeState = this.changeState.bind(this);
    }

    changeStateC(){
            this.setState( {clothes: "block", invoice:"none"})

    }
    changeStateI(){
            this.setState( {clothes: "none", invoice:"block"})
    }  


    verifyState(){
        var token = sessionStorage.getItem("Token") 
        return fetch(back_end + "/gethabitacionescostfree?token="+token, {
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
            for( var i in json["ids_habitaciones"]){
                if(sessionStorage.getItem("Room")  == json["ids_habitaciones"][i]){
                    
                    this.setState({state: true, value: "In Operation"})
                }else{
                    this.setState({state: false, value: "Not Operation"})
                }
            }

                
          })
          .catch(error => {
            console.log(error);
          });
        
    }

    notificar(mss){
        this.setState({setOpen: true, open: true, message: mss})
    }
    handleClose() {        
        this.setState({setOpen: false, open: false})
      }

    State(){
        if( this.state.state == false){
        const room = sessionStorage.getItem("Room") 
        const request = require('request')
        request.post(back_reg + '/peticion/create', {
            headers: { "Access-Control-Allow-Origin" : "*" },
            json: {			
                       id_room: room
            }
            }, (error, res, body) => {
            if (error) {
                console.error(error)
                return
            }else{

                this.notificar("Se ha solicitado el servicio de lavanderia")
                this.setState({value: "Await"})
                console.log(body)
    
            }
            }
            )
        }else{
            this.notificar("Ya se encuentra en servicio")
            
        }
        //Endpoint de habitaciones con pedido
        //if existe la room sessionStorage.getItem("Room") en el json obtenido
        //setState({state: "inService"})
        //else{ setState({state: "sin servicio"})}

    }

    async obtenerUser(){
        var token = sessionStorage.getItem("Token") 
        var id = sessionStorage.getItem("id") 
        this.setState({id: id})

        return fetch(back_end + "/ldap-auth/api/auth/getuser/"+id+"?token="+token, {
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
            sessionStorage.setItem("Room", json["room_id"]);
            sessionStorage.setItem("Name", json["name"]);
            sessionStorage.setItem("Last", json["last_name"]);
            var r = sessionStorage.getItem("Room") 
            var n = sessionStorage.getItem("Name") 
            var l = sessionStorage.getItem("Last") 
            var id_user = this.state.id
            this.setState({name: n + " " + l, room: r})       

                
          })
          .catch(error => {
            console.log(error);
          });
}  

    componentDidMount(){       
	
        this.obtenerUser()
        this.verifyState()
      
      }

    render(){

        const styles ={
            div :{
                padding: "5px 15px 8px 15px",
                borderRadius: "10px",
                marginTop: "20px",
                backgroundColor: "#FAFAFA",
                display: this.props.display,

            },
            botonInicio:{
                width: '85%',
                height: '45px',
                marginBottom: '0px',
                marginTop:'10px',
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
                width: '100px',
                marginLeft:'5px',
            },
            olvidaste:{
                fontSize:"12px",
                marginBottom: "5px",
                marginTop:"5px",
                textAlign: "center",
            },
            divBottom:{
                marginTop:"5px",
            },
            text:{
                width: "97%",
                marginBottom:"3px",
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
                paddingLeft:"0",
            },
            buttons:{
                padding:"2px 0 0 0",
            },
            divInfo:{
                paddingLeft:"5px",
            },
            row:{
                padding: "0",
                marginLeft: "5px",
                marginRight: "5px",
                backgroundColor: "white",
                paddingBottom: "5px",
            },
            rowBottom:{
                padding: "0",
                marginLeft: "5px",
                marginRight: "5px",
                marginTop:"10px",
                backgroundColor: "white",
                paddingBottom: "5px",
                overflowX: "auto"
            },
            welcome:{
                textAlign:"center",
                marginTop:"10px",
            },

        }
        
        var display = sessionStorage.getItem("Users");
        var Informacion
        
        if( display == "false" || display == null){
            Informacion = <Error/>
        }else{
            Informacion = <div className="container col-md-5 mb-10" style={styles.div}>               
            <div className='row' style={styles.row}>
                <div className='col-md-3' style={{textAlign: "center", margin:"auto", padding: "0"}}>
                    <img id="logo" src={logo} style={styles.logo}></img>
                </div>
                <div className='col-md-6' style={styles.information}>
                    <div style={styles.divInfo}>                        
                    <TextField
                        disabled
                        id="input-with-icon-textfield"
                        label="Name User"
                        style={styles.text}
                        value={this.state.name}
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                            <AccountCircle />
                            </InputAdornment>
                        ),
                        }}
                    />
                    <TextField
                        disabled
                        id="input-with-icon-textfield"
                        label="Number Room"
                        style={styles.textR}
                        value={this.state.room}
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                            <MeetingRoom />
                            </InputAdornment>
                        ),
                        }}
                    />
                    <TextField
                        disabled
                        id="input-with-icon-textfield"
                        label="Id Number"
                        style={styles.textC}
                        value={this.state.id}
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                            <ShoppingCart/>
                            </InputAdornment>
                        ),
                        }}
                    />                    
                    </div>                     
                </div>
                <div className='col-md-3' style={styles.buttons}>
                    <div className="" style={styles.divInput}>                
                    <Link to='#'><Button onClick={this.changeStateC} variant="outlined" focusVisible style={styles.botonInicio} color="primary"><Person/>Clothes</Button></Link>
                    </div>
                    <div className="" style={styles.divInput}>                
                    <Link to='#'><Button onClick={this.changeStateI}  variant="outlined" focusVisible style={styles.botonInicio} color="primary"><MonetizacionOn/>Billing</Button></Link>
                    </div>
                </div>
            </div>
            <div className='row' style={styles.rowBottom}>
                <div className='col-12 ' style={{textAlign: "center", padding: "0"}}>
                <Prendas display={this.state.clothes} room={this.state.room}/>
                <Factura display={this.state.invoice} room={this.state.room}/>
                </div>
            </div>
        </div>      
        }
        return(
            <div>
                {Informacion}
                <Snackbar
                    variant="error"
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                    }}
                    open={this.state.open}
                    autoHideDuration={6000}
                    onClose={this.handleClose}
                    ContentProps={{
                    'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">{this.state.message}</span>}
                    action={[                    
                    <IconButton
                        key="close"
                        aria-label="Close"
                        color="inherit"
                        onClick={this.handleClose}
                    >
                        <CloseIcon />
                    </IconButton>,
                    ]}
                />
            </div>
            )
    }
}

export default Informacion;