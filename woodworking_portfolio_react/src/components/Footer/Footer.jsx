import React from "react";
import s from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footer__text}>
        <p>Контакты: +7 (904) 358-19-64</p>
      </div>
      <div className={s.footer__contacts}></div>
    </footer>
  );
};

export default Footer;
