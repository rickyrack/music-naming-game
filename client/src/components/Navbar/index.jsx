import React from 'react'
import "./style.scss";
import logo from "../../assets/images/Logo.png";

function Navbar() {
  return (
    <nav>
        <section></section>
        <section className='logo'><img src={logo} alt="Beat Boss" width="100%"/></section>
        <section className='profile'></section>
    </nav>
  )
}

export default Navbar