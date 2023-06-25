import logo from './logo.svg';
import { useEffect, useState } from 'react'
import './App.css';

function App() {

  const [movie, setMovie] = useState([])

 useEffect (() => {
  fetch("/movies")
    .then((r) => r.json())
    .then((movies) => console.log(movies))
 }, []);

 return <h1>Hello from React!</h1>
}

export default App;
