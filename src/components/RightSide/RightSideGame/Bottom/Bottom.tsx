import React, { useState } from "react"
import "./Bottom.css"
import BottomUpgradePage from "./BottomUpgradePage/BottomUpgradePage";
function Bottom(){
    const [openUpgradePage,setopenUpgradePage]=useState<boolean>(false);
    const handleClose=()=>{
        setopenUpgradePage(false);
        console.log('tyt');
        console.log(openUpgradePage);
    }
return(
    <div onClick={()=>setopenUpgradePage(true)} className="Bottom_container">

        <p className="Bottom_improvement">Upgrade</p>
        <p className="Bottom_improvement">^</p>
        {openUpgradePage && (<BottomUpgradePage onClose={handleClose}/>)}
    </div>
)
}
export default Bottom