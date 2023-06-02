// import { Link } from 'react-router-dom';
// import Logo from './assets/logo.png';
// import { BsSearch } from 'react-icons/bs';
// import PrivateRoute from './PrivateRoute';
// import Dashboard from './Dashboard';

import { useState } from 'react';

function Navbar () {
  
  const [menu, setMenu] = useState('close-menu');

  const toggleMenu = () => {
    setMenu(menu === 'open-menu' ? 'close-menu' : 'open-menu');
  }

  return(
    <div className="nav--wrapper">
      <div className="nav--wrapper__left">
        <div className="logo">
          <h1>Jolt</h1>
        </div>
        <div className="categories">
          Categories
        </div>
      </div>
      <div className="nav--wrapper__right">
        <div className="login">
          <button className="btn">
            Login
          </button>
        </div>
        <div className="signup">
          <button className="btn">
            Signup
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar