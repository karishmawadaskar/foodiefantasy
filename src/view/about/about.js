import React from 'react';
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/Footer';

function About() {
  return (
    <div>
      <Navbar/>
      <div className='heading'><h1 >About</h1></div>

      <img src="https://img.freepik.com/free-vector/contact-us-concept-landing-page_52683-12859.jpg?t=st=1724237084~exp=1724240684~hmac=c1f736d8315910747bd8d2891eab49a900fa53e68f5cbaddce24c1acc216dedd&w=996" className='navbar-image' />
      <Footer/>
    </div>

  )

}

export default About