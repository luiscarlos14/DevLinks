import React, { useState, useEffect } from "react";
import "./networks.css";

import { Header } from "../../components/Header";
import { Logo } from "../../components/Logo";
import { Input } from "../../components/Input";

import { MdAddLink } from "react-icons/md";

import { db } from "../../services/firebaseConnection";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";

export default function Networks() {
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [github, setGithub] = useState("");

  useEffect(() => {
    function loadLinks() {
      const docRef = doc(db, "social", "link");
      getDoc(docRef).then((snapshot) => {
        if (snapshot.data() !== undefined) {
          setFacebook(snapshot.data().facebook);
          setInstagram(snapshot.data().instagram);
          setLinkedIn(snapshot.data().linkedIn);
          setGithub(snapshot.data().github);
        }
      });
    }
    loadLinks();
  }, []);

  function handleSave(e) {
    e.preventDefault();

    setDoc(doc(db, "social", "link"), {
      facebook: facebook,
      instagram: instagram,
      linkedIn: linkedIn,
      github: github,
    })
      .then(() => {
        toast.success("Redes Sociais Cadastradas!");
      })
      .catch((error) => {
        toast.error("Erro ao Salvar");
        console.log("Erro ao Salvar: " + error);
      });
  }

  return (
    <div className="admin-container">
      <Header />
      <Logo />

      <h1 className="title-social">Suas redes sociais</h1>

      <form className="form" onSubmit={handleSave}>
        <label className="label">Link do Facebook</label>
        <Input
          placeholder="Digite a url do Facebook"
          value={facebook}
          onChange={(e) => setFacebook(e.target.value)}
        />

        <label className="label">Link do Instagram</label>
        <Input
          placeholder="Digite a url do Instagram"
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
        />

        <label className="label">Link do LinkedIn</label>
        <Input
          placeholder="Digite a url do LinkedIn"
          value={linkedIn}
          onChange={(e) => setLinkedIn(e.target.value)}
        />

        <label className="label">Link do Github</label>
        <Input
          placeholder="Digite a url do Github"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
        />

        <button type="subtmit" className="btn-register">
          Salvar Links <MdAddLink size={24} color="#FFF" />
        </button>
      </form>
    </div>
  );
}
