import React from 'react'
import TopNav from '../top-nav/top-nav'
import styles from './header.module.css'
const Header = () => {
  return (
    <header className={styles['header']}>
        <TopNav/>
    </header>
  )
}

export default Header