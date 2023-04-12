import { FiSearch } from 'react-icons/fi';
import { BiCodeAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom'
const Home = () => {
  return ( 
    <div className="homepage--wrapper">
      <div className="homepage--wrapper__intro">
       <div className="text">
       <h1>
          Locate the job that fits who you are
        </h1>

        <div className="search_wrapper">
          <input type="search" placeholder="Find Job..."/>

          <span className="search">
            <FiSearch />
          </span>
        </div>
       </div>

       <div className="intro_img">
        
       </div>

      </div>

    {/* EMPLOYEE SECTION */}
      <div className="homepage--wrapper__employer">
        <div className="employer-img">
          
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
          
        </div>
      </div>
    </div>
   );
}
 
export default Home;