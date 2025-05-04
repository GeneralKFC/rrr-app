import React, { useEffect } from "react";
import "./BottomUpgradePage.css"
import { useCoins } from "../../CounterProvider";
import { useFlower } from "./BottomUpgradeContext";
import { useZabor } from "./Bottom UpgradeContextZabor";
import { useDouble } from "./BottomUpgradeContextDouble";
import { useHouse } from "./BottomUpgredeContextHouse";
    interface BottomUpgradePageProps{
        onClose:()=>void;
    }
function BottomUpgradePage({onClose}:BottomUpgradePageProps){
    const {coins,setCoins}=useCoins()
    const {flower,setFlower}=useFlower();
    const {zabor,setZabor}=useZabor();
    const {double,setDouble}=useDouble();
    const {house,setHouse}=useHouse();
    const BuyThing1=()=>{
        if(coins>=150){
            if(!flower){
                setCoins(coins-150);
                setFlower(true);
            } 
        }
        //Эта функция уменьшает золото на прайс
        //Добавляет значок куплено
        //Ставит в middle картинку.
    }
    const BuyThing2=()=>{
        if(coins>=1500){
            if(!zabor){
                setCoins(coins-1500);
                setZabor(true);
            } 
        }
    }
    const BuyThing3=()=>{
        if(coins>=15000){
            if(!house){
                setCoins(coins-15000);
                setHouse(true);
            } 
        }
    }
    const BuyThingR1=()=>{
        if(coins>=150){
            if(!double){
                setCoins(coins-150);
                setDouble(true);
            } 
        }
    }
    useEffect(()=>{
        localStorage.setItem("Byied1",JSON.stringify(flower));
    },[flower]);
    return(
        <div className="BottomUpgradePage_container">
            <div className="BottomUpgradePage_close">
                <box-icon onClick={onClose} style={{transform:"rotate(45deg)",cursor:"pointer"}} name='plus-medical'></box-icon>
            </div>

            <div className="BottomUpgradePage_columns">

                <div className="BottomUpgradePage_house">
                    <div onClick={()=>BuyThing1()} className="BottomUpgradePage_group">
                        <img src="src\img\FlowersRSide.png" className="BottomUpgradePage_img"></img>
                        <p className="BottomUpgradePage_text">Price: 150</p>
                        {flower && (<div className="BottomUpgradePage_group_buyied">
                            <img className="BottomUpgradePage_group_buyied_img" src="src\img\ByiedBag.png"></img>
                        </div>)} 
                    </div>
                    <div onClick={()=>BuyThing2()} className="BottomUpgradePage_group">
                        <img src="src\img\Zabor.png" className="BottomUpgradePage_img"></img>
                        <p className="BottomUpgradePage_text">Price: 1500</p>
                        {zabor && (<div className="BottomUpgradePage_group_buyied">
                            <img className="BottomUpgradePage_group_buyied_img" src="src\img\ByiedBag.png"></img>
                        </div>)}
                    </div>
                    <div onClick={()=>BuyThing3()} className="BottomUpgradePage_group">
                        <img src="src\img\house.png" className="BottomUpgradePage_img"></img>
                        <p className="BottomUpgradePage_text">Price: 15000</p>
                        {house && (<div className="BottomUpgradePage_group_buyied">
                            <img className="BottomUpgradePage_group_buyied_img" src="src\img\ByiedBag.png"></img>
                        </div>)} 
                    </div>
                </div>

                <div className="BottomUpgradePage_Click">
                    <div onClick={()=>BuyThingR1()} className="BottomUpgradePage_group">
                        <img src="src\img\DoubleClick.png" className="BottomUpgradePage_img"></img>
                        <p className="BottomUpgradePage_text">Price: 150</p>
                        {double && (<div className="BottomUpgradePage_group_buyied">
                            <img className="BottomUpgradePage_group_buyied_img" src="src\img\ByiedBag.png"></img>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BottomUpgradePage