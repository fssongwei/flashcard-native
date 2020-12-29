import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "@ant-design/react-native";

const StartPage = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Button
        type="primary"
        onPress={() => {
          navigation.navigate("auth");
        }}
      >
        Login
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default StartPage;
