import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Login from './Index/Login';
import Register from './Index/Register';
import Table from './Index/Table';



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
						const headings = [
			'ID',
			'Type',
			'Max Capacity',
			'Is Being used',
		];
		const rows = [
		[
		1,
		'Washing',
		50,
		false,
		],
		[
		2,
		'Ironing',
		50,
		true,
		],
		[
		3,
		'Washing',
		50,
		true,
		],
		];
        return(
            <div className='container'>
                <div className="row">
                <Register display={this.state.register} onChange={this.changeState}/>
				<Table headings={headings} rows={rows} tableType='-Table' />
                </div>
                
            </div>
            )
    }
}

export default Home;