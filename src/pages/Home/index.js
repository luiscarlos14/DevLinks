import React, { useEffect, useState } from "react";
import "./home.css";
import { Social } from "../../components/Social";

import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

import {
  getDocs,
  collection,
  orderBy,
  query,
  doc,
  getDoc,
} from "firebase/firestore";

import { db } from "../../services/firebaseConnection";

export default function Home() {
  const [links, setLinks] = useState([]);
  const [socialLinks, setSocialLinks] = useState({});

  useEffect(() => {
    function loadLinks() {
      const linksRef = collection(db, "links");
      const queryRef = query(linksRef, orderBy("created", "asc"));

      getDocs(queryRef).then((snapshot) => {
        let lista = [];
        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            name: doc.data().name,
            url: doc.data().url,
            bg: doc.data().bg,
            color: doc.data().color,
          });
        });
        setLinks(lista);
      });
    }
    loadLinks();
  }, []);

  useEffect(() => {
    function loadSocialLinks() {
      const docRef = doc(db, "social", "link");

      getDoc(docRef).then((snapshot) => {
        if (snapshot.data() !== undefined) {
          setSocialLinks({
            facebook: snapshot.data().facebook,
            instagram: snapshot.data().instagram,
            linkedIn: snapshot.data().linkedIn,
            github: snapshot.data().github,
          });
        }
      });
    }
    loadSocialLinks();
  }, []);

  return (
    <div className="home-container">
      <h1> LCDev </h1>
      <span>Veja meus links 👇</span>

      <main className="links">
        {links.map((item, index) => (
          <section
            key={item.id}
            className="link-area"
            style={{ backgroundColor: item.bg }}
          >
            <a href={item.url} target="blank">
              <p className="link-text" style={{ color: item.color }}>
                {item.name}
              </p>
            </a>
          </section>
        ))}

        {links.length !== 0 && Object.keys(socialLinks).length > 0 && (
          <footer>
            <Social url={socialLinks.facebook}>
              <FaFacebook size={35} color="#FFF" />
            </Social>

            <Social url={socialLinks.instagram}>
              <FaInstagram size={35} color="#FFF" />
            </Social>

            <Social url={socialLinks.github}>
              <FaGithub size={35} color="#FFF" />
            </Social>

            <Social url={socialLinks.linkedIn}>
              <FaLinkedin size={35} color="#FFF" />
            </Social>
          </footer>
        )}
      </main>
    </div>
  );
}
