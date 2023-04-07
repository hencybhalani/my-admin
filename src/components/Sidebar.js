import React, { useState } from 'react'
import './Sidebar.css'
import Logo from '../images/logo1.png'
import { SidebarData } from '../Data/Data'
import {UilSignOutAlt} from '@iconscout/react-unicons'

function Sidebar() {
   const[selected,SetSelected] = useState(0)

  return (
    <div className='Sidebar'>
     {/*logo*/}
     <div className="logo">
        <img src={Logo} alt=""  />
        <span>
            Sh<span>o</span>ps
        </span>
     </div>
     {/* menu */}
     <div className="menu ">
      { SidebarData.map((item,index)=>{
       return(
       <div className={selected===index?'menuItem active': 'menuItem '} 
       key={index} 
       onClick={()=>SetSelected(index)} >
        
            <item.icon/> 
            <span>
              {item.heading}
            </span>
            </div> 
          )
      }) }
      
      <div className="menuItem">
        <div>
        <UilSignOutAlt/>
        </div>
        </div>
     </div>
    </div>
  )
}

export default Sidebar
