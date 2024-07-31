import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  signUpServiceFunc,
  loginServiceFunc,
  userProfileServiceFunc,
  courseAddServiceFunc,
} from "../../services/user/userService";

const initialState = {
  loading: false,
  userProfile: [],
  data: [],
  courseData: [],
  error: null,
};

export const fetchUserProfile = createAsyncThunk(
  "fetchUserProfile",
  userProfileServiceFunc
);
export const signUpSlicerFunc = createAsyncThunk("signUp", signUpServiceFunc);
export const loginSlicerFunc = createAsyncThunk("login", loginServiceFunc);

export const addCourseSlicerFunc = createAsyncThunk(
  "addCourse",
  courseAddServiceFunc
);

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signUpSlicerFunc.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(signUpSlicerFunc.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(signUpSlicerFunc.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(loginSlicerFunc.pending, (state) => {
      debugger;
      state.loading = true;
      state.error = null;
    });
    builder.addCase(loginSlicerFunc.fulfilled, (state, action) => {
      debugger;
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    }),
      builder.addCase(loginSlicerFunc.rejected, (state, action) => {
        debugger;
        state.loading = false;
        state.error = action.error.message;
      });
    builder.addCase(fetchUserProfile.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.userProfile = action.payload;
    });
    builder.addCase(fetchUserProfile.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(addCourseSlicerFunc.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addCourseSlicerFunc.fulfilled, (state, action) => {
      state.loading = false;
      state.courseData = [...state.courseData, action.payload];
    });
    builder.addCase(addCourseSlicerFunc.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { extraReducers } = userSlice.actions;

export default userSlice.reducer;
