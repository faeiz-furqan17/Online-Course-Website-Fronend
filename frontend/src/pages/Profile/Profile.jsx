import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile } from "../../redux/user/userSlice";
function Profile() {
  const user = useSelector((state) => state.user);
  const userProfile = useSelector((state) => state.user.userProfile);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserProfile(user.data.token.access));
  }, [user.data.token]);

  return (
    <>
      <div></div>
      <h1>Profile</h1>
      <h2>username : {userProfile.username}</h2>
      <h2>email: {userProfile.email}</h2>
    </>
  );
}

export default Profile;
