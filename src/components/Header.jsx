import React, { useState } from 'react'
import MobileMenu from './MobileMenu'
//import {Link} from "react-router-dom"
import { Link } from 'react-scroll'
import { List } from 'react-bootstrap-icons';

const Header = () => {
  const [menuIsOpen, openMenu] = useState(false);

  const toggleMobileMenu = () => {
    openMenu(!menuIsOpen);
    document.body.classList.toggle('no-scroll');
  };

  return (
    <>
      <div id='topnav'>
        <div id='logo'>
          {/* Use Link from react-scroll for smooth scrolling */}
          <Link to="about" smooth={true} duration={500}>
            {`{MS}`}
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul id='menu'>
          {/* Use Link from react-scroll for smooth scrolling */}
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>

          <li>
            <Link to="ux" smooth={true} duration={500}>
              UX
            </Link>
          </li>

          <li>
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>

          <li>
            <Link to="reels" smooth={true} duration={500}>
              Reels
            </Link>
          </li>

          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>

        </ul>

        <div id='menu-container'>
          <button
            id='menu-button'
            className='show-mobile-menu-button'
            onClick={toggleMobileMenu}>
            <List id='hamburger-icon' className='hamburger'/>
          </button>
        </div>
      </div>

      {menuIsOpen && <MobileMenu closeMethod={toggleMobileMenu} />}
    </>
  );
};

export default Header


