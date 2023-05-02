import React from "react";
import "./Portfolio.css";
import gitHub from "../../assets/github-logo.svg";
import codeLogo from "../../assets/code-logo.svg";

export const Portfolio = () => {
  return (
    <section id="Portfolio" className="experience-container">
      <div className="container">
        <h3 className="subtitle">portfolio</h3>
        <p className="paragraph-style">
          <i>"No es mucho, pero es trabajo honesto"</i>
        </p>
        <div className="parent">
          <article className="portfolio-card">
            <div className="icons-container">
              <img
                src={codeLogo}
                className="github-logo"
                alt="Icono de archivos"
              />
              <a href="https://github.com/jpereyraacevedo/Petra">
                <img
                  src={gitHub}
                  className="github-logo"
                  alt="Logo de Github"
                />
              </a>
            </div>
            <div>
              <h5 className="title-card-style">Petra</h5>
              <p className="paragraph-card-style">
                Mi primer sitio web. Utilizacion de bootstrap para maquetar.
              </p>
            </div>
            <ul>
              <li className="skills">HTML</li>
              <li className="skills">CSS</li>
              <li className="skills">Bootstrap</li>
              <li className="skills">SEO</li>
              <li className="skills">Responsive</li>
            </ul>
          </article>
          <article className="portfolio-card">
            <div className="icons-container">
              <img
                src={codeLogo}
                className="github-logo"
                alt="Icono de archivos"
              />
              <img src={gitHub} className="github-logo" alt="Logo de Github" />
            </div>
            <div>
              <h5 className="title-card-style">HandCode</h5>
              <p className="paragraph-card-style">
                Aplicación para HandCode, sitio dedicado a la venta de
                plantillas web.
              </p>
            </div>
            <ul>
              <li className="skills">HTML</li>
              <li className="skills">CSS</li>
              <li className="skills">Grid</li>
              <li className="skills">SEO</li>
              <li className="skills">Responsive</li>
            </ul>
          </article>
          <article className="portfolio-card">
            <div className="icons-container">
              <img
                src={codeLogo}
                className="github-logo"
                alt="Icono de archivos"
              />
              <a href="https://github.com/jpereyraacevedo/calculator-reactjs">
                <img
                  src={gitHub}
                  className="github-logo"
                  alt="Logo de Github"
                />
              </a>
            </div>
            <div>
              <h5 className="title-card-style">Calculadora</h5>
              <p className="paragraph-card-style">
                Calculadora funcional con la aplicación de React js.
              </p>
            </div>
            <ul>
              <li className="skills">React JS</li>
              <li className="skills">CSS</li>
            </ul>
          </article>
          <article className="portfolio-card">
            <div className="icons-container">
              <img
                src={codeLogo}
                className="github-logo"
                alt="Icono de archivos"
              />
              <a href="https://github.com/jpereyraacevedo/password-generator">
                <img
                  src={gitHub}
                  className="github-logo"
                  alt="Logo de Github"
                />
              </a>
            </div>
            <div>
              <h5 className="title-card-style">Generador de contraseñas</h5>
              <p className="paragraph-card-style">
                Generador de contraseñas aleatorias de 6 caracteres.
              </p>
            </div>
            <ul>
              <li className="skills">HTML</li>
              <li className="skills">CSS</li>
              <li className="skills">JavaScript</li>
            </ul>
          </article>
          <article className="portfolio-card">
            <div className="icons-container">
              <img
                src={codeLogo}
                className="github-logo"
                alt="Icono de archivos"
              />
              <a href="https://github.com/jpereyraacevedo/adding-task">
                <img
                  src={gitHub}
                  className="github-logo"
                  alt="Logo de Github"
                />
              </a>
            </div>
            <div>
              <h5 className="title-card-style">To-do list</h5>
              <p className="paragraph-card-style">
                Anotador para escribir, borrar y tachar tareas.
              </p>
            </div>
            <ul>
              <li className="skills">React JS</li>
              <li className="skills">CSS</li>
            </ul>
          </article>
          <article className="portfolio-card">
            <div className="icons-container">
              <img
                src={codeLogo}
                className="github-logo"
                alt="Icono de archivos"
              />
              <a href="https://github.com/jpereyraacevedo/js-colorFlipper">
                <img
                  src={gitHub}
                  className="github-logo"
                  alt="Logo de Github"
                />
              </a>
            </div>
            <div>
              <h5 className="title-card-style">ColorFlipper</h5>
              <p className="paragraph-card-style">
                App para generar colores aleatorios.
              </p>
            </div>
            <ul>
              <li className="skills">HTML</li>
              <li className="skills">CSS</li>
              <li className="skills">JavaScript</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};
