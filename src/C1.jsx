import C2 from "./C2"
import C3 from "./C3"

const C1 = ({veri})=>{
    return(
        <>
            <p>C1 Komponenti</p>
            <C2></C2>
            <C3 deger = {veri}/>
        </>
    )
}

export default C1