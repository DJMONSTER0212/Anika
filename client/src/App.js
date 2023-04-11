import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
function App() {
  return (
    <div className="App">
    <h1>Hello</h1>
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/signup" element={<Signup/>} />
        {/* <Route exact path="/complaint" element={<ComplaintForm />} /> */}
    </Routes>
    </div>
  );
}

export default App;
