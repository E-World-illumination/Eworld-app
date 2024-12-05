import React, { useState, createContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Map from "./pages/Map";
import Stamp from "./pages/Stamp";
import MyPage from "./pages/MyPage";

// Context for user authentication
export const AuthContext = createContext();

const App = () => {
  const [user, setUser] = useState(null); // User state to manage login
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const login = (userData) => {
    setUser(userData); // Set user data upon login
    localStorage.setItem("user", JSON.stringify(userData)); // Save to localStorage
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user"); // Remove from localStorage
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isLoading, setIsLoading }}
    >
      {/*<Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/home"
            element={user ? <Home /> : <Navigate to="/home" />}
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/map" element={user ? <Map /> : <Navigate to="/" />} />
          <Route
            path="/stamp"
            element={user ? <Stamp /> : <Navigate to="/login" />}
          />
          <Route
            path="/mypage"
            element={user ? <MyPage /> : <Navigate to="/login" />}
          />
        </Routes>
      </Router>
      */}

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/map" element={<Map />} />
          <Route path="/stamp" element={<Stamp />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
