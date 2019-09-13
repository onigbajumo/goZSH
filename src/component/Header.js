import React, {Component} from 'react';
import '../cssFile/Header.css';
import logo from './logo.svg';
import Slider from './Slider'

class HeaderZsh extends Component{
    render(){
        return (
            <div>
            <nav className='links'>
            <img src={logo} className="App-logo" alt="logo"/>
            <a href='#'>Home</a>
            <a href='#'>Cargo</a>
            <a href='#'>Travel</a>
            <a href='#'>Contact</a>
            <a href='#'>Language</a>
          </nav>
          <Slider/>
          <button>Book Now</button>
        </div>
        )
    }
}

export default HeaderZsh;