import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/";

export const signUpServiceFunc = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}signup/`, userData);
    return response.data;
  } catch (error) {
    console.error("Error in sign up:", error);
    throw error;
  }
};

export const loginServiceFunc = async (userData) => {
  try {
    debugger;
    const response = await axios.post(`${BASE_URL}login/`, userData);
    return response.data;
  } catch (error) {
    console.error("Error in login:", error);
    throw error;
  }
};

export const userProfileServiceFunc = async (userData) => {
  try {
    const response = await axios.get(`${BASE_URL}profile/`, {
      headers: { Authorization: `Bearer ${userData}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error in user profile:", error);
    throw error;
  }
};

export const courseAddServiceFunc = async (courseData) => {
  try {
    debugger;
    const response = await axios.post(`${BASE_URL}courses/`, courseData, {
      headers: { Authorization: `Bearer ${courseData.token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error in adding course:", error);
    throw error;
  }
};
