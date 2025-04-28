import "./Header.css";
import React from 'react'
import HeadLeft from "./HeadLeft/HeadLeft"
import HeadCenter from "./HeadCenter/HeadCenter";
import HeadRightProfile from "./HeadRight/HeadRightProfile";
function Header(){

    return(
    <header className="Header_container">
        <HeadLeft/>
        <HeadCenter/>
        <HeadRightProfile/>
    </header>
)

}
export default Header