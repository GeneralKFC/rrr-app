import React from "react";
import "./BottomUpgradePage.css"
    interface BottomUpgradePageProps{
        onClose:()=>void;
    }
function BottomUpgradePage({onClose}:BottomUpgradePageProps){
    return(
        <div className="BottomUpgradePage_container">
            <div className="BottomUpgradePage_close"><box-icon onClick={onClose} style={{transform:"rotate(45deg)",cursor:"pointer"}} name='plus-medical'></box-icon></div>

            <div className="BottomUpgradePage_columns">

                <div className="BottomUpgradePage_house">
                    <div className="BottomUpgradePage_group">
                        <img src="src\img\FlowersRSide.png" className="BottomUpgradePage_img"></img>
                        <p className="BottomUpgradePage_text">Price: 150</p>
                    </div>
                    <div className="BottomUpgradePage_group">
                        <img src="src\img\FlowersRSide.png" className="BottomUpgradePage_img"></img>
                        <p className="BottomUpgradePage_text">Price: 150</p>
                    </div>
                </div>

                <div className="BottomUpgradePage_Click">
                    <div className="BottomUpgradePage_group">
                        <img src="src\img\FlowersRSide.png" className="BottomUpgradePage_img"></img>
                        <p className="BottomUpgradePage_text">Price: 150</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BottomUpgradePage