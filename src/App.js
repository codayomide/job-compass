import{ Route, Routes, Link} from 'react-router-dom'
import './assets/styles/css/style.css';
import { BsSearch } from 'react-icons/bs'
import Logo from './assets/logo.png';
import Home from './Home';
import SignUp from './SignUp';
import Login from './Login';
import Footer from './Footer';

function App() {

  const handleToggle = () => {
    console.log("ITs working")
  }

  return (
    <div className="App">

      <nav className="nav--wrapper">

        <div className="menu-btn" onClick={handleToggle}>
                <span className="menu-btn__bar"></span>
        </div>

        <div className="nav--wrapper__logo">
          <Link to="/" ><img src={Logo} alt="" /></Link>
          
          <div className="nav__desktop">
            <ul className="links__desktop--left">
              <li>Categories</li>
              <li>Find Job</li>
              <li> <Link to="/Blog" className="link" >Blog</Link> </li>
              
            </ul>
            
            <ul className="links__desktop--right">
              <div> <input type="search" placeholder="Search..." > 
              </input>
              <button><BsSearch className="search"/></button> </div>
              <li> <Link to="/SignUp" className="link" > Sign Up </Link> </li>
              <li> <Link to="/Login" className="link"> Login </Link> </li>

            </ul>

          </div>
          
        </div>

        {/* <div className="nav--wrapper__mobile">
          <ul className="links_mobile">
            <li>Categories</li>
            <li>Find Job</li>
            <li> <Link to="/Blog" className="link" >Blog</Link> </li>
            <li> <Link to="/SignUp" className="link" >Sign Up</Link> </li>
          </ul>
        </div> */}
      </nav>
      
    <Routes>
      <Route exact path="/" element={ <Home/> } />
      <Route exact path="/SignUp" element={ <SignUp/> } />
      <Route exact path="/Login" element={ <Login /> } />
    </Routes>

      <Footer />
    </div>
  );
}

export default App;
