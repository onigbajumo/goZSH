import React, {Component} from 'react';
import '../cssFile/Travel.css';
import one from '../Asset/abc.jpeg';
import two from '../Asset/bbbb.png';
import three from '../Asset/danfo.jpg';
import four from '../Asset/five.jpg';
import five from '../Asset/ggggg.png';
import six from '../Asset/lll.jpeg';
import City from './City';

class Travel extends Component{
    render(){
        return (
            <div className="wrapper">
                <div className="public">
                    <h3>Public Transport</h3>
                    <h3>Popular Bus Routes</h3>
                    <h3></h3>
                </div>
               <div className="state">
                  
                <div className="box-card">
                    <a href="http://google.com">
                    <h4>Public Transport</h4>
                    <img src={one}></img>
                    Lagos-Ojota Park <br></br>To <br></br> Abuja-Kubwa <br></br>
                    Price: 5,000 <br></br>
                    <button className="btn-book">Book Now</button>
                    </a>
                </div>
                <div className="box-card">
                    <a href="http://google.com">
                    <h4>Public Transport</h4>
                    <img src={two}></img>
                    Aba-New Park<br></br>To <br></br> Lagos-Iyana Ipaja <br></br>
                    Price: 7,000 <br></br>
                    <button className="btn-book">Book Now</button>
                    </a>
                    
                </div>
                <div className="box-card">
                    <a href="http://google.com">
                    <h4>Public Transport</h4>
                    <img src={three}></img>
                    Aba-New Park<br></br>To <br></br> Lagos-Iyana Ipaja <br></br>
                    Price: 7,000 <br></br>
                    <button className="btn-book">Book Now</button>
                    </a>
                    
                </div>
                <div className="box-card">
                    <a href="http://google.com">
                    <h4>Public Transport</h4>
                    <img src={four}></img>
                    Aba-New Park<br></br>To <br></br> Lagos-Iyana Ipaja <br></br>
                    Price: 7,000 <br></br>
                    <button className="btn-book">Book Now</button>
                    </a>
                 
                </div>
               </div>
               <div className="state two">
                <div className="box-card">
                     <a href="http://google.com">
                     <h4>Public Transport</h4>
                        <img src={five}></img>
                        Aba-New Park<br></br>To <br></br> Lagos-Iyana Ipaja <br></br>
                        Price: 7,000 <br></br>
                        <button className="btn-book">Book Now</button>
                     </a>
                  
                </div>
                <div className="box-card">
                    <a href="http://google.com">
                    <h4>Public Transport</h4>
                    <img src={six}></img>
                    Aba-New Park<br></br>To <br></br> Lagos-Iyana Ipaja <br></br>
                    Price: 7,000 <br></br>
                    <button className="btn-book">Book Now</button>
                    </a>
                   
                </div>
                <div className="box-card">
                    <a href="http://google.com">
                    <h4>Public Transport</h4>
                    <img src={one}></img>
                    Aba-New Park<br></br>To <br></br> Lagos-Iyana Ipaja <br></br>
                    Price: 7,000 <br></br>
                    <button className="btn-book">Book Now</button>
                    </a>
                    
                </div>
                <div className="box-card">
                    <a href="http://google.com">
                    <h4>Public Transport</h4>
                    <img src={three}></img>
                    Aba-New Park<br></br>To <br></br> Lagos-Iyana Ipaja <br></br>
                    Price: 7,000 <br></br>
                    <button className="btn-book">Book Now</button>
                    </a>
                   
                </div>
               </div>
               <div>
               <div className="private">
                    <h3>Private Transport</h3>
                    <h3>Popular Bus Routes</h3>
                    <h3></h3>
                </div>
               <div className="state">
                  
                <div className="box-card">
                    <a href="http://google.com">
                    <h4>Private Transport</h4>
                    <img src={one}></img>
                    Lagos-Ojota Park <br></br>To <br></br> Abuja-Kubwa <br></br>
                    Price: 5,000 <br></br>
                    <button className="btn-book">Book Now</button>
                    </a>
                    
                </div>
                <div className="box-card">
                    <a href="http://google.com">
                    <h4>Private Transport</h4>
                    <img src={two}></img>
                    Lagos-Ojota Park <br></br>To <br></br> Abuja-Kubwa <br></br>
                    Price: 5,000 <br></br>
                    <button className="btn-book">Book Now</button>
                    </a>
                    
                </div>
                <div className="box-card">
                    <a href="http://google.com">
                    <h4>Private Transport</h4>
                    <img src={three}></img>
                    Lagos-Ojota Park <br></br>To <br></br> Abuja-Kubwa <br></br>
                    Price: 5,000 <br></br>
                    <button className="btn-book">Book Now</button>
                    </a>
                    
                </div>
                <div className="box-card">
                    <a href="http://google.com">
                    <h4>Private Transport</h4>
                    <img src={four}></img>
                    Lagos-Ojota Park <br></br>To <br></br> Abuja-Kubwa <br></br>
                    Price: 5,000 <br></br>
                    <button className="btn-book">Book Now</button>
                    </a>
                 
                </div>
               </div>
               <div className="state two">
                <div className="box-card">
                     <a href="http://google.com">
                     <h4>Private Transport</h4>
                        <img src={five}></img>
                        Aba-New Park<br></br>To <br></br> Lagos-Iyana Ipaja <br></br>
                        Price: 7,000 <br></br>
                        <button className="btn-book">Book Now</button>
                     </a>
                  
                </div>
                <div className="box-card">
                    <a href="http://google.com">
                    <h4>Private Transport</h4>
                    <img src={six}></img>
                    Aba-New Park<br></br>To <br></br> Lagos-Iyana Ipaja <br></br>
                    Price: 7,000 <br></br>
                    <button className="btn-book">Book Now</button>
                    </a>
                   
                </div>
                <div className="box-card">
                    <a href="http://google.com">
                    <h4>Private Transport</h4>
                    <img src={one}></img>
                    Aba-New Park<br></br>To <br></br> Lagos-Iyana Ipaja <br></br>
                    Price: 7,000 <br></br>
                    <button className="btn-book">Book Now</button>
                    </a>
                    
                </div>
                <div className="box-card">
                    <a href="http://google.com">
                    <h4>Private Transport</h4>
                    <img src={three}></img>
                    Aba-New Park<br></br>To <br></br> Lagos-Iyana Ipaja <br></br>
                    Price: 7,000 <br></br>
                    <button className="btn-book">Book Now</button>
                    </a>
                   
                </div>
               </div>
                </div>
            </div>
            
        )
    }
}
export default Travel;