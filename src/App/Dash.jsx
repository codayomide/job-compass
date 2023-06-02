import {MdSpaceDashboard} from 'react-icons/md';
import {CgPlayListCheck} from 'react-icons/cg';
import {FaSuitcase} from 'react-icons/fa';
import {GrMoney} from 'react-icons/gr';
import {GrUpdate} from 'react-icons/gr';
import {BsListColumnsReverse} from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Dash () {

  return(
    <nav className="dash--wrapper">
      <div className="dash--items">
        <Link className="item" to={`/dashboard`}> <MdSpaceDashboard style={{marginRight: "2rem"}} /> Dashboard</Link>
        <Link className="item" to={`/dashboard/listings`}> <BsListColumnsReverse style={{marginRight: "2rem"}}/>My Listings</Link>
        <Link className="item" to-={`/dashboard`}> <FaSuitcase style={{marginRight: "2rem"}} />My Applications</Link>
        <Link className="item" to-={`/dashboard`}> <GrMoney style={{marginRight: "2rem"}}/> My Finances</Link>
        <Link className="item" to-={`/dashboard`}> <GrUpdate style={{marginRight: "2rem"}}/> My Updates</Link>
        <Link className="item" to-={`/dashboard`}> <CgPlayListCheck style={{marginRight: "1rem", fontSize: "2rem"}}/> Saved Listings</Link>
      </div>

      <div className="create--job">
        <button className="create--job__btn">CREATE JOB</button>
      </div>
    </nav>
  )
}

export default Dash;