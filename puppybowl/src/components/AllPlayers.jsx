import React from "react";
import { useGetPlayersQuery } from "../API/puppyBowlApi";
import "../App.css";

const AllPlayers = () => {
  const { data = {}, error, isLoading } = useGetPlayersQuery();

  let message;

  if (isLoading) {
    message = "Puppies are being released..."
  }

  if (error) {
    message = "Somebody let the dogs out! Please try again."
  }

  return (
    <div className="all-players">
      {isLoading && <p>{message}</p>}
      {error && <p>{message}</p>}
      {data?.data?.players &&
        data.data.players.map((player) => (
          <div key={player.id} className="player-card">
            <div className="player-details">
              <h2>Name: {player.name}</h2>
              <p>ID: {player.id}</p>
              <p>Breed: {player.breed}</p>
              <p>Status: {player.status}</p>
            </div>
            <div className="player-image-container">
              <img
                className="player-image"
                src={player.imageUrl}
                alt={player.name}
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default AllPlayers;
