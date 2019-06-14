import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import logo from '../../img/logo.png';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Table from "../Auxiliares/Table";


import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';

import AddCircle from '@material-ui/icons/AddCircle';



class Lotes extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          
          color: "",
          room: "",
          marca: "",
          cloth: "",
          fabric: "",
          operacion: "",
          lote: [],
        };
       this.changeState = this.changeState.bind(this);
       this.onChangeCloth = this.onChangeCloth.bind(this);
       this.onChangeColor = this.onChangeColor.bind(this);
       this.onChangeFabric = this.onChangeFabric.bind(this);
       this.onChangeRoom = this.onChangeRoom.bind(this);
       this.onChangeMarca= this.onChangeMarca.bind(this);
       this.onChangeOperacion = this.onChangeOperacion.bind(this);
       this.addLote = this.addLote.bind(this);
       this.add = this.add.bind(this);
    }


    onChangeCloth(event){        
        this.setState({cloth: event.target.value})
    }
    onChangeColor(event){
        this.setState({color: event.target.value})
    }
    onChangeFabric(event){        
        this.setState({fabric: event.target.value})
    }
    onChangeRoom(event){        
        this.setState({room: event.target.value})
    }
    onChangeMarca(event){        
        this.setState({marca: event.target.value})
    }
    onChangeOperacion(event){        
        this.setState({operacion: event.target.value})
    }
    changeState(){
        if(this.state.add == "none"){
            this.setState( {add: "block"})
        }
    }

    async addLote(){
		const request = require('request')
        request.post('http://3.83.99.143:3005/api/items', {
        json: {			
            lote : this.state.lote,
        }
        }, (error, res, body) => {
        if (error) {
            console.error(error)
            console.log(this.state.lote)
            return
        }else{         
            window.location.reload()
            console.log(this.state.lote)
        

        }
        }
        )}

    add(){
        var hoy = new Date();
        var dd = hoy.getDate();
        var mm = hoy.getMonth()+1;
        var yyyy = hoy.getFullYear();
        var fecha = yyyy+'-'+mm+'-'+dd;

        var aux = []

        aux.push([this.state.color, this.state.room, this.state.marca, fecha, null, this.state.fabric, this.state.cloth,this.state.operacion ])
        this.setState(state => {
            const lote = [...state.lote, aux];      
            return {
              lote,
            };
          });
        console.log(aux)
        console.log(this.state.lote)
        }



