import {MdSpaceDashboard} from 'react-icons/md';
import {CgPlayListCheck} from 'react-icons/cg';
import {FaSuitcase} from 'react-icons/fa';
import {GrMoney} from 'react-icons/gr';
import {GrUpdate} from 'react-icons/gr';
import {BsListColumnsReverse} from 'react-icons/bs';

function Dash () {

  return(
    <div className="dash--wrapper">
        <ul className="dash--items">
          <li className="item"> <MdSpaceDashboard style={{marginRight: "2rem"}} /> Dashboard</li>
          <li className="item"> <BsListColumnsReverse style={{marginRight: "2rem"}}/>My Listings</li>
          <li className="item"> <FaSuitcase style={{marginRight: "2rem"}} />My Application</li>
          <li className="item"> <GrMoney style={{marginRight: "2rem"}}/> My Finances</li>
          <li className="item"> <GrUpdate style={{marginRight: "2rem"}}/> My Updates</li>
          <li className="item"> <CgPlayListCheck style={{marginRight: "1rem", fontSize: "2rem"}}/> Saved Listings</li>
        </ul>

      <div className="create--job">
        <button className="create--job__btn">
          CREATE JOB
        </button>
      </div>
    </div>
  )
}

export default Dash;