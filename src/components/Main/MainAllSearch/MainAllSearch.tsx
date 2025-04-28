import "./MainAllSearch.css"
import MainAllSearchFilter from "./MainAllSearchFilter/MainAllSearchFilter"
import MainAllSInputButton from "./MainAllSearchInput+Button/MainAllSInput+Button"
function MainAllSearch(){
return(
    <div className="MainAllSearch_container">

        <MainAllSearchFilter/>
        <MainAllSInputButton/>

    </div>
)
}
export default MainAllSearch