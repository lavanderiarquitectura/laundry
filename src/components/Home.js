import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Login from './Index/Login';



class Home extends React.Component{

    render(){
        return(
            <div className='container'>
                <div className="row">
                <Login/>
                </div>
                
            </div>
            )
    }
}

export default Home;