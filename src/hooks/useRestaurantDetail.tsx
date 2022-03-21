import { useState } from "react";
import yelpApi from "../api/yelpApi";

export default () => {
  const [results, setResults] = useState({
    data: null,
    loading: true,
    error: null,
  });

  const fetchRestaurant = async (id) => {
    setResults({
      data: null,
      loading: true,
      error: null,
    });
    try {
      const response = await yelpApi.get(`/${id}`);
      // console.log(response);
      setResults({
        data: response.data,
        loading: false,
        error: null,
      });
    } catch (error) {
      setResults({
        data: null,
        loading: false,
        error: "Something went wrong",
      });
    }
  };

  return [results, fetchRestaurant];
};
