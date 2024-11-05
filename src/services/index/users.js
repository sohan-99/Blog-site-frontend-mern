import axios from "axios";

const API_URL = "http://localhost:5000/api/users"; // Define the base URL for the server

export const signup = async ({ name, email, password }) => {
  try {
    const { data } = await axios.post(`${API_URL}/register`, {
      name,
      email,
      password,
    });
    return data;
  } catch (error) {
    if (error.response && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error(error.message);
  }
};
