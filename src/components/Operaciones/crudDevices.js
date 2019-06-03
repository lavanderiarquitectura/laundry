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

import AddCircle from '@material-ui/icons/AddCircle';


class crudDevices extends React.Component{

    
render(){

    const styles ={
        title:{
            textAlign: "center",
            margin:"5px",
        },
        add:{
            textAlign: "right"
        },
        button:{
           margin:"5px 6px 5px"
        },
        div:{
            textAlign:"left",
            margin:"5px 3px 0 0",
            padding: "0px"
         },
        divB:{
            textAlign:"center",
            margin:"5px 10px 0 0",
            padding: "0px"
         },
        buttonAdd:{
            margin:"5px 3px 0 0",
            width:"35%",
            padding: "5px"
         },
         divInput:{
            textAlign: 'center',
            margin:"0 5px 0 0",
            padding: "0"
        },
        inputs:{
            margin: "5px 3px 0 0",
            padding: "0"
    },text:{
        margin: "15px 0 0 0",
        padding: "0",
        fontSize:"22px"
}
    }
    const headings = [
        'ID',
        'Type',
        'Max Capacity',
        'State',
        'On/Off',
    ];
    const rows = [
    [
    1,
    'Washing',
    50,
    false,
    ],
    [
    2,
    'Ironing',
    50,
    true,
    ],
    [
    3,
    'Washing',
    50,
    true,
    ],
    ];

    return(
        <div className="container" style={{display: this.props.display}}>
            <div className="row" id="Head">
                
                <div className="col" id="title">
                    <h3 style={styles.title}>Devices</h3>
                </div>
            </div>
            <div className="row" id="table">
                <div className="col">
                <Table headings={headings} rows={rows} tableType="Machine-Table" style={{width:"100%"} } />
                </div>
            </div>
            
            <div className="row">
                <div className="container">

                <form className="row" style={{marginLeft: "0"}}> 

                <div className="form-group col" style={styles.divInput}>
                    <h3 style={styles.text}>New Device</h3>
               </div>
               
               <div className="form-group col" style={styles.divInput}>
                    <TextField
                        autoFocus
                        id="cloth"
                        label="Type Devices"
                        onChange={this.handleChangeName}
                        margin="normal"
                        style = {styles.inputs}
                    />
               </div>
               <div className="form-group col" style={styles.divInput}>
                    <TextField
                        id="color"
                        label="State"
                        onChange={this.handleChangeLastName}
                        margin="normal"
                        style = {styles.inputs}
                    />
               </div>
               
               <div className="form-group col-2" style={styles.divB}>
                 <Button  color="primary"  onClick={this.changeState} variant="contained" aria-label="Add" style={styles.buttonAdd}><AddCircle/></Button>
                 </div>            
             
               </form>
                </div>
            
            </div>
        </div>

    );
}
}

export default crudDevices;