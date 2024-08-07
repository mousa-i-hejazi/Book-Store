import React from 'react'
import styles from './Subscribe.module.css'

function Subscribe() {
    return (
        <>
        <div className="container">
            <section className={styles.sec}>
                
                    <div className="text-center">
                    <h1 className={styles.h1}>Subscribe to our newsletter</h1>
                    <p className={styles.p}>Lorem Ipsum is simply dummy text of the printing.</p>
                    <div className={styles.input}>
                        <input className={styles.inp} type="text" placeholder="Email Address" />
                        <button className={'btn ' + styles.buttoninp}>Send</button>
                    </div>
                    </div>
                    
                
            </section>
            </div>
        </>
    )
}

export default Subscribe