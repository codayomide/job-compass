import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { FiTwitter } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';


function Footer() {
  return(
    <div className="footer--wrapper">

      <div className="footer--wrapper__socials">
        <h2>Follow Us</h2>
        
        <div className="socials_wrapper">
        <div className="social">
            <FaFacebookF />
          </div>
          <div className="social">
            <BsInstagram />
          </div>
          <div className="social">
            <FiTwitter />
          </div>
          <div className="social">
            <FaLinkedinIn />
          </div>
        </div>
      </div>
      
      <div className="footer--wrapper__attribution">
        <p>
          this website was created by theLogicLegends <br />
          © 2023 Job Compass. All rights reserved
        </p>
      </div>
    </div>
  )
}

export default Footer;