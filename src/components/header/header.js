import React from 'react'
import TopNav from '../top-nav/top-nav'
import styles from './header.module.css'
import ToggleSwitch from '../toggle-switch/toggle-switch'

const Header = ({onThemeChange}) => {
  return (
    <header className={styles['header']}>
        <TopNav/>
        <ToggleSwitch onToggle={onThemeChange}/>
    </header>
  )
}

export default Header