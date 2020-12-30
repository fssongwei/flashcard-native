import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Screen from "../../component/Screen";
import Avatar from "./Avatar";

const Footer = () => {
  return (
    <View style={styles.Footer}>
      <Text>
        <Avatar to="Profile" />
      </Text>
    </View>
  );
};

const Categories = () => {
  return (
    <Screen title="Categories">
      <ScrollView />
      <Footer />
    </Screen>
  );
};

const styles = StyleSheet.create({
  List: {
    flex: 1,
  },
  Footer: {
    height: 45,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
});

export default Categories;
