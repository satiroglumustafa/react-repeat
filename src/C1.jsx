import { useEffect } from "react"

const C1  = () => {

    console.log("C1 Log 1...")

    useEffect( () => {
        console.log("useEffect çalıştı c1")
    
        return ()=> { console.log('C1 içindeki useEffect cleanup çalıştı')}
    
      } )

    return (
        <>
            <p> C1 Komponenti...</p>
        </>
    )
}
export default C1