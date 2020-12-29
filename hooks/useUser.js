import React, { useState, useEffect } from "react";
import { AsyncStorage } from "react-native";
import axios from "axios";

// const fetchUser = async () => {
//   axios.get("/native/user", {
//     baseUrl: "http://localhost:4000",
//   });
// };

const useUser = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        let jwt = await AsyncStorage.getItem("jwt");
        console.log(jwt);
        if (!jwt) {
          setLoading(false);
        } else {
          // TODO: Verify if JWT is effective
        }
      } catch (error) {}
    };

    fetchUser();
  }, []);

  return [loading, user];
};

export default useUser;
