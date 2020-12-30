import React, { useEffect } from "react";
import Screen from "../../component/Screen";
import { useRoute, useNavigation } from "@react-navigation/native";
import { View, Text, ScrollView, StyleSheet, Button } from "react-native";
import { Card, Tag, WingBlank, WhiteSpace } from "@ant-design/react-native";
import useCards from "./hooks/useCards";
import useSelect from "./hooks/useSelect";
import CardBox from "./CardBox";

const CardListPage = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const category = route.params ? route.params.category : null;

  useEffect(() => {
    navigation.setOptions({ title: category || "All" });
  }, [category]);

  const [flashcards, tags] = useCards(category);
  const [selectedFlashcards, selectedTags, setSelectedTags] = useSelect(
    flashcards
  );

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title="Filter"
          onPress={() =>
            navigation.navigate("TagFilter", {
              tags: tags,
              selectedTags: selectedTags,
              setSelectedTags: setSelectedTags,
            })
          }
        ></Button>
      ),
    });
  }, [tags, selectedTags]);

  return (
    <Screen style={styles.screen}>
      <ScrollView>
        <WingBlank size="lg">
          {selectedFlashcards.map((flashcard) => {
            return (
              <CardBox
                flashcard={flashcard}
                selectedFlashcards={selectedFlashcards}
                key={flashcard._id}
              />
            );
          })}
        </WingBlank>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: 20,
    paddingBottom: 0,
  },
});

export default CardListPage;
