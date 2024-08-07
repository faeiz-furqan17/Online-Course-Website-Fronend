import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { loginSlicerFunc } from "../../redux/user/userSlice";
import styles from "./Login.module.scss";
import PersonIcon from "@mui/icons-material/Person";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

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
    <>
      <div className={styles.mainContainer}>
        <PersonIcon
          sx={{
            fontSize: 120,
            color: "primary.main",
          }}
        />

        <h1>
          <Typewriter
            options={{
              strings: ["Login"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>

        <TextField
          id="username"
          label="Username"
          value={userData.username}
          onChange={handleInputChange}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          value={userData.password}
          onChange={handleInputChange}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleSubmit()}
        >
          login
        </Button>
        <p>
          Dont have an account yet ?{" "}
          <Link
            to={"/signup"}
            style={{
              color: "#ff652f",
            }}
          >
            Signup
          </Link>
        </p>
      </div>
    </>
  );
}

export default Login;
