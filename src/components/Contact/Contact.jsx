import React from "react";
import "./Contact.css";

export const Contact = () => {
  return (
    <section id="Contact" className="contact-container">
      <div className="container">
        <h3 className="subtitle">contacto</h3>
        <p className="paragraph-style">
          ¡Gracias por visitar mi portfolio!. Si estás buscando a alguien con habilidades técnicas y experiencia en el desarrollo de software, has venido al lugar correcto. No dudes en ponerte en contacto conmigo.
          Podés enviar un correo electrónico clickeando <a href="mailto:jpereyraacevedo@gmail.com">acá</a>.
          Tambien podés encontrarme en <a href="https://www.linkedin.com/in/jonatan-pereyra-acevedo/">LinkedIn</a>. 
        </p>
      </div>
    </section>
  );
};
