import { useNavigate } from "react-router";
import { useGetPlayersQuery, useGetPlayerQuery } from "../API/puppyBowlApi";
import "../App.css";

const AllPlayers = () => {
  const navigate = useNavigate();
  
  const { data = {}, error, isLoading } = useGetPlayersQuery();

  let message;

  if (isLoading) {
    message = "Puppies are being released...";
  }

  if (error) {
    message = "Somebody let the dogs out! Please try again.";
  }

  return (
    <div id="main-section">
      <div id="title-container">
        <h1 id="title">Welcome to the Puppy Bowl!</h1>
        <p className="descrip">All of our players are shown below!</p>
        <p className="descrip">
          You may also submit your own pet for the Bowl in the New Player
          Submission tab!
        </p>
      </div>
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
                <button onClick={() => navigate("/single-player")} className="see-details">See Details</button>
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
};

export default AllPlayers;
