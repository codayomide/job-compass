import { BiCodeAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import img1 from "./assets/images/3.jpg";
import img2 from "./assets/images/4.jpg";
import img3 from "./assets/images/7.png";


const Home = () => {
  return ( 
    <div className="homepage--wrapper">
      <div className="homepage--wrapper__intro">
       <div className="text">
       <h1>
          Looking for the right business partner?
       </h1>
       <p>
          Job compass will direct you to find your next business partner who will take your business to the next level...
       </p>

       <Link to="/SignUp" className="introBtn_link">Get Started</Link>

        
       </div>

       <div className="intro_img">
        <img src={img3} alt="" />
       </div>

      </div>

    {/* EMPLOYEE SECTION */}
      <div className="homepage--wrapper__employer">
        <div className="employer-img">
          <img src={img1} alt="Img..." />
        </div>

        <div className="text">
        <p>For Employer</p>
        <h1>
          Signup to find potential employees interested in what you do...
        </h1>
        <Link to="/SignUp" className="btn_link">Find Employee</Link>
        </div>
      </div>


      {/* CATEGORIES SECTION */}
      <div className="homepage--wrapper__categories">
        <h1>Find Jobs By Category...</h1>

        <div className="categories_wrapper">
          <div className="category">
            <BiCodeAlt className='icon' />
            <div>
              Developement & IT
            </div>
          </div>
          <div className="category">
            <BiCodeAlt className='icon' />
            <div>
              Developement & IT
            </div>
          </div>
          <div className="category">
            <BiCodeAlt className='icon' />
            <div>
              Developement & IT
            </div>
          </div>
          <div className="category">
            <BiCodeAlt className='icon' />
            <div>
              Developement & IT
            </div>
          </div>
          <div className="category">
            <BiCodeAlt className='icon' />
            <div>
              Developement & IT
            </div>
          </div>
          <div className="category">
            <BiCodeAlt className='icon' />
            <div>
              Developement & IT
            </div>
          </div>
          <div className="category">
            <BiCodeAlt className='icon' />
            <div>
              Developement & IT
            </div>
          </div>
          <div className="category">
            <BiCodeAlt className='icon' />
            <div>
              Developement & IT
            </div>
          </div>
        </div>
      </div>

      {/* EMPLOYER SECTION */}
      <div className="homepage--wrapper__employee">
        <div className="text">
        <p>For Employee</p>
        <h1>
          Signup to find potential employers looking forward to work with you...
        </h1>
        <Link to="/SignUp" className="btn_link">Find Employee</Link>
        </div>

        <div className="employee-img">
        <img src={img2} alt="Img..." />
        </div>
      </div>
    </div>
   );
}
 
export default Home;