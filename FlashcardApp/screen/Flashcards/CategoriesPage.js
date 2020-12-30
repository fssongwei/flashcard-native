import React from "react";
import { View, Text, StyleSheet, ScrollView, Icon } from "react-native";
import Screen from "../../component/Screen";
import Avatar from "./Avatar";
import { useSelector } from "react-redux";
import { List } from "@ant-design/react-native";
import { IconFill, IconOutline } from "@ant-design/icons-react-native";
import { useNavigation } from "@react-navigation/native";

const Item = List.Item;

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
  const categories = useSelector((state) => state.categories);
  const flashcards = useSelector((state) => state.flashcards);
  const navigation = useNavigation();

  let count = new Map();
  for (let flashcard of flashcards) {
    let category = flashcard.category;
    if (!count.has(category)) count.set(category, 0);
    count.set(category, count.get(category) + 1);
  }

  return (
    <Screen title="Categories">
      <ScrollView style={{ marginTop: 10 }}>
        <View style={styles.List}>
          <List>
            <Item
              thumb={
                <IconOutline
                  name="folder"
                  size={22}
                  style={{ paddingRight: 10, color: "steelblue" }}
                />
              }
              arrow="horizontal"
              extra={flashcards.length}
              onPress={() => navigation.navigate("CardList")}
            >
              All
            </Item>
            {categories.map((category) => {
              return (
                <Item
                  key={category}
                  extra={count.get(category)}
                  thumb={
                    <IconOutline
                      name="folder"
                      size={22}
                      style={{ paddingRight: 10, color: "steelblue" }}
                    />
                  }
                  arrow="horizontal"
                  onPress={() =>
                    navigation.navigate("CardList", { category: category })
                  }
                >
                  {category}
                </Item>
              );
            })}
          </List>
        </View>
      </ScrollView>
      <Footer />
    </Screen>
  );
};

const styles = StyleSheet.create({
  List: {
    margin: 20,
    borderRadius: 15,
    overflow: "hidden",
  },
  Footer: {
    height: 45,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
});

export default Categories;
