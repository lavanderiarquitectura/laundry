import React, {Component} from 'react';
import Registro_Prendas from './Registro_Prendas';
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
      
        return new PrendaServices().obtenerPrendas().then(dataArray => {
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
        if(this.state.rows.length > 0){
            return(
                <div className='container'>
                        <Registro_Prendas rows = {this.state.rows}/>
                </div>
                )
        } else {
            return <p className="text-center">Cargamdo prendas...</p>
        }
    }
}

export default Gestion_Prendas;