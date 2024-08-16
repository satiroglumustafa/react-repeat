
import { useState } from 'react';
import './App.css';
import C1 from './C1';

function App() {

  const [number,setNumber] = useState(5) 

  return (
    <C1 veri = {number} />
  );
}

export default App;
