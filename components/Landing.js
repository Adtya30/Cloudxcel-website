import Image from 'next/image';
import styles from '../styles/Landing.module.css'
const Landing = () => {
    return (
        <div className={styles.main_banner} id="landing" style={{ padding: "100px 0"}}>
        <div className="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-6 align-self-center">
                                <div className="left-content header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                                    <div className={styles.left_content}>
                                    <h2 className={styles.h2}>Welcome to <em> Cloudxcel Ideas</em> &amp; <span>SEO</span> Marketing</h2>
                                    <p className={styles.p}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s</p>
                                    <form id="search" action="#" method="GET" className='text-dark'>
                                        <fieldset>
                                            <input type="address" name="email" className="email" placeholder="Your email" autoComplete="on" required />
                                        </fieldset>
                                        <fieldset>
                                            <button type="submit" className="main-button" style={{fontWeight:"600"}}>Getting started</button>
                                        </fieldset>
                                    </form>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mt-2 pt-3">
                                <div className="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                                    <Image src="/images/banner-right-image.png" className='responsive' alt="banner right" height="680" width="650" priority="fold"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Landing;