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


import store from '../../store'


import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';

import AddCircle from '@material-ui/icons/AddCircle';


var config_data = require('../../ipconfig.json')
var back_end = config_data.backIP

var prenda = new Object();
var lote = new Array();
var id = 1;
var row = [];

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
          row: [],
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

       this.subscribe = this.subscribe.bind(this);
    }

    componentDidMount(){  
        this.subscribe()
    }

    subscribe(){
        var lotes = store.getState().lote
        console.log("Lotes obtenidos")
        console.log(lotes)
        var row = []
        for(var i in lotes){           
              row.push(lotes[i]);
        }           
        console.log("Rows")
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

        fetch(back_end + '/cloth_register/create_list', {
            method: 'post',
            body: JSON.stringify(lote),
            headers: { 'Content-type': 'application/json' }
          }).then(function(res){ window.location.reload(); return res.json(); })
          .then(function(lote){
            
          console.warn(lote)
          })

        
        }    

    add(){
        var hoy = new Date();
        var dd = hoy.getDate();
        var mm = hoy.getMonth()+1;
        var yyyy = hoy.getFullYear();

        var pren = []

        if(mm < 10){
            mm = "0"+String(mm)
        }

        var fecha = yyyy+'-'+mm+'-'+dd;
        console.log(mm)

        prenda.color = this.state.color;
        prenda.id_cuarto = this.state.room;
        prenda.marca = this.state.marca;
        prenda.fecha_ingreso = fecha;
        prenda.fecha_entrega = null;
        prenda.tipo_tela_id_tipo_tela = this.state.fabric;
        prenda.tipo_operacion_id_tipo_operacion = this.state.operacion;
        prenda.tipo_prenda_id_tipo_prenda = this.state.cloth;
        
        pren.push(id)
        pren.push(this.state.cloth)
        pren.push(this.state.color)
        pren.push(this.state.fabric)
        pren.push(this.state.operacion)
        pren.push(this.state.marca)

        id = id +1;
        
        /*aux.push([this.state.color, this.state.room, this.state.marca, fecha, null, this.state.fabric, this.state.cloth,this.state.operacion ])
        this.setState(state => {
            const lote = [...state.lote, aux];      
            return {
              lote,
            };
          });*/

        store.dispatch({
            type:  'ADD_PRENDA',
            payload: pren,
        })
        console.log("prenda enviada")
        console.log(pren)
        row.push(pren)

        this.setState({row: row})

        lote.push(prenda)
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
    
    const rows = this.state.row;


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
                    <MenuItem value={1}>T-Shirt</MenuItem>
                    <MenuItem value={2}>Shirt</MenuItem>
                    <MenuItem value={3}>Sweater</MenuItem>
                    <MenuItem value={4}>Jacket</MenuItem>
                    <MenuItem value={5}>Coat</MenuItem>
                    <MenuItem value={6}>Jeans</MenuItem>
                    <MenuItem value={7}>Pants</MenuItem>
                    <MenuItem value={8}>Socks</MenuItem>
                    <MenuItem value={9}>Shorts</MenuItem>
                    <MenuItem value={10}>Skirt</MenuItem>
                    <MenuItem value={11}>Dress</MenuItem>
                    <MenuItem value={12}>Blouse</MenuItem>
                    <MenuItem value={13}>Briefs</MenuItem>
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
                    <MenuItem value={1}>Blue</MenuItem>
                    <MenuItem value={2}>Green</MenuItem>
                    <MenuItem value={3}>Red</MenuItem>
                    <MenuItem value={4}>Brown</MenuItem>
                    <MenuItem value={5}>Yellow</MenuItem>
                    <MenuItem value={6}>Gray</MenuItem>
                    <MenuItem value={7}>Black</MenuItem>
                    <MenuItem value={8}>White</MenuItem>
                    <MenuItem value={9}>Orange</MenuItem>
                    <MenuItem value={10}>Purpĺe</MenuItem>
                    <MenuItem value={11}>Pink</MenuItem>
                    <MenuItem value={12}>Beige</MenuItem>
                    <MenuItem value={13}>Various</MenuItem>
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
                    <MenuItem value={1}>Acrylic</MenuItem>
                    <MenuItem value={2}>Cotton</MenuItem>
                    <MenuItem value={3}>Denim</MenuItem> 
                    <MenuItem value={4}>Flannel</MenuItem>
                    <MenuItem value={5}>Leather</MenuItem>
                    <MenuItem value={6}>Linen</MenuItem>
                    <MenuItem value={7}>Silk</MenuItem>
                    <MenuItem value={8}>Velvet</MenuItem>
                    <MenuItem value={9}>Wool</MenuItem>
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