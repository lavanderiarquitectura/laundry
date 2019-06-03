import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import logo from '../../img/logo.png';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Table from "../Index/Table";


class Prendas extends React.Component{

    
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
                    'ID',
                    'Cloth',
                    'Color', 
                    'Fabric',
                    'Service',
                    'State',
                    
                ];
    
    const rows = [
            
            [ 1,
            "Pant",
            "Yellow",
            "Cotton",
            "W / I",
            "Washing"
            ],
            [ 2,
            "Shirt",
            "White",
            "Cotton",
            "W",
            "Washing"
            ],
            [ 3,
            "Jacket",
            "Brown",
            "Linio",
            "W / I",
            "Ironing"
            ],
        ];


    return(
        <div className="container"style={{display: this.props.display}}>
            <div className="row" id="Head">
                <div className="col" id="title">
                    <h3 style={styles.title}>Clothes</h3>
                </div>               
            </div>
            <div className="row" id="table">
                <div className="col">
                <Table headings={headings} rows={rows} style={{width:"100%"}} />
                </div>
            </div>
        </div>

    );
}
}

export default Prendas;