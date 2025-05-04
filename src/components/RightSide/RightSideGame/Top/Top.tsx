import React, { useEffect, useState } from "react"
import "./Top.css"
import { useCoins } from "../CounterProvider"
function Top(){
    const {coins}=useCoins();

return(
    <div className="Top_container">

        <div className="Top_coins_container">

            <img className="Top_coins_img" src="src\img\Gold_Coins.png" alt="Coins"></img>
            <div className="Top_coins">{+coins}</div>

        </div>

    </div>
)
}
export default Top