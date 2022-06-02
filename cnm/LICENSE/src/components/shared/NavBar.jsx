import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import { SidebarData } from './SidebarData'
import "./navbar.css"

function NavBar() {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => {setSidebar(!sidebar)}

  return (
    <>
      <div className="Navbar">
          <FaBars size="3%" onClick={showSidebar}><Link to="#" ></Link></FaBars>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu '}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
                <AiOutlineClose onClick={showSidebar}/>
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return(
              <li key={index} className={item.cName}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}

export default NavBar
