import { useGetPlayerQuery } from "../API/puppyBowlApi";
import "../App.css";

export default function SinglePlayer() {

  const { data = {}, error, isLoading } = useGetPlayerQuery();

  let message;

  if (isLoading) {
    message = "The puppy is being released...";
  }

  if (error) {
    message =
      "Please select a puppy from the Home Page using the See Details button.";
  }

  return (
    <div id="main-section">
      <h2 id="title">Your Chosen Player!</h2>
      <div className="single-player">
        {isLoading && <p>{message}</p>}
        {error && <p id="error-message">{message}</p>}
        {data?.data?.players &&
          data.data.player.map((player) => (
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
    </div>
  );
}
