import React, { useEffect, useState } from "react"
import "./Middle.css"
import { useCoins } from "../CounterProvider";
import { useFlower } from "../Bottom/BottomUpgradePage/BottomUpgradeContext";
import { useZabor } from "../Bottom/BottomUpgradePage/Bottom UpgradeContextZabor";
import { useDouble } from "../Bottom/BottomUpgradePage/BottomUpgradeContextDouble";
import { useHouse } from "../Bottom/BottomUpgradePage/BottomUpgredeContextHouse";
function Middle(){
    const [zoom,setZoom]=useState<boolean>(false);
    const {coins,setCoins}=useCoins();
    const {flower,setFlower}=useFlower();
    const {zabor,setZabor}=useZabor();
    const {double,seatDouble}=useDouble();
    const {house,setHouse}=useHouse();

return(
    <div className="Middle_container">

        <div className={`Middle_center ${zoom?"zoomed":""}`}>
            <img 
            onClick={()=>setCoins(coins + 1*(double?2:1))}
            onMouseDown={()=>setZoom(true)}
            onMouseLeave={()=>setZoom(false)}
            onMouseUp={()=>setZoom(false)} 
            className="Middle_img_noClick" 
            src="src\img\Middle_field.png">
            </img>
            {flower && (<div onClick={()=>setCoins(coins + 1*(double?2:1))}
            onMouseDown={()=>setZoom(true)}
            onMouseLeave={()=>setZoom(false)}
            onMouseUp={()=>setZoom(false)}  className="Middle_bying_flowers_field">
                            <div className="Middle_bying1_flowers">
                                <img src="src\img\FlowersRSide.png" className="Middle_bying1_flowers_img"></img>
                            </div>
                            <div className="Middle_bying2_flowers">
                                <img src="src\img\FlowersRSide.png" className="Middle_bying1_flowers_img"></img>
                            </div>
                        </div>
            )}

            {zabor && (
                <div onClick={()=>setCoins(coins + 1*(double?2:1))}
                onMouseDown={()=>setZoom(true)}
                onMouseLeave={()=>setZoom(false)}
                onMouseUp={()=>setZoom(false)}  className="fff">
                    <div className="Middle_bying1_zabor_field">
                        <img src="src\img\Zabor.png" className="Middle_bying_zabor_img"></img>
                    </div>
                    <div className="Middle_bying2_zabor_field">
                        <img src="src\img\Zabor.png" className="Middle_bying_zabor_img"></img>
                    </div>
                </div>
            )}
            {house && (
                <div onClick={()=>setCoins(coins + 1*(double?2:1))}
                onMouseDown={()=>setZoom(true)}
                onMouseLeave={()=>setZoom(false)}
                onMouseUp={()=>setZoom(false)}  className="house_field">
                    <img src="src\img\house.png" className="house_field_img"></img>
                </div>
            )}
        </div>

    </div>
)
}
export default Middle