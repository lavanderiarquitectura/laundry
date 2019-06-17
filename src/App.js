import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import NavbarLog from './components/NavbarLog'
import Informacion from './components/Index/Informacion';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Register from './components/Index/Register';
import Operaciones from './components/Index/Operaciones';

import LoginOper from './components/Operaciones/LoginOper';

import store from '../../laundry/src/store'


class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
    }

}
  
  render(){
    const styles ={
      nav :{
          overflowX: "hidden",
      }
    }

   

    
    
    return(
      <div style={styles.nav}>
      <Navbar/>
      <NavbarLog/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login/operaciones" component={LoginOper} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/informacion" component={Informacion} />
        <Route exact path="/operaciones" component={Operaciones} />
      </Switch>
    </div>
    )
  }
}

export default App