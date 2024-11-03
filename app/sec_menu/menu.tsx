"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TfiMenu } from "react-icons/tfi";
import styles from "./menu.module.css";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={styles["container"]} id="belina">
      <div className={styles["left"]}>
        <a className={styles["icons"]}>Belina</a>
      </div>
      <div className={styles["right"]}>
        <Link href={"/"} className={styles["first_Link"]}>
          Home
        </Link>
        <Link href={"/"} className={styles["first_Link"]}>
          About
        </Link>
        <Link href={"/"} className={styles["first_Link"]}>
          Blog
        </Link>
        <Link href={"/"} className={styles["first_Link"]}>
          Contact
        </Link>
        <button onClick={toggleMenu} className={styles["menuButton"]}>
          <TfiMenu className={styles["menuButton"]} />
        </button>
      </div>

      {isMenuOpen && (
        <div className={styles["fullScreenMenu"]}>
          <ul>
            <li>
              <Link href="#belina" onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#Skills" onClick={handleLinkClick}>
                About
              </Link>
            </li>
            <li>
              <Link href="#Price" onClick={handleLinkClick}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="#team" onClick={handleLinkClick}>
                Contact
              </Link>
            </li>
          </ul>
          <button className={styles["closeButton"]} onClick={toggleMenu}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Menu;
