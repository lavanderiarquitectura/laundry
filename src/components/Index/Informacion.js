import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import logo from '../../img/logo.png';

import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MeetingRoom from '@material-ui/icons/MeetingRoom';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Prendas from "../../components/Operaciones/Prendas";

import Factura from "../../components/Operaciones/Factura";


class Informacion extends React.Component{


    constructor(props) {
        super(props);
        this.state = {
          name: 'Juan Felipe Contreras',
          room: '401',
          cloths: '2',
          invoice: 'none',
          clothes: 'none',
        };
        this.changeStateC = this.changeStateC.bind(this);
       this.changeStateI = this.changeStateI.bind(this);
      //  this.changeState = this.changeState.bind(this);
    }

    changeStateC(){
            this.setState( {clothes: "block", invoice:"none"})

    }
    changeStateI(){
            this.setState( {clothes: "none", invoice:"block"})
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
            inputs:{
                marginTop: '8px',
                height: '40px',
                marginBottom: '0',
            },
            logo:{
                width: '100%',
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
                paddingBottom: "5px",
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

        }

        return(
  
            <div className="container col-5" style={styles.div}>               
                <div className='row' style={styles.row}>
                    <div className='col-3'>
                        <img id="logo" src={logo} style={styles.logo}></img>
                    </div>
                    <div className='col' style={styles.information}>
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
                            label="Number cloths"
                            style={styles.textC}
                            value={this.state.cloths}
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
                    <div className='col-4' style={styles.buttons}>
                        <div className="" style={styles.divInput}>                
                        <Link to='#'><Button onClick={this.changeStateC} variant="outlined" focusVisible style={styles.botonInicio} color="primary">Clothes</Button></Link>
                        </div>
                        <div className="" style={styles.divInput}>                
                        <Link to='#'><Button onClick={this.changeStateI}  variant="outlined" focusVisible style={styles.botonInicio} color="primary">Invoice</Button></Link>
                        </div>
                    </div>
                </div>
                <div className='row' style={styles.rowBottom}>
                    <div className='col-12'>
                    <Prendas display={this.state.clothes}/>
                    <Factura display={this.state.invoice}/>
                    </div>
                </div>
            </div>            
            )
    }
}

export default Informacion;