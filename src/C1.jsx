import {useState} from "react"

const C1 = () => {

    const [number,setNumber] = useState(0)
    
    function butonTiklama(){
        setNumber(eskideger =>  eskideger + 5 )
    }

    return (
        
        <>
            <p>bu bir C1 Komponentidir</p>
            <p>Sayı Değeri: {number}</p>
            <button onClick={butonTiklama}>Arttır</button>
        </>
    )
}

export default C1