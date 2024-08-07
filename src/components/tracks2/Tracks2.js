import React from 'react'
import styles from './Tracks2.module.css'
import img1 from './elegant-young-teacher-with-brunette-hair-stylish-light-shirt-black-striped-suit-glasses-holding-writings-pen-giving-lecture 1.png'
import img2 from './portrait-female-teacher-white 1.png'
import img3 from './image 6 (1).png'
import insta from './Instagram_logo_2016 1.png'
import link from './174857 1.png'
import ellipse1 from './Ellipse 27.png'
import ellipse2 from './Ellipse 27 (1).png'
import arrow from './Group (1).png'
import planet from './casual-life-3d-orange-planet-with-disk 1.png'



function Tracks2() {
    return (
        <>
            <section className={styles.track}>
                <div className='container'>
                    <div className={'d-flex flex-column ' + styles.scontent}>
                        <div className={'text-center '}>
                            <h1 className={styles.h1}>Our Tracks</h1>
                            <p className={styles.p}>Lorem Ipsum is simply dummy text of the printing.</p>

                        </div>
                        <div className={'row'}>
                            <div className={'col-lg-4'}>
                                <div class={"card shadow " + styles.card}>
                                    <img src={img1} class={"card-img-top " + styles.cardimg} alt="..." />
                                    <div class="card-body">
                                        <h5 class={"card-title " + styles.cardh5}>Matthew E. McNatt</h5>
                                        <p className={styles.pstar}>Professor @George Brown College</p>
                                        <p className={styles.starp}>Ut enim ad minim veniam, quis nost exercitation
                                            ullamco laboris nisi ut allquip ex commodo.</p>
                                        <div className={'d-flex justify-content-between'}>
                                        <p class={"card-text " + styles.cardp}>Engineering physics</p>
                                        <div>
                                            <img className={styles.insta} src={insta} alt="" />
                                            <img className={styles.link} src={link} alt="" />
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={'col-lg-4'}>
                                <div class={"card shadow " + styles.card}>
                                    <img src={img2} class={"card-img-top " + styles.cardimg} alt="..." />
                                    <div class="card-body">
                                        <h5 class={"card-title " + styles.cardh5}>Tracy D. Wright</h5>
                                        <p className={styles.pstar}>Professor @George Brown College</p>
                                        <p className={styles.starp}>Ut enim ad minim veniam, quis nost exercitation
                                            ullamco laboris nisi ut allquip ex commodo.</p>
                                        <div className={'d-flex justify-content-between'}>
                                        <p class={"card-text " + styles.cardp}>Engineering physics</p>
                                        <div>
                                            <img className={styles.insta} src={insta} alt="" />
                                            <img className={styles.link} src={link} alt="" />
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={'col-lg-4'}>
                                <div class={"card shadow " + styles.card}>
                                    <img src={img3} class={"card-img-top " + styles.cardimg} alt="..." />
                                    <div class="card-body">
                                        <h5 class={"card-title " + styles.cardh5}>Cynthia A. Nelson</h5>
                                        <p className={styles.pstar}>Professor @George Brown College</p>
                                        <p className={styles.starp}>Ut enim ad minim veniam, quis nost exercitation
                                            ullamco laboris nisi ut allquip ex commodo.</p>
                                        <div className={'d-flex justify-content-between'}>
                                        <p class={"card-text " + styles.cardp}>Engineering physics</p>
                                        <div>
                                            <img className={styles.insta} src={insta} alt="" />
                                            <img className={styles.link} src={link} alt="" />
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img className={styles.planet} src={planet} alt="" />
                <img className={styles.arrow} src={arrow} alt="" />
                <img className={styles.ellipse1} src={ellipse1} alt="" />
                <img className={styles.ellipse2} src={ellipse2} alt="" />
            </section>
        </>
    )
}

export default Tracks2