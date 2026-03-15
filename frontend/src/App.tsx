import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/auth/Login.tsx";
import ForgotPasswordPage from "./pages/auth/ForgotPassword.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
    </Routes>
  );
}

export default App;
