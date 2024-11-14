import axios from "axios";
const API_URL = "http://localhost:5000"; 
export const getAllPosts = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/api/posts`);
    // console.log(data);
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};