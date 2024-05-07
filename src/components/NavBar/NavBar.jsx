import { useRef } from "react";
import { FaBars } from "react-icons/fa";

import Logo from "./items/Logo";
import PageLinks from "./items/PageLinks";
import SocialLinks from "./items/SocialLinks";
import "./navstyles.css";

const NavBar = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };
  return (
    <div className="navbar">
      <Logo />
      <nav ref={navRef} className="navbar-inner">
        <PageLinks />
        <SocialLinks />
      </nav>
      <button className="nav-button nav-close-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </div>
  );
};

export default NavBar;
