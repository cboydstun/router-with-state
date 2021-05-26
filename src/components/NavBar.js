import React, { useState } from 'react'
import { Link } from "react-router-dom";

// using state for active link
export default function NavBar() {
  const [currentPage, setCurrentPage] = useState("");

  const handleClick = e => {
    setCurrentPage(e.target.name);
  };

  return (
    <nav>
      <Link
        to="/"
        className={currentPage === "/" ? "active" : undefined}
        onClick={handleClick}
        name="/"
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
}