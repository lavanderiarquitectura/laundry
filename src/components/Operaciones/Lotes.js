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

import AddCircle from '@material-ui/icons/AddCircle';



class Lotes extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          add: 'none',
        };
       this.changeState = this.changeState.bind(this);
    }

    changeState(){
        if(this.state.add == "none"){
            this.setState( {add: "block"})
        }
            

    }

render(){

    const styles={
        title:{
            textAlign: "center",
            margin:"5px",
        },
        add:{
            textAlign: "right"
        },
        button:{
           margin:"5px 3px 0 0",
           width:"45%",
           padding: "5px"
        },
        div:{
            textAlign:"center",
            margin:"5px 3px 0 0",
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
    }
}

   const headings = [
                    'ID',
                    'Cloth',
                    'Color', 
                    'Fabric',
                ];
    
    const rows = [
            
            [ 1,
            "Pant",
            "Yellow",
            "Cotton"
            ],
            [ 2,
            "Shirt",
            "White",
            "Cotton"
            ],
            [ 3,
            "Jacket",
            "Brown",
            "Linio"
            ],
        ];


    return(
        <div className="container"style={{display: this.props.display}}>
            <div className="row" id="Head">
                 <div className="col">
                </div>
                <div className="col" id="title">
                    <h3 style={styles.title}>Add Lotes</h3>
                </div>  
                <div className="col" id="addButton" style={styles.add}>
              </div>             
            </div>
            <div className="row" id="table">
                <div className="col">
                <Table headings={headings} rows={rows} style={{width:"100%"}} />
                </div>
            </div>
            <div className="row">
                <div className="container">

                <form className="row" style={{marginLeft: "0"}}> 
               
               <div className="form-group col" style={styles.divInput}>
                    <TextField
                        autoFocus
                        id="cloth"
                        label="Cloth"
                        onChange={this.handleChangeName}
                        margin="normal"
                        style = {styles.inputs}
                    />
               </div>
               <div className="form-group col" style={styles.divInput}>
                    <TextField
                        id="color"
                        label="Color"
                        onChange={this.handleChangeLastName}
                        margin="normal"
                        style = {styles.inputs}
                    />
               </div>
               <div className="form-group col" style={styles.divInput}>
                    <TextField
                        id="fabric"
                        label="Fabric"
                        onChange={this.handleChangeIdNumber}
                        margin="normal"
                        style = {styles.inputs}
                    />
               </div>  
               <div className="form-group col-4" style={styles.div}>
                 <Button  color="primary"  onClick={this.changeState} variant="contained" aria-label="Add" style={styles.buttonAdd}><AddCircle/></Button>
                 <Button  color="secondary" variant="contained" aria-label="Add" style={styles.button}>Add Lote</Button>
               </div>            
             
               </form>
                </div>
            
            </div>
           
        </div>

    );
}
}

export default Lotes;