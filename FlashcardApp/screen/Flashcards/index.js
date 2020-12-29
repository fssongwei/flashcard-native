import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../../redux/actions";

const Flashcards = () => {
  const user = useSelector((state) => state.user);
  const jwt = useSelector((state) => state.jwt);
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(logOut(jwt));
  };

  return (
    <View style={styles.screen}>
      <Text>home screen</Text>
      <Text>Welcome: {user.name}</Text>
      <Text>Your jwt: {jwt}</Text>
      <Button title="logout" onPress={onLogOut}></Button>
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

export default Flashcards;
