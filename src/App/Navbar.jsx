import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { BsSearch } from 'react-icons/bs';
import Dashboard from '../Dashboard';

import { useState } from 'react';

function Navbar () {
  
  const [menu, setMenu] = useState('close-menu');

  const toggleMenu = () => {
    setMenu(menu === 'open-menu' ? 'close-menu' : 'open-menu');
  }

  return(
    <div className="nav-bar">
      <nav className="mnav--wrapper">
            <div className="mnav--wrapper__left">
              <div className="burger" onClick={toggleMenu}>
                <span id="bar-1"></span>
                <span id="bar-2"></span>
                <span id="bar-3"></span>
              </div>

              <div className="logo">
                <img src={Logo} alt="company-logo" />
              </div>
            </div>

            {/* FOR CONTENT ON THE MENU */}

            <div className={menu}>
              <ul>
                
              </ul>
            </div>

            {/* SIGNUP AND LOGIN LINKS  */}

            <div className="mnav--wrapper__right">
              <Link to="/register" className="link" > Sign Up </Link>
              <Link to="/login" className="link" > Login </Link>
            </div>
      </nav>

      <nav className="dnav--wrapper">
        <div className="dnav--wrapper__left">
          <div className="logo">
                <img src={Logo} alt="company-logo" />
          </div>
          <div className="links">
            <Link to="/" className="link">Categories</Link>
            <Link to="/" className="link">Blog</Link>
          </div>
        </div>

        <div className="dnav--wrapper__right">
          <input type="search" />

          <div className="links">
            <Link to="/login" className="link">Login</Link>
            <Link to="/signup" className="link">Signup</Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar