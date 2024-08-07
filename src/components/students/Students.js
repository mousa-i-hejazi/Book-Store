import React from 'react'
import styles from './Students.module.css'
import img1 from './Ellipse 34.png'
import img2 from './Ellipse 34 (1).png'
import img3 from './Ellipse 34 (2).png'
import buttons from './Group 76.png'

function Students() {
    return (
        <>
            <section>
                <div className="container">
                    <div className={'d-flex flex-column'}>
                        <div className={'text-center '+styles.text}>
                            <h1 className={styles.h1}>What student’s say</h1>
                            <p className={styles.p}>Lorem Ipsum is simply dummy text of the printing.</p>
                        </div>

                        <div className="row">
                            <div className={'col-lg-4'}>
                                <div class={"card shadow-lg " + styles.card}>
                                    <div class="card-body">
                                        <p className={styles.cardp}>“Teachings of the great explore of truth,
                                            the master-builder of human happiness.
                                            no one rejects,dislikes, or avoids pleasure
                                            itself, pleasure itself”</p>
                                        <div className={'d-flex'}>
                                            <img className={styles.cardimg} src={img1} alt="" />
                                            <div className={styles.cardtext}>
                                                <h5 className={styles.cardh5}>Finlay Kirk</h5>
                                                <p className={styles.cardp2}>Web Developper</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={'col-lg-4'}>
                                <div class={"card shadow-lg " + styles.card}>
                                    <div class="card-body">
                                        <p className={styles.cardp}>“Complete account of the system and
                                            expound the actual Contrary to popular
                                            belief, Lorem Ipsum is not simply
                                            random text. It has roots”</p>
                                        <div className={'d-flex'}>
                                            <img className={styles.cardimg} src={img2} alt="" />
                                            <div className={styles.cardtext}>
                                                <h5 className={styles.cardh5}>Dannette P. Cervantes</h5>
                                                <p className={styles.cardp2}>Web Design</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={'col-lg-4'}>
                                <div class={"card shadow-lg " + styles.card}>
                                    <div class="card-body">
                                        <p className={styles.cardp}>“There are many variations of passages
                                            of Lorem Ipsum available, but the majority
                                            have suffered alteration in some form,
                                            by injected humour”</p>
                                        <div className={'d-flex'}>
                                            <img className={styles.cardimg} src={img3} alt="" />
                                            <div className={styles.cardtext}>
                                                <h5 className={styles.cardh5}>Clara R. Altman</h5>
                                                <p className={styles.cardp2}>UI&UX Design</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img className={styles.buttons} src={buttons} alt="" />
                    </div>
                </div>

            </section>
        </>
    )
}

export default Students