import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { Checkbox, Button, FormControlLabel } from "@mui/material";
import { signUpSlicerFunc } from "../../redux/user/userSlice";

function Signup() {
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    is_instructor: false,
  });

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    setUserData({
      ...userData,
      [id]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div>
      <PersonIcon />

      <h2>Sign Up</h2>
      <TextField
        id="username"
        label="username"
        value={userData.username}
        onChange={handleInputChange}
      />
      <TextField
        id="first_name"
        label="First Name"
        value={userData.first_name}
        onChange={handleInputChange}
      />
      <TextField
        id="last_name"
        label="Last Name"
        value={userData.last_name}
        onChange={handleInputChange}
      />
      <TextField
        id="email"
        label="Email"
        type="email"
        value={userData.email}
        onChange={handleInputChange}
      />
      <TextField
        id="password"
        label="Password"
        type="password"
        value={userData.password}
        onChange={handleInputChange}
      />
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
      <Button
        variant="outlined"
        onClick={() => {
          ;
          dispatch(signUpSlicerFunc(userData));
        }}
      >
        Sign Up
      </Button>
    </div>
  );
}

export default Signup;
