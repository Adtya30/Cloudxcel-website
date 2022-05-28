import React from 'react'
import Image from 'next/image'
const Testimonials = () => {
    return (
        <section className='bg-light py-9 py-lg-9' id='testimonials' style={{ padding: "100px 0",position:"relative",display:"block"}}>
            <div className='container' style={{position:"relative",paddingLeft:"1rem",paddingRight:"1rem"}}>
            <h2 style={{textAlign:"center",fontSize:"32px",fontFamily:"serif",fontWeight:"600",paddingBottom:".5rem"}}>Testimonials</h2>
            <h6 style={{paddingBottom:"2.5rem",textAlign:"center",fontSize:"28px",fontFamily:"serif"}}>Welcome to organization</h6>
                <div className='row justify content-center'>
                    <div className='col-lg-9'>
                        <div className='row align-items-center mb-7'>
                            <div className='col-sm-auto'>
                                <div className='mx-auto ms-sm-0 mb-4 mb-sm-0 ' style={{paddingLeft:"4rem"}}>
                                    <Image src="/images/testimonials-2.jpg" style={{borderRadius:"1rem"}} className="responsive" alt="img" height="300" width="350" priority="false"/>
                                </div>
                            </div>
                            <div className='col ps-5' style={{flex:"1 0 0%"}}>
                                <blockquote className='blockquote' style={{opacity:"1",margin:"0 0 1rem",display:"block",marginBlockStart:"1em",marginBlockEnd:"1em",marginInlineStart:"40px",marginInlineEnd:"40px"}} >
                                    <p className='blockquote-content' style={{marginTop: "0",marginBottom:"1rem",display: "block",marginBlockStart:"1em",marginBlockEnd:"1em",marginInlineStart: "0px",marginInlineEnd: "0px"}}>Sparrow helped me transform my hobby into a successful online business. Their products enabled me to focus on creating top-notch solutions for my clients.</p>
                                    <div className='h6 fs-0 fw-black' style={{fontWeight:"900",fontSize:"1rem",fontFamily:"serif",fontSize:"20px",textAlign:"center"}}>Black Beard</div>
                                    <div className='h6 text-500' style={{boxSizing:"border-box",textAlign:"center"}}>Feast Design Company</div>
                                </blockquote>                           
                            </div>
                        </div>
                        <div className='row align-items-center mb-7'>
                            <div className='col-sm-auto order-lg-2'>
                                <div className='mx-auto ms-sm-0 mb-4 mb-sm-0' style={{paddingLeft:"4rem"}}>
                                    <Image src="/images/testimonials-1.jpg" style={{borderRadius:"1rem"}} className="responsive" alt="testimonials" height="300" width="350" priority="false"/>
                                </div>
                            </div>
                            <div className='col ps-5' style={{flex:"1 0 0%"}}>
                            <blockquote className='blockquote' style={{opacity:"1",margin:"0 0 1rem",display:"block",marginBlockStart:"1em",marginBlockEnd:"1em",marginInlineStart:"40px",marginInlineEnd:"40px"}}>
                            <p className='blockquote-content' style={{marginTop: "0",marginBottom:"1rem",display: "block",marginBlockStart:"1em",marginBlockEnd:"1em",marginInlineStart: "0px",marginInlineEnd: "0px"}}>Sparrow helped me transform my hobby into a successful online business. Their products enabled me to focus on creating top-notch solutions for my clients.</p>
                                    <div className='h6 fs-0 fw-black' style={{fontWeight:"900",fontSize:"1rem",fontFamily:"serif",fontSize:"20px", textAlign:"center"}}>Rebecca Gill</div>
                                    <div className='h6 text-500' style={{boxSizing:"border-box",textAlign:"center" }}>Web Savvy Marketing</div>
                            </blockquote>
                            </div>
                        </div>
                    </div>
                    <div className='row align-items-center'>
                        <div className='col-sm-auto'>
                            <div className='mx-auto ms-sm-0 mb-4 mb-sm-0' style={{paddingLeft:"4rem"}}>
                                <Image src="/images/testimonials-3.jpg" style={{borderRadius:"1rem"}} className="responsive" alt="" height="300" width="350" priority="false"/>
                            </div>
                        </div>
                        <div className='col ps-5' style={{flex:"1 0 0%"}}>
                        <blockquote className='blockquote' style={{opacity:"1",margin:"0 0 1rem",display:"block",marginBlockStart:"1em",marginBlockEnd:"1em",marginInlineStart:"40px",marginInlineEnd:"40px"}}>
                        <p className='blockquote-content' style={{marginTop: "0",marginBottom:"1rem",display: "block",marginBlockStart:"1em",marginBlockEnd:"1em",marginInlineStart: "0px",marginInlineEnd: "0px"}}>Sparrow helped me transform my hobby into a successful online business. Their products enabled me to focus on creating top-notch solutions for my clients.</p>
                                    <div className='h6 fs-0 fw-black' style={{fontWeight:"900",fontSize:"1rem",fontFamily:"serif",fontSize:"20px" ,textAlign:"center"}}>Lisa Hannigan</div>
                                    <div className='h6 text-500' style={{boxSizing:"border-box" ,textAlign:"center"}}>Data Analysis</div>
                        </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
