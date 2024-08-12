import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { loginSlicerFunc } from "../../redux/user/userSlice";
import styles from "./Login.module.scss";
import PersonIcon from "@mui/icons-material/Person";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const redirectLogin = () => {
    navigate("/profile");
  };

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    dispatch(loginSlicerFunc(userData));
  };

  useEffect(() => {
    if (user.data.token != undefined) {
      setSnackbarMessage("Login successful!");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
      redirectLogin();
    } else if (user.error) {
      setSnackbarMessage(`Error: ${user.error}`);
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      setUserData({ ...userData, password: "" });
    }
  }, [user.data, user.error]);

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
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
          disabled={user.loading || user.success}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          value={userData.password}
          onChange={handleInputChange}
          disabled={user.loading || user.success}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={user.loading || user.success}
        >
          Login
        </Button>
        <p>
          Don't have an account yet?{" "}
          <Link
            to="/signup"
            style={{
              color: "#ff652f",
            }}
          >
            Signup
          </Link>
        </p>
      </div>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
}

export default Login;
