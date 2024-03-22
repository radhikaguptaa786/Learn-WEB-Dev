
import './App.css';
import {Routes, Route} from 'react-router-dom';
import About from './pages/About';
import Login from './pages/Login';
import Pricing from './pages/Pricing';
import Navigation from './components/Navigation';
import Profile from './pages/Profile';
import FreePricing from './pages/FreePricing';
import PremiumPricing from './pages/PremiumPricing';
import ForPremium from './pages/ForPremium';
import ProtectedRoutes from './components/ProtectedRoutes';
function App() {
  return (
    <div className="App">
      <h2 style={{backgroundColor:'lightblue'}}>Hello from App</h2>
      <Navigation />
      <Routes>
          {/* <Route path="/home" element={<h1>This is Home</h1>}></Route> */}
          <Route path="/about" element={<About />}></Route> 
          <Route path="/login" element={<Login />}></Route> 
          
          <Route path='/user/:userId' element={<Profile />}></Route>
          <Route path='/user/:userId/:projectId' element={<Login />}></Route>
          <Route element={<ProtectedRoutes />}>
             <Route path='prime' element={<ForPremium />}></Route>
          </Route>
          

          <Route path="/pricing" element={<Pricing />}>
                <Route path='free' element={<FreePricing />}></Route>
                <Route path='premium' element={<PremiumPricing />}></Route>
            </Route> 
      </Routes>
    </div>
  );
}

export default App;
