import Head from 'next/head'
import About from '../components/About'
import Company from '../components/Company'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Landing from '../components/Landing'
import Services from '../components/Services'
import Team from '../components/Team'
import 'bootstrap/dist/css/bootstrap.min.css';
import Testimonials from '../components/Testimonials'

export default function Home() {
  return (
    <div>
      <Head>
      <title>Bussiness App</title>
      </Head>
      <Header/>
      <Landing/>
      <About/>
      <Services/>
      <Testimonials/>
      <Team/>
      <Company/>
      <Contact/>
      <Footer/>
    </div>
  )
}
