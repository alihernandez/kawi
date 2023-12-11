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
    <header className="primary-header flex p-4 text-white"  id="nav">
      <div className="nav flex-1">
        <h3 className="text-2xl font-bold">Kawi Services LLC</h3>
      </div>
      <button
        onClick={() => {
          handleClick();
        }}
        className="mobile-toggle block lg:hidden"
        aria-controls="primary-navigation"
        aria-expanded="false"
      >
        {/* Add your mobile menu icon or text here */}
        Menu
      </button>
      <nav className="hidden lg:flex">
        <ul
          data-visible="false"
          id="primary-navigation"
          className="primary-navigation flex space-x-4"
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/service">Services</Link>
          </li>
          <li>
            <Link href="/careers">Careers</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
