//import React from 'react';
import { Link } from 'react-router-dom';

//ICONS
import {LuBox, LuUser, LuMessageSquare, LuShoppingBag, LuShoppingCart, LuLogOut} from 'react-icons/lu';


const Sidebar = () => {
  const SIDEBAR_LINKS =[
    {id:1, path: "/", name:"Dashboard", icon:<LuBox />},
    {id:2, path:"/categories", name:"Categories", icon:<LuShoppingBag/>},
    {id:3, path:"/messages", name:"Messages", icon:<LuMessageSquare/>},
    {id:4, path:"/shopping-cart", name:"Shopping Cart", icon:<LuShoppingCart />},
    {id:5, path:"/profile", name:"Profile", icon:<LuUser />},
    {id:6, path:"/logout", name:"LogOut", icon:<LuLogOut />},
  ];

  return (
    <div className="text-blue-700 p-2 mt-1">
      {/* LOGO */}
    <div>
      <img src="/_1e6e3e84-f17f-44a5-b1c1-e96bf187efb5.jpeg" alt="" className="w-28 hidden md:flex"/>
      <img src="/menu-regular-60.png" alt="" className="w-8 flex md:hidden"/>
    </div>


     {/* NAVIGATION LINKS */}
     <ul>
      {
        SIDEBAR_LINKS.map((link, index) => (
          <li key={index} className="mt-5">
            <Link >
              <span>{link.icon}</span>
              <span>{link.name}</span>
            </Link>
          </li>
        ))
      }
     </ul>
    
    <div className="mt-3 text-black">
        <p>
          <span>?</span> <span>Need Help</span>
        </p>
    </div>

    </div>
  )
}

export default Sidebar;