import Image from 'next/image'
import styles from '../styles/About.module.css'

const About = () => {
    return (
        <section id="about" className='text-center ' style={{ padding: "100px 0",backgroundBlendMode: 'lighten'}}>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-md-10 col-lg-8'>
                            <h2 className={styles.h2}>All the tools you will need</h2>
                            <p className={styles.p}>Whether you are building a welcome mat for your SaaS or a clean  corporate portfolio stack has your design needs covered.</p>
                        </div>
                    </div>
                </div>
            
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='feature'>
                            <Image src="/images/startup.jpg" className='responsive border rounded pill' alt="startup" height={350} width={400} priority="eager" />
                            <h4 className={styles.h4}>Startups</h4>
                            <p className={styles.para}>Quickly launch a professional site — minimal effort, maximum impact. </p>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='feature
                        '>
                        <Image src="/images/agencies.jpg" className='responsive border rounded pill' alt="agencies" height={350} width={400} priority="eager"/>
                            <h4 className={styles.h4}>Agencies</h4>
                            <p className={styles.para}>
                                    Deliver results to your clients faster than ever with rapid page building.
                                 </p>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='feature'>
                            <Image src="/images/freelancers.jpg" className='responsive border rounded pill' alt="freelancer" height={350} width={400} priority="eager"/>
                            <h4 className={styles.h4}>Freelancers</h4>
                            <p className={styles.para}>
                                    Stack is your silent partner, it does the heavy-lifting while you take the glory!
                                </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
export default About;