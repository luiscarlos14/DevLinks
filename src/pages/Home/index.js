import React from "react";
import "./home.css";
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
      </main>
    </div>
  );
}
