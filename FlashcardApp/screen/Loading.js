import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Loading = () => {
  return (
    <View style={styles.screen}>
      <Text>Loading</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#fff",
    flex: 1,
    paddingVertical: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Loading;
