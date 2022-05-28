import React from 'react'
import styles from '../styles/Contact.module.css'

const Contact = () => {
    return (
        <section id="contact" className={styles.contact_us} style={{ padding: "100px 0"}}>
            <div className="container ">
                <div className="row">
                    <div className="col-lg-6 align-self-center wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay="0.25s">
                        <div className="section-heading">
                            <h2>Feel Free To Send Us a Message About Your Website Needs</h2>
                            <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doer ket eismod tempor incididunt ut labore et dolores</p>
                            <div className={styles.phone_info}>
                                <h4 className={styles.h4}>For any enquiry Call Us: <span><i className="fa fa-phone"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-telephone mb-1" viewBox="0 0 16 16">
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                </svg></i> <a href="#">010-020-0340</a></span></h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInRight" data-wow-duration="0.5s" data-wow-delay="0.25s">
                        <form id={styles["contact"]} action="" method="post">
                            <div className="row">
                                <div className="col-lg-6">
                                    <fieldset>
                                        <input type="name" name="name" id="name" placeholder="Name" autoComplete="on" required />
                                    </fieldset>
                                </div>
                                <div className="col-lg-6">
                                    <fieldset>
                                        <input type="surname" name="surname" id="surname" placeholder="Surname" autoComplete="on" required />
                                    </fieldset>
                                </div>
                                <div className="col-lg-12">
                                    <fieldset>
                                        <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email" required="" />
                                    </fieldset>
                                </div>
                                <div className="col-lg-12">
                                    <fieldset>
                                        <textarea name="message" type="text" className="form-control" id="message" placeholder="Message" required=""></textarea>
                                    </fieldset>
                                </div>
                                <div className="col-lg-12">
                                    <fieldset>
                                        <button type="submit" id="form-submit" className="main-button ">Send Message</button>
                                    </fieldset>
                                </div>
                            </div>
                           
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
