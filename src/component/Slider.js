import React, { Component } from 'react';
import '../cssFile/Slider.css';
import danfo from '../Asset/danfo.jpg';
import ggggg from '../Asset/ggggg.png';
import six from '../Asset/six.jpg'
import bbbb from '../Asset/bbbb.png'
import five from '../Asset/five.jpg'
class Slider extends Component {
render(){
  return(
    <div className='bigslide'>
      <slider key='id'>
        <slide><img src={five} alt='bus'/></slide>
        <slide><img src={danfo} alt='bus'/></slide>
        <slide><img src={ggggg} alt='bus'/></slide>
        <slide><img src={six} alt='bus'/></slide>
        <slide><img src={bbbb} alt='bus'/></slide>
      </slider>
      
    </div>
  )
}
}
export default Slider