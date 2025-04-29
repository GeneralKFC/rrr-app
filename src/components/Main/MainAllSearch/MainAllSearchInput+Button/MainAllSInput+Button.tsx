import "./MainAllSInput+Button.css"
import React from 'react'
import { useState } from "react";
function MainAllSInputButton(){

const [InpValue,setInpValue]=useState<string>('');

return(
    <div className="MainAllSInputButton_container">
        <div className="MainAllSInputButton_background_input">
        <input className="MainAllSInputButton_input" value={InpValue} onChange={(e)=>setInpValue(e.target.value)} type="text" placeholder="GORILLA^BANANA"></input>
        </div>
        <div className="MainAllSInputButton_button">

        <box-icon style={{width:"30px",height:"30px",margin:"0px 0px 0px 10px"}} name='search-alt' ></box-icon>

        </div>

    </div>
)
}
export default MainAllSInputButton