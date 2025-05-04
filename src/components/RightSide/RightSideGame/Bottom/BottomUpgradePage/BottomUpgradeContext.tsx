import React, { createContext, useState,useContext, useEffect } from "react";
interface FlowersContextType{
    flower:boolean;
    setFlower:(value:boolean)=>void;
}



const FlowerContext=createContext<FlowersContextType | undefined>(undefined);
 export const FlowerProvider: React.FC<{children:React.ReactNode}>=({children})=>{
    const [flower,setFlower]=useState<boolean>(()=>{
        const saved=localStorage.getItem("Byied1");
        return saved?JSON.parse(saved):"";
    });
    useEffect(()=>{
        localStorage.setItem("Byied1",JSON.stringify(flower));
    },[flower]);

      return (
        <FlowerContext.Provider value={{ flower, setFlower}}>
          {children}
        </FlowerContext.Provider>
      );
 }
 export const useFlower = () => {
    const context = useContext(FlowerContext);
    if (context === undefined) {
      throw new Error('useCounter must be used within a CounterProvider');
    }
    return context;
  };