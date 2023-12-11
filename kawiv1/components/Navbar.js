'use client'

import Image from "next/image";
import Link from "next/link";
// import hklogo from "../public/hklogo.png"
// import bars from "../public/bars-solid"
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const handleClick = () => {
    console.log('fff');
      const primaryNav = document.querySelector(".primary-navigation");
      const navToggle = document.querySelector(".mobile-toggle");
    console.log(primaryNav)
    const visibility = primaryNav.getAttribute("data-visable"); 
    console.log(visibility)
    if (visibility === "false") {
      primaryNav.setAttribute('data-visable', true)
      navToggle.setAttribute('aria-expanded', true)
    } else if (visibility === "true") {
      primaryNav.setAttribute('data-visable', false)
      navToggle.setAttribute('aria-expanded', false)
    }
   
    
  }


  return (
    <header className="primary-header flex">
    <div className="nav">
     {/* <Image className="logo" src={hklogo} /> */}
     <h3>Kawi Services LLC</h3>
      </div>
      <button onClick={() => {handleClick()}} className="mobile-toggle" aria-controls="primary-navigation" aria-expanded="false"></button>
    <nav>
      <ul data-visable="false" id="primary-navigaton" className="primary-navigation flex">
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/services'>Services</Link>
        </li>
        <li>
          <Link href='/careers'>Careers</Link>
        </li>
        <li>
          <Link href='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
    </header>
  );
};

export default Navbar;
