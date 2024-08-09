import React, { useEffect, useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { Checkbox, Button, FormControlLabel } from "@mui/material";
import { signUpSlicerFunc } from "../../redux/user/userSlice";
import styles from "./Signup.module.scss";
import Typewriter from "typewriter-effect";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routes";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [error, setError] = useState();
  const [success, setSuccess] = useState(false);

  const [userData, setUserData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    is_instructor: false,
  });
  useEffect(() => {
    setError(user.error);
  }, [user]);
  useEffect(() => {
    if (user.success) {
      setSuccess(true);
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    setUserData({
      ...userData,
      [id]: type === "checkbox" ? checked : value,
    });
  };
  const validateData = (userData) => {
    if (
      !userData.username ||
      !userData.first_name ||
      !userData.last_name ||
      !userData.email ||
      !userData.password
    ) {
      setError("All fields are required");
      return false;
    }
    if (!userData.email.includes("@") || !userData.email.includes(".com")) {
      setError("Please enter a valid email address");
      return false;
    }
    if (userData.password.length < 8) {
      setError("Password should be at least 8 characters long");
      return false;
    }
    return true;
  };

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
              strings: ["Signup", "to", "learning"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <TextField
          required={true}
          color="primary"
          id="username"
          label="User Name"
          value={userData.username}
          onChange={handleInputChange}
        />
        <TextField
          required={true}
          color="primary"
          id="first_name"
          label="First Name"
          value={userData.first_name}
          onChange={handleInputChange}
        />
        <TextField
          required={true}
          color="primary"
          id="last_name"
          label="Last Name"
          value={userData.last_name}
          onChange={handleInputChange}
        />
        <TextField
          required={true}
          color="primary"
          id="email"
          label="Email"
          type="email"
          value={userData.email}
          onChange={handleInputChange}
        />
        <TextField
          required={true}
          color="primary"
          id="password"
          label="Password"
          type="password"
          value={userData.password}
          onChange={handleInputChange}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "500px",
            justifyContent: "space-between",
          }}
        >
          <FormControlLabel
            control={
              <Checkbox
                id="is_instructor"
                checked={userData.is_instructor}
                onChange={handleInputChange}
              />
            }
            label="I am an instructor"
          />
          <div>
            <Button
              disabled={user.loading}
              color="primary"
              variant="contained"
              onClick={() => {
                debugger;
                if (validateData(userData)) {
                  dispatch(signUpSlicerFunc(userData));
                  success ? setTimeout(navigate(ROUTES.HOMEPAGE), 100) : none;
                }
              }}
            >
              Sign Up
            </Button>
          </div>
        </div>
        {error ? (
          <Alert variant="outlined" severity="error">
            {error == "Validation Error"
              ? "The username has been taken"
              : error}
          </Alert>
        ) : success == true ? (
          <Alert variant="outlined" severity="success">
            Account Created Successfully
          </Alert>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default Signup;
