import { useState, useEffect, createContext } from "react";
import axios from "axios";

const API="http://localhost:8000/api" 
const NEXT_PUBLIC_API="http://localhost:8000/api"

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });
  const API="http://localhost:8000/api" 
  const NEXT_PUBLIC_API="http://localhost:8000/api"
//   config axios
  // set axios headers
  axios.defaults.baseURL = "http://localhost:8000/api" ;
  axios.defaults.headers.common["Authorization"] = `Bearer ${auth.token}`;


  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setAuth(JSON.parse(localStorage.getItem("auth")));
    }
  }, []);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
