import{ Route, Routes} from 'react-router-dom'
import './assets/styles/css/style.css';
import Home from './Home';
import SignUp from './SignUp';
import Login from './Login';
import Footer from './Footer';
import Dashboard from './Dashboard';

function App() {

  return (
    <div className="App">
    <Routes>
      <Route exact path="/" element={ <Home/> } />
      <Route exact path="/register" element={ <SignUp/> } />
      <Route exact path="/login" element={ <Login /> } />
      <Route exact path="/dashboard" element={ <Dashboard />} />
    </Routes>

      <Footer />
    </div>
  );
}

export default App;
