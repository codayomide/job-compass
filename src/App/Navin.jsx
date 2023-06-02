import { FaRegUserCircle } from 'react-icons/fa';
import { AiOutlineDown } from 'react-icons/ai';
import { useState } from 'react';

function Navin () {
 
  const [drop, setDrop] = useState("hide");

  const show = () => {
    setDrop(drop === "hide" ? "dropdown" : "hide" );
  }


  return(
    <nav className="navin--wrapper">
      <div className="logo">
        <h1>Jolt</h1>
      </div>

      <div className="navin--search">
        <input type="search" placeholder="Search anything..."/>
      </div>

      <div className="navin--links">
        <div className="view--actions">
          View Actions
        </div>

        <div className="user--info" onClick={show}>
          <FaRegUserCircle className="user-logo"/>

          <p style={{marginLeft: ".5rem"}}> Hi, Joshua</p>

          <AiOutlineDown style={{marginLeft: ".5rem"}} />

          <div className={drop}>
              <ul className="dropdown-content">
                <li>My Account</li>
                <li>My finance</li>
                <li>My Update</li>
                <button>Logout</button>
              </ul>
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navin;