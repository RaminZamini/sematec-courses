import React from 'react'
import { Textfit } from "react-textfit";
import './cal-screen.css'

const CalScreen = ({value}) => {
  return (
    
    <Textfit className="cal-screen" mode="single" max={70}>
      {value}
    </Textfit>
 
  )
}

export default CalScreen