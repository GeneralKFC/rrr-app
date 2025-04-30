import "./RightSideGame.css"
import React from "react"
import Top from "./Top/Top"
import Middle from "./Middle/Middle"
import Bottom from "./Bottom/Bottom"
function RightSideGame(){
    return(
        <div className="RightSideGame_container">

            <Top/>
            <Middle/>
            <Bottom/>
        </div>
    )
}
export default RightSideGame