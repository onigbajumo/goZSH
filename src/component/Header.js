import React, {Component} from 'react';
import '../cssFile/Header.css';

class HeaderZsh extends Component{
    render(){
        return (
           <h3>{this.props.title}</h3>
        )
    }
}
export default HeaderZsh;
