import { useState } from "react";

const User = (props) =>{
  const [count,Setcount] = useState(0);
    const {name, location, contact} = props;
    return (
        <div className="user-card">
         <h1>count: {count}</h1>
           <button onClick={()=>{
            Setcount(count+1);
           }}>increase count</button>
            <h2>Name: {name}  </h2>
            <h3>Location: {location}</h3>
            <h3>Contact: {contact}</h3>
        </div>
    )
}
export default User;