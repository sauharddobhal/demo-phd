import axios from "axios";
// import { API_URL } from "../constants";
const axios=axios.create({
    baseURL:process.env.REACT_API_URL,
})