import React from "react";
import { View, Text } from "react-native";
import getColor from "../../assets/getColor";

const Tag = ({ children }) => {
  return (
    <View
      style={{
        backgroundColor: getColor(children),
        borderRadius: 1,
        paddingHorizontal: 6,
        margin: 2,
      }}
    >
      <Text style={{ color: "#fff", lineHeight: 23, fontSize: 12 }}>
        {children}
      </Text>
    </View>
  );
};

export default Tag;
