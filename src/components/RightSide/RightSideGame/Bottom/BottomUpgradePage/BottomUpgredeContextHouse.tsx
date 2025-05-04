import React, { createContext, useState,useContext, useEffect } from "react";
interface HouseContextType{
    house:boolean;
    setHouse:(value:boolean)=>void;
}



const HouseContext=createContext<HouseContextType | undefined>(undefined);
 export const HouseProvider: React.FC<{children:React.ReactNode}>=({children})=>{
    const [house,setHouse]=useState<boolean>(()=>{
        const saved=localStorage.getItem("Byied3");
        return saved?JSON.parse(saved):"";
    });
    useEffect(()=>{
        localStorage.setItem("Byied3",JSON.stringify(house));
    },[house]);

      return (
        <HouseContext.Provider value={{ setHouse, house}}>
          {children}
        </HouseContext.Provider>
      );
 }
 export const useHouse = () => {
    const context = useContext(HouseContext);
    if (context === undefined) {
      throw new Error('useCounter must be used within a CounterProvider');
    }
    return context;
  };