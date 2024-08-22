import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserProfile,
  uploadImageSlicerFunc,
  getUserProfileImageSlicerFunc,
  updateUserProfileImageSlicerFunc,
} from "../../redux/user/userSlice";
import {
  Container,
  Grid,
  Paper,
  Avatar,
  Typography,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const image = useSelector((state) => state.user.image);
  const userProfile = useSelector((state) => state.user.userProfile);

  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    dispatch(fetchUserProfile(user.data.token.access));
    dispatch(
      getUserProfileImageSlicerFunc({
        token: user.data.token.access,
      })
    );
  }, [dispatch, user.data.token]);

  const handleChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUploadImage = () => {
    if (selectedFile) {
      dispatch(
        uploadImageSlicerFunc({
          token: user.data.token.access,
          image: selectedFile,
        })
      );
    }
  };

  const handleUpdateProfileImage = () => {
    if (selectedFile) {
      dispatch(
        updateUserProfileImageSlicerFunc({
          token: user.data.token.access,
          image: selectedFile, // Use the selected file for updating
        })
      );
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 3, marginTop: 5 }}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item>
            <Avatar
              alt={userProfile.username}
              src={image}
              sx={{ width: 100, height: 100 }}
            />
          </Grid>
          <Grid item>
            <Typography variant="h5">{userProfile.username}</Typography>
            <Typography variant="subtitle1">{userProfile.email}</Typography>
          </Grid>
        </Grid>
        <Box mt={3}>
          <Button variant="contained" component="label" startIcon={<AddIcon />}>
            Upload New Picture
            <input type="file" hidden onChange={handleChange} />
          </Button>
          <IconButton
            color="primary"
            component="span"
            onClick={handleUploadImage}
            sx={{ marginLeft: 2 }}
          >
            <AddIcon />
          </IconButton>
        </Box>
        <Box mt={2}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleUpdateProfileImage}
            disabled={!selectedFile}
          >
            Update Profile Image
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default Profile;
