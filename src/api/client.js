import axios from "axios";

const client = axios.create({
  baseURL: "https://legal-debrief.herokuapp.com/api",
});

export default client;
