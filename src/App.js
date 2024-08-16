import { useEffect, useState } from "react";
import "./App.css";
import C1 from "./C1";

function App() {
  const [gosterGizle, gosterGizleGuncelle] = useState(true);
  const [sayi, sayiGuncelle] = useState(0);

  console.log("Bu birinci Aşama");

  useEffect(() => {
    console.log("Bu üçüncü Aşama (app useEffect)");
    return () => {console.log("App içindeki useEffect cleanup çalıştı")}
  } , []);
  console.log("Bu ikinci Aşama");
  function butonTikla() {
    gosterGizleGuncelle((eskiDeger) => (eskiDeger === true ? false : true));
  }
  function butonTikla2() {
    sayiGuncelle((eskiDeger) => eskiDeger + 5);
  }
  return (
    <>
      Bu app componenti...
      <button onClick={butonTikla}>C1 GÖster/Gizle</button>
      <button onClick={butonTikla2}>Arttır {sayi}</button>
      {gosterGizle === true ? <C1 /> : ""}
    </>
  );
}

export default App;
