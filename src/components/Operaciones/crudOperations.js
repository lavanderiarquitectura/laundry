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
          lote: ''
        };
       this.onChangeD = this.onChangeD.bind(this);
       this.onChangeL = this.onChangeL.bind(this);
    }


    onChangeD(event){
        this.setState({devices: event.target.value})
    }
    onChangeL(event){
        this.setState({lote: event.target.value})
    }
    
render(){

    const styles={
        selector:{
            width: "150px",
            margin: "0 0 5px 0"
        },
        button:{
            width: '150px'
        },
        title:{
            textAlign: "center",
            margin:"5px",
        },
    }

    const Lavado = (
        <div className='container' style={{marginTop: "5px"}}>
            <div className='row'>
                <div className='col' id="lavado" style={{textAlign: "center"}}>                
                <FormControl style={styles.selector}>
                    <InputLabel shrink >
                    Device Allowed
                    </InputLabel>
                    <Select
                    value={this.state.devices}
                    input={<Input name="device" id="age-label-placeholder" />}
                    onChange = {this.props.onChangeD}                   
                    name="device"
                    className=""
                    >
                    <MenuItem value={1}>Lavadora</MenuItem>
                    <MenuItem value={2}>Plancha</MenuItem>
                    </Select>
                </FormControl>

                <FormControl style={styles.selector}>
                    <InputLabel shrink >
                    Lote in wait
                    </InputLabel>
                    <Select
                    value={this.state.lote}
                    input={<Input name="device" id="age-label-placeholder" />}
                   
                    onChange = {this.props.onChangeL}        
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
                    Device Allowed
                    </InputLabel>
                    <Select
                    value={this.state.devices}
                    input={<Input name="device" id="age-label-placeholder" />}
                    onChange = {this.props.onChangeD}                   
                    name="device"
                    className=""
                    >
                    <MenuItem value={1}>Lavadora</MenuItem>
                    <MenuItem value={2}>Plancha</MenuItem>
                    </Select>
                </FormControl>

                <FormControl style={styles.selector}>
                    <InputLabel shrink >
                    Lote in wait
                    </InputLabel>
                    <Select
                    value={this.state.lote}
                    input={<Input name="device" id="age-label-placeholder" />}
                   
                    onChange = {this.props.onChangeL}        
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
                    Device Allowed
                    </InputLabel>
                    <Select
                    value={this.state.devices}
                    input={<Input name="device" id="age-label-placeholder" />}
                    onChange = {this.props.onChangeD}                   
                    name="device"
                    className=""
                    >
                    <MenuItem value={1}>Lavadora</MenuItem>
                    <MenuItem value={2}>Plancha</MenuItem>
                    </Select>
                </FormControl>

                <FormControl style={styles.selector}>
                    <InputLabel shrink >
                    Lote in wait
                    </InputLabel>
                    <Select
                    value={this.state.lote}
                    input={<Input name="device" id="age-label-placeholder" />}
                   
                    onChange = {this.props.onChangeL}        
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