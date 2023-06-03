import { FaRegUserCircle } from 'react-icons/fa';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Navin() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    }
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login', { replace: true });
  };

  return (
    <nav className="navin--wrapper">
      <div className="logo">
        <h1>Jolt</h1>
      </div>

      <div className="navin--search">
        <input type="search" placeholder="Search anything..." />
        <div className="searchIcon">
          <FiSearch />
        </div>
      </div>

      <div className="view--actions">
        <span>View Actions</span>
      </div>

      <div className="user" onClick={toggleDropdown}>
        <div className="__info">
          <FaRegUserCircle className="user-logo" />
          <p style={{ paddingLeft: '.5rem' }}>Hi, {user?.name}</p>
          {showDropdown ? (
            <AiOutlineArrowUp className="menu_d_icon" style={{ paddingLeft: '.5rem' }} />
          ) : (
            <AiOutlineArrowDown className="menu_d_icon" style={{ paddingLeft: '.5rem' }} />
          )}
        </div>

        <div className={`dropdown ${showDropdown ? 'show' : ''}`}>
          <a href="" className="dropdown-link">My Account</a>
          <a href="" className="dropdown-link">Settings</a>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </nav>
  );
}

export default Navin;
