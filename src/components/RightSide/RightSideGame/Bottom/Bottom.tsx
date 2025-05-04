import React, { useState } from "react"
import "./Bottom.css"
import BottomUpgradePage from "./BottomUpgradePage/BottomUpgradePage";
function Bottom(){
    const [openUpgradePage,setopenUpgradePage]=useState<boolean>(false);
    const handleClose=()=>{
        setopenUpgradePage(false);
    }
return(
    <div className="Bottom_container">
        <div onClick={()=>setopenUpgradePage(true)} className="Bottom_Click">
            <p className="Bottom_improvement">Upgrade</p>
            <p className="Bottom_improvement">^</p>
        </div>
            {openUpgradePage && (<BottomUpgradePage onClose={handleClose}/>)}
        
    </div>
)
}
export default Bottom