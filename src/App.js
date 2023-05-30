import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './assets/styles/css/style.css';
import Home from './Home';
import SignUp from './SignUp';
import Login from './Login';
import Footer from './Footer';
import DashboardRoutes from './DashboardRoutes';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={ <Home/> } />
        <Route exact path="/register" element={ <SignUp/> } />
        <Route exact path="/login" element={ <Login /> } />
        <Route path="/dashboard/*" element={ <DashboardRoutes />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
