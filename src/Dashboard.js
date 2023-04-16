import { useEffect, useState } from 'react';

const Dashboard = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

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
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>Welcome back, {userData.name}!</h2>
          <p>Your ID is {userData.id}.</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
