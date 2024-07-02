import './App.css'
import AllPlayers from './components/AllPlayers'

function App() {

  return (
    <div id='home-page'>
      <h1 id='title'>Welcome to the Puppy Bowl!</h1>
      <p className='descrip'>All of our players are shown below!</p>
      <p className='descrip'>You may also submit your own pet for the Bowl in the New Player tab!</p>
      <AllPlayers/>
    </div>
  )
}

export default App
