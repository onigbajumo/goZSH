import React, {Component} from 'react';

import '../cssFile/Direction.css';


class Direction extends Component{
    state = {
        destination: ["Abuja", "Lagos", "Delta", "Benin"],
        route: ["Lokoja route", "Benin Road","Anambra Route", "owerri"],
        time: ["9hrs", "5hrs", "_", ],
        price: ["5,000.", "_", "3,000."]
   }
    render(){
    
        const {carpark} = this.props
        return (
            <div className='direction'>
                <h2>
                {carpark} Destination
                </h2>
                <div className="header">
                    <div className="destination">
                        <h2>Destination</h2>
                        {this.state.destination.map((destination)=> 
                        {return <h4><a href="#">{destination}</a></h4>
                        } )
                        }
                    </div>
                    <div className="route">
                    <h2>Route</h2>
                    {this.state.route.map((destination)=> 
                        {return <h4>{destination}</h4>
                        } )
                        }
                    </div>
                    <div className="time">
                    <h2>Time</h2>
                    {this.state.time.map((destination)=> 
                        {return <h4>{destination}</h4>
                        } )
                        }
                    </div>
                    <div className="price">
                    <h2>Price</h2>
                    {this.state.price.map((destination)=> 
                        {return <h4>{destination}</h4>
                        } )
                        }
                    </div>
                        <div></div>

                </div>
            </div>
            
        )
    }
}
export default Direction;