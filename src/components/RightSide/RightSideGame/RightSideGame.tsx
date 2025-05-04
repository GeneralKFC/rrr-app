import "./RightSideGame.css"
import React from "react"
import Top from "./Top/Top"
import Middle from "./Middle/Middle"
import Bottom from "./Bottom/Bottom"
import { CoinsProvider } from "./CounterProvider"
import { FlowerProvider } from "./Bottom/BottomUpgradePage/BottomUpgradeContext"
import { ZaborProvider } from "./Bottom/BottomUpgradePage/Bottom UpgradeContextZabor"
import { DoubleProvider } from "./Bottom/BottomUpgradePage/BottomUpgradeContextDouble"
import { HouseProvider } from "./Bottom/BottomUpgradePage/BottomUpgredeContextHouse"
function RightSideGame(){
    return(
        <div className="RightSideGame_container">
            <CoinsProvider>
            <FlowerProvider>
            <ZaborProvider>
            <DoubleProvider>
            <HouseProvider>
            <Top/>
            <Middle/>
            <Bottom/>
            </HouseProvider>
            </DoubleProvider>
            </ZaborProvider>
            </FlowerProvider>
            </CoinsProvider>
        </div>
    )
}
export default RightSideGame