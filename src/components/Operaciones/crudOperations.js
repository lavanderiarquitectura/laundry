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

    
render(){

    const styles={
        selector:{
            width: "50%"
        }
    }

    const Lavado = (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                
                <FormControl className={styles.selector}>
                    <InputLabel shrink >
                    Device Allowed
                    </InputLabel>
                    <Select
                    value=""
                    input={<Input name="device" id="age-label-placeholder" />}
                   
                    name="device"
                    className=""
                    >
                    <MenuItem value={1}>Lavadora</MenuItem>
                    <MenuItem value={2}>Plancha</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className={styles.selector}>
                    <InputLabel shrink >
                    Lote in wait
                    </InputLabel>
                    <Select
                    value=""
                    input={<Input name="device" id="age-label-placeholder" />}
                   
                    name="device"
                    className=""
                    >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    </Select>
                </FormControl>

                </div>
                <div className='col'>

                </div>
                <div className='col'>

                </div>
            </div>
        </div>
    );

 
    return(
        <div className="container" style={{display: this.props.display}}>
            <div className="row" id="Head">
                <div className="col" id="title">
                    <h3>Operations</h3>
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