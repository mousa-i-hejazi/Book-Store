import React from 'react'
import styles from './Footer.module.css'
import logo from './Group 356.png'
import line from './Line 4.png'


function Footer() {
    return (
        <>
            <section className={styles.sec}>
                <div className="container">
                    <div className="row">
                        <div className={'col-lg-2 '+ styles.div}>
                            <img className={styles.logo} src={logo} alt="" />
                            <p className={styles.p1}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy a type specimen book.</p>
                        </div>
                        <div className={'col-lg-2 '+ styles.div}>
                            <h1 className={styles.h1}>Company</h1>
                            <p className={styles.p}>About Us</p>
                            <p className={styles.p}>How to work?</p>
                            <p className={styles.p}>Populer Course</p>
                            <p className={styles.p}>Service</p>
                        </div>
                        <div className={'col-lg-2 '+ styles.div}>
                            <h1 className={styles.h1}>Courses</h1>
                            <p className={styles.p}>Categories</p>
                            <p className={styles.p}>Ofline Course</p>
                            <p className={styles.p}>Vidio Course</p>
                        </div>
                        <div className={'col-lg-2 '+ styles.div}>
                            <h1 className={styles.h1}>Support</h1>
                            <p className={styles.p}>FAQ</p>
                            <p className={styles.p}>Help Center</p>
                            <p className={styles.p}>Career</p>
                            <p className={styles.p}>Privacy</p>
                        </div>
                        <div className={'col-lg-2 '+ styles.div}>
                            <h1 className={styles.h1}>Contac Info</h1>
                            <p className={styles.p}>+0913-705-3875</p>
                            <p className={styles.p}>ElizabethJ@jourrapide.com</p>
                            <p className={styles.p2}>4808 Skinner Hollow Road <br />
                                Days Creek, OR 97429</p>
                        </div>
                    </div>
                </div>
                <img className={styles.line} src={line} alt="" />
                <footer className={"text-center "+styles.footer}>BookStore All Right Reserved, 2022</footer>
            </section>
        </>
    )
}

export default Footer