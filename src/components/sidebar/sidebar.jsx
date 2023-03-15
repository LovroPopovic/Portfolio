import React from 'react'
import "./sidebar.css"
import Logo from "../../assets/logo.svg"

const Sidebar = () => {
  return (
    <aside className='aside'>
      <a href='#home' className='nav_logo'>
        <img src={Logo} alt=""/>
      </a>
      <nav className='nav'>
        <div className='nav_menu'>
          <ul className='nav_list'>
            <li>
              <a href="#home" className='nav_link'>
              <i className="icon-home"></i>
              </a>
            </li>
            <li>
              <a href="#about" className='nav_link'>
              <i className="icon-user"></i>
              </a>
            </li>
            <li>
              <a href="#reusme" className='nav_link'>
              <i className="icon-graduation"></i>
              </a>
            </li>
            <li>
              <a href="#services" className='nav_link'>
              <i className="icon-briefcase"></i>
              </a>
            </li>
            <li>
              <a href="#portfolio" className='nav_link'>
              <i className="icon-layers"></i>
              </a>
            </li>
            <li>
              <a href="#comments" className='nav_link'>
              <i className="icon-bubble"></i>
              </a>
            </li>
            <li>
              <a href="#contact" className='nav_link'>
              <i className="icon-notebook"></i>
              </a>
            </li>
            
            
          </ul>

        </div>
      </nav>
      <div className="nav_footer">
        <span className="copyright">&copy; 2023</span>

      </div>

    </aside>
  )
}

export default Sidebar