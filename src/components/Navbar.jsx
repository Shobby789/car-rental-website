import { useRef } from "react";
import "../styles/Navbar.css";
import { IoMenu } from "react-icons/io5";
import { GrFormClose } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div>
      <header>
        <h3>GCarRental</h3>
        <nav ref={navRef}>
          <Link to="/">Home</Link>
          <Link to="/cars">Cars</Link>
          {/* <Link to="/Booking">Booking</Link> */}
          <Link to="/contact">Contact</Link>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            {/* <i class="bi bi-x"></i> */}
            <GrFormClose className="close-btn-icon" />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          {/* <i class="bi bi-list"></i> */}
          <IoMenu />
        </button>
      </header>
    </div>
  );
}
