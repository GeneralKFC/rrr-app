import React, { createContext, useState,useContext, useEffect } from "react";
interface DoubleContextType{
    double:boolean;
    setDouble:(value:boolean)=>void;
}



const DoubleContext=createContext<DoubleContextType | undefined>(undefined);
 export const DoubleProvider: React.FC<{children:React.ReactNode}>=({children})=>{
    const [double,setDouble]=useState<boolean>(()=>{
        const saved=localStorage.getItem("ByiedR1");
        return saved?JSON.parse(saved):"";
    });
    useEffect(()=>{
        localStorage.setItem("ByiedR1",JSON.stringify(double));
    },[double]);

      return (
        <DoubleContext.Provider value={{ double, setDouble }}>
          {children}
        </DoubleContext.Provider>
      );
 }
 export const useDouble = () => {
    const context = useContext(DoubleContext);
    if (context === undefined) {
      throw new Error('useCounter must be used within a CounterProvider');
    }
    return context;
  };