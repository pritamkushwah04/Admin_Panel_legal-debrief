import axios from "axios";

const client = axios.create({
  baseURL: "https://backend-legal-debrief.onrender.com/api",
});

export default client;
