"use client";

import React, { useState } from "react";
import Link from "next/link";
import { RiTwitterXFill } from "react-icons/ri";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
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
    <div className={styles["container"]}>
      <div className={styles["left_A"]}>
        <div className={styles["phone"]}>
          <FaPhone />
          1800-00-1234
        </div>
        <div className={styles["phone"]}>
          <FaEnvelope />
          info@domain.com
        </div>
      </div>
      <div className={styles["left"]}>
        <a
          href="https://x.com/"
          className={styles["icons"]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiTwitterXFill />
        </a>
        <a
          href="https://www.facebook.com/facebook/"
          className={styles["icons"]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookSquare />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.instagram.android&hl=en_US"
          className={styles["icons"]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/company/linkedin/"
          className={styles["icons"]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://www.pinterest.com/"
          className={styles["icons"]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaPinterestP />
        </a>
      </div>
      <div className={styles["right"]}>
        <button onClick={toggleMenu} className={styles["menuButton"]}>
          <TfiMenu className={styles["menuButton"]} />
        </button>
      </div>

      {isMenuOpen && (
        <div className={styles["fullScreenMenu"]}>
          <ul>
            <li>
              <Link href="https://x.com/" onClick={handleLinkClick}>
                <RiTwitterXFill />{" "}
              </Link>
            </li>
            <li>
              <Link
                href="https://www.facebook.com/facebook/"
                onClick={handleLinkClick}
              >
                <FaFacebookSquare />
              </Link>
            </li>
            <li>
              <Link
                href="https://play.google.com/store/apps/details?id=com.instagram.android&hl=en_US"
                onClick={handleLinkClick}
              >
                <FaInstagram />{" "}
              </Link>
            </li>

            <li>
              <Link
                href="https://www.linkedin.com/company/linkedin/"
                onClick={handleLinkClick}
              >
                <FaLinkedinIn />{" "}
              </Link>
            </li>
            <li>
              <Link href="https://www.pinterest.com/" onClick={handleLinkClick}>
                <FaPinterestP />{" "}
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
