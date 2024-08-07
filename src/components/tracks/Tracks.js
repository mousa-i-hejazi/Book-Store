import React from 'react'
import styles from './Tracks.module.css'
import stars from './Group 345.png'
import times from './Group 344.png'
import img1 from './little-girl-participating-online-classes 1.png'
import img2 from './image 7.png'
import img3 from './image 6.png'
import line from './Line 1.png'
import arrow from './Group.png'
import light from './casual-life-3d-idea-lamp 1.png'


function Tracks() {
    return (
        <>
            <section className={styles.track}>
                <div className='container'>
                    <div className={'d-flex flex-column ' +styles.scontent}>
                        <div className={'text-center '}>
                            <h1 className={styles.h1}>Our Tracks</h1>
                            <p className={styles.p}>Lorem Ipsum is simply dummy text of the printing.</p>

                        </div>
                        <div className={'row'}>
                            <div className={'col-lg-4'}>
                                <div class={"card shadow "+styles.card}>
                                    <img src={img1} class={"card-img-top "+styles.cardimg } alt="..."/>
                                        <div class="card-body">
                                            <div className={"d-flex justify-content-between"}>
                                                <p className={styles.pstar}>UI/UX Design</p>
                                                <img className={styles.star} src={stars} alt="" />
                                            </div>
                                            <h5 class={"card-title "+styles.cardh5}>UI/UX Design for Beginners</h5>
                                            <p class={"card-text "+styles.cardp}>$98</p>
                                            <img className={styles.line} src={line} alt="" />
                                            <img className={styles.times} src={times} alt="" />
                                            <a href="#" class={"btn "+styles.button}>Join Course</a>
                                        </div>
                                </div>
                            </div>
                            <div className={'col-lg-4'}>
                                <div class={"card shadow "+styles.card}>
                                    <img src={img2} class={"card-img-top "+styles.cardimg } alt="..."/>
                                        <div class="card-body">
                                            <div className={"d-flex justify-content-between"}>
                                                <p className={styles.pstar}>UI/UX Design</p>
                                                <img className={styles.star} src={stars} alt="" />
                                            </div>
                                            <h5 class={"card-title "+styles.cardh5}>UI/UX Design for Beginners</h5>
                                            <p class={"card-text "+styles.cardp}>$98</p>
                                            <img className={styles.line} src={line} alt="" />
                                            <img className={styles.times} src={times} alt="" />
                                            <a href="#" class={"btn "+styles.button}>Join Course</a>
                                        </div>
                                </div>
                            </div>
                            <div className={'col-lg-4'}>
                                <div class={"card shadow "+styles.card}>
                                    <img src={img3} class={"card-img-top "+styles.cardimg } alt="..."/>
                                        <div class="card-body">
                                            <div className={"d-flex justify-content-between"}>
                                                <p className={styles.pstar}>UI/UX Design</p>
                                                <img className={styles.star} src={stars} alt="" />
                                            </div>
                                            <h5 class={"card-title "+styles.cardh5}>UI/UX Design for Beginners</h5>
                                            <p class={"card-text "+styles.cardp}>$98</p>
                                            <img className={styles.line} src={line} alt="" />
                                            <img className={styles.times} src={times} alt="" />
                                            <a href="#" class={"btn "+styles.button}>Join Course</a>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img className={styles.light} src={light} alt="" />
                <img className={styles.arrow} src={arrow} alt="" />
            </section>
        </>
    )
}

export default Tracks