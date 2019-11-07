import React, {Component} from 'react';
import '../cssFile/Body.css'

class Body extends Component{
    render(){
        return (
            <div className='body'>
                <div className="content first">
                   <div className="page">
                        <h3>What we offer</h3>
                        <h3>we offer transporting system</h3>
                   </div>
                </div>
                <div className="content second">
                    <div>
                        <div className="made">
                            one
                        </div>
                        <div>
                            two
                        </div>
                        <div>
                            three
                        </div>
                    </div>
                </div>
                <div className="content third">
                {/* <div className="skew one">

                </div> */}
                </div>
                
            </div>
            
        )
    }
}
export default Body;
