import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Login from './Index/Login';
import Register from './Index/Register';



class Home extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          login: 'block',
          register: 'block',
        };
        this.changeState = this.changeState.bind(this);
    }

    changeState(){
        console.log('HEY')
        if(this.state.login == 'block'){
            this.setState({login:'none', register:'block'})
        }else{
            this.setState({login:'block', register:'none'})
        }
    }

    render(){
        return(
            <div className='container'>
                <div className="row">
                <Login display={this.state.login} onChange={this.changeState}/>
                <Register display={this.state.register} onChange={this.changeState}/>
                </div>
                
            </div>
            )
    }
}

export default Home;