import React from "react";
import { View, Text, StyleSheet, Linking } from "react-native";
import Screen from "../../component/Screen";
import Avatar from "./Avatar";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../../redux/actions";

import { List } from "@ant-design/react-native";
const Item = List.Item;

const ProfilePage = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(logOut());
  };

  return (
    <Screen>
      <View style={styles.AvatarRow}>
        <Avatar size={100} />
        <Text style={styles.nameText}>{user.name}</Text>
      </View>

      <List style={{ marginTop: 20 }}>
        <List.Item extra="1.0.0">Current Version</List.Item>
        <List.Item
          onPress={() => Linking.openURL("https://timetracker.wei.ai")}
        >
          About App
        </List.Item>
        <List.Item onPress={() => Linking.openURL("https://wei.ai")}>
          About Author
        </List.Item>
        <List.Item onPress={() => Linking.openURL("mailto:ws446@cornell.edu")}>
          Contact Us
        </List.Item>
        <List.Item onPress={() => Linking.openURL("https://wei.ai")}>
          Terms Of Service
        </List.Item>
        <List.Item
          onPress={() => {
            if (StoreReview.isAvailable) {
              StoreReview.requestReview();
            }
          }}
        >
          Leave A Review
        </List.Item>
      </List>

      <List style={{ paddingTop: 50 }}>
        <Item>
          <Text
            style={{
              fontSize: 18,
              color: "red",
              width: "100%",
              textAlign: "center",
            }}
            onPress={onLogOut}
          >
            Log Out
          </Text>
        </Item>
      </List>
    </Screen>
  );
};

const styles = StyleSheet.create({
  AvatarRow: {
    justifyContent: "center",
    alignItems: "center",
    height: 200,
  },
  nameText: {
    fontSize: 20,
    paddingTop: 20,
  },
});

export default ProfilePage;
