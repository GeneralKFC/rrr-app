import "./HeadLeft.css";
import React from 'react'
import HeadLeftLogo from "./HeadLeftLogo/HeadleftLogo";
import HeadLeftLogoText from "./HeadLeftLogoText/HeadLeftLogoText";
function HeadLeft(){
    return(
    <div className="HeadLeft">

        <HeadLeftLogo/>

        <HeadLeftLogoText/>

    </div>
        )
}
export default HeadLeft