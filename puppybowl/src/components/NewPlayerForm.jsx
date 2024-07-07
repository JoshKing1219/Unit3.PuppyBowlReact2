import { useAddPlayerMutation } from "../API/puppyBowlApi";
import { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router";
//import SinglePlayer from "./SinglePlayer";

export default function NewPlayerForm() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [status, setStatus] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [addPlayer] = useAddPlayerMutation();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await addPlayer({name, breed, status, imageUrl})

    setName("")
    setBreed("")
    setStatus("bench")
    setImageUrl("")
    

    navigate(`/single-player/${response.data.data.newPlayer.id}`)
  };

  return (
    <section id="form-main-section">
      <h2 id="title">Submit a new player!</h2>
      <div id="form-container">
        <form onSubmit={handleSubmit} id="new-player-form">
          <label id="name">
            Name:
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <label>
            Breed:
            <input
              value={breed}
              onChange={(event) => setBreed(event.target.value)}
            />
          </label>
          <label>
            Status:
            <select value={status} onChange={(event) => setStatus(event.target.value)}>
              <option value="bench" className="option">Bench</option>
              <option value="field" className="option">Field</option>
            </select>
          </label>
          <label>
            Image URL:
            <input
              value={imageUrl}
              onChange={(event) => setImageUrl(event.target.value)}
            />
          </label>
          <button id="submit">Submit</button>
        </form>
      </div>
      <div className="single-player">
      </div>
    </section>
  );
}