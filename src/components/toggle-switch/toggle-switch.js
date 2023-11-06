import React from "react"
import styles from './toggle-switch.module.css'

const ToggleSwitch = ({onToggle}) => {
    
  return (
    <div className={styles['toggle-switch']}>
      <input  type="checkbox" id="switch" onChange={onToggle}/>
      <label htmlFor="switch"></label>
    </div>
  )
}

export default ToggleSwitch
