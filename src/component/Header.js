import React, {Component} from 'react';
import '../cssFile/Header.css';
import goZshLogo from '../Asset/goZshLogo.jpg';
import Slider from './Slider'

class HeaderZsh extends Component{
    render(){
        return (
            <div>
            <nav className='links'>
            <img src={goZshLogo} className="App-logo" alt="logo"/>
            <a href='#'>Home</a>
            <a href='#'>Cargo</a>
            <a href='#'>Travel</a>
            <a href='#'>Contact</a>
            <a href='#'>Language</a>
          </nav>
          <Slider/>
          <div className='extra'>
          <h2>Transportation made easy in Africa</h2>
          <p>At goZsh we provide mobility service<br/> to transport across the country<br/> with modern technology</p>
          <button>Book Now</button>
          </div>
        </div>
        )
    }
}

export default HeaderZsh;