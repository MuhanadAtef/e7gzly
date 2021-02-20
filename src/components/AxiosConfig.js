import axios from "axios";

const token = localStorage.getItem("token");
const apiUrl = "http://ec0bb1f12fd0.ngrok.io/";

// For non-authorized requests
const unAuthAxios = axios.create({
  baseURL: apiUrl
});

// For authorized requests
const authAxios = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export { authAxios };
export { unAuthAxios };
export { apiUrl };