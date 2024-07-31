import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { loginSlicerFunc } from "../../redux/user/userSlice";

import Button from "@mui/material/Button";
import { useEffect } from "react";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleLogin = () => {
    navigate("/profile");
  };
  // Add form validation and server-side validation here
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.id]: e.target.value });
  };
  // Implement server-side login logic here

  const handleSubmit = (e) => {
    debugger;
    dispatch(loginSlicerFunc(userData));
  };
  useEffect(() => {
    if (user.data.token != undefined) {
      handleLogin();
    } else if (user.error) {
      console.error("Error in login:", user.error);
      alert(user.error);
      setUserData({ ...userData, password: "" });
      return;
    }
  }, [user.data, user.error]);

  return (
    <div>
      <TextField
        id="username"
        label="username"
        value={userData.username}
        onChange={handleInputChange}
      />
      <TextField
        id="password"
        label="password"
        type="password"
        value={userData.password}
        onChange={handleInputChange}
      />
      <Button variant="text" color="secondary" onClick={() => handleSubmit()}>
        login
      </Button>
      <Button
        variant="text"
        color="primary"
        onClick={() => {
          console.log(user.data.token);
        }}
      >
        see details now
      </Button>
    </div>
  );
}

export default Login;
