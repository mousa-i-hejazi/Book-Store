import React from 'react';
import styles from './Hero.module.css';
import logo from './Group 328.png';
import inp from './magnifying-glass 1.png';
import image from './image.png';
import hero from './hero.png';
import exam from './exam 1.png';
import cert from './certification 1.png';
import test from './online-test 1.png';


function Hero() {
    return (
        <>
            <section className={styles.hero}>
                <div class="container">
                    <nav class={"navbar navbar-expand-lg " + styles.nav} >

                        <a class={"navbar-brand " + styles.logo} href="#"><img src={logo} className={styles.logoimg} alt="" /></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class={"navbar-nav ms-auto mb-2 mb-lg-0 "+styles.ul}>
                                <li class={"nav-item " + styles.li}>
                                    <a class={"nav-link " + styles.a} href="#">Home</a>
                                </li>
                                <li class={"nav-item " + styles.li}>
                                    <a class={"nav-link " + styles.a} href="#">About us</a>
                                </li>
                                <li class={"nav-item " + styles.li}>
                                    <a class={"nav-link " + styles.a} href="#">Courses</a>
                                </li>
                                <li class={"nav-item " + styles.li}>
                                    <a class={"nav-link " + styles.a} href="#">Our Service</a>
                                </li>
                                <li class={"nav-item " + styles.li}>
                                    <a class={"nav-link " + styles.a} href="#">Contact us</a>
                                </li>
                                <li class={"nav-item " + styles.li}>
                                    <a class={"nav-link btn " + styles.button} href="#">Sign in</a>
                                </li>
                            </ul>
                        </div>


                    </nav>
                    <div className='row'>
                        <div className={'col-lg-6 col-md-6 col-sm-12 ' + styles.text}>
                            <h1 className={styles.h1}>The <span className={styles.span}>Smart</span>  <br />
                                Choice For <span className={styles.span}>Future</span> </h1>
                            <p className={styles.p}>Elearn is a global training provider based across the UK that specialises in accredited and bespoke training courses. We crush the...</p>
                            <div className={styles.input}>
                                <input className={styles.inp} type="text" placeholder="Search for a location..." />
                                <button className={'btn ' + styles.buttoninp}>Continue</button>
                            </div>
                        </div>
                        <div className={'col-lg-6 col-md-6 col-sm-12 ' + styles.image}>
                            <img className={styles.img} src={image} alt="" />
                        </div>
                    </div>
                    <div className={'container '+styles.s}>
                        <div className={'row '+styles.content }>
                            <div className={'col-lg-4 col-md-4 col-sm-12  row ' + styles.scontent}>
                                <div className='col-lg-6 col-md-6 col-sm-6'>
                                    <img className={styles.conimg} src={test} alt="" />
                                </div>
                                <div className={'col-lg-6 col-md-6 col-sm-6 '+styles.test}>
                                    <h3 className={styles.conh3}>Learn The Latest Skills</h3>
                                    <p className={styles.conp}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.</p>
                                </div>


                            </div>
                            <div className={'col-lg-4 col-md-4 col-sm-12 row ' + styles.scontent}>
                                <div className='col-lg-6 col-md-6 col-sm-6'>
                                    <img className={styles.conimg} src={exam} alt="" />
                                </div>
                                <div className={'col-lg-6 col-md-6 col-sm-6 '+styles.test}>
                                    <h3 className={styles.conh3}>Get Ready For a Career</h3>
                                    <p className={styles.conp}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.</p>
                                </div>


                            </div>
                            <div className={'col-lg-4 col-md-4 col-sm-12 row ' + styles.scontent}>
                                <div className='col-lg-6 col-md-6 col-sm-6'>
                                    <img className={styles.conimg} src={cert} alt="" />
                                </div>
                                <div className={'col-lg-6 col-md-6 col-sm-6 '+styles.test}>
                                    <h3 className={styles.conh3}>Earn a Certificate</h3>
                                    <p className={styles.conp}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.</p>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Hero