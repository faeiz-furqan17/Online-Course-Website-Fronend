import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/profile");
  };
  return (
    <div>
      I am Login
      <button onClick={() => handleLogin}>Login</button>
    </div>
  );
}

export default Login;
