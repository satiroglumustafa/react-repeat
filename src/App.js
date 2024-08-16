
import { useState } from 'react';
import './App.css';
import C1 from './C1';

function App() {

  const  [toggle,setToggle] = useState(true)

  function butonTiklama () {

    setToggle ( firstValue =>  firstValue === true ?  false : true  )

  }

  return (
    <>
       {toggle === true ? <C1/> : ""}
       <button onClick={butonTiklama} > C1 Göster/Gizle </button>
    </>
  );
}

export default App;
