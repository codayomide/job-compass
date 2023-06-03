import { useEffect, useState } from 'react';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    }
  }, []);

  return (
    <div className="dashboardRoute">
      <div>
        <h2>Welcome back, {user?.name}!</h2>
        <p>Your ID is {user?.id}.</p>
      </div>
    </div>
  );
};

export default Dashboard;
