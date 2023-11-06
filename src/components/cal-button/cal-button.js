import React from 'react'
import './button.css'

const CalButton = ({ className, value, onClick }) => {
  return (
    
    <button className={className} onClick={onClick}>
      {value}
    </button>
  
  )
}

export default CalButton