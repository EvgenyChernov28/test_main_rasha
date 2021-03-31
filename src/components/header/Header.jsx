import React from 'react';
import logo from '../../img/logo.svg';
import './Header.css';
import { NavLink } from 'react-router-dom'

const Header = () =>{
    return (
        <nav className="navbar">
            <div className="navbar-items">
              <a className="" href="#"><img src={logo} alt="logo"/></a>
              
              <div className="navbar-items-link" id="">
               
                    <NavLink to="/bloggers" className="nav-link" href="#">Блогеры</NavLink>
                  
                    <a className="nav-link" href="#">Кейсы</a>
                  
                    <a className="nav-link" href="#">exit agency</a>
                  
                    <a className="nav-link" href="#">Контакты</a>
                  
              </div>

              <div>en / ru</div>
            </div>
          </nav>
    )
}

export default Header;
