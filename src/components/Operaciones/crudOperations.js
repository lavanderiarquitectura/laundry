import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import logo from '../../img/logo.png';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Table from "../../components/Index/Table";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Input from '@material-ui/core/Input';



class crudOperations extends React.Component{


    constructor(props) {
        super(props);
        this.state = {
          devices: '',
          lote: '',
          devicesP: '',
          loteP: '',
          loteF: '',
        };
       this.onChangeD = this.onChangeD.bind(this);
       this.onChangeL = this.onChangeL.bind(this);
       this.onChangeDP = this.onChangeDP.bind(this);
       this.onChangeLP = this.onChangeLP.bind(this);
       this.onChangeLF = this.onChangeLF.bind(this);
       
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
                <div className='col' id="lavado" style={{textAlign: "center"}}>                
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
                    <MenuItem value={1}>Lavadora</MenuItem>
                    <MenuItem value={2}>Plancha</MenuItem>
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
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    </Select>
                </FormControl>
                
                <Button  color="secondary"  onClick="" variant="contained" aria-label="Add" style={styles.button}>Washing</Button>
                  
            </div>
            <div className='col' id="planchado" style={{textAlign: "center"}}>                
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
                    <MenuItem value={1}>Lavadora</MenuItem>
                    <MenuItem value={2}>Plancha</MenuItem>
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
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    </Select>
                </FormControl>
                
                <Button  color="secondary"  onClick="" variant="contained" aria-label="Add" style={styles.button}>Ironing</Button>
                  
            </div>
            <div className='col' id="finalizado" style={{textAlign: "center"}}>                
           
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
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    </Select>
                </FormControl>
                
                <Button  color="secondary"  onClick="" variant="contained" aria-label="Add" style={styles.button}>Done</Button>
                  
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