import React from 'react'
import './Features.css'
import Card from '../Card/Card'
import CardOne from '../../Image/card-1.png'
import CardTwo from '../../Image/card-2.png'
import CardThree from '../../Image/card-3.png'

function Features() {
  return (
    <div className='features'>
      <Card img={CardOne} price='2,500'/>
      <Card img={CardTwo} price='45,000'/>
      <Card img={CardThree} price='200,000+'/>
    </div>
  )
}

export default Features
