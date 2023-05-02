import React from "react";
import "./Footer.css";
import constructionIcon from "../../assets/construction.svg";

export const Footer = () => {
  return (
    <footer className="footer-style">
      <section>
        <p className="name-paragraph">
          Develop by <span className="name-style">Jonatan Pereyra</span>
        </p>
      </section>
      <section className="contruction-section">
        <img src={constructionIcon} className="construction-icon" alt="" />
        <p className="construction-paragraph">Sitio en construcción</p>
        <img src={constructionIcon} className="construction-icon" alt="" />
      </section>
    </footer>
  );
};
