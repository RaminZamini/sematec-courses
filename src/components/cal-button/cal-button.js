import React from 'react'
import './cal-button.css'

const CalButton = ({ className, value, onClick }) => {
  return (
    
    <button className={className} onClick={onClick}>
      {value}
    </button>
  
  )
}

export default CalButton