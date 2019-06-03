import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Informacion from './components/Index/Informacion';
import Register from './components/Index/Register';
import Gestion_Prendas from './components/Index/Gestion_Prendas';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


class App extends React.Component{
  render(){
    const styles ={
      nav :{
          overflowX: "hidden",
      }
    }
    
    return(
      <div style={styles.nav}>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/informacion" component={Informacion} />
        <Route exact path="/gestion_prenda" component={Gestion_Prendas} />
      </Switch>
    </div>
    )
  }
}

export default App