render(){

    const styles={
        title:{
            textAlign: "center",
            margin:"5px",
            color: "#020347",
            fontFamily : 'Sanchez',
        },
        add:{
            textAlign: "right"
        },
        titleS:{
            textAlign: "center",
            margin:"0 0 8px 0",
            color: "#020347",
            fontFamily : 'Sanchez',
        },
        text:{
            margin: "15px 0 0 0",
            padding: "0",
            fontSize:"22px",
            color: "#020347",
            fontFamily : 'Sanchez',
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
            margin:"0 5px 5px 0",
            padding: "0",
            backgroundColor: "#fafafa"
        },
        divBtn:{
            textAlign: 'center',
            margin:"auto",
            padding: "0"
        },
        selector:{
            width: "90%",
            margin: "5px 0 5px 0",
            color: "#020347",
            fontFamily : 'Sanchez',
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
                    'Operation',
                    'Marca'
                ];
    
    const rows = [];


    return(
        <div className="container"style={{display: this.props.display}}>
            <div className="row" id="Head">
                 <div className="col">
                </div>
                <div className="col-md-8" id="title">
                    <h3 style={styles.title}>Lots</h3>
                </div>  
                <div className="col" id="addButton" style={styles.add}>
              </div>             
            </div>
            <div className="row" id="table" style={{overflowX: "auto", margin: "auto"}}>
                <div className="col">
                <Table headings={headings} rows={rows} style={{width:"100%"}} />
                </div>
            </div>
            <div className="row">
                <div className="container">
                
                <div className="row">
                    <div className="form-group col" >
                    </div>
                    <div className="form-group col-md" style={styles.titleS}>
                        <h3 style={styles.text}>Add Lot</h3>
                    </div>
                    <div className="form-group col-md" style={{textAlign: "center"}}>
                    <TextField
                                autoFocus
                                id="room"
                                onChange={this.onChangeRoom}
                                label="Room"
                                margin="normal"
                                style = {styles.selector}
                            />
                    </div>
                </div>

                <form id="Fila 1" className="row" style={{marginLeft: "0"}}> 
               
               <div className="form-group col-md" style={styles.divInput}>
               <FormControl style={styles.selector}>
                    <InputLabel shrink >
                        Clothes
                    </InputLabel>
                    <Select
                    value={this.state.cloth}
                    input={<Input name="cloth" id="age-label-placeholder" />}                   
                    onChange = {this.onChangeCloth}        
                    name="cloth"
                    className=""
                    >
                    <MenuItem value={"T-Shirt"}>T-Shirt</MenuItem>
                    <MenuItem value={"Shirt"}>Shirt</MenuItem>
                    <MenuItem value={"Sweater"}>Sweater</MenuItem>
                    <MenuItem value={"Jacket"}>Jacket</MenuItem>
                    <MenuItem value={"Coat"}>Coat</MenuItem>
                    <MenuItem value={"Jeans"}>Jeans</MenuItem>
                    <MenuItem value={"Pants"}>Pants</MenuItem>
                    <MenuItem value={"Socks"}>Socks</MenuItem>
                    <MenuItem value={"Shorts"}>Shorts</MenuItem>
                    <MenuItem value={"Skirt"}>Skirt</MenuItem>
                    <MenuItem value={"Dress"}>Dress</MenuItem>
                    <MenuItem value={"Blouse"}>Blouse</MenuItem>
                    <MenuItem value={"Briefs"}>Briefs</MenuItem>
                    </Select>
                </FormControl>
                
               </div>
               <div className="form-group col-md" style={styles.divInput}>
               <FormControl style={styles.selector}>
                    <InputLabel shrink >
                        Color
                    </InputLabel>
                    <Select
                    value={this.state.color}
                    input={<Input name="color" id="age-label-placeholder" />}                   
                    onChange = {this.onChangeColor}        
                    name="color"
                    className=""
                    >
                    <MenuItem value={"Blue"}>Blue</MenuItem>
                    <MenuItem value={"Green"}>Green</MenuItem>
                    <MenuItem value={"Red"}>Red</MenuItem>
                    <MenuItem value={"Brown"}>Brown</MenuItem>
                    <MenuItem value={"Yellow"}>Yellow</MenuItem>
                    <MenuItem value={"Gray"}>Gray</MenuItem>
                    <MenuItem value={"Black"}>Black</MenuItem>
                    <MenuItem value={"White"}>White</MenuItem>
                    <MenuItem value={"Orange"}>Orange</MenuItem>
                    <MenuItem value={"Purpĺe"}>Purpĺe</MenuItem>
                    <MenuItem value={"Pink"}>Pink</MenuItem>
                    <MenuItem value={"Beige"}>Beige</MenuItem>
                    <MenuItem value={"Various"}>Various</MenuItem>
                    </Select>
                </FormControl>
               </div>
               <div className="form-group col-md" style={styles.divInput}>
               <FormControl style={styles.selector}>
                    <InputLabel shrink >
                        Fabric
                    </InputLabel>
                    <Select
                    value={this.state.fabric}
                    input={<Input name="fabric" id="age-label-placeholder" />}                   
                    onChange = {this.onChangeFabric}        
                    name="fabric"
                    className=""
                    >
                    <MenuItem value={"Acrylic"}>Acrylic</MenuItem>
                    <MenuItem value={"Cotton"}>Cotton</MenuItem>
                    <MenuItem value={"Denim"}>Denim</MenuItem> 
                    <MenuItem value={"Flannel"}>Flannel</MenuItem>
                    <MenuItem value={"Leather"}>Leather</MenuItem>
                    <MenuItem value={"Linen"}>Linen</MenuItem>
                    <MenuItem value={"Silk"}>Silk</MenuItem>
                    <MenuItem value={"Velvet"}>Velvet</MenuItem>
                    <MenuItem value={"Wool"}>Wool</MenuItem>
                    </Select>
                </FormControl>
               </div>

               </form>

               <form id="Fila 2" className="row" style={{marginLeft: "0"}}> 
               
               <div className="form-group col-md" style={styles.divInput}>
               <FormControl style={styles.selector}>
                    <InputLabel shrink >
                        Operation
                    </InputLabel>
                    <Select
                    value={this.state.operacion}
                    input={<Input name="operacion" id="age-label-placeholder" />}                   
                    onChange = {this.onChangeOperacion}        
                    name="operacion"
                    className=""
                    >
                    <MenuItem value={1}>Washing</MenuItem>
                    <MenuItem value={2}>Ironing</MenuItem>
                    <MenuItem value={3}>Full Service</MenuItem>
                    </Select>
                </FormControl>           
               </div>
               <div className="form-group col-md" style={styles.divInput}>               
                <TextField
                            autoFocus
                            id="marca"
                            onChange={this.onChangeMarca}
                            label="Marca"
                            margin="normal"
                            style = {styles.selector}
                        /> 
               </div>
               <div className="form-group col-md" style={styles.divBtn}>
                    <Button  color="primary"  onClick={this.add} variant="contained" aria-label="Add" style={styles.buttonAdd}><AddCircle/></Button>
                    <Button  color="secondary" onClick={this.addLote} variant="contained" aria-label="Add" style={styles.button}>Add Lote</Button>
               
               </div>                
               </form>          
         
                </div>
            
            </div>
           
        </div>

    );
}
}

export default Lotes;