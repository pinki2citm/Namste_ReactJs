import { useEffect, useState } from "react";

const useOnlineStatus =()=>{
   const[onlineStatus,setOnlinestatus] =useState(true);
   useEffect(()=>{
    window.addEventListener("online", () => {
        setOnlinestatus(true);
    });
          
    window.addEventListener("offline", () => {
        setOnlinestatus(false);
    });
},[])
//boolean value
return onlineStatus;
}
export default useOnlineStatus;