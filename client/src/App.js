import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import TopNav from './components/TopNav';
import { Toaster } from "react-hot-toast";

// Context
import { AuthProvider } from "../src/context/auth";



import './light.css'

import RegisterComplaint from './pages/RegisterComplaint'
function App() {
  return (
    <AuthProvider>
      <TopNav />
      <Toaster />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/signup" element={<Signup/>} />
        <Route exact path="/complaint" element={<RegisterComplaint/>} />
    </Routes>
    </AuthProvider>
  );
}

export default App;
