import axios from "axios";

const yelpApi = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    Authorization: "Bearer " + process.env.REACT_APP_YELP_API,
  },
});

export default yelpApi;
