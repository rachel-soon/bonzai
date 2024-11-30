import { Routes, Route } from "react-router";
import Login from "./Auth/Login.tsx";
import AuthLayout from "./Auth/AuthLayout.tsx";
import "./App.scss";
import AuthProvider from "./Auth/AuthProvider.tsx";
import Protected from "./Protected.tsx";
import Dashboard from "./Dashboard.tsx";
import MainLayout from "./MainLayout.tsx";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="login" element={<Login />}></Route>
          </Route>

          <Route element={<Protected />}>
            <Route element={<MainLayout />}>
              <Route index path="dashboard" element={<Dashboard />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
