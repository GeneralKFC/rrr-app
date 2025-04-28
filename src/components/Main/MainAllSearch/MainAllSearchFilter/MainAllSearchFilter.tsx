import {  useEffect, useState } from "react"

import "./MainAllSearchFilter.css"
function MainAllSearchFilter(){
    const [selectOpt,setSelectOpt]=useState(false);
    const [GorBan,setGorBan]=useState(()=>localStorage.getItem("Gor&&Ban")==="true");
    const [Banana,setBanana]=useState(()=>localStorage.getItem("Banana")==="true");
    const [Gorilla,setGorilla]=useState(()=>localStorage.getItem("Gorilla")==="true");
    const Select=()=>{
        if(selectOpt){
            setSelectOpt(false);
        }else{
            setSelectOpt(true);
        }
    }
    useEffect(() => {
        localStorage.setItem("Gor&&Ban",GorBan?"true":"false");
        localStorage.setItem("Banana",Banana?"true":"false");
        localStorage.setItem("Gorilla",Gorilla?"true":"false");
      }, [GorBan, Banana, Gorilla]);
return(
    <div className="MainAllSearchFilter_container">
        <div className="MainAllSearchFilter_select">
            <div onClick={()=>Select()} className="MainAllSearchFilter_select_Filter_options">
                Gorilla^Filter
            </div>
            {selectOpt && (<div className="MainAllSearchFilter_options">
                <div onClick={()=>setGorBan(true)} className="MainAllSearchFilter_select_options">
                    Gorilla with banana
                </div>
                <div onClick={()=>setGorilla(true)}  className="MainAllSearchFilter_select_options">
                    Just Gorilla
                </div>
                <div onClick={()=>setBanana(true)} className="MainAllSearchFilter_select_options">
                    Just Banana
                </div>
            </div>)}
        </div>
        {(GorBan||Banana||Gorilla) && <div className="MainAllSearchFilter_filtered_options">
            {GorBan && (<div className="MainAllSearchFilter_filtered_options_Gorilllaz" >Gorilla with banana<box-icon onClick={()=>setGorBan(false)} style={{cursor:"pointer"}}  name='x' ></box-icon></div>)}
            {Banana && (<div className="MainAllSearchFilter_filtered_options_Gorilllaz" >Just Banana<box-icon onClick={()=>setBanana(false)} style={{cursor:"pointer"}}  name='x' ></box-icon></div>)}
            {Gorilla && (<div className="MainAllSearchFilter_filtered_options_Gorilllaz" >Just Gorilla<box-icon onClick={()=>setGorilla(false)} style={{cursor:"pointer"}}  name='x' ></box-icon></div>)}
        </div>}
    </div>
)
}
export default MainAllSearchFilter