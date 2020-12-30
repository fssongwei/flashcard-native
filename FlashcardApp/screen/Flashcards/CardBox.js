import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Card, WhiteSpace } from "@ant-design/react-native";
import getColor from "../../../assets/getColor";
import { useNavigation } from "@react-navigation/native";
import Tag from "../../component/Tag";

const CardBox = ({ flashcard, selectedFlashcards }) => {
  const navigation = useNavigation();

  let title = flashcard.title;
  let description =
    flashcard.question.replace(/[\r\n]/g, "") || "(no description)";
  let tags = flashcard.tags.map((tag) => {
    return <Tag key={tag}>{tag}</Tag>;
  });

  return (
    <>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Flashcard", {
            id: flashcard._id,
            cardList: selectedFlashcards.map((card) => card._id),
          })
        }
      >
        <Card>
          <Card.Header title={title} style={{ height: 50 }}></Card.Header>
          <Card.Body>
            <View>
              <Text style={{ marginLeft: 16, color: "grey" }} numberOfLines={1}>
                {description}
              </Text>
              <View
                style={{ flexDirection: "row", marginLeft: 13, marginTop: 10 }}
              >
                {tags}
              </View>
            </View>
          </Card.Body>
        </Card>
        <WhiteSpace size="lg" />
      </TouchableOpacity>
    </>
  );
};

export default CardBox;
