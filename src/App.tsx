import { Routes, Route } from "react-router";
import Login from "./Auth/Login.tsx";
import AuthLayout from "./Layout/AuthLayout.tsx";
import AuthProvider from "./Auth/AuthProvider.tsx";
import Protected from "./Protected.tsx";
import MainLayout from "./Layout/MainLayout.tsx";
import Register from "./Auth/Register.tsx";
import Board from "./Board.tsx";

import "./App.scss";

export default function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="login" element={<Login />}></Route>
            <Route path="register" element={<Register />}></Route>
          </Route>

          <Route element={<Protected />}>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Board />}></Route>
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}
