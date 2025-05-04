import React, { createContext, useState,useContext, useEffect } from "react";
interface ZaborContextType{
    zabor:boolean;
    setZabor:(value:boolean)=>void;
}



const ZaborContext=createContext<ZaborContextType | undefined>(undefined);
 export const ZaborProvider: React.FC<{children:React.ReactNode}>=({children})=>{
    const [zabor,setZabor]=useState<boolean>(()=>{
        const saved=localStorage.getItem("Byied2");
        return saved?JSON.parse(saved):"";
    });
    useEffect(()=>{
        localStorage.setItem("Byied2",JSON.stringify(zabor));
    },[zabor]);

      return (
        <ZaborContext.Provider value={{ zabor, setZabor }}>
          {children}
        </ZaborContext.Provider>
      );
 }
 export const useZabor = () => {
    const context = useContext(ZaborContext);
    if (context === undefined) {
      throw new Error('useCounter must be used within a CounterProvider');
    }
    return context;
  };