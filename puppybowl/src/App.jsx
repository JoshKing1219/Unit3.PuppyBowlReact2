import { Routes, Route, Link } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import NewPlayerForm from "./components/NewPlayerForm";
import SinglePlayer from "./components/SinglePlayer";

function App() {
  return (
    <div id="home-page">
      <div id="navbar">
        <Link to="/">Home</Link>
        <Link to="/new-player-form">New Player Submission</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<AllPlayers/>}/>
          <Route path="/new-player-form" element={<NewPlayerForm />} />
          <Route path="/single-player/:id" element={<SinglePlayer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
