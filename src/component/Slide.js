import React, {Component} from 'react'

const Slide = ({pictures}) =>{
    const styles = {
        backgroundImage:`url(${pictures})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%'
    }
    return(
        <div className='slide' styling={styles}></div>
    )
}
export default Slide
