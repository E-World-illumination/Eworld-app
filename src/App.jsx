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
import ModifyDelete from "./pages/ModifyDelete";
import { useAuth } from "./provider/AuthProvider";

import { AuthProvider } from "./provider/AuthProvider";
import Qr from "./pages/Qr";

import ProtectedRoute from "./components/ProtectedRoute";
import ForceLogout from "./pages/ForceLogout";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/qr"
            element={
              <ProtectedRoute alertMessage="로그인 후 이용해주세요.">
                <Qr />
              </ProtectedRoute>
            }
          />
          <Route path="/map" element={<MapPage />} />
          <Route
            path="/stamp"
            element={
              <ProtectedRoute alertMessage="로그인 후 이용해주세요.">
                <Stamp />
              </ProtectedRoute>
            }
          />
          <Route
            path="/mypage"
            element={
              <ProtectedRoute alertMessage="로그인 후 이용해주세요.">
                <MyPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/modify"
            element={
              <ProtectedRoute>
                <Modify />
              </ProtectedRoute>
            }
          />
          <Route
            path="/modify/password"
            element={
              <ProtectedRoute>
                <ModifyPw />
              </ProtectedRoute>
            }
          />
          <Route
            path="/modify/delete"
            element={
              <ProtectedRoute>
                <ModifyDelete />
              </ProtectedRoute>
            }
          />
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
          <Route path="/forcelogout" element={<ForceLogout />}></Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
