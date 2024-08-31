import React from 'react'
import Navbar from "../../component/navbar/navbar"
import "./../../index.css";

function home() {
  return (<div><Navbar />
    <div className='heading' ><h1>Home</h1></div>
    <img src='https://img.freepik.com/free-vector/beautiful-home_24877-50819.jpg?t=st=1724237135~exp=1724240735~hmac=85f1a96570819d9534bfe92fd73d753e1c8e01dd8e94fab2e6ed0c841450da36&w=740' className='navbar-image' />
  </div>
  )
}

export default home