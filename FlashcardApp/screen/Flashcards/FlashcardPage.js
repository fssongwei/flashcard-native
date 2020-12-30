import React, { useState, useEffect } from "react";
import Screen from "../../component/Screen";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { API_SERVER } from "../../../assets/URLs";
import axios from "axios";
import moment from "moment";

import { Text, StyleSheet, View } from "react-native";
import { Toast, Accordion, Pagination } from "@ant-design/react-native";
import Tag from "../../component/Tag";
import { ScrollView } from "react-native-gesture-handler";
import Markdown from "react-native-markdown-display";

const FlashcardPage = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [id, setId] = useState(route.params.id);
  const jwt = useSelector((state) => state.jwt);

  const [flashcard, setFlashcard] = useState(null);

  const fetchFlashcard = async () => {
    try {
      let flashcard = (
        await axios.get(`${API_SERVER}/flashcards/${id}`, {
          headers: { Cookie: jwt },
        })
      ).data;
      setFlashcard(flashcard);
    } catch (error) {
      Toast.fail(error.toString());
    }
  };

  useEffect(() => {
    fetchFlashcard();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // review
  const setReview = async () => {
    try {
      await axios.get(`${API_SERVER}/review/${id}`, {
        headers: { Cookie: jwt },
      });
      await fetchFlashcard();
    } catch (error) {
      Toast.fail("Something went wrong! " + error.toString());
    }
  };

  const undoReview = async () => {
    try {
      await axios.delete(`${API_SERVER}/review/${id}`, {
        headers: { Cookie: jwt },
      });
      await fetchFlashcard();
    } catch (error) {
      Toast.fail("Something went wrong! " + error.toString());
    }
  };

  let reviewed = false;
  if (
    flashcard &&
    flashcard.reviewRecord &&
    flashcard.reviewRecord[0] &&
    moment(flashcard.reviewRecord[0]).format("YYYYMMDD") ===
      moment().format("YYYYMMDD")
  ) {
    reviewed = true;
  }

  // tags
  let tags;
  if (flashcard) {
    tags = flashcard.tags.map((tag) => {
      return <Tag key={tag}>{tag}</Tag>;
    });
  }

  // accordion
  const [activeSections, setActiveSections] = useState([0]);

  // pagination
  const cardList = route.params.cardList;
  let currentPage = cardList ? cardList.indexOf(id) + 1 : 0;

  if (flashcard === null) {
    return (
      <Screen>
        <Text>loading</Text>
      </Screen>
    );
  }

  return (
    <Screen style={styles.screen}>
      <View style={{ paddingHorizontal: 20 }}>
        <Text style={styles.title}>{flashcard.title}</Text>
        <View style={styles.tags}>{tags}</View>
      </View>

      <ScrollView style={{ marginTop: 20, flex: 1 }}>
        <Accordion
          activeSections={activeSections}
          onChange={(indexes) => setActiveSections(indexes)}
          expandMultiple
          style={{ backgroundColor: "#fff" }}
        >
          <Accordion.Panel header="Question" key={0}>
            <View style={{ padding: 15 }}>
              <Markdown>{flashcard.question || "(no content)"}</Markdown>
            </View>
          </Accordion.Panel>
          <Accordion.Panel header="Hint" key={1}>
            <View style={{ padding: 15 }}>
              <Markdown>{flashcard.hint || "(no content)"}</Markdown>
            </View>
          </Accordion.Panel>
          <Accordion.Panel header="Answer" key={2}>
            <View style={{ padding: 15 }}>
              <Markdown>{flashcard.answer || "(no content)"}</Markdown>
            </View>
          </Accordion.Panel>
        </Accordion>
      </ScrollView>

      {cardList && (
        <View>
          <Pagination
            total={cardList.length}
            current={currentPage}
            locale={{ prevText: "< previous", nextText: "next >" }}
            onChange={(index) => setId(cardList[index - 1])}
          />
        </View>
      )}
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    // paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
  },
  tags: {
    flexDirection: "row",
    marginTop: 10,
  },
});

export default FlashcardPage;
