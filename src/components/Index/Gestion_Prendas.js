import React, {Component} from 'react';
import RegistroPrendas from './Registro_Prendas';
import PrendaServices from './Prenda_services';



class Gestion_Prendas extends Component{

    constructor(props) {
        super(props);
        this.state = {
          rows: [],
        };
    }
      
    componentWillMount(){
        var filledData = [];
      
        new PrendaServices().obtenerPrendas().then(dataArray => {
          dataArray.map(item => {
            console.log("dataItem: "+ JSON.stringify(item));
            filledData.push(JSON.parse(JSON.stringify({ "id_prenda" : item.id_prenda,
                                                        "id_cuarto" : item.id_cuarto, 
                                                        "color" : item.color,
                                                        "marca" : item.marca})));
          });
          console.log(filledData.length);
          return filledData
        }).then((data) => {
            this.setState({ rows : data })
          });
      }

    render(){
        return(
            <div className='container'>
                <div className="row">
                    <RegistroPrendas onClick={this.props.Registro_Prendas(this.state.rows)} color="primary">Consultar prendas</RegistroPrendas>
                </div>
            </div>
            )
    }
}

export default Gestion_Prendas;