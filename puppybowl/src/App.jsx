import { Routes, Route, Link } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import NewPlayerForm from "./components/NewPlayerForm";
import SinglePlayer from "./components/SinglePlayer";
import Home from "./components/Home";

function App() {
  return (
    <div id="app">
      <div id="navbar">
        <Link to="/">Home</Link>
        <Link to="/all-players">All Players</Link>
        <Link to="/new-player-form">New Player Submission</Link>
      </div>
      <div id="routes">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/all-players" element={<AllPlayers/>}/>
          <Route path="/new-player-form" element={<NewPlayerForm />} />
          <Route path="/single-player/:id" element={<SinglePlayer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
