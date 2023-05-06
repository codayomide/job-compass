import { Link } from 'react-router-dom';
import Logo from './assets/logo.png';
import { BsSearch } from 'react-icons/bs';
import PrivateRoute from './PrivateRoute';
import Dashboard from './Dashboard';

function Navbar () {
  const handleToggle = () => {
    console.log("ITs working")
  }
  return(
    // <nav className="nav--wrapper">
    //     <div className="menu-btn" onClick={handleToggle}>
    //             <span className="menu-btn__bar"></span>
    //     </div>

    //     <div className="nav--wrapper__logo">
    //       <Link to="/" ><img src={Logo} alt="" /></Link>
          
    //       <div className="nav__desktop">
    //         <ul className="links__desktop--left">
    //           <li>Categories</li>
    //           <li>Find Job</li>
    //           <li> <Link to="/Blog" className="link" >Blog</Link> </li>
              
    //         </ul>
            
    //         <ul className="links__desktop--right">
    //           <div> <input type="search" placeholder="Search..." > 
    //           </input>
    //           <button><BsSearch className="search"/></button> </div>
    //           <li> <PrivateRoute path="/dashboard" component={Dashboard} /> </li>
    //           <li> <Link to="/register" className="link" > Sign Up </Link> </li>
    //           <li> <Link to="/login" className="link"> Login </Link> </li>
    //         </ul>
    //       </div>
    //     </div>

    //     {/* <div className="nav--wrapper__mobile">
    //       <ul className="links_mobile">
    //         <li>Categories</li>
    //         <li>Find Job</li>
    //         <li> <Link to="/Blog" className="link" >Blog</Link> </li>
    //         <li> <Link to="/SignUp" className="link" >Sign Up</Link> </li>
    //       </ul>
    //     </div> */}
    //   </nav>

    <div className="nav-bar">
      <nav className="mnav--wrapper">
            <div className="mnav--wrapper__left">
              <div className="burger">
                <span id="bar-1"></span>
                <span id="bar-2"></span>
                <span id="bar-3"></span>
              </div>

              <div className="logo">
                <img src={Logo} alt="company-logo" />
              </div>
            </div>

            {/* FOR CONTENT ON THE MENU */}

            <div className="open">
              <ul>
                
              </ul>
            </div>

            {/* SIGNUP AND LOGIN LINKS  */}

            <div className="mnav--wrapper__right">
              <Link to="/register" className="link" > Sign Up </Link>
              <Link to="/login" className="link" > Login </Link>
            </div>
      </nav>
    </div>
  )
}

export default Navbar