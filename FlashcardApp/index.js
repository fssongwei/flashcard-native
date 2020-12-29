import React from "react";
import { View, Text, StyleSheet, AsyncStorage } from "react-native";
import useUser from "../hooks/useUser";
import Loading from "./screen/Loading";
import Login from "./screen/Login";
import Flashcards from "./screen/Flashcards";
import { useSelector } from "react-redux";

const FlashcardApp = () => {
  const jwt = useSelector((state) => state.jwt);

  if (!jwt) {
    return <Login />;
  }

  return <Flashcards />;
};

export default FlashcardApp;
