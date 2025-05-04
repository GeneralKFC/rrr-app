import React, { createContext, useState,useContext, useEffect } from "react";
interface CoinsContextType{
    coins:number;
    setCoins:(value:number)=>void;
}
const CoinsContext=createContext<CoinsContextType | undefined>(undefined);
 export const CoinsProvider: React.FC<{children:React.ReactNode}>=({children})=>{
    const [coins,setCoins]=useState<number>(()=>{
        const saved=localStorage.getItem("Coins");
        return saved?JSON.parse(saved):0;
    });
    useEffect(()=>{
        localStorage.setItem("Coins",JSON.stringify(coins));
    },[coins])

      return (
        <CoinsContext.Provider value={{ coins, setCoins }}>
          {children}
        </CoinsContext.Provider>
      );
 }
 export const useCoins = () => {
    const context = useContext(CoinsContext);
    if (context === undefined) {
      throw new Error('useCounter must be used within a CounterProvider');
    }
    return context;
  };