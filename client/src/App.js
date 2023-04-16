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
import Sos from './components/Sos';
import ChatSupport from './pages/ChatSupport';
import Admin from './pages/Admin';
import PendingComplaints from './pages/PendingComplaints';
import Complaints from './pages/Complaints';
import ComplaintTrack from './pages/ComplaintTrack';
import UserDash from './pages/UserDash';
function App() {
  return (
    <AuthProvider>
      <TopNav />
      <Toaster />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<UserDash />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/signup" element={<Signup/>} />
        <Route exact path="/forgot-password" element={<ForgotPassword/>} />
        <Route exact path="/complaint" element={<RegisterComplaint/>} />
        <Route exact path="/aichat" element={<Ai_chat/>} />
        <Route exact path="/sos" element={<Sos/>} />
        <Route exact path="/chat-support" element={<ChatSupport/>} />
        <Route exact path="/admin" element={<Admin/>} />
        <Route exact path="/admin/complaints/pending" element={<PendingComplaints/>} />
        <Route exact path="/admin/complaints" element={<Complaints/>} />

        
        <Route exact path="/complaint_track" element={<ComplaintTrack/>} />
    </Routes>
    </AuthProvider>
  );
}

export default App;
