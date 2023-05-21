import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navin from './Navin';
import Dash from './Dash';
import Jobcards from './Jobcards';

const Dashboard = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [toekn, setToken] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
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
    <div id="login-page">
      <Navin />
      <Dash />
      <main id="jobs-container">
        <h1 id="jobs-container__header">Jobs</h1>
        <Jobcards />
      </main>
      {/* {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>Welcome back, {userData.name}!</h2>
          <p>Your ID is {userData.id}.</p>
        </div>
      )}

      <button  className="submit-btn" onClick={handleLogout}>Logout</button> */}
    </div>
  );
};

export default Dashboard;
