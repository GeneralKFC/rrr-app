import React, { useEffect, useState } from "react"
import "./Middle.css"
function Middle(){
    const [zoom,setZoom]=useState<boolean>(false);
    const [giveCoins,setGiveCoins]=useState<any>(()=>{
        try{
        const stored=localStorage.getItem("Coins");
        const pars=stored?JSON.parse(stored):0;
        return pars
        }catch{
            return 0
        }
    });
    useEffect(()=>{
        console.log(giveCoins);
        const strGiveCoins=String(giveCoins);
        localStorage.setItem("Coins",strGiveCoins);
    },[giveCoins])
return(
    <div className="Middle_container">

        <div className="Middle_center">

            <img 
            onClick={()=>setGiveCoins((prev)=>prev+1)}
            onMouseDown={()=>setZoom(true)}
            onMouseLeave={()=>setZoom(false)}
            onMouseUp={()=>setZoom(false)} 
            className={`Middle_img_noClick ${zoom?"zoomed":''}`} 
            src="src\img\Middle_field.png">
            </img>
            

        </div>

    </div>
)
}
export default Middle
//<img src="Middle_img_Click"></img>