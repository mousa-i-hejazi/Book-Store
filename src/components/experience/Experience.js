import React from 'react'
import styles from './Experience.module.css'
import img from './OBJECTS.png'
import heart from './heart.png'
import jig from './jig.png'

function Experience() {
  return (
    <>
    <section className={styles.sec}>
        <div className="container">
        <div className="row">
        <div className={'col-lg-6 col-md-6 col-sm-12'}>
            <div className={styles.image}>
                <img className={styles.img} src={img} alt="" />
            </div>
        </div>
        <div className={'col-lg-6 col-md-6 col-sm-12'}>
            <div className={styles.text}>
                <h1 className={styles.h1}>Premium <span className={styles.span}>Learning</span> <br /> Experience</h1>
                <div className={'d-flex '+styles.div}>
                    <img className={styles.divimg} src={heart} alt="" />
                    <div className={styles.divtext}>
                        <h3 className={styles.h3}>Easily Accessible</h3>
                        <p className={styles.p}>Learning Will fell Very Comfortable With Courslab.</p>
                    </div>
                </div>

                <div className={'d-flex '+styles.div}>
                    <img className={styles.divimg} src={jig} alt="" />
                    <div className={styles.divtext}>
                        <h3 className={styles.h3}>Fun learning expe</h3>
                        <p className={styles.p}>Learning Will fell Very Comfortable With Courslab.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
        
        
    </section>
    </>
  )
}

export default Experience