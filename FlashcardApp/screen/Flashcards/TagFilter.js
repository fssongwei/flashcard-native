import React, { useState } from "react";
import Screen from "../../component/Screen";
import { useRoute, useNavigation } from "@react-navigation/native";
import { List } from "@ant-design/react-native";

const TagFilter = () => {
  const route = useRoute();
  const tags = route.params.tags;
  const [selectedTags, setSelectedTags] = useState(route.params.selectedTags);
  const setSelectedTagsOutside = route.params.setSelectedTags;

  let selectedTagsSet = new Set();
  for (let tag of selectedTags) selectedTagsSet.add(tag);

  const onPress = (tag) => {
    let newSelectedTags = [];
    if (selectedTagsSet.has(tag)) {
      selectedTagsSet.delete(tag);
    } else {
      selectedTagsSet.add(tag);
    }
    for (let tag of tags) {
      if (selectedTagsSet.has(tag)) newSelectedTags.push(tag);
    }
    setSelectedTags(newSelectedTags);
    setSelectedTagsOutside(newSelectedTags);
  };

  return (
    <Screen>
      <List>
        {tags.map((tag) => {
          return (
            <List.Item
              key={tag}
              extra={selectedTagsSet.has(tag) ? "✓" : ""}
              onPress={() => onPress(tag)}
            >
              {tag}
            </List.Item>
          );
        })}
      </List>
    </Screen>
  );
};

export default TagFilter;
