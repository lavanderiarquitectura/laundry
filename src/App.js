import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'

class App extends React.Component{
  render(){
    return(
      <div >
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
    )
  }
}

export default App