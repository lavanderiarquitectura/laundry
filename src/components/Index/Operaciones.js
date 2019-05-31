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
import crudDevices from '../../components/Operaciones/crudDevices';


class Operaciones extends React.Component{


    constructor(props) {
        super(props);
        this.state = {
          name: 'Juan Felipe Contreras',
          room: '401',
          cloths: '2'
        };
      //  this.changeState = this.changeState.bind(this);
    }
    
    render(){

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

        }

        return(
  
            <div className="container col-5" style={styles.div}>               
                <div className='row' style={styles.row}>
                    <div className='col-2'>
                        <img id="logo" src={logo} style={styles.logo}></img>
                    </div>
                    <div className='col' style={{textAlign:"center", margin:'auto'}}>
                     <h3 style={{ margin:'0'}}>Operaciones en curso</h3>
                   </div>
                   <div className='col-2'> </div>
                </div>
                <div className='row' style={styles.rowBottom}>
                    <div className='col' style={{textAlign:"center", margin:'5px 0px 0px 0px'}}>
                     <h3 >Tabla de Operaciones</h3>
                   </div>
                </div>
                <div className='row' style={styles.rowBottom}>
                        <div className="col" style={styles.divButton}>               
                        <Link to='#'><ColorButtonB onClick="" variant="outlined" focusVisible style={styles.botonInicio} color="primary">Add Lotes</ColorButtonB></Link>
                        </div>
                        <div className="col" style={styles.divButton}>                
                        <Link to='#'><ColorButton onClick="" variant="outlined" focusVisible style={styles.botonInicio} color="green">Operations</ColorButton></Link>
                        </div>
                        <div className="col" style={styles.divButton}>                
                        <Link to='#'><ColorButtonO onClick="" variant="outlined" focusVisible style={styles.botonInicio} color="orange">Devices</ColorButtonO></Link>
                        
                    </div>
                </div>
                <div className='row' style={styles.rowBottom}>
                    <div className='col' style={{textAlign:"center", margin:'5px 0px 0px 0px'}}>
                     <crudDevices/>
                   </div>
                </div>
            </div>            
            )
    }
}

export default Operaciones;