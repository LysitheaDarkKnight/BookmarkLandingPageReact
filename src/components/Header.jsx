import logoBookmark from "../images/logo-bookmark.svg"
import logoBookmarkWhite from "../images/logo-bookmark-white.svg"
import iconHamburger from "../images/icon-hamburger.svg"
import iconClose from "../images/icon-close.svg"
import { useEffect, useState } from "react"

import NavMenu from "./shared/NavMenu"

function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [toggleLogoImg, setToggleLogoImg] = useState(true);
  const [toggleMenuImg, setToggleMenuImg] = useState(true);

  function toggleMenu() {
    setIsModalOpen(!isModalOpen);
    setMenuOpen(!menuOpen);
    setToggleLogoImg(!toggleLogoImg);
    setToggleMenuImg(!toggleMenuImg);
  }

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
  
    if (windowWidth >= 1104) { 
      setMenuOpen(false);
      setIsModalOpen(false);
      setToggleLogoImg(true);
      setToggleMenuImg(true);
    }
  
    window.addEventListener("resize", handleResize);
  
    return () => {
      window.removeEventListener("resize", handleResize);
    };
}, [windowWidth]);


  return (

    <header className={menuOpen ? 'fixed' : ''}>
     <div className="container flex-header">
        <div className="header-logo">
        {toggleMenuImg ?
          <img src={logoBookmark} alt="Bookmark" className="bookmark" />:
          <img src={logoBookmarkWhite} alt="Bookmark" className="bookmark" />}
          <button className="toggle" onClick={toggleMenu}>
          {toggleMenuImg ?
            <img src={iconHamburger} alt="Menu" /> :
            <img src={iconClose} alt="Menu" />}
          </button>
        </div>
        {isModalOpen && <NavMenu />}
        <div className="navbar">
          <ul className="nav">
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Contact</a></li>
            <li><button className="btn btn-login">Login</button></li>
          </ul>
        </div>
      </div>

    </header>
  )
}

export default Header
