import React from "react";
import { useSelector } from "react-redux";
import { TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Avatar = ({ to, size }) => {
  const user = useSelector((state) => state.user);
  const navigation = useNavigation();

  if (!to) {
    return (
      <Image
        source={{ uri: user.avatar }}
        style={{ height: size || 40, width: size || 40, borderRadius: 50 }}
      />
    );
  }

  return (
    <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
      <Image
        source={{ uri: user.avatar }}
        style={{ height: size || 40, width: size || 40, borderRadius: 50 }}
      />
    </TouchableOpacity>
  );
};

export default Avatar;
