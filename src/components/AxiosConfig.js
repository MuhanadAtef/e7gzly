import axios from "axios";

const token = localStorage.getItem("token");
const apiUrl = "http://6676279d3b4a.ngrok.io/";

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
