import React, { useEffect } from "react";
import { useState } from "react";
import "./MainAllContentContent.css";
const BazeUrl="https://gist.githubusercontent.com/GeneralKFC/510f0715bddf79a4ba8426c536987603/raw/bf02ca6d1077543968be428892ef88ad0c8d5811/Gorilla&BananaJSON.json"
function MainAllContentContent(){
    const [Content,setContent]=useState<any>([]);
    const [like,setLike]=useState<boolean>(false);
    const [Fav,setFav]=useState<[]>([]);
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
    const AddFav=(id)=>{
        
    }


return(
    <div className="MainAllContentContent_container">

        {Content.map((item,index)=>(
            <div key={item.id} className="MainAllContentContent_content">
                {item.content==="img"?(
                    <img className="MainAllContentContent_content_img" alt="Photo" src={item.url}></img>
                ):(
                    <video
                    height="350"
                    width="85%"
                    controls
                    src={item.url}>
                    </video>
                )}
                <div className="MainAllContentContent_Fav">
                    <box-icon onClick={()=>AddFav(item.id)} name='like' ></box-icon>
                    <box-icon onClick={()=>AddFav(item.id)} name='like' type='solid' ></box-icon>
                </div>
            </div>
        ))}

    </div>
)
}
export default MainAllContentContent