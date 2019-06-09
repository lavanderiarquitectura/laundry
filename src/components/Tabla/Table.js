import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import { withRouter } from 'react-router';
import ReactDOM from 'react-dom';

class Table extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
           
        }
            
    }

   /* handleChangeUser(event){        
        this.setState({personal_id: event.target.value})
    }*/
      
    render(){

       
        const styles ={
            
        }

        return(
            
            <div className="container" style={}>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">State Device</th>
                            <th scope="col">Type Device</th>
                        </tr>
                    </thead>
                    <tbody>                    
                        <tr>
                            <td>

                            </td>                                                        
                        </tr>                
                    </tbody>
                </table>
            </div>
            )
    }
}

export default Login;