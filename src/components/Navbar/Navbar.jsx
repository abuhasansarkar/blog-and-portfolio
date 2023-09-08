"use client";
import React, { useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import AuthLInks from "../AuthLInks/AuthLInks";
import ThemeToggle from "../themeToggle/ThemeToggle";
import Image from "next/image";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import CloseIcon from "@mui/icons-material/Close";
const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const navbar = [
    <nav className={styles.nav}>
      <Link href="/">Home</Link>
      <Link href="/">About</Link>
      <Link href="/">Portfolio</Link>
      <Link href="/">Services</Link>
      <Link href="/">Contact</Link>
    </nav>,
  ];

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/">AbuHasan.</Link>
      </div>
      <nav className={styles.manu}>
        {navbar}
        <AuthLInks />
        <ThemeToggle />
        <div onClick={() => setNavOpen(!navOpen)} className={styles.humberger}>
          <DensityMediumIcon />
        </div>
        {navOpen && (
          <div className={styles.responsiveNavbar}>
            <span
              onClick={() => setNavOpen(!navOpen)}
              className={styles.closeIcon}
            >
              <CloseIcon />
            </span>
            <h1 className={styles.resLogo}>AbuHasan Blog</h1>
            {navbar}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
