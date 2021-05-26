import React, { useState } from 'react'
import { Link } from "react-router-dom";

// using state for active link
const NavBar = () => {
  const [currentPage, setCurrentPage] = useState("");

  const handleClick = e => {
    setCurrentPage(e.target.name);
  };

  return (
    <nav>
      <Link
        to="home"
        className={currentPage === "home" ? "active" : undefined}
        onClick={handleClick}
        name="home"
      >
        Home
      </Link>
      <Link
        to="about"
        className={currentPage === "about" ? "active" : undefined}
        onClick={handleClick}
        name="about"
      >
        About
      </Link>
      <Link
        to="projects"
        className={currentPage === "projects" ? "active" : undefined}
        onClick={handleClick}
        name="projects"
      >
        Projects
      </Link>
    </nav>
  );
};

export default NavBar;