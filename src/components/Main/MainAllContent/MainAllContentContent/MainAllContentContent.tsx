import React, { useEffect} from "react";
import { useState } from "react";
import Content from "./types";
import "./MainAllContentContent.css";
const BazeUrl="https://gist.githubusercontent.com/GeneralKFC/510f0715bddf79a4ba8426c536987603/raw/bf02ca6d1077543968be428892ef88ad0c8d5811/Gorilla&BananaJSON.json"
function MainAllContentContent(){
    const [Content,setContent]=useState<Content[]>([]);
    const [Fav,setFav]=useState<Content[]>(()=>{
        try{
            const stored = localStorage.getItem("Favourites");
            const parsed= stored ? JSON.parse(stored) : [];
            return Array.isArray(parsed)?parsed:[];
        }catch{
            return [];
        }

    });
    useEffect(()=>{
        const PostContent=async()=>{
            try {
                const response = await fetch(BazeUrl);
                const data=await response.json();
                setContent(data);
              } catch (err) {
                console.log(err);
              } finally {
                
              }
        }
        PostContent()
    },[])
    useEffect(()=>{
        localStorage.setItem("Favourites",JSON.stringify(Fav));
    },[Fav])
    const AddFav=(id:number)=>{
        const Favourites = Fav.some((item) => item.id === id);
        if (Favourites) return;
        const FavId = Content.find((item) => item.id === id);
        if (FavId) {
          setFav((prev) => [...prev, FavId]);
        }
    }
    const RemoveFav=(id:number)=>{
        const FavDel=Fav.filter((item)=>item.id!==id);
        setFav(FavDel);
    }
return(
    <div className="MainAllContentContent_container">
        {Content.map((item,index)=>(
            <div key={item.id} className="MainAllContentContent_content">
                {item.content==="img"?
                    (
                        <img className="MainAllContentContent_content_img" alt="Photo" src={item.url}></img>
                    ):(
                        <iframe
                        height="350"
                        width="85%"
                        referrerPolicy="strict-origin-when-cross-origin" 
                        src={item.url}>
                        </iframe>
                    )
                }
                    <div className="MainAllContentContent_Fav">
                        {Fav?.some((el)=>el.id===item.id) ?
                        (
                            <div className="FullHeart">
                                <box-icon name='heart' type='solid' ></box-icon>
                                <p onClick={()=>RemoveFav(item.id)}>Liked!</p> 
                            </div>
                        ):(
                            <box-icon  onClick={()=>AddFav(item.id)} name='heart' >
                            </box-icon>
                )}
                </div>
            </div>
        ))}

    </div>
)
}
export default MainAllContentContent