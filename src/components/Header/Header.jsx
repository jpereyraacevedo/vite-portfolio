import React from "react";
import "./Header.css"
import lightMode from "../../assets/lightmode.svg";


export const Header = ()=> {
    return (
        <header className="header-style">
            <ul>
                <li className="nav-menu"><a href="#About-me">Sobre mí</a></li>
                <li className="nav-menu"><a href="#Portfolio">Portfolio</a></li>
                <li className="nav-menu"><a href="#Experience">Experiencia</a></li>
                <li className="nav-menu"><a href="#Contact">Contacto</a></li>
            </ul>
            <img src={lightMode} alt="" className="light-mode" />
        </header>
    )
}