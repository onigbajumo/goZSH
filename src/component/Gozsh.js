import React, {Component} from 'react';
import '../cssFile/Gozsh.css';
import Sidebar from './Sidebar'
class Gozsh extends Component{
    render(){
        return (
          <div>
            <h1> Welcome to my first Todo App</h1>
            <Sidebar/>
          </div>
        )
    }
}
export default Gozsh;
