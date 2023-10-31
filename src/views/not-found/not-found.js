import React from 'react'
import styles from './not-found.module.css'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className={styles['not-found-page']}>
      <h1>Sorry your page dos not exsits!</h1>
      <Link to={'/'} >Home</Link>
    </div>
  )
}

export default NotFound