import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './assets/styles/css/style.css';
import Home from './Home';
import SignUp from './Auth/SignUp';
import Login from './Auth/Login';
import Footer from './App/Footer';
import DashboardRoutes from './App/index';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={ <Home/> } />
        <Route exact path="/signup" element={ <SignUp/> } />
        <Route exact path="/login" element={ <Login /> } />
        <Route path="/dashboard/*" element={ <DashboardRoutes />} />
      </Routes>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
