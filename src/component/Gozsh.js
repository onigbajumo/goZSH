import React, {Component} from 'react';
import '../cssFile/Gozsh.css';
import Sidebar from './Sidebar';
import HeaderZsh from './Header';
import Footer from './Footer';
import Form from './Form';
class Gozsh extends Component{
    render(){
        return (
          <div>
            <h1> Welcome to my first Todo App</h1>
            <Sidebar/>
            <HeaderZsh title="My own header component"/>
           </div>
        )
    }
}
export default Gozsh;
