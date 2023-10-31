import React from "react"
import styles from './css-module.module.css'

const CSSModule = () => {
    console.log(styles)
    console.log(styles['btn-primary'])
  return (
    <div>
      <div className={styles.card}>
        <h4 className={styles.title}>Card Title</h4>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit rem, ipsum explicabo
          dolorem repudiandae accusamus fuga ea voluptatibus corporis dolorum. Velit eos nemo beatae
          neque laboriosam corporis nulla porro id.
        </p>
        <button className={`${styles['btn']} ${styles['btn-primary']}`}>Button</button>
        <button className={`${styles['btn']} ${styles['btn-primary']} active`}>Button .active</button>
      </div>
    </div>
  )
}

export default CSSModule
