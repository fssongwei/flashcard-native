import React, { useEffect } from "react";
import Login from "./screen/Login";
import Flashcards from "./screen/Flashcards";
import { useSelector, useDispatch } from "react-redux";
import { fetchFlashcards } from "../redux/actions";
import Loading from "./component/Loading";

const FlashcardApp = () => {
  const jwt = useSelector((state) => state.jwt);
  const flashcards = useSelector((state) => state.flashcards);
  const dispatch = useDispatch();

  useEffect(() => {
    if (jwt) dispatch(fetchFlashcards());
  }, [jwt]);

  if (!jwt) {
    return <Login />;
  }

  if (!flashcards) {
    return <Loading />;
  }

  return <Flashcards />;
};

export default FlashcardApp;
