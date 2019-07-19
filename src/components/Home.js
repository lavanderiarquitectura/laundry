import React from 'react';
import Login from './Index/Login';


class Home extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          login: 'block',
        };
      //  this.changeState = this.changeState.bind(this);
    }

 /*   changeState(){
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
    }*/

    render(){

        return(
            <div className='container'>
                <div className="row">
                <Login display={this.state.login} history={this.props.history}/>
                </div>
                
            </div>
            )
    }
}

export default Home;