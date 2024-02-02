import OpenAI from "openai";
import React, { useEffect, useState } from "react";
import Header from "../Header/Header.jsx";
import { useLocation, useParams } from "react-router-dom";
import { data } from "../../data.jsx";
import "./rooms.css";

const openai = new OpenAI({
  apiKey: '',
  dangerouslyAllowBrowser: true
});

const response = await openai.chat.completions.create({
  model: "gpt-3.5-turbo",
  messages: [
    {
      role: "system",
      content: "",
    },
    {
      role: "user",
      content: "Qual é a capital do Brasil?",
    },
  ],
  temperature: 0.7,
  max_tokens: 64,
  top_p: 1,
});

console.log(response);

function Rooms() {
  const [itemClicado, setItemClicado] = useState();
  const { id } = useParams();

  useEffect(() => {
    setItemClicado(data.find((item) => item.id === id));
  }, [id]);

  return (
    <div className="room-container">
      <Header />

      <div className="texto-central">
        <h1>{`${itemClicado?.country.toUpperCase()} - ${itemClicado?.city.toUpperCase()}`}</h1>
      </div>

      <div className="imagens">
        <div className="img-left">
          <img src={itemClicado?.images[0]} alt="" />
        </div>

        <div className="imgs-right">
          <div className="imgs-top">
            <img src={itemClicado?.images[0]} alt="" />
            <img src={itemClicado?.images[1]} alt="" />
          </div>

          <div className="imgs-bottom">
            <img src={itemClicado?.images[2]} alt="" />
            <img src={itemClicado?.images[3]} alt="" />
          </div>
        </div>
      </div>

      <div className="response">
        <div className="button">
          <button>Gerar plano de viagem</button>
        </div>

        <div className="box">
          <div className="result">
            <p>teste</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rooms;
