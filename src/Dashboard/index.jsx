import { useEffect, useState } from 'react';
import { Routes, useNavigate } from 'react-router-dom';
// import Navin from '../App/Navin';
// import Dash from '../App/Dash';
// import Jobcards from '../App/Cards/Jobcards';
// import JobsContainer from '../Listings/JobsContainer';

const Dashboard = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setToken(null);
    navigate('/login', {replace: true});
  }


  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');

        const res = await fetch('https://drab-tan-chimpanzee-hose.cyclic.app/api/protected', {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          }
        })
        .then((response) => response.json())
        .then((data) => {
          setUserData(data.data);
          setLoading(false);
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="dashboardRoute">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>Welcome back, {userData.name}!</h2>
          <p>Your ID is {userData.id}.</p>
        </div>
      )}

      <button  className="submit-btn" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
