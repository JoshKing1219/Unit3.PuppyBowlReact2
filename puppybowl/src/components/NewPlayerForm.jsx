import { useAddPlayerMutation } from "../API/puppyBowlApi";
import { useState } from "react";
import "../App.css";
//import SinglePlayer from "./SinglePlayer";

export default function NewPlayerForm() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [status, setStatus] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [addPlayer] = useAddPlayerMutation();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      addPlayer({ name, breed, status, imageUrl });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="main-section">
      <h2 id="title">Submit a new player!</h2>
      <div id="form-container">
        <form onSubmit={handleSubmit} id="new-player-form">
          <label>
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
            <input
              value={status}
              onChange={(event) => setStatus(event.target.value)}
            />
          </label>
          <label>
            Image URL:
            <input
              value={imageUrl}
              onChange={(event) => setImageUrl(event.target.value)}
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
      <div className="single-player">
      </div>
    </div>
  );
}