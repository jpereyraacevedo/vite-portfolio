import React from "react";
import "./Hero.css";
import gitHub from "../../assets/github-hero-logo.svg";
import linkedinLogo from "../../assets/linkedin-logo.svg";

export const Hero = () => {
  return (
    <main id="main-content" className="main-content">
      <div className="container hero-container">
        <img
          src="https://via.placeholder.com/240x290"
          alt="#"
          className="img-style"
        />
        <div className="text">
          <h1 className="name">Jonatan Pereyra</h1>
          <h2 className="main-title">Hola! Soy Jonatan</h2>
          <h3 className="subtitle">Frontend Developer</h3>
          <p className="paragraph-style">
            Iniciado en el mundo de la programación y el desarrollo,
          </p>
          <p className="paragraph-style">
            con muchisimas ganas de crecer y seguir aprendiendo.
          </p>
          <div className="icons-hero-container">
            <a href="https://www.linkedin.com/in/jonatan-pereyra-acevedo/">
              <img
                src={linkedinLogo}
                className="hero-logos"
                alt="Logo de LinkedIn"
              />
            </a>
            <a href="https://github.com/jpereyraacevedo">
              <img src={gitHub} className="hero-logos" alt="Logo de Github" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};
