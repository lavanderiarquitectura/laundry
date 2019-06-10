import { Route, Link, Switch, Redirect } from 'react-router-dom';
import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import ReactDOM from 'react-dom';

class LoginOper extends React.Component{


 
    constructor(props) {
        super(props);
        this.state = {
          
          user: '',
          password: '',
         
        };
       this.handleChangeUser = this.handleChangeUser.bind(this);
       this.handleChangePass = this.handleChangePass.bind(this);
       this.validate = this.validate.bind(this);
    }

    handleChangeUser(event){        
        this.setState({user: event.target.value})
    }
    handleChangePass(event){
        this.setState({password: event.target.value})
    }

    validate(){
        if(this.state.user == 'admin' && this.state.password == "admin123"){
            return this.props.history.push('/operaciones');
        }else{
            window.location.reload()
        }
        
    }

    
    render(){



        const styles ={
            
            botonI:{
                width: '80%',
                height: '45px',
                marginBottom: '0px',
                marginTop:'8px',
            },
            divInput:{
                textAlign: 'center',
                marginBottom: '14px'
            },
            inputs:{
                marginTop: '8px',
                height: '40px',
                marginBottom: '0',
            },        
            text:{
                fontFamily : 'Sanchez',
                margin: "0"
            },
            divLogin :{
                padding: "15px 15px 8px 15px",
                borderRadius: "10px",
                marginTop: "20px",
                backgroundColor: "#FAFAFA",
                display: this.state.displayL,

            },

        }

        const loginOperator = (
            <div className="container col-md-2 mb-8" style={styles.divLogin}>
                <form>
                <div className='form-group' style={{textAlign:"center", margin:'auto'}}>
                     <h3 style={styles.text}>Operations</h3>
                </div>
                <div className="form-group" style={styles.divInput}>
                    <TextField
                        autoFocus
                        id="user"
                        value={this.state.user}
                        onChange={this.handleChangeUser}
                        label="User"
                        margin="normal"
                        style = {styles.inputs}
                        variant="outlined"
                    />
               </div>
                <div className="form-group" style={styles.divInput}>                
                <TextField
                        id="password"
                        label="Password"
                        value={this.state.password}
                        onChange={this.handleChangePass}
                        type="password"
                        style = {styles.inputs}
                        margin="normal"
                        variant="outlined"
                    />
               </div>
                <div className="form-group" style={styles.divInput}>                
                    <Button onClick={this.validate} variant="outlined" focusVisible style={styles.botonI} color="primary">Login</Button>
                </div>
              </form>
                
            </div>
        )


        return(          
            <div>
                {loginOperator}
            </div>  
                   
            )
    }
}

export default LoginOper;