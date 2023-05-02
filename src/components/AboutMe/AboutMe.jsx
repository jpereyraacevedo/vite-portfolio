import React from "react";
import "./AboutMe.css";
import htmlLogo from "../../assets/html-logo.svg";
import jsLogo from "../../assets/js-logo.svg";
import reactLogo from "../../assets/react-logo.svg";
import englishLogo from "../../assets/english-logo.svg";

export const AboutMe = () => {
  return (
    <section id="About-me" className="about-me-container">
      <div className="container">
        <h3 className="subtitle">sobre mi</h3>
        <p className="paragraph-style">
          Nacido en los 90, crecido con la informatica y los avances
          tecnologicos diarios, siempre tuve mucho contacto con la misma.
          Asimismo, en 2015 ingrese en la{" "}
          <a href="https://www.fca.unl.edu.ar/">
            Facultad de Ciencias Agrarias (Universidad Nacional del Litoral)
          </a>
          , pero sin nunca dejar de lado mi naturaleza en el mundo de la
          tecnología. Corriendo el año 2021 me sumo al mundo de la programación
          desde el Desarrollo Web donde sentia que me podría desempeñar mas
          naturalmente, camino el cual sigo transitando con mucha ilusion y
          ganas hasta hoy en dia.
        </p>
        <div className="skills-list">
          <ul>
            <li>
              <span className="list-title">Skills:</span>
            </li>
            <li className="skills">HTML</li>
            <li className="skills">CSS</li>
            <li className="skills">JavaScript</li>
            <li className="skills">React JS</li>
            <li className="skills">Bootstrap</li>
            <li className="skills">SASS</li>
            <li className="skills">Git & Github</li>
            <li className="skills">Firebase</li>
            <li className="skills">SEO</li>
            <li className="skills">Accesibilidad</li>
            <li className="skills">SQL</li>
          </ul>
          <ul>
            <li>
              <span className="list-title">Software:</span>
            </li>
            <li className="skills">Visual Studio Code</li>
            <li className="skills">Filezilla</li>
            <li className="skills">Adobe Premiere</li>
          </ul>
          <ul>
            <li>
              <span className="list-title">Idiomas:</span>
            </li>
            <li className="skills">Español (Nativo)</li>
            <li className="skills">Inglés (C1)</li>
          </ul>
        </div>
        <div className="certifications">
          <a
            href="https://www.coderhouse.com/certificados/60a434591f9d5b0015b8926f"
            target="_blank"
          >
            <img src={htmlLogo} alt="" className="certif-img" />
          </a>
          <a
            href="https://www.coderhouse.com/certificados/61131687e5725b0010aa60d9"
            target="_blank"
          >
            <img src={jsLogo} alt="" className="certif-img" />
          </a>
          <a
            href="https://www.coderhouse.com/certificados/61683a0e5a5ba8002e39bd2b"
            target="_blank"
          >
            <img src={reactLogo} alt="" className="certif-img" />
          </a>
          <a href="https://www.efset.org/cert/Gyq6su" target="_blank">
            <img src={englishLogo} alt="" className="certif-img" />
          </a>
        </div>
      </div>
    </section>
  );
};
