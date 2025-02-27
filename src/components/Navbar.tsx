"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [page, setPage] = useState("services");
  const [open, setOpen] = useState(false);

  return (
    <div className={`navbar ${open ? "open" : ""}`}>
      <svg
        onClick={() => setOpen(!open)}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-menu"
      >
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
      <div className="mobile-menu-container">
        <Link
          href={"/"}
          onClick={() => {
            setPage("home");
            setOpen(false);
          }}
          className={`navbar-item ${page === "home" ? "active" : ""}`}
        >
          Főoldal
        </Link>

        <Link
          href={"/"}
          onClick={() => {
            setPage("services");
            setOpen(false);
          }}
          className={`navbar-item ${page === "services" ? "active" : ""}`}
        >
          Szolgáltatásaink
        </Link>
        <Link
          href={"/"}
          onClick={() => {
            setPage("about");
            setOpen(false);
          }}
          className={`navbar-item ${page === "about" ? "active" : ""}`}
        >
          Rólunk
        </Link>
        <Link
          href={"/"}
          onClick={() => {
            setPage("gallery");
            setOpen(false);
          }}
          className={`navbar-item ${page === "gallery" ? "active" : ""}`}
        >
          Galéria
        </Link>
        <Link
          href={"/"}
          onClick={() => {
            setPage("prices");
            setOpen(false);
          }}
          className={`navbar-item ${page === "prices" ? "active" : ""}`}
        >
          Árak
        </Link>
        <Link
          href={"/"}
          onClick={() => {
            setPage("contact");
            setOpen(false);
          }}
          className={`navbar-item ${page === "contact" ? "active" : ""}`}
        >
          Kontakt
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
