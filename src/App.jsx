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
import MapPage from "./pages/MapPage";
import Stamp from "./pages/Stamp";
import MyPage from "./pages/MyPage";
import Modify from "./pages/Modify";
import ModifyPw from "./pages/ModifyPw";
import SocialLoginRedirect from "./pages/SocialLoginRedirect";

import { AuthProvider } from "./provider/AuthProvider";
import Qr from "./pages/Qr";

const App = () => {
  return (
    <AuthProvider>
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
          <Route path="/signup" element={<SignUp />} />
          <Route path="/qr" element={<Qr />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/stamp" element={<Stamp />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/modify" element={<Modify />} />
          <Route path="/modify/password" element={<ModifyPw />} />
          <Route path="/soaiclLogin" element={<ModifyPw />} />
          <Route
            path="/SocialLoginRedirect"
            element={<SocialLoginRedirect />}
          />
          <Route
            path="/auth/google/callback"
            element={<SocialLoginRedirect />}
          />
          <Route
            path="/auth/kakao/callback"
            element={<SocialLoginRedirect />}
          />
          <Route
            path="/auth/naver/callback"
            element={<SocialLoginRedirect />}
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
