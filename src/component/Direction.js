import React, {Component} from 'react';

import City from './City';
import '../cssFile/Direction.css';


class Direction extends Component{
    // the data gatthered fordestination of each bus park goes here
    state = {
        destination: [{name: "Abuja",
                        link: "http://kobo360.com",
                        component:<City />
            }, 
            {
                name: "Lagos",
                link: "http://kobo360.com"
            }, 
            {   name: "Delta",
                link: "http://kobo360.com",
                component:<City />
            }, 
            {   name: "Benin",
                link: "http://kobo360.com"
            }, 
        ],
        route: ["Lokoja route", "Benin Road","Anambra Route", "owerri"],
        time: ["9hrs", "5hrs", "_", ],
        price: ["5,000.", "_", "3,000."]
   }
    render(){
        // destructure this.props before using 
        const {carpark} = this.props
        return (
            <div className='direction'>
                <h2>
                {/* the name of the car park comes inside the carpark callback befor 
                destination */}
                {carpark} Destination
                </h2>
                <div className="header">
                    <div className="destination">
                        <h2>Destination</h2>
                        {/* the destination name and their link is put in and object, 
                        mapped through and the link is called inside the anchor tag 
                        while name is called inside the h4 tag. */}
                        {this.state.destination.map((destination)=> 
                        {return <div className="state-close"><h4><a href={destination.link}
                         target="_blank">{destination.name}</a></h4>
                         <div className="close">{destination.component}</div>
                         </div>
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