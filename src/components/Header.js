import { useState } from "react";
import {LOGO_URL} from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
//Header of APP = Navabr + logo
const Header = () => {
  const [Login, setLogin]=useState("login");
  const onlinestatus = useOnlineStatus();

    return (
      <div className="flex justify-betwee">
        <div className="logo-container">
        <img
          className="w-60"
          src={LOGO_URL}
        />
        </div>
        <div className="flex items-center">z
          <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlinestatus? "✅": "❌"}</li>
            <li  className="px-4"><Link to='/'>Home</Link></li>
            <li  className="px-4"><Link to='/about'>About Us</Link></li>
            <li  className="px-4"><Link to='/contact'>Contact Us </Link></li>
            <li  className="px-4"><Link to='/cart'>Cart</Link> </li>
            <li  className="px-4"><Link to='/grocery'>Grocery</Link> </li>
            <button className="login px-4" onClick={()=>{
            Login==="login" ?  setLogin("logout") : setLogin("login");
              //console.log('Login done')
            }}>{Login}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;
