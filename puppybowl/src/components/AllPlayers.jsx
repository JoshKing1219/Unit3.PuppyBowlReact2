import { useNavigate } from "react-router";
import { useGetPlayersQuery, useDeletePlayerMutation} from "../API/puppyBowlApi";
import "../App.css";

const AllPlayers = () => {
  const navigate = useNavigate();
  const [deletePlayer] = useDeletePlayerMutation();
  
  const { data = {}, error, isLoading } = useGetPlayersQuery();

  let message;

  if (isLoading) {
    message = "Puppies are being released...";
  }

  if (error) {
    message = "Somebody let the dogs out! Please try again.";
  }

  const handleDelete = async (id) => {
    await deletePlayer(id)

    navigate("/all-players");
  }

  return (
    <section id="players-main-section">
      <div id="title-container">
        <h1 id="title">Welcome to the Puppy Bowl!</h1>
        <p className="descrip">All of our players are shown below! <br /> Search for a player using our nifty Search Bar!</p>
        <p className="descrip">
          You may also submit your own pet for the Bowl in the <br />New Player
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
                <button onClick={() => navigate(`/single-player/${player.id}`)} className="see-details">See Details</button>
                <button onClick={() => handleDelete(player.id)} id="delete">Delete Me</button>
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
    </section>
  );
};

export default AllPlayers;
