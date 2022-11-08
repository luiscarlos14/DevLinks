import React from "react";
import "./home.css";
import {Social} from "../../components/Social";

import {FaFacebook, FaInstagram, FaGithub, FaLinkedin} from 'react-icons/fa';

export default function Home() {
  return (
    <div className="home-container">
      <h1> LCDev </h1>
      <span>Veja meus links 👇</span>

      <main className="links">
        <section className="link-area">
          <a href="#">
            <p className="link-text">Canal no Youtube</p>
          </a>
        </section>
        <section className="link-area">
          <a href="#">
            <p className="link-text">Grupo Privado no Telegram</p>
          </a>
        </section>
        <section className="link-area">
          <a href="#">
            <p className="link-text">Cursos</p>
          </a>
        </section>

        <footer>
          <Social url="https://www.facebook.com/luiscarlos.aquino.796/">
            <FaFacebook size={35} color="#FFF" />
          </Social>

          <Social url="https://www.facebook.com/luiscarlos.aquino.796/">
            <FaInstagram size={35} color="#FFF" />
          </Social>

          <Social url="https://www.facebook.com/luiscarlos.aquino.796/">
            <FaGithub size={35} color="#FFF" />
          </Social>

          <Social url="https://www.facebook.com/luiscarlos.aquino.796/">
            <FaLinkedin size={35} color="#FFF" />
          </Social>
        </footer>
      </main>
    </div>
  );
}
