import Logo from './assets/logo.png';
import { BiUser } from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs';


function Navin () {
 
  return(
    <nav className="navin--wrapper">
      <div className="burger">
                <span id="bar-1"></span>
                <span id="bar-2"></span>
                <span id="bar-3"></span>
              </div>
      <div className="logo">
        <img src={Logo} alt="" />
      </div>

      <div className="content">
        <BiUser className='icon'/>
        <BsArrowRight className='icon' />
      </div>
    </nav>
  )
}

export default Navin;