import {Link} from 'react-router-dom';
import React, {Component} from 'react';

class Navbar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          menu: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
      }
    
    toggleMenu(){
        this.setState({ menu: !this.state.menu })
      }

    render(){
        
        const show = (this.state.menu) ? "show" : "" ;

        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Lavanderia</a>
            <button className="navbar-toggler" data-toggle="collapse" type="button" onClick={ this.toggleMenu }>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={"collapse navbar-collapse " + show}>
              <div className="navbar-nav">
                <a className="nav-item nav-link" href="/"> <span class="sr-only">(current)</span></a>
              </div>
            </div>
          </nav>
        );
    }
}

export default Navbar;