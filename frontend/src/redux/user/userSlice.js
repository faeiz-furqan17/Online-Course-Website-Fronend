import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  signUpServiceFunc,
  loginServiceFunc,
  userProfileServiceFunc,
  courseAddServiceFunc,
  categoryListServiceFunc,
  searchCourseServiceFunc,
  addPreferenceServiceFunc,
  enrollmentAddServiceFunc,
  courseListServiceFunc,
  userLogoutServiceFunc,
  checkoutServiceFunc,
  uploadUserImage,
  getUserProfileImage,
  updateUserProfileImage,
} from "../../services/user/userService";

const initialState = {
  loading: false,
  userProfile: JSON.parse(localStorage.getItem("userProfile"))
    ? JSON.parse(localStorage.getItem("userProfile"))
    : [],
  data: JSON.parse(localStorage.getItem("user"))
    ? JSON.parse(localStorage.getItem("user"))
    : [],
  courseData: [],
  categoryList: [],
  searchResult: [],
  preference: [],
  success: false,
  error: null,
  courseList: [],
  checkout: false,
  image: null,
};

export const searchCourseSlicerFunc = createAsyncThunk(
  "searchCourse",
  searchCourseServiceFunc
);

export const fetchUserProfile = createAsyncThunk(
  "fetchUserProfile",
  userProfileServiceFunc
);
export const signUpSlicerFunc = createAsyncThunk("signUp", signUpServiceFunc);
export const loginSlicerFunc = createAsyncThunk("login", loginServiceFunc);

export const addCourseSlicerFunc = createAsyncThunk(
  "addCourse",
  async ({ token, courseData }) => {
    return courseAddServiceFunc(token, courseData);
  }
);

export const fetchCategoryList = createAsyncThunk(
  "fetchCategoryList",
  categoryListServiceFunc
);

export const addPreferenceSlicerFunc = createAsyncThunk(
  "addPreference",
  async ({ token, category }) => {
    return addPreferenceServiceFunc(token, category);
  }
);

export const enrollmentAddSlicerFunc = createAsyncThunk(
  "enrollmentAdd",
  async ({ token, courseId }) => {
    return enrollmentAddServiceFunc(token, courseId);
  }
);

export const fetchCourseList = createAsyncThunk(
  "fetchCourseList",
  courseListServiceFunc
);

export const userLogoutSlicerFunc = createAsyncThunk(
  "userLogout",
  userLogoutServiceFunc
);

export const checkoutSlicerFunc = createAsyncThunk(
  "checkout",
  async ({ token, courseID }) => {
    return checkoutServiceFunc(token, courseID);
  }
);

export const uploadImageSlicerFunc = createAsyncThunk(
  "uploadImage",
  async ({ token, image }) => {
    debugger;
    return uploadUserImage(token, image);
  }
);

export const getUserProfileImageSlicerFunc = createAsyncThunk(
  "getUserProfileImage",
  async ({ token }) => {
    return getUserProfileImage(token);
  }
);

export const updateUserProfileImageSlicerFunc = createAsyncThunk(
  "updateUserProfileImage",
  async ({ token, image }) => {
    return updateUserProfileImage(token, image);
  }
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
      state.success = true;
    });
    builder.addCase(signUpSlicerFunc.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(loginSlicerFunc.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(loginSlicerFunc.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
      let userData = JSON.stringify(action.payload);
      localStorage.setItem("user", userData);
      state.success = true;
    }),
      builder.addCase(loginSlicerFunc.rejected, (state, action) => {
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
      state.success = true;
      let userProfile = JSON.stringify(action.payload);
      localStorage.setItem("userProfile", userProfile);
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
    builder.addCase(fetchCategoryList.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchCategoryList.fulfilled, (state, action) => {
      state.loading = false;
      state.categoryList = action.payload;
    });
    builder.addCase(fetchCategoryList.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(searchCourseSlicerFunc.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(searchCourseSlicerFunc.fulfilled, (state, action) => {
      state.loading = false;
      state.searchResult = action.payload;
    });
    builder.addCase(searchCourseSlicerFunc.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(addPreferenceSlicerFunc.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addPreferenceSlicerFunc.fulfilled, (state, action) => {
      state.loading = false;
      state.preference = action.payload;
    });
    builder.addCase(addPreferenceSlicerFunc.rejected, (state, action) => {
      state.loading = false;

      state.error = action.error.message;
    });
    builder.addCase(enrollmentAddSlicerFunc.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(enrollmentAddSlicerFunc.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
    });
    builder.addCase(enrollmentAddSlicerFunc.rejected, (state, action) => {
      state.success = false;
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(fetchCourseList.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchCourseList.fulfilled, (state, action) => {
      state.loading = false;
      state.courseList = action.payload;
    });
    builder.addCase(fetchCourseList.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(userLogoutSlicerFunc.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(userLogoutSlicerFunc.fulfilled, (state) => {
      state.success = false;

      state.loading = false;
      state.data = [];
      state.userProfile = [];
      state.error = null;

      localStorage.removeItem("user");
      localStorage.removeItem("userProfile");
    });
    builder.addCase(userLogoutSlicerFunc.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(checkoutSlicerFunc.pending, (state) => {
      debugger;
      state.loading = true;
      state.error = null;
    });
    builder.addCase(checkoutSlicerFunc.fulfilled, (state, action) => {
      debugger;
      debugger;
      state.loading = false;
      state.success = true;
      state.checkout = action.payload;
    });
    builder.addCase(checkoutSlicerFunc.rejected, (state, action) => {
      debugger;
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(uploadImageSlicerFunc.pending, (state) => {
      debugger;
      state.loading = true;
      state.error = null;
    });
    builder.addCase(uploadImageSlicerFunc.fulfilled, (state, action) => {
      debugger;
      state.loading = false;
      state.success = true;
      state.image = action.payload;
    });
    builder.addCase(uploadImageSlicerFunc.rejected, (state, action) => {
      debugger;
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(getUserProfileImageSlicerFunc.pending, (state) => {
      debugger;
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getUserProfileImageSlicerFunc.fulfilled,
      (state, action) => {
        debugger;
        state.loading = false;
        state.image = action.payload.image;
      }
    );
    builder.addCase(getUserProfileImageSlicerFunc.rejected, (state, action) => {
      debugger;
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(updateUserProfileImageSlicerFunc.pending, (state) => {
      debugger;
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      updateUserProfileImageSlicerFunc.fulfilled,
      (state, action) => {
        debugger;
        state.loading = false;
        state.success = true;
        state.image = action.payload.image;
      }
    );
    builder.addCase(
      updateUserProfileImageSlicerFunc.rejected,
      (state, action) => {
        debugger;
        state.loading = false;
        state.error = action.error.message;
      }
    );
  },
});

export const { extraReducers } = userSlice.actions;

export default userSlice.reducer;
