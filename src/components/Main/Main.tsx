import "./Main.css"
import React from 'react'
import MainAllSearch from "./MainAllSearch/MainAllSearch.tsx"
import MainAllContent from "./MainAllContent/MainAllContent.tsx"

function Main(){
return(
    <main className="Main_container">

        <MainAllSearch/>

        <MainAllContent/>

    </main>
)
}
export default Main