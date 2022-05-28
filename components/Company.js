import React from 'react'
import Image from 'next/image'
const Company = () => {
  return (
    <section className='py-6 py-md-8 border-bottotm mb-5'>
        <div className='conatiner'>
        <div className='row align-items-center justify-content-center'>
            <div className='container'>
                <div className='row align-items-center justify-content-center' style={{paddingLeft:"2rem",paddingRight:"2rem"}}>
                    <div className='col-6 col-sm-4 col-md-2 mb-4 mb-md-0'>
                        <div className='img-fluid text-grey-600 mb-2 mb-md-0'>
                            <Image src="/company/client-1.png" className='responsive' alt='amazon' height='80' width='180'/>
                        </div>
                    </div>
                    <div className='col-6 col-sm-4 col-md-2 mb-4 mb-md-0 pb-4'>
                        <div className='img-fluid text-grey-600 mb-2 mb-md-0'>
                        <Image src="/company/client-2.png" className='responsive' alt='google' height='80' width='180'/>
                        </div>
                    </div>
                    <div className='col-6 col-sm-4 col-md-2 mb-4 mb-md-0'>
                        <div className='img-fluid text-grey-600 mb-2 mb-md-0'>
                        <Image src="/company/client-3.png" className='responsive' alt='spotify' height='80' width='180'/>
                        </div>
                    </div>
                    <div className='col-6 col-sm-4 col-md-2 mb-4 mb-md-0'>
                        <div className='img-fluid text-grey-600 mb-2 mb-md-0'>
                        <Image src="/company/client-4.png" className='responsive' alt='netflix' height='80' width='180'/>
                        </div>
                    </div>
                    <div className='col-6 col-sm-4 col-md-2 mb-4 mb-md-0'>
                        <div className='img-fluid text-grey-600 mb-2 mb-md-0'>
                        <Image src="/company/client-5.png" className='responsive' alt='instagram' height='80' width='180'/>
                        </div>
                    </div>
                    <div className='col-6 col-sm-4 col-md-2 mb-4 mb-md-0'>
                        <div className='img-fluid text-grey-600 mb-2 mb-md-0'>
                        <Image src="/company/client-6.png" className='responsive' alt='noise' height='80' width='180'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    </section>
  )
}

export default Company
