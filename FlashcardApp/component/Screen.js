import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Screen = ({ title, children, style }) => {
  return (
    <View style={{ ...styles.screen, ...style }}>
      {title && <Text style={styles.headerText}>{title}</Text>}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    // backgroundColor: "#fff",
    flex: 1,
    paddingTop: 50,
    paddingBottom: 30,
  },
  headerText: {
    fontSize: 40,
    fontWeight: "600",
    paddingTop: 30,
    paddingHorizontal: 20,
  },
});

export default Screen;
