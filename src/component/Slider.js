import React, { Component } from 'react';
import Slide from './Slide';
import RightArrow from './Right-arrow';
import LeftArrow from './Left-arrow';
import '../cssFile/Slider.css';
import logo from './logo.svg';
class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
        images:['https://home/learnfactory16/Desktop/New-Repo/goZSH/src/pix/ojota.jpeg',
        'https://home/learnfactory16/Desktop/New-Repo/goZSH/src/pix/under.jpeg',
        'https://home/learnfactory16/Desktop/New-Repo/goZSH/src/pix/road.jpeg',
        'https://home/learnfactory16/Desktop/New-Repo/goZSH/src/pix/location.jpeg'
        ],
        currentIndex:0,
        translateValue:0
    }
  }
  goToPrevSlide = () =>{

  }
  goToNextSlide = () =>{
      if (this.state.currentIndex === this.state.images.length - 1){
          return this.setState({
              currentIndex:0,
              translateValue:0
          })
      }
this.setState(prevState => ({
    currentIndex: prevState.currentIndex + 1,
    translateValue: prevState.translateValue + -(this.slideWidth())
}))
  }

  slideWidth = () => {
    return document.querySelector('.slide').clientWidth
}
  render() {
    return (
      <div className="slider">
          <div className="slider-wrapper"
            style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s'}}>
            </div>
           {
          this.state.images.map((pictures, i) => (
            <Slide key={i} pictures={pictures} />
          ))
            }
          <RightArrow nextSlide = {this.goToNextSlide}/>
          <LeftArrow prevSlide = {this.goToPrevSlide}/>
          <img src={logo} className="App-logo" alt="logo"/>
      </div>
    );
  }
}
export default Slider