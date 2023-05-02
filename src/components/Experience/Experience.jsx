import React from "react";
import "./Experience.css";
import workLogo from "../../assets/work.svg";

export const Experience = () => {
  return (
    <section id="Experience" className="portfolio-container">
      <div className="container">
        <h3 className="subtitle">experiencia</h3>
        <div className="experience-parent">
          <div className="div1">
            <article className="portfolio-card">
              <div className="icons-container">
                <img src={workLogo} className="github-logo" alt="" />
                <p className="year-card">2021</p>
              </div>
              <div>
                <h5 className="title-card-style">Tutor de Desarrollo Web</h5>
                <h6 className="subtitle-card-style">
                  <a href="https://www.coderhouse.com/">Coderhouse</a>
                </h6>
                <p className="paragraph-card-style">
                  Guia y acompañanmiento en la formacion de mas de 200
                  profesionales, respondiendo sus dudas y corrigiendo sus
                  proyectos.
                </p>
              </div>
            </article>
          </div>
          <div className="div2">
            <article className="portfolio-card">
              <div className="icons-container">
                <img src={workLogo} className="github-logo" alt="" />
                <p className="year-card">2022</p>
              </div>
              <div>
                <h5 className="title-card-style">Coordinador</h5>
                <h6 className="subtitle-card-style">
                  <a href="https://www.coderhouse.com/">Coderhouse</a>
                </h6>
                <p className="paragraph-card-style">
                  Nexo entre el equipo de tutores y docente, coordinacion,
                  reemplazos y dictado de Master After Classes.
                </p>
              </div>
            </article>
          </div>
          <div className="div3">
            <article className="portfolio-card">
              <div className="icons-container">
                <img src={workLogo} className="github-logo" alt="" />
                <p className="year-card">2022</p>
              </div>
              <div>
                <h5 className="title-card-style">Desarrollador Frontend jr.</h5>
                <h6 className="subtitle-card-style">
                  <a href="https://handcode.com.ar/">HandCode</a>
                </h6>
                <p className="paragraph-card-style">
                  Diseño, creacion y desarrollo de plantillas web.
                </p>
              </div>
            </article>
          </div>
          <div className="div4">
            <article className="portfolio-card">
              <div className="icons-container">
                <img src={workLogo} className="github-logo" alt="" />
                <p className="year-card">2022</p>
              </div>
              <div>
                <h5 className="title-card-style">Tutor de React js</h5>
                <h6 className="subtitle-card-style">
                  <a href="https://www.coderhouse.com/">Coderhouse</a>
                </h6>
                <p className="paragraph-card-style">
                  Guia y acompañanmiento en la formacion de profesionales,
                  respondiendo sus dudas y corrigiendo sus proyectos.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
