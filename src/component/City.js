import React, {Component} from 'react';

import '../cssFile/City.css'

class City extends Component{
    state ={
        public:[
            {
                name:"Aba-North(Brass-Junction)",
                link: "http://abc.com"
            },
            {
                name:"Osisioma(Brass-Junction)",
                link: "http://abc.com"
            },

        ],
        private: [
            
            {
                name:"Aba-GIGM",
                link: "http://abc.com"
            },
            {
                name:"Aba-ABC Transport",
                link: "http://facebook.com"
            },
            {
                name:"Aba-Good is Good motors",
                link: "http://google.com"
            },


        ],
    }
    render(){
        return (
           <div className="main-hover">
               <div className="hover-city">
                    <div className="color">
                        <h3> Public Transport:Park</h3>
                        {this.state.public.map((park)=>{
                       return <div className="named"><a href={park.link}>{park.name}</a></div>
                     })}
                    </div>
                    <div className="color">
                     <h3>Private Transport: Company Name</h3>
                     {this.state.private.map((park)=>{
                     return <div className= "named"><a href={park.link}>{park.name}</a></div>
                        })}
                    </div>
               </div>
           </div>
        )
    }
}
export default City;