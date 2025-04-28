import "./LeftSide.css"
import LeftSideProfile from "./LeftSideProfile/LeftSideProfile"
import LeftSideSettings from "./LeftSideSettings/LeftSideSettings"
import LeftSideFavorite from "./LeftSideFavorite/LeftSideFavorite"
function LeftSide(){
    return(
        <section className="LeftSide_container">

            <LeftSideProfile/>
            <LeftSideFavorite/>
            <LeftSideSettings/>

        </section>
    )
}
export default LeftSide