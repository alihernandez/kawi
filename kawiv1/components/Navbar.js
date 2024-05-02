'use client'

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Navbar = () => {
  const [isNavVisible, setNavVisible] = useState(false);
  const [isButtonVisible, setButtonVisible] = useState(true);

  const handleClick = () => {
    setNavVisible(!isNavVisible);
    setButtonVisible(false); // Hide the button after it's clicked
  };

  useEffect(() => {
    // Check if the button should be visible on initial render
    const shouldButtonBeVisible = localStorage.getItem("isButtonVisible") !== "false";
    console.log("shouldButtonBeVisible:", shouldButtonBeVisible);
    setButtonVisible(shouldButtonBeVisible);
  }, []); // Remove dependency array

  useEffect(() => {
    // Save the visibility of the button to localStorage
    localStorage.setItem("isButtonVisible", isButtonVisible);
  }, [isButtonVisible]);

  return (
    <header className="primary-header flex p-4 text-white" id="nav">
      <div className="nav flex-1">
        <h3 className="text-2xl font-bold">Kawi Services LLC</h3>
      </div>
      {isButtonVisible && (
        <button
          onClick={handleClick}
          className="mobile-toggle block lg:hidden"
          aria-controls="primary-navigation"
          aria-expanded={isNavVisible.toString()}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      )}
      <nav className={`lg:flex ${isNavVisible ? "" : "hidden"}`}>
        <ul
          data-visible={isNavVisible.toString()}
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
