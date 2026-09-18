import React from "react";
import { DiCode } from "react-icons/di";
import { FaTelegram, FaInstagram, FaGithub } from "react-icons/fa";

import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">

        <div className={styles.footer__main}>

          <div className={styles.footer__logo}>
            <span className={styles.footer__icon}>
              <DiCode />
            </span>

            <h2>Sultanov Asadbek</h2>

            <p>Front-end developer</p>
          </div>

          <div className={styles.footer__links}>
            <a href="/">About Me</a>
            <a href="/projekt">Projects</a>
            <a href="/skills">Skills</a>
            <a href="/exprince">Products</a>
          </div>

          <div className={styles.footer__social}>
            <a  href="https://t.me/sultanov_asd" target="_blank" rel="noreferrer">
              <FaTelegram />
            </a>

            <a  href="https://instagram.com/atomic00427" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>

            <a   href="https://github.com/sultanovasadbek0809-cmd" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          </div>

        </div>

        <div className={styles.footer__bottom}>
          <p>
            © 2026 Sultanov Asadbek. All rights reserved.
          </p>

          <p>
            Made with React & SCSS
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;