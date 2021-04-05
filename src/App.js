import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
function App() {

  const [name, setName] = useState("Glacerhakdog");

return <Header name={name}/>
}

export default App;
