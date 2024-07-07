import { useNavigate, useParams } from "react-router";
import { useGetPlayerQuery } from "../API/puppyBowlApi";
import "../App.css";

export default function SinglePlayer() {
  const navigate = useNavigate();

  const { id } = useParams();

  const { data = {}, error, isLoading } = useGetPlayerQuery(id);

  let message;

  if (isLoading) {
    message = "The puppy is being released...";
  }

  if (error) {
    message =
      "The puppy is loose! ";
  }

  console.log(data)

  return (
    <section id="player-main-section">
      <h2 id="title">Your Chosen Player!</h2>
      <div className="single-player">
        {isLoading && <p>{message}</p>}
        {error && <p id="error-message">{message}</p>}
        {data?.data?.player &&
            <div key={data.data.player.id} className="player-card">
              <div className="player-details">
                <h2>Name: {data.data.player.name}</h2>
                <p>ID: {data.data.player.id}</p>
                <p>Breed: {data.data.player.breed}</p>
                <p>Status: {data.data.player.status}</p>
                <button onClick={() => navigate("/all-players")} className="see-details">
                  Return
                </button>
              </div>
              <div className="player-image-container">
                <img
                  className="player-image"
                  src={data.data.player.imageUrl}
                  alt={data.data.player.name}
                />
              </div>
            </div>}
      </div>
    </section>
  );
}
