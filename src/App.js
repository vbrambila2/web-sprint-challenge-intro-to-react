import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from './constants';
import Character from './components/Character';
//import Stats from './components/Stats';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [charName, setCharName] = useState("");

  useEffect(() => {
    axios.get(`${BASE_URL}`)
    .then(res => {
      console.log(res.data);
      setCharName(res.data);
    })
    .catch(err => console.error(err))
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      { charName.length > 0 ? charName.map(char => {
        return <Character name={char.name} key={char.name} />;
        }) : <h3>Loading...</h3>
      }
      {/* { charName.length > 0 ? charName.map(char => {
        return <Stats height={char.height} mass={char.mass} hairColor={char.hair_color} skinColor={char.skin_color} key={char.name} />;
        }) : <h3>Loading...</h3>
      } */}
    </div>
  );
}




export default App;
