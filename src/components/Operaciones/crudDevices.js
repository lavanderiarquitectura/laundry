import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import logo from '../../img/logo.png';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";


class crudDevices extends React.Component{
render(){
    return(
        <div className="container">
            <div className="row" id="Head">
                <div className="col" id="title">
                    <h3>Devices</h3>
                </div>
                <div className="col" id="addButton">
                <Fab size="small" color="secondary" aria-label="Add" >
                    <AddIcon />
                </Fab>
                </div>
            </div>
            <div className="row" id="table">
                <div className="col">

                </div>
            </div>
        </div>

    );
}
}

export default crudDevices