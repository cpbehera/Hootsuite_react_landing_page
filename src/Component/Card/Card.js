import React from 'react'
import './Card.css'

function Card(props) {
  return (
    <div className='card'>
      <img src={props.img} alt="" />
      <h4>{props.price}</h4>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea repudiandae, sapiente laboriosam aperiam porro tempora rerum sunt itaque eos quod!</p>
      <button>Read More</button>
    </div>
  )
}

export default Card
