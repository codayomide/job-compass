import { Route, Routes } from 'react-router-dom';
import Dash from './Dash';
import Navin from './Navin';
import Dashboard from '../Dashboard';
import CreateJobs from '../Listings/CreateJobs';
import JobsContainer from '../Listings/JobsContainer';
import JobApplyPage from '../Listings/JobApplyPage';

const DashboardRoutes = () => {
  return (
    <div id="app">
      <div id="nav">
        <Navin />
      </div>
      <div id="body">
        <div id="side">
          <Dash />
        </div>
        <div id="main">
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/listings' element={<JobsContainer />} />
            <Route path='/listings/create' element={<CreateJobs />} />
            <Route path='/listings/apply' element={<JobApplyPage />} />
          </Routes>
        </div>
      </div>
      <div id="footer">
        {/* Add your footer component or content here */}
      </div>
    </div>
  );
}

export default DashboardRoutes;