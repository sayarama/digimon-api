import React, {useState, useEffect} from "react";
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { Link } from "react-router-dom";


function App() {

  const [items, setItems] = useState([])

  useEffect(() => {
    axios
      .get('https://www.digi-api.com/api/v1/digimon?pageSize=100')
      .then(res => {
        console.log(res)
        setItems(res.data.content)
      })
      .catch(err => {
        console.log(err)
      })
  })


  return (
    <div className="App">
      {items.map(item => (
        <div className="digimon">
          <h1 key={item.id}>
            {item.name}
          </h1>
          <img src={`https://digimon-api.com/images/digimon/w/${item.name.replace(/\s+/g, '_')}.png`} />
          <Link to='Detail/'>
          <button>Detail</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default App;
