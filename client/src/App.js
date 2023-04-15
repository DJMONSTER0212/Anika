import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import TopNav from './components/TopNav';
import ForgotPassword from './pages/ForgotPassword';
import { Toaster } from "react-hot-toast";

// Context
import { AuthProvider } from "../src/context/auth";



import './light.css'

import RegisterComplaint from './pages/RegisterComplaint'
import Ai_chat from './pages/Ai_chat';
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
        <Route exact path="/forgot-password" element={<ForgotPassword/>} />
        <Route exact path="/complaint" element={<RegisterComplaint/>} />
        <Route exact path="/aichat" element={<Ai_chat/>} />
    </Routes>
    </AuthProvider>
  );
}

export default App;
