import{ Route, Routes, Link} from 'react-router-dom'
import './assets/styles/css/style.css';
import Logo from './assets/logo.png';
import Home from './Home';
import SignUp from './SignUp';

function App() {

  const handleToggle = () => {
    console.log("ITs working")
  }

  return (
    <div className="App">

      <nav className="nav--wrapper">
        <div className="nav--wrapper__logo">
          <div className="menu-btn" onClick={handleToggle}>
              <span className="menu-btn__bar"></span>
          </div>
          <Link to="/" ><img src={Logo} alt="" /></Link>
        </div>

        <ul className="nav--wrapper__links mobile">
          <li className="link">Categories</li>
          <li className="link">Find Job</li>
          <li className="link"> <Link to="/Blog" >Blog</Link> </li>
          <li className="link"> <Link to="/SignUp" >Sign Up</Link> </li>
        </ul>
      </nav>
      
    <Routes>
      <Route exact path="/" element={ <Home/> } />
      <Route exact path="/SignUp" element={ <SignUp/> } />
    </Routes>
    </div>
  );
}

export default App;
