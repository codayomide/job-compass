import { Route, Routes } from 'react-router-dom';
import Dash from './Dash';
import Navin from './Navin';
import Dashboard from '../Dashboard/';
import CreateJobs from '../Listings/CreateJobs';
import JobsContainer from '../Listings/JobsContainer';
import JobApplyPage from '../Listings/JobApplyPage';

const DashboardRoutes = () => {
  return (
    <div id="dashboard">
      <Navin />
      <Dash />
      
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/listings/create' element={<CreateJobs />} />
        <Route path='/listings/apply' element={<JobApplyPage />} />
        <Route path='/listings' element={<JobsContainer />} />
      </Routes>
    </div>
  )
}

export default DashboardRoutes;