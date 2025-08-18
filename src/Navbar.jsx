import { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import logo from "./assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="navbar-logo">
        <a href="/">Zentrixia</a>
      </div>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✖" : "☰"}
      </div>

      <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
        <li><Link to="homesection" smooth={true} duration={1000} onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="coursesection" smooth={true} duration={1000} onClick={() => setIsOpen(false)}>Courses</Link></li>
        <li><Link to="programs" smooth={true} duration={1000} onClick={() => setIsOpen(false)}>Programs</Link></li>
        <li><Link to="instructorss" smooth={true} duration={1000} onClick={() => setIsOpen(false)}>Instructors</Link></li>
        <li><Link to="joinform1" smooth={true} duration={1000} onClick={() => setIsOpen(false)}>Join Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
