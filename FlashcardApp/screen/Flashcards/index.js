import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import CategoriesPage from "./CategoriesPage";
import ProfilePage from "./ProfilePage";
import CardListPage from "./CardListPage";
import FlashcardPage from "./FlashcardPage";
import TagFilter from "./TagFilter";

const Stack = createStackNavigator();

const Flashcards = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Categories"
          component={CategoriesPage}
          options={{ headerShown: false, title: "Home" }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfilePage}
          options={{ title: "" }}
        />
        <Stack.Screen
          name="CardList"
          component={CardListPage}
          options={{ title: "" }}
        />
        <Stack.Screen
          name="Flashcard"
          component={FlashcardPage}
          options={{ title: "" }}
        />
        <Stack.Screen
          name="TagFilter"
          component={TagFilter}
          options={{
            title: "Filter",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Flashcards;
