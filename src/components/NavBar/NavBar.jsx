import { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";

import Logo from "./items/Logo";
import PageLinks from "./items/PageLinks";
import SocialLinks from "./items/SocialLinks";
import "./navstyles.css";

const NavBar = () => {
  let a = 0;
  const navRef = useRef();
  const [isBodyOverflowHidden, setIsBodyOverflowHidden] = useState(false);

  useEffect(() => {
    if (isBodyOverflowHidden) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    return () => {
      document.body.style.overflow = "visible"; // Reset overflow when component unmounts
    };
  }, [isBodyOverflowHidden]);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
    setIsBodyOverflowHidden((prevState) => !prevState);
  };
  return (
    <div className="navbar">
      <Logo />
      <nav ref={navRef} className="navbar-inner">
        <PageLinks responsive={showNavbar} />
        <SocialLinks responsive={showNavbar} />
      </nav>
      <button className="nav-button nav-close-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </div>
  );
};

export default NavBar;
