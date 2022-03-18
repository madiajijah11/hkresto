import { useState } from "react";
import yelpApi from "../api/yelpApi";

export default (initialTerm = "") => {
  const [results, setResults] = useState({
    data: null,
    loading: true,
    error: null,
  });

  const searchRestaurants = async (searchTerm) => {
    setResults({
      data: null,
      loading: true,
      error: null,
    });
    try {
      const response = await yelpApi.get("/search", {
        params: {
          limit: 20,
          location: "hong kong",
          radius: 40000,
          term: searchTerm,

        },
      });
      setResults({
        data: response.data.businesses,
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

  return [results, searchRestaurants];
};
